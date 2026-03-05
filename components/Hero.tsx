import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="top" className="relative pt-20 lg:pt-16 overflow-hidden bg-gradient-to-br from-white via-ev-cream to-ev-beige">
      {/* Decorative leaf elements */}
      <div className="absolute top-20 left-4 w-20 h-20 opacity-20 pointer-events-none leaf-float">
        <svg viewBox="0 0 100 100" fill="#2D5A27">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>
      <div className="absolute top-32 right-8 w-14 h-14 opacity-15 pointer-events-none leaf-float" style={{ animationDelay: '1.5s' }}>
        <svg viewBox="0 0 100 100" fill="#4A7C42">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 left-16 w-16 h-16 opacity-10 pointer-events-none leaf-float" style={{ animationDelay: '2.5s' }}>
        <svg viewBox="0 0 100 100" fill="#2D5A27" transform="rotate(45)">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[calc(100vh-80px)] lg:min-h-[600px] py-12 lg:py-0">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-xl"
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

          {/* Right - Hero Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg lg:max-w-none">
              {/* Main image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-ev-green/10 border border-white/60">
                <img
                  src="/assets/product-1.jpg"
                  alt="EVAYA Naturals premium herbal products and natural wellness items"
                  className="w-full h-[340px] sm:h-[420px] lg:h-[480px] object-cover"
                />
                {/* Green gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-ev-green/20 via-transparent to-transparent" />
              </div>

              {/* Floating product cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -left-4 sm:-left-8 bottom-8 bg-white rounded-2xl p-3 shadow-xl shadow-black/10 border border-ev-border/50 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-ev-beige flex-shrink-0">
                  <img src="/assets/products/honey.png" alt="Pure Honey" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-ev-text">Pure Honey</p>
                  <p className="font-body text-xs text-ev-muted">UGX 45,000</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -right-2 sm:-right-6 top-12 bg-white rounded-2xl p-3 shadow-xl shadow-black/10 border border-ev-border/50 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-ev-beige flex-shrink-0">
                  <img src="/assets/products/spices.png" alt="Spices" className="w-full h-full object-contain p-1" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold text-ev-text">Organic Spices</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#DAA520"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                </div>
              </motion.div>
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
