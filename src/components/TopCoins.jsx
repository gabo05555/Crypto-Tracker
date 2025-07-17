import React, { useEffect, useState } from "react";
import axios from "axios";

const TopCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;
    const fetchTopCoins = async () => {
      try {
        const res = await axios.get(
          "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=8&tsym=USDT"
        );
        setCoins(res.data.Data || []);
        setError(null);
      } catch (err) {
        setError("Failed to fetch top coins");
      } finally {
        setLoading(false);
      }
    };
    fetchTopCoins();
    interval = setInterval(fetchTopCoins, 10000);
    return () => clearInterval(interval);
  }, []);

  // Show all top coins in a responsive grid
  return (
    <div className="relative bg-gradient-to-br from-[#23232b]/80 via-[#23232b]/60 to-[#6d5dfc]/20 rounded-3xl p-8 shadow-2xl border border-[#aaffaa]/20 min-h-[420px] mt-8 overflow-hidden backdrop-blur-xl">
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{background: 'radial-gradient(circle at 70% 20%, #aaffaa33 0%, #23232b00 70%)'}}></div>
      <div className="text-lg font-bold text-white/80 mb-6">Top Coins Today</div>
      {loading && <div className="text-white/60">Loading...</div>}
      {error && <div className="text-red-400">{error}</div>}
      {!loading && !error && coins.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {coins.map((coin) => (
            <div key={coin.CoinInfo.Id} className="flex flex-col items-center bg-[#191921]/80 rounded-2xl p-6 shadow-lg border border-[#aaffaa]/10 hover:scale-105 hover:shadow-[0_0_24px_0_#aaffaa55] transition-all duration-300">
              <img
                src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                alt={coin.CoinInfo.FullName}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#aaffaa]/40 shadow bg-[#23232b] mb-2"
                style={{boxShadow: '0 0 16px #aaffaa33'}}
              />
              <div className="uppercase text-green-300 text-xs font-bold tracking-widest mb-1">{coin.CoinInfo.FullName}</div>
              <div className="text-2xl font-extrabold text-white drop-shadow-[0_0_8px_#aaffaa99] mb-1">
                {coin.RAW?.USDT?.PRICE ? coin.RAW.USDT.PRICE.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "-"}
              </div>
              <div className={
                coin.RAW?.USDT?.CHANGEPCT24HOUR > 0
                  ? "text-green-400 text-xs font-bold"
                  : "text-red-400 text-xs font-bold"
              }>
                {coin.RAW?.USDT?.CHANGEPCT24HOUR ? `${coin.RAW.USDT.CHANGEPCT24HOUR.toFixed(2)}%` : "-"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopCoins;
