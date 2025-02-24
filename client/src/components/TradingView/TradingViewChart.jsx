import React, { useEffect, useRef } from "react";

const TradingViewChart = () => {
  const container = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (window.TradingView && container.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDTPERP",
          interval: "1",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#1a1a1a",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          container_id: container.current.id,
          disabled_features: ["use_localstorage_for_settings"],
          enabled_features: ["study_templates"],
          height: "500",
          save_image: false,
          studies: [
            "MASimple@tv-basicstudies",
            "RSI@tv-basicstudies",
            "MACD@tv-basicstudies",
          ],
          library_path: "/charting_library/",
          fullscreen: false,
          width: "100%",
          loading_screen: {
            backgroundColor: "#1a1a1a",
            foregroundColor: "#333333",
          },
          overrides: {
            "mainSeriesProperties.candleStyle.upColor": "#26a69a",
            "mainSeriesProperties.candleStyle.downColor": "#ef5350",
            "mainSeriesProperties.candleStyle.wickUpColor": "#26a69a",
            "mainSeriesProperties.candleStyle.wickDownColor": "#ef5350",
          },
          studies_overrides: {
            "volume.volume.color.0": "#ef5350",
            "volume.volume.color.1": "#26a69a",
          },
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="bg-slate-800 p-4 rounded-lg">
      <div
        id="tradingview_chart"
        ref={container}
        className="w-full"
        style={{ height: "600px" }}
      />
    </div>
  );
};

export default TradingViewChart;
