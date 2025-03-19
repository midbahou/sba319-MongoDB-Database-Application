import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.ObjectId,
            ref: 'User',
        },
        product_name: {
            type: mongoose.ObjectId,
            ref: 'Product',
        },
        comment: {
            type: String,
            required: true,
        },


    }
);

reviewsSchema.index({ user_id: 1 });
reviewsSchema.index({ comment: 1 });


export default mongoose.model("Reviews", reviewsSchema)