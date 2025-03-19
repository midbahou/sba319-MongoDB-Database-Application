import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: [3, 'You need at least 3 characters!'],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [6, 'You need at least 6 characters!']
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
  }, {
    timestamps: true, // create a couple of field
  }
);

userSchema.index({ username: 1 });
userSchema.index({ email: 1 }); // if you wanna to do it in descending order you do -1
userSchema.index({ password: 1 });
userSchema.index({ dateOfBirth: 1 });

export default mongoose.model("User", userSchema);
