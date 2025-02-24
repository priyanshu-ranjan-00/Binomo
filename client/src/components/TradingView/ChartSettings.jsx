import React, { useState } from "react";

const ChartSettings = ({ onClose, onApply }) => {
  const [settings, setSettings] = useState({
    theme: "dark",
    candleType: "candles",
    showVolume: true,
    showGrid: true,
  });

  const handleChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleApply = () => {
    onApply(settings);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-slate-800 p-6 rounded-lg w-96">
        <h3 className="text-lg font-medium mb-4">Chart Settings</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Theme</label>
            <select
              value={settings.theme}
              onChange={(e) => handleChange("theme", e.target.value)}
              className="w-full bg-slate-700 rounded px-3 py-2"
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Chart Type</label>
            <select
              value={settings.candleType}
              onChange={(e) => handleChange("candleType", e.target.value)}
              className="w-full bg-slate-700 rounded px-3 py-2"
            >
              <option value="candles">Candlesticks</option>
              <option value="line">Line</option>
              <option value="bars">Bars</option>
            </select>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={settings.showVolume}
              onChange={(e) => handleChange("showVolume", e.target.checked)}
              className="mr-2"
            />
            <label>Show Volume</label>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={settings.showGrid}
              onChange={(e) => handleChange("showGrid", e.target.checked)}
              className="mr-2"
            />
            <label>Show Grid</label>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 cursor-pointer bg-slate-700 rounded hover:bg-slate-600"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 cursor-pointer bg-blue-600 rounded hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartSettings;
