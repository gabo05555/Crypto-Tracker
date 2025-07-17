import React from "react";

const FilterBar = () => (
  <div className="flex items-center gap-2 mb-6">
    <button className="bg-[#23232b] text-yellow-200 rounded-full px-5 py-2 font-semibold shadow border border-yellow-100/20 flex items-center gap-2">
      <span className="material-icons text-lg">save</span> All
    </button>
    <button className="bg-yellow-100/80 text-[#23232b] rounded-full px-5 py-2 font-semibold shadow border border-yellow-100/20">Stake</button>
    <button className="bg-[#23232b] text-white/80 rounded-full px-5 py-2 font-semibold shadow border border-white/10">Vaults</button>
    <button className="bg-[#23232b] text-white/80 rounded-full px-5 py-2 font-semibold shadow border border-white/10">Operate</button>
    <button className="bg-[#23232b] text-white/80 rounded-full px-5 py-2 font-semibold shadow border border-white/10">Ecosystem</button>
    <div className="ml-auto flex items-center gap-2">
      <span className="text-white/60 text-sm">Search</span>
      <span className="material-icons text-white/40 text-base">search</span>
      <span className="text-white/60 text-sm">TVL</span>
      <span className="material-icons text-white/40 text-base">expand_more</span>
    </div>
  </div>
);

export default FilterBar;
