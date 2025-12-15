import React from 'react';
import { motion } from 'framer-motion';

const pressLogos = ['Vogue', 'Refinery29', 'Byrdie', 'Allure', 'Cosmopolitan'];

const PressStrip: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-sm border border-white/60 bg-white/40 backdrop-blur-sm shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 px-6 md:px-10 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-xs tracking-[0.3em] uppercase text-evaya-charcoal/60 font-sans whitespace-nowrap"
          >
            As seen in
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {pressLogos.map((logo) => (
              <motion.div
                key={logo}
                variants={item}
                whileHover={{ scale: 1.05, color: "#4A5D4F" }}
                className="font-serif text-xl md:text-2xl tracking-tight text-evaya-charcoal/70 hover:text-evaya-sage transition-colors cursor-pointer"
              >
                {logo}
              </motion.div>
            ))}
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:block text-[10px] uppercase tracking-[0.2em] font-sans text-evaya-charcoal/60 whitespace-nowrap"
          >
            Loved for sensorial results-driven formulas
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
};

export default PressStrip;
