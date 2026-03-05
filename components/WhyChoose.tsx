import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, FlaskConical, HeartHandshake, ShieldCheck } from 'lucide-react';

const values = [
  { icon: Sprout, title: '100% Pure & Organic' },
  { icon: FlaskConical, title: 'Lab Tested Quality' },
  { icon: HeartHandshake, title: 'Expert Guidance' },
  { icon: ShieldCheck, title: 'Secure & Fast Delivery' },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Dark green background with nature image overlay */}
      <div className="absolute inset-0 bg-ev-greenDark" />

      {/* Left nature image overlay */}
      <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-30 pointer-events-none">
        <img
          src="/assets/product-7.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ev-greenDark/50 via-ev-greenDark to-ev-greenDark" />
      </div>

      {/* Right nature image overlay */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-30 pointer-events-none">
        <img
          src="/assets/product-8.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-ev-greenDark/50 via-ev-greenDark to-ev-greenDark" />
      </div>

      {/* Leaf SVG decorations */}
      <div className="absolute top-4 left-8 w-20 h-20 opacity-20 pointer-events-none leaf-float">
        <svg viewBox="0 0 100 100" fill="#4A7C42">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>
      <div className="absolute bottom-4 right-10 w-16 h-16 opacity-20 pointer-events-none leaf-float" style={{ animationDelay: '2s' }}>
        <svg viewBox="0 0 100 100" fill="#4A7C42" transform="rotate(135)">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-accent text-3xl md:text-4xl lg:text-5xl text-white italic mb-12"
        >
          Why Choose <span className="text-ev-goldLight">Evaya?</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {values.map((val, i) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <val.icon size={26} className="text-ev-goldLight" strokeWidth={1.8} />
              </div>
              <p className="font-body text-sm md:text-base font-semibold text-white leading-tight">
                {val.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
