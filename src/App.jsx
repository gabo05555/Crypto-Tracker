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
  const [ethHistory, setEthHistory] = useState({ '1W': [], '1M': [], '1Y': [] });
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('1W');

  // Fetch current prices (unchanged)
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

  // Fetch ETH historical data for all timeframes
  useEffect(() => {
    const fetchHistory = async () => {
      setLoadingHistory(true);
      try {
        // 1W: 7 days, 1M: 30 days, 1Y: 365 days
        const [week, month, year] = await Promise.all([
          axios.get('https://min-api.cryptocompare.com/data/v2/histohour?fsym=ETH&tsym=USDT&limit=168'), // 1 week (hourly)
          axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USDT&limit=30'),   // 1 month (daily)
          axios.get('https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USDT&limit=365'),  // 1 year (daily)
        ]);
        setEthHistory({
          '1W': week.data.Data.Data,
          '1M': month.data.Data.Data,
          '1Y': year.data.Data.Data,
        });
      } catch (err) {
        console.error('Failed to fetch ETH history', err);
      }
      setLoadingHistory(false);
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen flex flex-row bg-[#181820]">
          <div className="sticky top-0 h-screen z-20">
            <Sidebar section={sidebarSection} setSection={setSidebarSection} />
          </div>
      <main className="flex-1 flex flex-col min-h-screen px-2 sm:px-4 md:px-8 py-4 md:py-8 bg-[#191921] max-w-[2000px] mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">Dashboard</h1>
          <p className="text-lg text-white/60 mb-4">Your live crypto analytics and market overview</p>
        </div>
        {sidebarSection === "dashboard" && (
          <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">Overview</h2>
              <div className="flex flex-col lg:flex-row gap-6">
                <StatCards btcPrice={prices.bitcoin?.usdt} ethPrice={prices.ethereum?.usdt} />
              </div>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">ETH Price Analytics</h2>
              <div className="bg-[#20202a] rounded-2xl p-4 md:p-8 shadow-lg border border-white/10">
                <PriceAnalytics
                  ethHistory={ethHistory}
                  loadingHistory={loadingHistory}
                  selectedTimeframe={selectedTimeframe}
                  setSelectedTimeframe={setSelectedTimeframe}
                />
              </div>
            </section>
          </>
        )}
        {sidebarSection === "topgainers" && (
          <>
            <h2 className="text-3xl font-bold text-green-300 mb-6">Top Gainers Today</h2>
            <TopCoins />
          </>
        )}
        {sidebarSection === "toplosers" && (
          <>
            <h2 className="text-3xl font-bold text-red-300 mb-6">Top Losers Today</h2>
            <TopCoins type="losers" />
          </>
        )}
      </main>
    </div>
  );
}

export default App;