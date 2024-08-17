import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        unique: true,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    },
    profilePhoto: {
        type: String,
        required: true
    },
    posts: {
        type: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
        default: []
    },
    savedPosts: {
        type: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
        default: []
    },
    likedposts: {
        type: [{ type: mongoose.Schema.ObjectId, ref: "Post" }],
        default: []
    },
    followers: {
        type: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
        default: []
    },
    following: {
        type: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;