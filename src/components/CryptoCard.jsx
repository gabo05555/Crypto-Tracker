function CryptoCard({ icon, name }) {
  return (
    <div className="bg-gray-800/80 rounded-xl p-6 flex flex-col items-center shadow-lg border border-gray-700">
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-red-500 via-pink-500 to-yellow-400 mb-4">
        <span className="text-3xl font-bold text-white">{icon}</span>
      </div>
      <div className="text-lg font-semibold text-white">{name}</div>
      <div className="text-sm text-gray-400 mt-1">WALLET</div>
    </div>
  );
}

export default CryptoCard;
