import React from "react";

const LivePrices = ({ prices }) => (
  <div className="flex gap-6 mb-8">
    <div className="bg-[#23232b] rounded-xl p-4 text-white min-w-[140px]">
      <div className="text-xs text-white/60">BTC/USDT</div>
      <div className="text-lg font-bold">
        {prices.bitcoin?.usdt ? `$${prices.bitcoin.usdt}` : "Loading..."}
      </div>
    </div>
    <div className="bg-[#23232b] rounded-xl p-4 text-white min-w-[140px]">
      <div className="text-xs text-white/60">ETH/USDT</div>
      <div className="text-lg font-bold">
        {prices.ethereum?.usdt ? `$${prices.ethereum.usdt}` : "Loading..."}
      </div>
    </div>
  </div>
);

export default LivePrices;
