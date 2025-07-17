function Sidebar() {
  return (
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
  );
}

export default Sidebar;
