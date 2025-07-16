

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-950 text-gray-200 flex flex-col border-r border-gray-800">
        <div className="flex items-center gap-2 px-6 py-6 border-b border-gray-800">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-white">C</div>
          <span className="font-semibold text-lg tracking-wide">CryptoDash</span>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li><a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 text-white font-medium"><span>Wallet</span></a></li>
            <li><a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800"><span>Markets</span></a></li>
            <li><a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800"><span>Trading</span></a></li>
            <li><a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800"><span>Portfolio</span></a></li>
            <li><a href="#" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800"><span>Settings</span></a></li>
          </ul>
        </nav>
        <div className="px-6 py-4 border-t border-gray-800 text-xs text-gray-400">© 2025 CryptoDash</div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-900/80 backdrop-blur-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Wallet</h1>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="Search..." className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">+ Add</button>
          </div>
        </div>

        {/* Crypto Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Card - repeat for each crypto */}
          <div className="bg-gray-800/80 rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-700">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-yellow-400 mb-4">
              {/* Replace with crypto icon */}
              <span className="text-3xl font-bold text-white">Ξ</span>
            </div>
            <div className="text-lg font-semibold text-white">Ethereum</div>
            <div className="text-sm text-gray-400 mt-1">WALLET</div>
          </div>
          <div className="bg-gray-800/80 rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-700">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-yellow-400 mb-4">
              <span className="text-3xl font-bold text-white">₿</span>
            </div>
            <div className="text-lg font-semibold text-white">Bitcoin</div>
            <div className="text-sm text-gray-400 mt-1">WALLET</div>
          </div>
          <div className="bg-gray-800/80 rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-700">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-400 mb-4">
              <span className="text-3xl font-bold text-white">M</span>
            </div>
            <div className="text-lg font-semibold text-white">Monero</div>
            <div className="text-sm text-gray-400 mt-1">WALLET</div>
          </div>
          <div className="bg-gray-800/80 rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-700">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 mb-4">
              <span className="text-3xl font-bold text-white">D</span>
            </div>
            <div className="text-lg font-semibold text-white">Dogecoin</div>
            <div className="text-sm text-gray-400 mt-1">WALLET</div>
          </div>
          {/* Add more cards as needed */}
        </div>
      </main>
    </div>
  );
}

export default App;
