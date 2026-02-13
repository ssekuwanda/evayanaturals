import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import ShopGrid from './components/ShopGrid';
import Footer from './components/Footer';
import RitualStrip from './components/RitualStrip';
import CategoryCarousel from './components/CategoryCarousel';
import PriceList from './components/PriceList';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-evaya-charcoal selection:bg-evaya-sage selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <RitualStrip />
        <CategoryCarousel />
        <BestSellers />
        <ShopGrid />
        <PriceList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
