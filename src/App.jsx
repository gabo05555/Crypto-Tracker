function App() {
  return (
    <div className="min-h-screen flex flex-row bg-[#181820]">
      {/* Sidebar */}
      <aside className="w-72 min-h-screen bg-[#23232b] text-gray-200 flex flex-col border-r border-[#23262b] px-6 py-8">
        {/* Logo */}
        <div className="mb-10">
          <span className="text-2xl font-extrabold tracking-wide text-white">TravelTrek.</span>
        </div>
        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-white bg-[#23232b] border border-[#2d2d36] shadow-sm transition hover:bg-[#282832] focus:bg-[#282832]">
            <span className="material-icons text-lg">dashboard</span>
            Dashboard
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#282832] transition">
            <span className="material-icons text-lg">place</span>
            Places
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#282832] transition">
            <span className="material-icons text-lg">confirmation_number</span>
            Ticket
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#282832] transition">
            <span className="material-icons text-lg">map</span>
            Map
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#282832] transition">
            <span className="material-icons text-lg">payments</span>
            Payments
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-[#282832] transition">
            <span className="material-icons text-lg">calendar_today</span>
            Calender
          </button>
        </nav>
        {/* Popular Place */}
        <div className="mt-auto pt-10">
          <div className="text-xs text-gray-400 mb-2">Popular Place</div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-blue-400"><span className="w-2 h-2 rounded-full bg-blue-400"></span> Paris/France</div>
            <div className="flex items-center gap-2 text-pink-400"><span className="w-2 h-2 rounded-full bg-pink-400"></span> New York/United States</div>
            <div className="flex items-center gap-2 text-yellow-400"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> California/United States</div>
            <button className="text-xs text-gray-400 mt-2 hover:underline text-left">See More &rarr;</button>
          </div>
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
