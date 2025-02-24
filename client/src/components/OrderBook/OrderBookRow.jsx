import React from "react";

const OrderBookRow = ({ data, type }) => {
  const { price, amount, total } = data;
  const colorClass = type === "ask" ? "text-red-500" : "text-green-500";

  return (
    <div className="grid grid-cols-3 gap-2 text-sm hover:bg-slate-700">
      <div className={colorClass}>${price.toFixed(2)}</div>
      <div>{amount.toFixed(8)}</div>
      <div>{total.toFixed(2)}</div>
    </div>
  );
};

export default OrderBookRow;
