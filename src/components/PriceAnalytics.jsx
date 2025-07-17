import React from "react";
import TopCoins from "./TopCoins";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Area, AreaChart } from "recharts";



const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length && payload[0]) {
    return (
      <div className="bg-[#23232b] p-2 rounded text-xs text-white shadow">
        <div>{payload[0].payload.label}</div>
        <div>
          <span className="text-[#ff3b3b]">●</span> ${payload[0].value?.toLocaleString(undefined, { maximumFractionDigits: 2 })}
        </div>
      </div>
    );
  }
  return null;
};


const PriceAnalytics = ({ ethHistory, loadingHistory, selectedTimeframe, setSelectedTimeframe }) => {
  const [showGainers, setShowGainers] = React.useState(false);
  // Map API data to chart format
  let chartData = [];
  if (ethHistory && ethHistory[selectedTimeframe] && ethHistory[selectedTimeframe].length > 0) {
    if (selectedTimeframe === '1W') {
      // Group by day and take the last close of each day
      const grouped = {};
      ethHistory['1W'].forEach((d) => {
        const day = new Date(d.time * 1000).toLocaleDateString(undefined, { weekday: 'short' });
        grouped[day] = d.close;
      });
      chartData = Object.entries(grouped).map(([label, value]) => ({ label, value }));
    } else {
      chartData = ethHistory[selectedTimeframe].map((d) => ({
        label: new Date(d.time * 1000).toLocaleDateString([], { month: 'short', day: 'numeric' }),
        value: d.close
      }));
    }
  }
  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 min-h-[320px] flex flex-col justify-between transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 w-full">
        <div className="text-sm text-gray-500">{showGainers ? "Top Gainers" : "Price analytics"}</div>
        <div className="flex gap-2 w-full sm:w-auto justify-end">
          {/* Only show the current timeframe as a label, not as a button group */}
          <span className="bg-red-50 text-xs rounded-lg px-3 py-1 text-red-500 border border-red-200 shadow font-semibold select-none">
            {selectedTimeframe === "1W" ? "1 Week" : selectedTimeframe === "1M" ? "1 Month" : "1 Year"}
          </span>
        </div>
      </div>
      {showGainers ? (
        <div className="mt-2">
          <TopCoins />
        </div>
      ) : loadingHistory ? (
        <div className="flex items-center justify-center h-40 text-gray-400">Loading chart...</div>
      ) : (
        <>
          <div className="flex items-end gap-2 mb-4">
            {chartData.length > 0 && <span className="text-4xl font-extrabold text-gray-900 drop-shadow-lg">$ {chartData[chartData.length-1].value?.toLocaleString(undefined, {maximumFractionDigits:2})}</span>}
            <span className="text-xl text-gray-400 font-semibold">ETH</span>
          </div>
          <div className="rounded-xl bg-white p-2 sm:p-4 shadow-lg border border-gray-100 transition-all duration-300 hover:scale-[1.01] w-full">
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={chartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="areaRed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff3b3b" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#ff3b3b" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 6" vertical={false} stroke="#f3f3f3" />
                <XAxis dataKey="label" axisLine={false} tickLine={false} stroke="#bbb" fontSize={12} minTickGap={24} interval={selectedTimeframe === '1W' ? 23 : selectedTimeframe === '1M' ? 6 : 30} />
                <YAxis axisLine={false} tickLine={false} stroke="#bbb" fontSize={12} width={32} tickFormatter={v => `$${v}`}/>
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#ff3b3b", strokeWidth: 2 }} />
                <Area type="monotone" dataKey="value" stroke="#ff3b3b" strokeWidth={2.2} fill="url(#areaRed)" dot={false} activeDot={{ r: 3, fill: "#ff3b3b" }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-4">
            {chartData.length > 0 && chartData.map((d, i) => (
              <span key={i} className="px-2 py-1 rounded bg-gray-100 shadow text-gray-700">{d.label}</span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PriceAnalytics;
