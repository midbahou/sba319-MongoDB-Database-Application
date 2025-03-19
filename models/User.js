import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,  // create a couple of field 
});

userSchema.index({ username: 1});
userSchema.index({ email: 1}); // if you wanna to do it in descending order you do -1

export default mongoose.model('User', userSchema)