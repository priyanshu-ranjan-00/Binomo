import mongoose from "mongoose";

const tradeSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Trade = mongoose.model("Trade", tradeSchema);
export default Trade;
