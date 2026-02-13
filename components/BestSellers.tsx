import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Product } from '../types';
import { ChevronRight } from 'lucide-react';

type FeaturedProduct = Product & { range: string; badge?: string };

const products: FeaturedProduct[] = [
  { id: 1, name: "ALFALFA POWDER", category: "Herbal Powders", price: 75000, range: "UGX 75,000", badge: "Sale!", image: "/assets/products/alfafa-juice.png", description: "" },
  { id: 2, name: "AVOCADO OIL", category: "Herbal Oils", price: 55000, range: "UGX 55,000", badge: "Sale!", image: "/assets/products/avocado-oil.png", description: "" },
  { id: 3, name: "PURE HONEY", category: "Sweeteners", price: 45000, range: "UGX 45,000", badge: "New", image: "/assets/products/honey.png", description: "" },
  { id: 4, name: "BEE POLLEN POWDER", category: "Supplements", price: 80000, range: "UGX 80,000", badge: "Popular", image: "/assets/products/bee-pollen.png", description: "" },
];

const ProductCard: React.FC<{ product: FeaturedProduct }> = ({ product }) => {
  return (
    <motion.div
      className="group bg-white border border-[#E8DFD4] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
    >
      <div className="relative bg-[#F9F4EC] flex items-center justify-center p-6">
        <img src={product.image} alt={product.name} className="h-48 object-contain" />
        {product.badge && (
          <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.18em] bg-evaya-sage text-white px-3 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5 space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-evaya-sage font-semibold">{product.category}</p>
        <h3 className="font-serif text-xl text-evaya-charcoal leading-tight">{product.name}</h3>
        <p className="text-sm text-evaya-charcoal/80 font-semibold">{product.range}</p>
        <button className="mt-2 w-full bg-evaya-charcoal text-white py-2.5 rounded-full text-xs tracking-[0.18em] font-semibold hover:bg-black transition-colors">
          Add to basket
        </button>
      </div>
    </motion.div>
  );
};

const BestSellers: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="best-products" className="py-16 bg-[#F8F5F0]">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-evaya-sage font-sans text-xs tracking-[0.28em] uppercase block mb-2">EVAYA Naturals picks</span>
            <h2 className="font-serif text-3xl md:text-4xl text-evaya-charcoal leading-tight">Best Selling Products</h2>
            <p className="font-sans text-evaya-charcoal/70 mt-2 max-w-xl">
              Hero items from EVAYA Naturals with UGX pricing pulled from your price list (sample).
            </p>
          </motion.div>

          <button className="inline-flex items-center self-start md:self-auto text-evaya-charcoal font-sans text-[11px] tracking-[0.18em] font-semibold border-b border-evaya-charcoal/30 pb-1 hover:border-evaya-charcoal transition-all group clickable">
            VIEW ALL PRODUCTS <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
