import React from "react";

const VaultCard = () => (
  <div className="bg-[#23232b] rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col md:flex-row items-center gap-6 mb-8">
    <img src="https://cdn.pixabay.com/photo/2017/01/06/19/15/crystal-1957745_1280.png" alt="Genesis" className="w-24 h-24 rounded-xl object-cover" />
    <div className="flex-1 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-white">Genesis</span>
        <span className="bg-[#191921] text-white/60 text-xs rounded px-2 py-1">Created October 2023</span>
        <span className="bg-[#191921] text-white/60 text-xs rounded px-2 py-1">MEV Smoothing</span>
        <span className="bg-[#191921] text-white/60 text-xs rounded px-2 py-1">Public</span>
      </div>
      <div className="text-xs text-white/60">
        This is the vault for the StakeWise V2 pool. After migrating from StakeWise V2 to V3, you will be staking in this vault. The validators in this vault are run by StakeWise
      </div>
    </div>
    <div className="flex flex-col gap-2 min-w-[180px]">
      <div className="flex items-center gap-2">
        <span className="text-xs text-white/60">APY</span>
        <span className="text-yellow-200 font-bold">4.92% - 6.51%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-white/60">TVL</span>
        <span className="text-white font-bold flex items-center gap-1"><span className="material-icons text-base text-blue-300">currency_ethereum</span>141.16K</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-white/60">Performance</span>
        <span className="text-green-400 font-bold">Good</span>
      </div>
    </div>
  </div>
);
export default VaultCard;
