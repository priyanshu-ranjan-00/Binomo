import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  type: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
