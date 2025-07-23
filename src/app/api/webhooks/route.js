import { verifyWebhook } from "@clerk/nextjs/webhooks";

export async function POST(req) {
  try {
    const secret = process.env.CLERK_WEBHOOK_SECRET_KEY;
    const evt = await verifyWebhook(req, {secret});

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    if (evt.type === "user.created") {
      console.log("Create_userId:", evt.data.id);
    }
    if (evt.type === "user.updated") {
      console.log("update_userId:", evt.data.id);
    }

    return new Response("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error verifying webhook", { status: 400 });
  }
}
