import React, { useEffect, useState } from "react";
import axios from "axios";

const TopCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopCoins = async () => {
      try {
        // Using CryptoCompare top coins by total volume
        const res = await axios.get(
          "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=5&tsym=USDT"
        );
        setCoins(res.data.Data || []);
      } catch (err) {
        setError("Failed to fetch top coins");
      } finally {
        setLoading(false);
      }
    };
    fetchTopCoins();
  }, []);

  return (
    <div className="bg-[#23232b] rounded-2xl p-6 shadow-lg border border-white/10 flex flex-col gap-4 mt-8">
      <div className="text-lg font-bold text-white mb-2">Top Coins Today</div>
      {loading && <div className="text-white/60">Loading...</div>}
      {error && <div className="text-red-400">{error}</div>}
      {!loading && !error && coins.length > 0 && (
        <div className="flex flex-col gap-4">
          {coins.map((coin) => (
            <div key={coin.CoinInfo.Id} className="flex items-center gap-4 bg-[#191921] rounded-xl p-4">
              <img
                src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
                alt={coin.CoinInfo.FullName}
                className="w-10 h-10 rounded-full object-cover bg-[#23232b]"
              />
              <div className="flex-1">
                <div className="text-white font-bold text-base flex items-center gap-2">
                  {coin.CoinInfo.FullName}
                  <span className="text-xs bg-[#23232b] text-white/60 rounded px-2 py-1">{coin.CoinInfo.Name}</span>
                </div>
                <div className="text-xs text-white/60 mt-1">{coin.CoinInfo.Description || ''}</div>
              </div>
              <div className="flex flex-col items-end min-w-[90px]">
                <span className="text-white font-bold text-lg">
                  ${coin.RAW?.USDT?.PRICE ? coin.RAW.USDT.PRICE.toLocaleString(undefined, { maximumFractionDigits: 2 }) : "-"}
                </span>
                <span className={
                  coin.RAW?.USDT?.CHANGEPCT24HOUR > 0
                    ? "text-green-400 text-xs font-bold"
                    : "text-red-400 text-xs font-bold"
                }>
                  {coin.RAW?.USDT?.CHANGEPCT24HOUR ? `${coin.RAW.USDT.CHANGEPCT24HOUR.toFixed(2)}%` : "-"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopCoins;
