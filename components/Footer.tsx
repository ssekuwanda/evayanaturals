import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white pt-16 pb-8 border-t border-[#E8DFD4]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand & Newsletter */}
          <div className="md:col-span-1 space-y-6">
            <h2 className="font-serif text-2xl font-bold text-evaya-charcoal uppercase tracking-wide">EVAYA NATURALS</h2>
            <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed">
              Best Quality Products. Join the Health reform.
            </p>
            <div className="pt-4">
              <h4 className="font-serif text-lg mb-2 text-[var(--text-main)]">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:border-[var(--primary)]"
                />
                <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-sm text-sm uppercase tracking-wide hover:bg-[var(--primary-dark)] transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Shop Categories */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[var(--primary)] font-semibold">Shop by Category</h4>
            <ul className="space-y-3 font-sans text-sm text-[var(--text-muted)]">
              {['Plant Extracts & Supplements', 'Plant Herbal Powders', 'Flowers, Tea\'s & Tea balls', 'Spices & Herbs', 'Nuts', 'Dried fruits', 'Herbal Edible & Essential oils', 'Food Stuffs'].map((item) => (
                <li key={item} className="hover:text-[var(--primary)] transition-colors cursor-pointer capitalize">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[var(--primary)] font-semibold">Quick Links</h4>
            <ul className="space-y-3 font-sans text-sm text-[var(--text-muted)]">
              {['About', 'Contact', 'Checkout', 'My account', 'Privacy Policy'].map((item) => (
                <li key={item} className="hover:text-[var(--primary)] transition-colors cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[var(--primary)] font-semibold">Connect With Us</h4>
            <p className="font-sans text-sm text-[var(--text-muted)] mb-4">
              Follow us on social media for updates and wellness tips.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 bg-white border border-gray-200 rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
                <Instagram size={18} />
              </button>
              <button className="p-2 bg-white border border-gray-200 rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
                <Facebook size={18} />
              </button>
              <button className="p-2 bg-white border border-gray-200 rounded-full hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
                <Twitter size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center bg-[#2C3329] px-6 py-4 rounded-t-none -mx-6 -mb-8 mt-16 text-white">
          <p className="font-sans text-xs opacity-70">© {currentYear} EVAYA Naturals. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="text-xs opacity-70">Terms & Conditions</span>
            <span className="text-xs opacity-70">Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
