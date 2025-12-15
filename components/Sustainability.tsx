import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Droplets } from 'lucide-react';

const pillars = [
  {
    icon: Leaf,
    title: 'Low-impact sourcing',
    copy: 'We work with growers who harvest in-season and regenerate soil health.',
    stat: '100% traceable botanicals',
  },
  {
    icon: Recycle,
    title: 'Circular packaging',
    copy: 'Refillable glass bottles and FSC-certified cartons with soy inks.',
    stat: '71% less packaging waste',
  },
  {
    icon: Droplets,
    title: 'Water mindfulness',
    copy: 'Concentrated formulas require fewer rinses and less water in production.',
    stat: '-23% water per product',
  },
];

const Sustainability: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="rounded-sm border border-white/60 bg-gradient-to-br from-evaya-cream/80 via-white/70 to-evaya-lightSage/20 backdrop-blur-xl shadow-none hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr]">
            <div className="p-10 md:p-12 space-y-5">
              <p className="text-evaya-sage font-sans tracking-[0.24em] uppercase text-xs">Sustainability</p>
              <h3 className="font-serif text-3xl md:text-4xl text-evaya-charcoal leading-tight">
                Luxury that respects the planet it comes from.
              </h3>
              <p className="font-sans text-gray-600 max-w-xl">
                Every Evaya product is vetted through our Earth-First checklist, balancing sensorial experiences with responsible sourcing and packaging choices.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pillars.map((pillar, idx) => (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4, boxShadow: "0 12px 35px rgba(0,0,0,0.1)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx, duration: 0.45 }}
                    className="rounded-sm bg-white/60 backdrop-blur-sm border border-white/50 p-6 flex flex-col gap-4 shadow-none hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  >
                    <motion.div
                      className="h-10 w-10 rounded-full bg-evaya-sage/15 flex items-center justify-center text-evaya-sage"
                      whileHover={{ scale: 1.15, backgroundColor: "rgba(74, 93, 79, 0.2)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <pillar.icon size={18} />
                    </motion.div>
                    <div>
                      <p className="font-serif text-xl text-evaya-charcoal group-hover:text-evaya-sage transition-colors">{pillar.title}</p>
                      <p className="font-sans text-sm text-gray-600">{pillar.copy}</p>
                    </div>
                    <motion.span
                      className="text-xs uppercase tracking-[0.2em] text-evaya-sage font-semibold"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {pillar.stat}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-evaya-sage/15 to-evaya-terra/15" />
              <img
                src="https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1200&q=80"
                alt="Sustainable packaging"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur rounded-sm border border-white/40 px-4 py-2 text-[10px] tracking-[0.2em] uppercase text-evaya-charcoal">
                FSC & Refillable
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
