import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Truck, Users } from 'lucide-react';

const badges = [
  { icon: Leaf, label: '100% Natural', color: 'text-ev-green' },
  { icon: ShieldCheck, label: 'Quality Tested', color: 'text-ev-green' },
  { icon: Truck, label: 'Fast Delivery\n(Kampala)', color: 'text-ev-green' },
  { icon: Users, label: 'Trusted by\n5,000+ Customers', color: 'text-ev-green' },
];

const TrustStrip: React.FC = () => {
  return (
    <section className="relative py-5 bg-white border-y border-ev-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-2.5 flex-shrink-0 px-3"
            >
              <div className="w-9 h-9 rounded-full bg-ev-green/8 flex items-center justify-center flex-shrink-0">
                <badge.icon size={18} className={badge.color} strokeWidth={2} />
              </div>
              <p className="font-body text-sm font-semibold text-ev-text whitespace-pre-line leading-tight">
                {badge.label}
              </p>
              {i < badges.length - 1 && (
                <div className="hidden md:block w-px h-8 bg-ev-border ml-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
