import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../types';

const products: (Product & { tag?: string })[] = [
  { id: 1, name: "Velvet Sage Cleanser", category: "Face", price: 0, tag: "pH-balanced", image: "/assets/product-1.jpg", description: "" },
  { id: 2, name: "Luminous Glow Oil", category: "Serums", price: 0, tag: "Awarded", image: "/assets/product-2.jpg", description: "" },
  { id: 3, name: "Terra Clay Mask", category: "Treatments", price: 0, image: "/assets/product-3.jpg", description: "" },
  { id: 4, name: "Botanical Mist", category: "Toners", price: 0, tag: "Cooling", image: "/assets/product-4.jpg", description: "" },
  { id: 5, name: "Rejuvenating Eye Balm", category: "Eyes", price: 0, tag: "New", image: "/assets/product-5.jpg", description: "" },
  { id: 6, name: "Hemp Seed Essence", category: "Serums", price: 0, tag: "Vegan", image: "/assets/product-6.jpg", description: "" },
  { id: 7, name: "Solar Defense SPF", category: "Protection", price: 0, image: "/assets/product-7.jpg", description: "" },
  { id: 8, name: "Rose Quartz Roller", category: "Tools", price: 0, image: "/assets/product-8.jpg", description: "" },
  { id: 9, name: "Midnight Recovery", category: "Face", price: 0, image: "/assets/product-9.jpg", description: "" },
  { id: 10, name: "Calming Gel", category: "Treatments", price: 0, image: "/assets/product-10.jpg", description: "" },
];

const ShopGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => ['All', ...Array.from(new Set(products.map((p) => p.category)))], []);
  const filteredProducts = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section id="shop" className="py-24 bg-white/20 backdrop-blur-sm border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 space-y-3">
          <span className="text-evaya-terra font-sans text-sm tracking-[0.24em] uppercase block">The Collection</span>
          <h2 className="font-serif text-4xl text-evaya-charcoal">Shop Essentials</h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">Layerable heroes for everyday calm and glow. Filter by ritual moment to build a routine that fits morning to midnight.</p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-sm text-[11px] uppercase tracking-[0.2em] font-sans border transition-all duration-300 clickable ${activeCategory === category
                ? 'bg-evaya-charcoal text-evaya-beige border-evaya-charcoal'
                : 'bg-transparent text-evaya-charcoal border-evaya-charcoal/20 hover:border-evaya-charcoal'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer clickable"
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden mb-4 aspect-[4/5] bg-[#F4F4F4] rounded-sm shadow-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover mix-blend-multiply opacity-95"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-[11px] uppercase tracking-[0.18em] bg-white/80 backdrop-blur-md text-evaya-charcoal px-3 py-1 rounded-full"
                  >
                    {product.category}
                  </motion.span>
                  {product.tag && (
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-[10px] uppercase tracking-[0.2em] bg-evaya-terra text-white px-2 py-1 rounded-sm font-medium"
                    >
                      {product.tag}
                    </motion.span>
                  )}
                </div>
                <motion.div
                  className="absolute inset-x-0 bottom-0 p-4"
                  initial={{ y: '100%' }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/90 backdrop-blur text-evaya-charcoal py-4 text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-evaya-charcoal hover:text-white transition-colors border-t border-white/20"
                  >
                    Add to Cart
                  </motion.button>
                </motion.div>
              </div>
              <div className="flex justify-between items-start gap-2">
                <div className="flex-1 text-center">
                  <motion.h3
                    className="font-serif text-lg text-evaya-charcoal group-hover:text-evaya-sage transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.name}
                  </motion.h3>
                  <p className="text-xs font-sans text-gray-400 uppercase tracking-wide mt-1">{product.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 border border-evaya-charcoal text-evaya-charcoal font-sans tracking-[0.2em] text-[11px] uppercase font-medium hover:bg-evaya-charcoal hover:text-white transition-all duration-300 clickable rounded-sm"
          >
            VIEW ALL PRODUCTS
          </motion.button>
        </div>
      </div>
    </section >
  );
};

export default ShopGrid;
