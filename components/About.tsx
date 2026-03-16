import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-ev-cream to-white relative overflow-hidden">
      {/* Leaf decorations */}
      <div className="absolute top-8 right-12 w-20 h-20 opacity-[0.06] pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" fill="#2D5A27">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>
      <div className="absolute bottom-12 left-8 w-16 h-16 opacity-[0.06] pointer-events-none -rotate-45">
        <svg viewBox="0 0 100 100" fill="#2D5A27">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-ev-green/10">
              <img
                src="/assets/products/about-hero.png"
                alt="Woman harvesting fresh herbs and natural ingredients for EVAYA Naturals"
                className="w-full h-[360px] sm:h-[440px] object-cover object-center"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-ev-green/8 blur-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-ev-gold/10 blur-xl" />
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] text-ev-text leading-tight">
              About <span className="text-ev-green italic font-accent">Evaya Naturals</span>
            </h2>
            <p className="font-body text-lg text-ev-muted leading-relaxed max-w-lg">
              We are Uganda's trusted wellness brand, bringing nature's healing power to your home.
              Every product is sourced with care, tested for purity, and delivered with love.
            </p>
            <p className="font-body text-base text-ev-muted/80 leading-relaxed max-w-lg">
              From the rich soils of East Africa to your doorstep, we curate the finest herbs,
              spices, oils, and superfoods to support your health journey naturally.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-ev-green hover:bg-ev-greenDark text-white font-body font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg shadow-ev-green/20 hover:shadow-xl"
              >
                Learn Our Story
              </a>
              {/* Star accent */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#DAA520">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
