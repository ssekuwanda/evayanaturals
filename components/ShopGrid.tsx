import React from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

const spices: Product[] = [
  {
    id: 21,
    name: "Cayenne Pepper",
    category: "Spices & Herbs",
    price: 65000,
    image: "https://images.unsplash.com/photo-1615485737455-1f6757f2e927?auto=format&fit=crop&w=720&q=80",
    description: "Premium ground cayenne in spoon-ready form"
  },
  {
    id: 22,
    name: "Cinnamon Powder",
    category: "Spices & Herbs",
    price: 75000,
    image: "https://images.unsplash.com/photo-1604908177775-9f55b2c8fcaa?auto=format&fit=crop&w=720&q=80",
    description: "Aromatic Ceylon cinnamon spooned for dosing"
  },
  {
    id: 23,
    name: "Rubbed Oregano",
    category: "Spices & Herbs",
    price: 75000,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=720&q=80",
    description: "Italian seasoning essential, spooned for freshness"
  },
  {
    id: 24,
    name: "Turmeric Powder",
    category: "Spices & Herbs",
    price: 75000,
    image: "https://images.unsplash.com/photo-1615485737446-67bd01ae8a96?auto=format&fit=crop&w=720&q=80",
    description: "Golden wellness spice in a ready-to-use spoon"
  },
];

const ShopGrid: React.FC = () => {
  return (
    <section id="spices" className="py-20 md:py-24 bg-gradient-to-b from-[#FAF7F5] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-evaya-terra/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-evaya-sage/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-evaya-terra/40" />
            <img src="/assets/products/logo-leaf.png" alt="EVAYA Naturals leaf mark" className="w-8 opacity-60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-evaya-terra/40" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-evaya-charcoal leading-tight">
            Best Selling <span className="text-evaya-terra italic">Spices & Herbs</span>
          </h2>

          <p className="text-evaya-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Elevate your culinary creations with our premium spices—authentic flavors from nature's pantry, priced in UGX for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {spices.map((product, index) => {
            const isCayennePepper = product.name === 'Cayenne Pepper';

            return (
              <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/60"
            >
              {/* Card gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FDFCFB] to-[#F9F6F0]" />
              <div className="absolute inset-0 bg-gradient-to-br from-evaya-terra/0 via-evaya-terra/0 to-evaya-terra/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                {/* Image container */}
                <div className="relative aspect-square bg-gradient-to-br from-[#FAF7F5] to-white flex items-center justify-center p-8 border-b-2 border-evaya-terra/10 group-hover:border-evaya-terra/20 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-evaya-terra/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative h-48 w-full object-contain group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/assets/products/spices.png';
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] bg-evaya-terra/90 text-white px-3 py-1.5 rounded-full font-bold shadow-lg backdrop-blur-sm">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      Premium
                    </span>
                  </div>
                  {isCayennePepper && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] bg-white/95 text-evaya-charcoal px-3 py-1.5 rounded-full font-bold shadow-lg border border-evaya-terra/20 backdrop-blur-sm">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <ellipse cx="9.5" cy="8.5" rx="5.5" ry="3.5" />
                          <path d="M14 11l6.5 6.5" />
                        </svg>
                        Spoon
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-evaya-terra font-bold">{product.category}</p>

                  <h3 className="font-serif text-xl text-evaya-charcoal group-hover:text-evaya-terra transition-colors duration-300 leading-tight min-h-[56px]">
                    {product.name}
                  </h3>

                  <p className="text-sm text-evaya-charcoal/65 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-evaya-terra/20 via-evaya-terra/10 to-transparent" />

                  {/* Price */}
                  <div className="flex items-baseline gap-2 pt-2">
                    <span className="text-2xl font-bold text-evaya-charcoal">
                      UGX {product.price.toLocaleString()}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-4 w-full bg-gradient-to-r from-evaya-charcoal to-evaya-charcoal/90 text-white py-3.5 rounded-2xl text-xs tracking-[0.18em] font-bold hover:from-evaya-terra hover:to-evaya-terra/90 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                    <span>Add to Basket</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover/btn:translate-x-1 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ShopGrid;
