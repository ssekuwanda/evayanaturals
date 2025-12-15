import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Sparkles, Sunrise, Waves } from 'lucide-react';

const steps = [
  {
    title: 'Cleanse & reset',
    copy: 'Sulfate-free washes that keep your barrier intact.',
    icon: Waves,
  },
  {
    title: 'Treat intentionally',
    copy: 'Clinical actives paired with calming botanicals.',
    icon: Sparkles,
  },
  {
    title: 'Seal & protect',
    copy: 'Ceramide-rich hydration and SPF that love makeup.',
    icon: Sunrise,
  },
];

const RitualStrip: React.FC = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="relative rounded-sm border border-white/60 bg-white/40 backdrop-blur-sm shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-evaya-sage/10 via-transparent to-evaya-terra/10 pointer-events-none" />
          <div className="p-8 md:p-12 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-xl">
                <p className="text-evaya-sage font-sans tracking-[0.24em] uppercase text-xs mb-3">The Evaya Method</p>
                <h3 className="font-serif text-3xl md:text-4xl text-evaya-charcoal leading-tight mb-3">A ritual that respects your skin timeline.</h3>
                <p className="font-sans text-gray-600">
                  Layer simple, powerful steps that flex for AM or PM. Each formula is designed to play well together and keep your skin in calm, glowy balance.
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-evaya-charcoal text-white px-5 py-3 text-[10px] tracking-[0.2em] uppercase font-medium shadow-lg">
                <Droplets size={14} /> Low fragrance • Vegan • Dermatologist tested
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.12)" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="rounded-sm border border-white/60 bg-white/60 backdrop-blur-md p-5 flex gap-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <motion.div
                    className="h-10 w-10 rounded-full bg-evaya-sage/20 flex items-center justify-center text-evaya-sage flex-shrink-0"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(74, 93, 79, 0.3)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon size={20} />
                  </motion.div>
                  <div>
                    <p className="font-serif text-xl text-evaya-charcoal group-hover:text-evaya-sage transition-colors">{step.title}</p>
                    <p className="font-sans text-sm text-gray-600">{step.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualStrip;
