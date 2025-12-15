import React from 'react';
import { motion } from 'framer-motion';

const IngredientSpotlight: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <div className="space-y-5">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-evaya-sage font-sans text-sm tracking-[0.24em] uppercase block"
          >
            Pure & Potent
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-evaya-charcoal leading-tight"
          >
            Ingredients with a story,
            <br />
            <span className="italic text-evaya-terra">formulas with proof.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg text-gray-600 leading-relaxed max-w-md"
          >
            We trace every ingredient back to origin, then pair it with clinical actives so you get potent results without irritation.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {['No silicones', 'Vegan & cruelty-free', 'Traceable sourcing', 'Dermatologist tested'].map((pill, idx) => (
              <motion.span
                key={pill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="px-4 py-1.5 rounded-full border border-evaya-charcoal/20 bg-white/40 backdrop-blur-md text-[11px] uppercase tracking-wider font-sans text-evaya-charcoal font-medium cursor-pointer hover:bg-evaya-charcoal hover:text-white transition-all duration-300"
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>

          <ul className="space-y-5">
            {[
              { title: 'Organic Aloe Vera', desc: 'Harvested at sunrise in Mexico for peak hydration and calm.', stat: '96% saw soothed skin' },
              { title: 'Moroccan Lava Clay', desc: 'Mineral-rich earth that detoxifies without pulling moisture.', stat: 'Reduces congestion in 2 weeks' },
              { title: 'Cold-Pressed Jojoba', desc: "Mimics skin's oils to rebuild the barrier overnight.", stat: 'Improves elasticity by 21%' }
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 8, boxShadow: "0 6px 25px rgba(0,0,0,0.08)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="flex items-start gap-4 group clickable rounded-lg p-4 -mx-4 cursor-pointer transition-shadow"
              >
                <motion.span
                  className="h-2 w-10 bg-evaya-sage rounded-full mt-3 flex-shrink-0"
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="space-y-1">
                  <motion.h4
                    className="font-serif text-xl text-evaya-charcoal group-hover:text-evaya-sage transition-colors"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.title}
                  </motion.h4>
                  <p className="font-sans text-sm text-gray-500">{item.desc}</p>
                  <motion.p
                    className="font-sans text-xs uppercase tracking-[0.2em] text-evaya-sage font-semibold"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.stat}
                  </motion.p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Visual Content - Floating Elements - Mobile optimized */}
        <div className="relative h-[400px] md:h-[520px] w-full flex items-center justify-center mt-10 md:mt-0">
          <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full bg-[#E5DDD5]/40 backdrop-blur-sm z-0" />

          <motion.div
            className="absolute z-10 w-36 h-48 md:w-48 md:h-64 overflow-hidden rounded-t-full shadow-2xl border border-white/40"
            style={{ left: '5%', top: '5%' }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" alt="Aloe" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute z-20 w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full shadow-2xl border-2 border-white/60"
            style={{ right: '5%', top: '25%' }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1617957796155-4578ce58ce80?auto=format&fit=crop&w=600&q=80" alt="Clay" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            className="absolute z-10 w-28 h-40 md:w-36 md:h-48 overflow-hidden rounded-b-full shadow-2xl border border-white/40"
            style={{ left: '25%', bottom: '5%' }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <img src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80" alt="Oils" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IngredientSpotlight;
