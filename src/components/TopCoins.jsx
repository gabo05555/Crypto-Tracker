import React, { useEffect, useState } from "react";
import axios from "axios";


const TopCoins = ({ type }) => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;
    const fetchCoins = async () => {
      try {
        let url;
        if (type === "losers") {
          // Fetch top losers by sorting top coins by 24h change ascending
          url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=USDT";
        } else {
          url = "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=8&tsym=USDT";
        }
        const res = await axios.get(url);
        let data = res.data.Data || [];
        if (type === "losers") {
          // Sort by 24h change ascending and take the top 8 losers
          data = data
            .filter(coin => coin.RAW && coin.RAW.USDT && typeof coin.RAW.USDT.CHANGEPCT24HOUR === 'number')
            .sort((a, b) => a.RAW.USDT.CHANGEPCT24HOUR - b.RAW.USDT.CHANGEPCT24HOUR)
            .slice(0, 8);
        }
        setCoins(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch top coins");
      } finally {
        setLoading(false);
      }
    };
    fetchCoins();
    // Refresh every 24 hours for losers, 10s for gainers
    interval = setInterval(fetchCoins, type === "losers" ? 24*60*60*1000 : 10000);
    return () => clearInterval(interval);
  }, [type]);

  // Show all top coins in a responsive grid
  return (
    <div className="relative bg-gradient-to-br from-[#23232b]/80 via-[#23232b]/60 to-[#6d5dfc]/20 rounded-3xl p-4 md:p-8 shadow-2xl border border-[#aaffaa]/20 min-h-[320px] md:min-h-[420px] mt-6 md:mt-8 overflow-hidden backdrop-blur-xl">
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{background: 'radial-gradient(circle at 70% 20%, #aaffaa33 0%, #23232b00 70%)'}}></div>
      <div className="text-lg font-bold text-white/80 mb-6">Top Coins Today</div>
      {loading && <div className="text-white/60">Loading...</div>}
      {error && <div className="text-red-400">{error}</div>}
      {!loading && !error && coins.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
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
                {coin.RAW?.USDT?.PRICE !== undefined
                  ? (Math.abs(coin.RAW.USDT.PRICE) >= 1
                      ? coin.RAW.USDT.PRICE.toLocaleString(undefined, { maximumFractionDigits: 2 })
                      : coin.RAW.USDT.PRICE.toLocaleString(undefined, { maximumFractionDigits: 12 })
                    )
                  : "-"}
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
