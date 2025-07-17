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
        {/* Topbar/Search */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4 w-full max-w-2xl">
            <div className="flex items-center bg-[#23232b] px-4 py-2 rounded-lg w-full">
              <span className="material-icons text-gray-500 mr-2">search</span>
              <input type="text" placeholder="Search for services" className="bg-transparent outline-none text-gray-200 w-full" />
            </div>
            <button className="ml-4 p-3 rounded-lg bg-[#23232b] hover:bg-[#282832] text-gray-400"><span className="material-icons">settings</span></button>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-lg bg-[#23232b] hover:bg-[#282832] text-gray-400"><span className="material-icons">notifications</span></button>
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="profile" className="w-10 h-10 rounded-full border-2 border-blue-400" />
          </div>
        </div>

        {/* Discover Place */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Discover Place</h2>
            <button className="text-gray-400 text-sm hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-[#23232b] rounded-2xl shadow-lg p-0 overflow-hidden flex flex-col">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Petra Garden" className="h-48 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-400">Jordan</span>
                  <button className="p-2 rounded-full bg-[#23232b] hover:bg-[#282832] text-gray-400"><span className="material-icons">favorite_border</span></button>
                </div>
                <div className="text-lg font-semibold text-white mb-1">Petra Garden</div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs font-semibold"><span className="material-icons text-base">star</span>4.2</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-[#23232b] rounded-2xl shadow-lg p-0 overflow-hidden flex flex-col">
              <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80" alt="Tuileries Garden" className="h-48 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-400">Paris, France</span>
                  <button className="p-2 rounded-full bg-[#23232b] hover:bg-[#282832] text-gray-400"><span className="material-icons">favorite_border</span></button>
                </div>
                <div className="text-lg font-semibold text-white mb-1">Tuileries Garden</div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs font-semibold"><span className="material-icons text-base">star</span>4.5</div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-[#23232b] rounded-2xl shadow-lg p-0 overflow-hidden flex flex-col">
              <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" alt="Eiffel Tower" className="h-48 w-full object-cover" />
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-400">Paris, France</span>
                  <button className="p-2 rounded-full bg-[#23232b] hover:bg-[#282832] text-gray-400"><span className="material-icons">favorite_border</span></button>
                </div>
                <div className="text-lg font-semibold text-white mb-1">Eiffel tower</div>
                <div className="flex items-center gap-1 text-yellow-400 text-xs font-semibold"><span className="material-icons text-base">star</span>5.3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Most Visited Place */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Most Visited Place</h2>
            <span className="text-gray-400 text-sm">Details</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Map/Chart Placeholder */}
            <div className="bg-[#23232b] rounded-2xl flex-1 p-8 flex items-center justify-center min-h-[220px]">
              <span className="text-gray-500">[Map/Chart Placeholder]</span>
            </div>
            {/* Top Attractions */}
            <div className="bg-[#23232b] rounded-2xl w-full max-w-xs p-6 flex flex-col gap-4">
              <div className="font-semibold text-white mb-2">Top Attractions</div>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=80&q=80" alt="Olympic National Park" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <div className="text-sm text-white font-semibold">Olympic National Park</div>
                  <div className="text-xs text-gray-400">United States</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=80&q=80" alt="Magic Kingdom Park" className="w-12 h-12 rounded-xl object-cover" />
                <div>
                  <div className="text-sm text-white font-semibold">Magic Kingdom Park</div>
                  <div className="text-xs text-gray-400">United States</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
