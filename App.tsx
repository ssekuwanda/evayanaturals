import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import IngredientSpotlight from './components/IngredientSpotlight';
import ShopGrid from './components/ShopGrid';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundGradient from './components/BackgroundGradient';
import RitualStrip from './components/RitualStrip';
import PressStrip from './components/PressStrip';
import Sustainability from './components/Sustainability';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-evaya-charcoal selection:bg-evaya-sage selection:text-white overflow-x-hidden">
      <CustomCursor />
      <BackgroundGradient />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <PressStrip />
        <RitualStrip />
        <BestSellers />
        <IngredientSpotlight />
        <ShopGrid />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
};

export default App;
