import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId:{
        type: string,
        unique: true,
        required: true,
    },
    email:{
        type: string,
        unique: true,
        required: true,
    },
    firstName:{
        type: string,
        required: true,
    },
    lastName:{
        type: string,
        required: true,
    },
    userName:{
        type: string,
        required: true,
        unique: true,
    },
    avatar:{
        type: string,
        required: true,
    },
}, {timestamps: true});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;