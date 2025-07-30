import { createOrUpdateUser, deleteUser } from "@/lib/actions/user";
import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req) {
  try {
    const secret = process.env.CLERK_WEBHOOK_SECRET_KEY;
    const evt = await verifyWebhook(req, {secret});

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt?.data;
    const eventType = evt?.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt?.data);

    if (eventType === "user.created" || eventType === "user.updated") {
      const {id, first_name, last_name, image_url, email_adresses, username} = evt?.data;
      try {
        await createOrUpdateUser(
          id,
          first_name,
          last_name,
          image_url,
          email_adresses,
          username
        );
        return new Response('User is Created or Updated :', {status:200,});
      } catch (error) {
        console.log("Error Creating and Updating User: ", error);
        return new Response ('Error Occured', {status:400,});
        
      }
    }
    if (eventType === "user.deleted") {
      const {id} = evt?.data;
      try {
        await deleteUser(id);
        return new Response("User Deleted: ", {status: 200,})
      } catch (error) {
        console.log("Error Delete User", error);
        return new Response('Error Occured', {status: 400,})
      }
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
