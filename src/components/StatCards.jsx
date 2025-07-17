import React from "react";

const StatCards = ({ btcPrice, ethPrice }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
    {/* Active credit */}
    <div className="backdrop-blur-xl bg-gradient-to-br from-[#23232b]/70 via-[#6d5dfc]/30 to-[#a18aff]/20 rounded-2xl p-4 md:p-8 shadow-2xl border border-[#a18aff]/30 flex flex-col justify-center items-center min-h-[120px] md:min-h-[160px] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_32px_0_#a18aff55] hover:border-[#a18aff]/60 cursor-pointer">
      <span className="text-5xl font-extrabold text-white drop-shadow-[0_0_8px_#a18affcc]">
        {btcPrice ? `$${btcPrice.toLocaleString(undefined, {maximumFractionDigits: 2})}` : 'Loading...'}
      </span>
      <span className="mt-2 text-lg font-semibold text-[#a18aff] tracking-wide drop-shadow-[0_0_4px_#a18affcc]">BTC</span>
    </div>
    {/* Payment goal */}
    <div className="backdrop-blur-xl bg-gradient-to-br from-[#23232b]/70 via-[#f6e58d]/30 to-[#fffbe6]/20 rounded-2xl p-4 md:p-8 shadow-2xl border border-[#f6e58d]/30 flex flex-col justify-center items-center min-h-[120px] md:min-h-[160px] transition-all duration-300 hover:scale-105 hover:shadow-[0_4px_32px_0_#f6e58dcc] hover:border-[#f6e58d]/60 cursor-pointer">
      <span className="text-5xl font-extrabold text-white drop-shadow-[0_0_8px_#f6e58dcc]">
        {ethPrice ? `$${ethPrice.toLocaleString(undefined, {maximumFractionDigits: 2})}` : 'Loading...'}
      </span>
      <span className="mt-2 text-lg font-semibold text-[#f6e58d] tracking-wide drop-shadow-[0_0_4px_#f6e58dcc]">ETH</span>
    </div>
    {/* Price analytics */}
    <div className="bg-[#23232b] rounded-2xl p-4 md:p-6 shadow-lg border border-white/10 flex flex-col min-h-[120px] md:min-h-[160px] col-span-1 lg:col-span-2">
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
  </div>
);

export default StatCards;
