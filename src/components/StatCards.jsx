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
  </div>
);

export default StatCards;
