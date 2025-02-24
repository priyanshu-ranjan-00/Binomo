import React from "react";

const TradeRow = ({ trade }) => {
  const { price, quantity, createdAt, side } = trade;

  // Format the time to display it correctly
  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    if (isNaN(date)) {
      return "Invalid Date"; // Handling invalid dates
    }
    return date.toLocaleTimeString(); // Display the time in a readable format
  };

  // Format the price to show two decimal places
  const formattedPrice = price ? `$${parseFloat(price).toFixed(2)}` : "N/A";

  // Format the quantity to show up to 8 decimal places (for BTC)
  const formattedQuantity = quantity ? parseFloat(quantity).toFixed(8) : "N/A";

  return (
    <div className="grid grid-cols-3 gap-2 text-sm hover:bg-slate-700 p-2 rounded-lg">
      <div className={side === "buy" ? "text-green-500" : "text-red-500"}>
        {formattedPrice}
      </div>
      <div>{formattedQuantity}</div>
      <div className="text-slate-400">{formatTime(createdAt)}</div>
    </div>
  );
};

export default TradeRow;
