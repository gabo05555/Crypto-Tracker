
import React, { useEffect, useState } from "react";

function Topbar() {
  const [visitCount, setVisitCount] = useState(1);

  useEffect(() => {
    const count = parseInt(localStorage.getItem("visitCount") || "0", 10) + 1;
    localStorage.setItem("visitCount", count);
    setVisitCount(count);
  }, []);

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-[#181c23] rounded-2xl shadow-lg mb-8 border border-[#232a36]">
      <div className="text-2xl font-bold text-white tracking-wide">Dashboard</div>
      <div className="flex items-center gap-4">
        <button className="bg-[#232a36] p-2 rounded-full hover:bg-[#232a36]/80">
          <span className="material-icons text-gray-400">notifications</span>
        </button>
        <div className="flex items-center gap-2 bg-[#232a36] px-3 py-2 rounded-xl">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="w-8 h-8 rounded-full border-2 border-cyan-400" />
          <div className="flex flex-col">
            <div className="text-sm text-white font-semibold">Welcome back User ++</div>
            <div className="text-xs text-cyan-300">Visits: {visitCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
