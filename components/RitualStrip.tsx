import React from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, Sprout, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Huge Savings',
    copy: 'At the lowest prices for the pantry staples you love.',
    icon: PiggyBank,
  },
  {
    title: 'Huge Collection',
    copy: 'From brewers and teas to oils, nuts, and supplements.',
    icon: ShieldCheck,
  },
  {
    title: 'Plant based',
    copy: 'Organic, plant-forward ingredients and blends.',
    icon: Sprout,
  },
];

const RitualStrip: React.FC = () => {
  return (
    <section className="py-14 bg-[#F8F5F0]">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl bg-white border border-[#E8DFD4] p-8 md:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="flex items-start gap-4 bg-[#F9F4EC] border border-[#E8DFD4] rounded-xl p-5 hover:shadow-md transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-evaya-lightSage/30 text-evaya-sage flex items-center justify-center flex-shrink-0">
                  <step.icon size={22} />
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-xl text-evaya-charcoal">{step.title}</p>
                  <p className="text-sm text-evaya-charcoal/70">{step.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RitualStrip;
