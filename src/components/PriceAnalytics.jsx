import React, { useState } from "react";
import TopCoins from "./TopCoins";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

// Mock data for 12 months
const data = [
  { month: "Sep", value1: 8, value2: 4 },
  { month: "Oct", value1: 9, value2: 5 },
  { month: "Nov", value1: 10, value2: 6 },
  { month: "Dec", value1: 12, value2: 7 },
  { month: "Jan", value1: 14, value2: 8 },
  { month: "Feb", value1: 13, value2: 7 },
  { month: "Mar", value1: 15, value2: 9 },
  { month: "Apr", value1: 16, value2: 10 },
  { month: "May", value1: 13, value2: 8 },
  { month: "Jun", value1: 12, value2: 7 },
  { month: "Jul", value1: 11, value2: 6 },
  { month: "Aug", value1: 10, value2: 5 }
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#23232b] p-2 rounded text-xs text-white shadow">
        <div>{payload[0].payload.month}</div>
        <div>
          <span className="text-[#a18aff]">●</span> {payload[0].value}
        </div>
        <div>
          <span className="text-[#f6e58d]">●</span> {payload[1].value}
        </div>
      </div>
    );
  }
  return null;
};


const PriceAnalytics = () => {
  const [showGainers, setShowGainers] = useState(false);
  return (
    <div className="bg-[#23232b] rounded-2xl p-6 shadow-lg border border-white/10 min-h-[220px] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-white/60">{showGainers ? "Top Gainers" : "Price analytics"}</div>
        <div className="flex gap-2">
          {/* Only show Analytics button, remove Top Gainers button as requested */}
          <button
            className={`bg-[#191921] text-xs rounded-lg px-2 py-1 transition-colors text-white/90 border border-[#a18aff]/40`}
            onClick={() => setShowGainers(false)}
            disabled
          >Analytics</button>
        </div>
      </div>
      {showGainers ? (
        <div className="mt-2">
          <TopCoins />
        </div>
      ) : (
        <>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-3xl font-bold text-white">$ 2,44</span>
            <span className="text-lg text-white/60 font-semibold">ETH</span>
            <span className="text-green-400 text-xs font-bold ml-2">+86%</span>
          </div>
          <ResponsiveContainer width="100%" height={100}>
            <BarChart data={data} barGap={2}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} stroke="#8884d8" fontSize={12} />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "#a18aff22" }} />
              <Bar dataKey="value1" stackId="a" fill="#a18aff" radius={[8, 8, 0, 0]} opacity={0.7} />
              <Bar dataKey="value2" stackId="a" fill="#f6e58d" radius={[8, 8, 0, 0]} opacity={0.8} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex justify-between text-xs text-white/60 mt-2">
            <span>$ 25778</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceAnalytics;
