import mongoose from "mongoose";

const productShema =new mongoose.Schema({
    name: String,
    price: Number,
});

export default mongoose.model("Product", productShema);