import React, { useState } from "react";
import { placeOrder, createTrade } from "../../services/api";

const OrderForm = ({ orderType, side }) => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      type: orderType,
      price: parseFloat(price),
      quantity: parseFloat(quantity),
      side: side,
    };
    const placedOrder = await placeOrder(order);

    // Create a trade based on the placed order
    const trade = {
      orderId: placedOrder._id,
      price: placedOrder.price,
      quantity: placedOrder.quantity,
    };
    await createTrade(trade);

    // Optionally, you can add code to update the order book or show a success message
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {orderType === "LIMIT" && (
        <div>
          <label className="block text-sm font-medium mb-1">Price (USDT)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full bg-slate-700 rounded px-3 py-2"
            step="0.01"
            required
          />
        </div>
      )}
      <div>
        <label className="block text-sm font-medium mb-1">Amount (BTC)</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full bg-slate-700 rounded px-3 py-2"
          step="0.00001"
          required
        />
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded font-medium cursor-pointer ${
          side === "BUY"
            ? "bg-green-600 hover:bg-green-700"
            : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {side === "BUY" ? "Buy" : "Sell"}{" "}
        {orderType === "LIMIT" ? "Limit" : "Market"}
      </button>
    </form>
  );
};

export default OrderForm;
