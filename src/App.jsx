


import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CryptoCard from './components/CryptoCard';


function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-900/80 backdrop-blur-lg">
        <Header />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CryptoCard icon="Ξ" name="Ethereum" />
          <CryptoCard icon="₿" name="Bitcoin" />
          <CryptoCard icon="M" name="Monero" />
          <CryptoCard icon="D" name="Dogecoin" />
          {/* Add more <CryptoCard /> as needed */}
        </div>
      </main>
    </div>
  );
}

export default App;
