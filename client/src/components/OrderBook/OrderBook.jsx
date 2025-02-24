import React, { useState, useEffect } from "react";
import { useWebSocket } from "../../hooks/useWebSocket";
import OrderBookRow from "./OrderBookRow";

const OrderBook = () => {
  const [asks, setAsks] = useState([]);
  const [bids, setBids] = useState([]);
  const { lastMessage } = useWebSocket("ws://localhost:5000/orderbook");

  useEffect(() => {
    if (lastMessage?.type === "orderbook") {
      setAsks(lastMessage.asks);
      setBids(lastMessage.bids);
    }
  }, [lastMessage]);

  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Order Book</h2>
      <div className="grid grid-cols-3 gap-2 text-sm font-medium mb-2">
        <div>Price</div>
        <div>Amount</div>
        <div>Total</div>
      </div>
      <div className="space-y-1">
        {asks.map((ask) => (
          <OrderBookRow key={ask.price} data={ask} type="ask" />
        ))}
        <div className="border-t border-slate-700 my-2" />
        {bids.map((bid) => (
          <OrderBookRow key={bid.price} data={bid} type="bid" />
        ))}
      </div>
    </div>
  );
};

export default OrderBook;
