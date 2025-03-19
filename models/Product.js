import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        }
    }, {
        timestamps: true,
    }
);

productSchema.index({ name: 1 });
productSchema.index({ description: 1 });
productSchema.index({ price: 1 });

export default mongoose.model("Product", productSchema);