import React from "react";

const StatCards = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
    {/* Active credit */}
    <div className="bg-[#23232b] rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col justify-between min-h-[160px]">
      <div className="text-sm text-white/60 mb-2">Active credit</div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-bold text-white">11,2</span>
        <span className="text-lg text-white/60 font-semibold">ETH</span>
      </div>
      <div className="text-xs text-white/40 mt-2">$ 288477,50</div>
    </div>
    {/* Payment goal */}
    <div className="bg-[#23232b] rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col justify-between min-h-[160px]">
      <div className="text-sm text-white/60 mb-2">Payment goal</div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-white">34%</span>
      </div>
      <div className="flex flex-col gap-1 mt-2">
        <span className="text-xs text-white/40">$005643</span>
        <span className="text-xs text-white/40">$03456643</span>
      </div>
    </div>
    {/* Price analytics */}
    <div className="bg-[#23232b] rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col min-h-[160px] col-span-1 lg:col-span-2">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-white/60">Price analytics</div>
        <div className="flex gap-2">
          <button className="bg-[#191921] text-xs text-white/60 rounded-lg px-2 py-1">BTC_ETH</button>
          <button className="bg-[#191921] text-xs text-white/60 rounded-lg px-2 py-1">MDFFGHJ</button>
        </div>
      </div>
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-white">$ 2,44</span>
        <span className="text-lg text-white/60 font-semibold">ETH</span>
      </div>
      {/* Placeholder for chart */}
      <div className="mt-4 h-24 w-full bg-gradient-to-r from-[#6d5dfc]/30 to-[#a18aff]/30 rounded-xl flex items-end overflow-hidden relative">
        {/* Simulated bars */}
        <div className="absolute left-4 bottom-4 text-xs text-white/60">$ 25778</div>
        <div className="flex items-end h-full w-full gap-2 px-8">
          <div className="bg-[#a18aff] w-4 h-8 rounded-t-lg opacity-70"></div>
          <div className="bg-[#a18aff] w-4 h-12 rounded-t-lg opacity-70"></div>
          <div className="bg-[#a18aff] w-4 h-16 rounded-t-lg opacity-70"></div>
          <div className="bg-[#f6e58d] w-4 h-20 rounded-t-lg opacity-80"></div>
          <div className="bg-[#f6e58d] w-4 h-24 rounded-t-lg opacity-80"></div>
          <div className="bg-[#a18aff] w-4 h-16 rounded-t-lg opacity-70"></div>
          <div className="bg-[#a18aff] w-4 h-20 rounded-t-lg opacity-70"></div>
        </div>
        <div className="absolute right-8 top-4 text-green-400 text-xs font-bold">+86%</div>
      </div>
    </div>
    {/* Next payment */}
    <div className="bg-[#23232b] rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col justify-between min-h-[160px]">
      <div className="text-sm text-white/60 mb-2">Next payment</div>
      <div className="flex items-end gap-2">
        <span className="text-4xl font-bold text-white">06</span>
        <span className="text-lg text-white/60 font-semibold">Nov</span>
      </div>
      <div className="flex gap-2 mt-2">
        <div className="flex flex-col items-center">
          <span className="text-xs text-white/40">Days left</span>
          <span className="text-lg font-bold text-white">15</span>
        </div>
      </div>
    </div>
  </div>
);

export default StatCards;
