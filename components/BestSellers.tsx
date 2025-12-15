import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Product } from '../types';
import { ChevronRight } from 'lucide-react';

const products: (Product & { badge: string })[] = [
  { id: 11, name: "Night Renewal Serum", category: "Face", price: 0, badge: "Best Seller", image: "/assets/product-11.jpg", description: "" },
  { id: 12, name: "Purifying Clay Cleanser", category: "Body", price: 0, badge: "Trending", image: "/assets/product-12.jpg", description: "" },
  { id: 13, name: "Vitamin C Radiance", category: "Face", price: 0, badge: "New & Loved", image: "/assets/product-13.jpg", description: "" },
  { id: 14, name: "Hydrating Rose Mist", category: "Toners", price: 0, badge: "Limited Ed.", image: "/assets/product-14.jpg", description: "" },
];

const ProductCard: React.FC<{ product: Product & { badge: string } }> = ({ product }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-72 md:w-80 group cursor-pointer clickable p-4"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden mb-4 aspect-[4/5] bg-[#F4F4F4] rounded-sm shadow-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 ease-out">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover mix-blend-multiply opacity-95"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        />
        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] uppercase tracking-[0.2em] bg-white/90 backdrop-blur text-evaya-charcoal px-2 py-1 rounded-sm border border-white/40"
          >
            {product.category}
          </motion.span>
          {product.badge && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[10px] uppercase tracking-[0.2em] bg-evaya-terra text-white px-2 py-1 rounded-sm font-medium"
            >
              {product.badge}
            </motion.span>
          )}
        </div>
        <motion.div
          className="absolute inset-x-0 bottom-0"
          initial={{ y: '100%' }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white/95 backdrop-blur text-evaya-charcoal py-4 text-[10px] tracking-[0.24em] uppercase font-medium hover:bg-evaya-charcoal hover:text-white transition-colors border-t border-white/30"
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </div>
      <div className="flex justify-between items-start gap-2 max-w-[90%] mx-auto text-center">
        <div className="flex-1">
          <h3 className="font-serif text-lg text-evaya-charcoal mb-1">{product.name}</h3>
          <p className="text-xs font-sans text-gray-500 uppercase tracking-wide">{product.category}</p>
        </div>
      </div>
    </motion.div>
  );
};

const BestSellers: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-evaya-cream/40 backdrop-blur-sm overflow-hidden border-y border-white/20">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-evaya-sage font-sans text-sm tracking-[0.24em] uppercase block mb-3">Curated Favorites</span>
            <h2 className="font-serif text-4xl md:text-5xl text-evaya-charcoal leading-tight">Best Sellers</h2>
            <p className="font-sans text-gray-600 mt-3 max-w-xl">
              Refillable, high-performance essentials that blend clinical results with sensorial textures. Chosen most by our community for daily rituals.
            </p>
          </motion.div>

          <button className="inline-flex items-center self-start md:self-auto text-evaya-charcoal font-sans text-[10px] tracking-[0.22em] font-medium border-b border-evaya-charcoal/20 pb-1 hover:border-evaya-charcoal transition-all group clickable">
            VIEW FULL COLLECTION <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto no-scrollbar space-x-2 px-1 sm:px-2 pb-12 snap-x">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
