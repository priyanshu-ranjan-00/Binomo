import React from "react";

const ChartControls = ({ onIntervalChange, onIndicatorAdd }) => {
  const intervals = ["1m", "5m", "15m", "1h", "4h", "1d"];
  const indicators = ["MA", "RSI", "MACD", "Bollinger Bands"];

  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex space-x-2">
        {intervals.map((interval) => (
          <button
            key={interval}
            onClick={() => onIntervalChange(interval)}
            className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600"
          >
            {interval}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {indicators.map((indicator) => (
          <button
            key={indicator}
            onClick={() => onIndicatorAdd(indicator)}
            className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600"
          >
            {indicator}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChartControls;
