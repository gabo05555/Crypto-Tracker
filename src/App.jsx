import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import LivePrices from "./components/LivePrices";
import StatCards from "./components/StatCards";
import FilterBar from "./components/FilterBar";
import VaultCard from "./components/VaultCard";

function App() {
  const [prices, setPrices] = useState({});

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const [btcRes, ethRes] = await Promise.all([
          axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"),
          axios.get("https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT")
        ]);
        setPrices({
          bitcoin: { usdt: parseFloat(btcRes.data.price) },
          ethereum: { usdt: parseFloat(ethRes.data.price) }
        });
      } catch (err) {
        console.error("Failed to fetch prices", err);
      }
    };
    fetchPrices();
    const interval = setInterval(fetchPrices, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-row bg-[#181820]">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-screen px-10 py-8 bg-[#191921]">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Vault <span className="text-white/60 font-light">market place</span>
        </h1>
        <LivePrices prices={prices} />
        <StatCards />
        <FilterBar />
        <VaultCard />
      </main>
    </div>
  );
}

export default App;