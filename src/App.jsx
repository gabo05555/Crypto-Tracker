import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import LivePrices from "./components/LivePrices";
import StatCards from "./components/StatCards";
import PriceAnalytics from "./components/PriceAnalytics";
import FilterBar from "./components/FilterBar";
import VaultCard from "./components/VaultCard";
import TopCoins from "./components/TopCoins";

function App() {
  const [prices, setPrices] = useState({});
  const [sidebarSection, setSidebarSection] = useState("dashboard");

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const res = await axios.get(
          "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USDT"
        );
        setPrices({
          bitcoin: { usdt: res.data.BTC?.USDT },
          ethereum: { usdt: res.data.ETH?.USDT }
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
      <Sidebar section={sidebarSection} setSection={setSidebarSection} />
      <main className="flex-1 flex flex-col min-h-screen px-10 py-8 bg-[#191921]">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Vault <span className="text-white/60 font-light">market place</span>
        </h1>
        {/* <LivePrices prices={prices} /> removed as requested */}
        {sidebarSection === "dashboard" && <>
          <StatCards btcPrice={prices.bitcoin?.usdt} ethPrice={prices.ethereum?.usdt} />
          <PriceAnalytics />
          <FilterBar />
          <TopCoins />
        </>}
        {sidebarSection === "topgainers" && <>
          <h2 className="text-3xl font-bold text-green-300 mb-6">Top Gainers Today</h2>
          <TopCoins />
        </>}
      </main>
    </div>
  );
}

export default App;