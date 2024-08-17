import User from "../models/User";
import { connectToDB } from "../mongodb/mongoose";

// Improved TypeScript types
export const createUser = async (
  id: string,
  first_name: string,
  last_name: string,
  image_url: string,
  email_addresses: { email_address: string }[],
  username: string
) => {
  try {
    await connectToDB();

    // Corrected `upsert` option
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0]?.email_address, // Optional chaining for safety
          username: username,
          profilePhoto: image_url,
        },
      },
      {
        upsert: true, // Corrected typo from `upset` to `upsert`
        new: true,
      }
    );

    // No need to call `user.save()` since `findOneAndUpdate` handles it
    return user;
  } catch (error) {
    console.error("Error creating/updating user:", error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await connectToDB();
    await User.findOneAndDelete({ clerkId: id }); // Use `findOneAndDelete` instead of `findByIdAndDelete`
    console.log(`User with Clerk ID ${id} deleted successfully.`);
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
