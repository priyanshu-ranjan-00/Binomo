import React, { useState, useEffect } from "react";
import { useWebSocket } from "../../hooks/useWebSocket";
import { fetchTradeHistory } from "../../services/api";
import TradeRow from "./TradeRow";

const TradeHistory = () => {
  const [trades, setTrades] = useState([]);
  const { lastMessage } = useWebSocket("ws://localhost:5000");

  useEffect(() => {
    const loadTradeHistory = async () => {
      const data = await fetchTradeHistory();
      setTrades(data.reverse()); // Reverse the order to display the most recent trades first
    };

    loadTradeHistory();
  }, []);

  useEffect(() => {
    if (lastMessage?.type === "trade") {
      // Add the latest trade at the top and limit the list to the latest 50 trades
      setTrades((prevTrades) => [lastMessage.data, ...prevTrades].slice(0, 50));
    }
  }, [lastMessage]);

  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Recent Trades</h2>
      <div className="grid grid-cols-3 gap-2 text-sm font-medium mb-2">
        <div>Price</div>
        <div>Size</div>
        <div>Time</div>
      </div>
      <div className="space-y-1">
        {trades.map((trade) => (
          <TradeRow key={trade.id} trade={trade} />
        ))}
      </div>
    </div>
  );
};

export default TradeHistory;
