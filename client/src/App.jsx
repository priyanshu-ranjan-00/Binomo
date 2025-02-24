import React from "react";
import TradingViewChart from "./components/TradingView/TradingViewChart";
import OrderBook from "./components/OrderBook/OrderBook";
import TradeHistory from "./components/TradeHistory/TradeHistory";
import TradingPanel from "./components/TradingPanel/TradingPanel";

const App = () => {
  return (
    <div className="min-h-screen bg-sky-950 text-white">
      <div className="flex flex-col lg:flex-row container mx-auto p-6 gap-6">
        <div className="flex flex-col lg:flex-row lg:w-full gap-6">
          <div className="flex flex-col lg:w-2/3 gap-6">
            <div className="flex-1">
              <TradingViewChart />
            </div>
            <div className="flex-1">
              <OrderBook />
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3 gap-6">
            <div className="flex-1">
              <TradingPanel />
            </div>
            <div className="flex-1">
              <TradeHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
