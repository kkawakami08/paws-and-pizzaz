import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  img_url: String,
  description: String,
  category: String,
  price: Number,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
