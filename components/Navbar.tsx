import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#top' },
  { label: 'Shop by Category', href: '#categories' },
  { label: 'Best Sellers', href: '#best-products' },
  { label: 'Spices', href: '#spices' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm py-3 backdrop-blur' : 'bg-white py-4'
        } border-b border-[#E8DFD4]`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[var(--text-main)]"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <a href="#top" className="flex items-center gap-3">
            <img src="/assets/products/logo-leaf.png" alt="EVAYA Naturals leaf" className="w-8 h-auto" />
            <span className="text-2xl font-serif font-bold text-evaya-charcoal tracking-wide">
              EVAYA Naturals
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-evaya-charcoal font-semibold hover:text-evaya-sage transition-colors text-sm uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="text-[var(--text-main)] hover:text-[var(--primary)] transition-colors">
            <Search size={20} />
          </button>
          <button className="text-[var(--text-main)] hover:text-[var(--primary)] transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-[var(--primary)] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-6 lg:hidden">
          <div className="flex justify-end mb-8">
            <button
              className="text-[var(--text-main)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium text-[var(--text-main)] hover:text-[var(--primary)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
