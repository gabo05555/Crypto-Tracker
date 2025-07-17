function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#10131a] via-[#181c23] to-[#23262b] flex flex-row">
      {/* Glassy Sidebar */}
      <aside className="w-72 min-h-screen bg-white/10 backdrop-blur-xl text-gray-200 flex flex-col border-r border-[#23262b]/60 px-6 py-8 shadow-2xl shadow-black/30">
        {/* Logo Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 via-gray-900 to-black flex items-center justify-center">
              <span className="text-gray-200 text-xl">🦾</span>
            </div>
            <div>
              <div className="font-bold text-base tracking-wide text-white">Quantix</div>
              <div className="text-xs text-gray-400 -mt-1">AI-Powered Trading</div>
            </div>
          </div>
          <button className="p-2 rounded-lg hover:bg-[#23262b]">
            <span className="material-icons text-gray-400">chevron_left</span>
          </button>
        </div>
        <div className="border-b border-white/10 mb-6"></div>
        {/* Welcome Section */}
        <div className="mb-6">
          <div className="text-2xl font-extrabold text-white leading-tight mb-1 drop-shadow-lg">Welcome<br/>Back, Jason</div>
          <div className="text-xs text-cyan-200/80">Last login: 15 Jun 2025</div>
        </div>
        <div className="border-b border-white/10 mb-4"></div>
        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-2">
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">Overview</div>
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-white/10 hover:bg-white/20 transition text-white font-semibold border border-white/10 mb-1 shadow-lg backdrop-blur-md">
              <span className="material-icons text-lg">grid_view</span>
              Dashboard
            </a>
          </div>
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">Account</div>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 transition mb-1">
              <span className="material-icons text-lg">candlestick_chart</span>
              Portfolio
              <span className="ml-auto w-2 h-2 bg-[#7b7bff] rounded-sm"></span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 transition mb-1">
              <span className="material-icons text-lg">account_balance_wallet</span>
              Wallet
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 transition mb-1">
              <span className="material-icons text-lg">star_border</span>
              Watchlist
            </a>
          </div>
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">Activity</div>
            <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-white/10 transition mb-1">
              <span className="material-icons text-lg">swap_horiz</span>
              Trade
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition mb-1">
              <span className="material-icons text-lg">receipt_long</span>
              Transactions
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen px-10 py-8 bg-white/5 backdrop-blur-2xl shadow-2xl shadow-black/20 border-l border-white/10">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">Neutrade Dashboard</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold ml-2 shadow">PRO</span>
          </div>
          <div className="flex items-center gap-6">
            <input type="text" placeholder="Search assets, wallets..." className="w-72 px-4 py-2 rounded-xl bg-white/10 text-cyan-200 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-900 backdrop-blur-md" />
            <button className="bg-gradient-to-r from-cyan-800/80 to-blue-900/80 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-cyan-900 hover:to-blue-950 transition backdrop-blur">Buy & Sell</button>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="w-10 h-10 rounded-full border-2 border-cyan-400 shadow" />
          </div>
        </div>
        {/* Dashboard Cards Grid and other main content here... */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto">
          {/* Example Glassy Card */}
          <div className="col-span-2 bg-white/10 backdrop-blur-xl p-8 shadow-xl border border-white/10 flex flex-col justify-between min-h-[220px]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300 text-sm">Balance</span>
              <span className="text-xs text-gray-400">All time</span>
            </div>
            <div className="text-4xl font-extrabold text-white mb-2 drop-shadow">$3,200.80 <span className="text-green-400 text-2xl align-top">↑</span></div>
            <div className="text-green-400 text-sm font-semibold mb-2">+85.66%</div>
            <div className="h-16 flex items-center justify-center">
              <span className="text-blue-400 text-xl font-bold">[Chart]</span>
            </div>
          </div>
          {/* Add more glassy cards as needed, following this style */}
        </div>
      </main>
    </div>
  );
}

export default App;
