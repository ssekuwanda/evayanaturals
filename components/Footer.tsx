import React from 'react';
import { Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-evaya-charcoal text-evaya-beige pt-20 pb-10">
      <div className="container mx-auto px-6">

        {/* Newsletter Section - Gradient Background */}
        <div className="relative rounded-2xl overflow-hidden p-10 md:p-16 mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-evaya-sage via-[#5A7060] to-evaya-terra opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h3 className="font-serif text-3xl md:text-4xl mb-4 text-white font-light tracking-tight">Join the Inner Circle</h3>
              <p className="font-sans text-evaya-beige/60 text-sm leading-relaxed max-w-md">
                Subscribe to receive early access to new drops, exclusive wellness content, and 15% off your first order.
              </p>
            </div>
            <div className="w-full md:w-1/2 max-w-md">
              <form className="flex border-b border-white/20 pb-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent w-full outline-none text-evaya-beige placeholder-white/20 font-sans text-sm tracking-wide"
                />
                <button type="button" className="text-evaya-beige hover:text-evaya-terra transition-colors clickable opacity-80 hover:opacity-100">
                  <ArrowRight size={20} strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-evaya-beige/10 pb-16">
          <div className="md:col-span-1">
            <h2 className="font-serif text-3xl font-bold tracking-tighter mb-6">EVAYA</h2>
            <p className="font-sans text-sm text-evaya-beige/60 leading-relaxed">
              Nature meets luxury in every drop.
              Ethically sourced, scientifically formulated,
              and designed for your ritual.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Shop</h4>
            <ul className="space-y-4 font-sans text-sm text-evaya-beige/60">
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">All Products</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Best Sellers</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Sets & Bundles</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Gift Cards</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">About</h4>
            <ul className="space-y-4 font-sans text-sm text-evaya-beige/60">
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Our Story</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Ingredients</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Sustainability</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Journal</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Support</h4>
            <ul className="space-y-4 font-sans text-sm text-evaya-beige/60">
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">FAQ</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Shipping & Returns</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Contact Us</li>
              <li className="hover:text-evaya-sage transition-colors cursor-pointer clickable">Accessibility</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-sans text-xs text-evaya-beige/40">© {currentYear} EVAYA Naturals. All rights reserved.</p>
          <div className="flex space-x-6">
            <Instagram size={20} className="text-evaya-beige/60 hover:text-evaya-terra cursor-pointer transition-colors clickable" />
            <Facebook size={20} className="text-evaya-beige/60 hover:text-evaya-terra cursor-pointer transition-colors clickable" />
            <Twitter size={20} className="text-evaya-beige/60 hover:text-evaya-terra cursor-pointer transition-colors clickable" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;