import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { createOrUpdateUser, deleteUser } from "@/lib/actions/user";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const secret = process.env.CLERK_WEBHOOK_SECRET_KEY;
    const event = await verifyWebhook(req, { secret });

    const { id, type } = event;

    console.log(`Received webhook with ID ${id} and type ${type}`);
    console.log("Webhook payload:", event);

    if (type === "user.created" || type === "user.updated") {
      const {
        id,
        first_name,
        last_name,
        image_url,
        email_addresses,
        username,
      } = event;

      try {
        await createOrUpdateUser(
          id,
          first_name,
          last_name,
          image_url,
          email_addresses,
          username
        );
        return res.status(200).send("User Created/Updated");
      } catch (error) {
        console.error("Error creating/updating user:", error);
        return res.status(400).send("Error during user create/update");
      }
    }

    if (type === "user.deleted") {
      try {
        await deleteUser(id);
        return res.status(200).send("User Deleted");
      } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(400).send("Error during user delete");
      }
    }

    return res.status(200).send("Webhook received");
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return res.status(400).send("Invalid webhook");
  }
}
