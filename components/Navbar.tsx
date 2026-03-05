import React, { useState, useEffect } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Wellness Hub', href: '/wellness-hub' },
  { label: 'About Us', href: '/#about' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 shadow-md backdrop-blur-sm py-2'
          : 'bg-white py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Mobile menu button */}
        <button
          aria-label="Open menu"
          className="lg:hidden text-ev-green"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <a href="/" className="group">
          <img
            src="/assets/products/logo-evaya.png"
            alt="Evaya Naturals"
            className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm font-medium text-ev-text hover:text-ev-green transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-ev-green after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-ev-text hover:text-ev-green transition-colors">
            <Search size={20} />
          </button>
          <button aria-label="Account" className="hidden sm:block text-ev-text hover:text-ev-green transition-colors">
            <User size={20} />
          </button>
          <button aria-label="Cart" className="relative text-ev-text hover:text-ev-green transition-colors">
            <ShoppingBag size={20} />
            <span className="absolute -top-1.5 -right-1.5 bg-ev-green text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-white z-[60] flex flex-col p-6 lg:hidden anim-fade">
          <div className="flex items-center justify-between mb-10">
            <a href="/">
              <img src="/assets/products/logo-evaya.png" alt="Evaya Naturals" className="h-10 w-auto" />
            </a>
            <button aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <X size={24} className="text-ev-text" />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-lg font-medium text-ev-text hover:text-ev-green transition-colors anim-slide-left"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
