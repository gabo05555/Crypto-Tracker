function App() {
  return (
    <div className="min-h-screen flex flex-row bg-[#181820]">
      {/* Sidebar */}
      <aside className="w-80 min-h-screen flex flex-col border-r border-[#23262b] px-8 py-10 bg-[#181a20] backdrop-blur-xl shadow-2xl shadow-black/30">
        {/* Logo and Back Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col">
            <div className="text-lg font-bold text-white leading-tight">Quantix</div>
            <div className="text-xs text-gray-400">AI-Powered Trading</div>
          </div>
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition" aria-label="Back"></button>
        </div>
        <hr className="border-white/10 mb-6" />
        {/* Welcome Message */}
        <div className="mb-2">
          <div className="text-2xl font-extrabold text-white leading-tight">Welcome<br/>Back, Jason</div>
          <div className="text-xs text-gray-400 mt-2">Last login: 15 Jun 2025</div>
        </div>
        <hr className="border-white/10 my-6" />
        {/* Overview Section */}
        <div className="mb-6">
          <div className="text-xs text-gray-400 mb-2">Overview</div>
          <button className="flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold w-full">
            Dashboard
          </button>
          <button className="flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold w-full">
            Top Gainers
            <span className="ml-auto w-2 h-2 rounded bg-white/30"></span>
          </button>
          <button className="flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold w-full">
            Top Losers
          </button>
          <button className="flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold w-full">
            Watchlist
          </button>
        </div>
        {/* Activity Section */}
        <div className="mb-6">
          <div className="text-xs text-gray-400 mb-2">Info</div>
          <button className="flex items-center px-4 py-3 rounded-xl hover:bg-white/10 transition text-white font-semibold w-full">
            About
          </button>
        
        </div>
        {/* Light/Dark Mode Toggle Button */}
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen px-10 py-8 bg-[#191921]">
        {/* Dashboard Header */}
        <h1 className="text-5xl font-extrabold text-white mb-10">
          Vault <span className="text-white/60 font-light">market place</span>
        </h1>

        {/* Stat Cards Row */}
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

        {/* Filter Bar */}
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

        {/* Vault Card */}
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
      </main>
    </div>
  );
}

export default App;
