import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-20 lg:pt-16 overflow-hidden bg-gradient-to-br from-white via-ev-cream to-ev-beige min-h-[calc(100vh-80px)] lg:min-h-[640px]">

      {/* Full-bleed image — right half, flush to viewport edge */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[18%] -translate-y-1/2 right-6 w-full lg:w-[46%]"
      >
        <a href="/shop" aria-label="Shop EVAYA Naturals products">
        <img
          src="/assets/products/hero-main.png"
          alt="EVAYA Naturals herbal teas and natural wellness products"
          className="w-full h-auto cursor-pointer"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 14%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%)',
            filter: 'drop-shadow(-12px 0 24px rgba(0,0,0,0.07))',
          }}
        />
        </a>
      </motion.div>

      {/* Decorative leaf elements */}
      <div className="absolute top-20 left-4 w-20 h-20 opacity-20 pointer-events-none leaf-float">
        <svg viewBox="0 0 100 100" fill="#2D5A27">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 left-16 w-16 h-16 opacity-10 pointer-events-none leaf-float" style={{ animationDelay: '2.5s' }}>
        <svg viewBox="0 0 100 100" fill="#2D5A27" transform="rotate(45)">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center min-h-[calc(100vh-80px)] lg:min-h-[640px] py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-ev-text leading-[1.15] mb-5">
              Your{' '}
              <span className="font-accent italic text-ev-green">Wellness</span>{' '}
              Partner
            </h1>
            <p className="font-body text-lg sm:text-xl text-ev-muted leading-relaxed mb-8 max-w-md">
              100% Natural Herbs, Superfoods & Oils
              <br className="hidden sm:block" /> for a Healthier You
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#best-sellers"
                className="inline-flex items-center gap-2 bg-ev-green hover:bg-ev-greenDark text-white font-body font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg shadow-ev-green/20 hover:shadow-xl hover:shadow-ev-green/30 hover:-translate-y-0.5"
              >
                Shop Now
                <ChevronRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="#wellness-goals"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-ev-text px-7 py-3.5 rounded-full border-2 border-ev-border hover:border-ev-green hover:text-ev-green transition-all hover:-translate-y-0.5"
              >
                Take Wellness Quiz
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              <span className="w-8 h-2 rounded-full bg-ev-green" />
              <span className="w-2 h-2 rounded-full bg-ev-border" />
              <span className="w-2 h-2 rounded-full bg-ev-border" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 30C240 10 480 50 720 30C960 10 1200 50 1440 30V60H0V30Z" fill="#FBF8F1" fillOpacity="0.5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
