import { connect } from "../mongodb/mongoose.ja";
import User from "../models/user.model.js";


export const createOrUpdateUser = async (
  id,
  first_nanme,
  last_name,
  image_url,
  email_adresses,
  username
) => {
  try {
    await connect();

    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          avatar: image_url,
          email: email_adresses[0].email,
          userName: username,
        },
      },
      { new: true, upsert: true }
    );
    return user;
  } catch (error) {
    console.log("Error creating or updating user: ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();

    User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    console.log("Error deleting User: ", error);
  }
};
