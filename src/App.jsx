
function App() {
  return (
    <div className="min-h-screen bg-[#10131a] flex flex-row">
      {/* Quantix-style Sidebar */}
      <aside className="w-72 min-h-screen bg-[#15171e] text-gray-200 flex flex-col border-r border-[#23262b] px-6 py-8">
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
        <div className="border-b border-[#23262b] mb-6"></div>
        {/* Welcome Section */}
        <div className="mb-6">
          <div className="text-2xl font-bold text-white leading-tight mb-1">Welcome<br/>Back, Jason</div>
          <div className="text-xs text-gray-400">Last login: 15 Jun 2025</div>
        </div>
        <div className="border-b border-[#23262b] mb-4"></div>
        {/* Navigation */}
        <nav className="flex-1 flex flex-col gap-2">
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">Overview</div>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-[#23262b] to-[#23262b]/60 text-white font-medium border border-[#23262b] mb-1 shadow-sm">
              <span className="material-icons text-lg">grid_view</span>
              Dashboard
            </a>
          </div>
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">Account</div>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#23262b] mb-1">
              <span className="material-icons text-lg">candlestick_chart</span>
              Portfolio
              <span className="ml-auto w-2 h-2 bg-[#7b7bff] rounded-sm"></span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#23262b] mb-1">
              <span className="material-icons text-lg">account_balance_wallet</span>
              Wallet
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#23262b] mb-1">
              <span className="material-icons text-lg">star_border</span>
              Watchlist
            </a>
          </div>
          <div className="mb-2">
            <div className="text-xs text-gray-500 mb-1">Activity</div>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#23262b] mb-1">
              <span className="material-icons text-lg">swap_horiz</span>
              Trade
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#23262b] mb-1">
              <span className="material-icons text-lg">receipt_long</span>
              Transactions
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen px-10 py-8 bg-[#10131a]">
        {/* Topbar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-white tracking-wide">Neutrade Dashboard</span>
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-900 to-cyan-900 text-cyan-200 text-xs font-semibold ml-2">PRO</span>
          </div>
          <div className="flex items-center gap-6">
            <input type="text" placeholder="Search assets, wallets..." className="w-72 px-4 py-2 rounded-lg bg-[#181b20] text-cyan-200 border border-[#23262b] focus:outline-none focus:ring-2 focus:ring-cyan-900" />
            <button className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-blue-950 hover:to-cyan-950 transition">Buy & Sell</button>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="w-10 h-10 rounded-full border-2 border-cyan-900" />
          </div>
        </div>
        {/* Dashboard Cards Grid and other main content here... */}
        {/* ...existing code... */}
      </main>
    </div>
  );
}

export default App;
