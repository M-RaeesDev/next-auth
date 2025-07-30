// app/api/webhooks/route.js
import { webhookHandler } from '@clerk/nextjs/server';
import { createOrUpdateUser, deleteUser } from '@/lib/actions/user.js';

export const POST = webhookHandler(async (payload) => {
  const { id, type } = payload;

  console.log(`Received webhook with ID ${id} and type ${type}`);
  console.log("Payload: ", payload);

  if (type === "user.created" || type === "user.updated") {
    const {
      id,
      first_name,
      last_name,
      image_url,
      email_addresses,
      username,
    } = payload;

    try {
      await createOrUpdateUser(
        id,
        first_name,
        last_name,
        image_url,
        email_addresses,
        username
      );
    } catch (error) {
      console.error("User create/update error:", error);
    }
  }

  if (type === "user.deleted") {
    try {
      await deleteUser(id);
    } catch (error) {
      console.error("User delete error:", error);
    }
  }
});
