import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Journal', href: '#journal' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${scrolled ? 'bg-evaya-beige/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-evaya-charcoal/5' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-evaya-charcoal clickable"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Links (Left) */}
        <div className="hidden md:flex space-x-6">
          {navItems.slice(0, 2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-evaya-charcoal font-sans text-[11px] font-medium tracking-[0.2em] transition-colors clickable"
            >
              <span className="relative z-10">{item.label.toUpperCase()}</span>
              <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-evaya-terra scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
            </a>
          ))}
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center cursor-pointer clickable group">
          <span className="text-3xl md:text-4xl font-serif font-medium tracking-tight text-evaya-charcoal group-hover:opacity-80 transition-opacity">
            EVAYA
          </span>
        </div>

        {/* Desktop Links (Right) & Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="hidden md:flex space-x-6">
            {navItems.slice(2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-evaya-charcoal font-sans text-[11px] font-medium tracking-[0.2em] transition-colors clickable"
              >
                <span className="relative z-10">{item.label.toUpperCase()}</span>
                <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-evaya-terra scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <button className="text-evaya-charcoal hover:text-evaya-sage transition-colors clickable hidden md:block">
              <Search size={20} />
            </button>
            <button className="text-evaya-charcoal hover:text-evaya-sage transition-colors relative clickable">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-evaya-terra text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="hidden md:inline-flex items-center px-5 py-2.5 rounded-sm bg-evaya-charcoal text-evaya-beige text-[10px] uppercase tracking-[0.25em] hover:bg-evaya-sage transition-colors duration-300 clickable">
              Book consult
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-evaya-beige z-[60] flex flex-col items-center justify-center space-y-8 p-4 md:hidden">
          <button
            className="absolute top-6 left-6 text-evaya-charcoal clickable"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-serif text-evaya-charcoal hover:text-evaya-sage transition-colors clickable"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
