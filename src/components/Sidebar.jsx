function Sidebar({ section, setSection }) {
  return (
    <aside className="w-72 min-w-[180px] max-w-[260px] min-h-screen flex flex-col border-r border-[#23262b] px-6 py-8 bg-[#181a20] backdrop-blur-xl shadow-2xl shadow-black/30">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col">
          <div className="text-lg font-bold text-white leading-tight">CryptoView</div>
          <div className="text-xs text-gray-400">Real-time crypto market prices</div>
        </div>
        <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Back"></button>
      </div>
      <hr className="border-white/10 mb-6" />
      <div className="mb-2">
        <div className="text-2xl font-extrabold text-white leading-tight">Welcome<br/>Back, Jason</div>
      </div>
      <hr className="border-white/10 my-6" />
      <div className="mb-6">
        <div className="text-xs text-gray-400 mb-2">Overview</div>
        <button
          className={`flex items-center px-4 py-3 rounded-xl transition text-white font-semibold w-full ${section === "dashboard" ? "bg-white/10" : "hover:bg-white/10"}`}
          onClick={() => setSection("dashboard")}
        >Dashboard</button>
        <button
          className={`flex items-center px-4 py-3 rounded-xl transition text-white font-semibold w-full ${section === "topgainers" ? "bg-green-400/20 text-green-300" : "hover:bg-white/10"}`}
          onClick={() => setSection("topgainers")}
        >Top Gainers<span className="ml-auto w-2 h-2 rounded bg-green-300/40"></span></button>
        <button className="flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold w-full">Top Losers</button>
        <button className="flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold w-full">Watchlist</button>
      </div>
      <div className="mb-6">
        <div className="text-xs text-gray-400 mb-2">Info</div>
        <button className="flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold w-full">About</button>
      </div>
      <div className="mt-auto mb-2 flex flex-col items-center">
        <button
          className="w-full flex items-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-[#6d5dfc]/30 to-[#a18aff]/30 border border-[#a18aff]/30 shadow-lg backdrop-blur-lg text-white font-semibold hover:from-[#6d5dfc]/50 hover:to-[#a18aff]/50 transition"
          style={{boxShadow: '0 2px 16px 0 #a18aff22'}}
        >
          <span className="material-icons" style={{fontSize: '2rem', fontWeight: 'bold'}}>bolt</span>
          <span className="flex flex-col items-start">
            <span className="font-bold leading-tight">Toggle Mode</span>
            <span className="text-xs font-normal text-white/70">Switch light/dark theme</span>
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
