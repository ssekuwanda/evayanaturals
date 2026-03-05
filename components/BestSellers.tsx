import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  badge?: string;
  badgeColor?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Moringa Powder',
    price: 75000,
    image: '/assets/products/alfafa-juice.png',
    rating: 4.9,
    badge: 'Tag6',
    badgeColor: 'bg-ev-gold',
  },
  {
    id: 2,
    name: 'Avocado Oil',
    price: 55000,
    image: '/assets/products/avocado-oil.png',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Turmeric Ginger Tea',
    price: 45000,
    image: '/assets/products/teapots.png',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Ashwagandha',
    price: 80000,
    image: '/assets/products/bee-pollen.png',
    rating: 4.8,
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill={i < Math.floor(rating) ? '#DAA520' : '#E0D5C0'}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
    <span className="font-body text-xs text-ev-muted ml-1">{rating}</span>
  </div>
);

const BestSellers: React.FC = () => {
  return (
    <section id="best-sellers" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Leaf decoration */}
      <div className="absolute -left-8 bottom-20 w-24 h-24 opacity-[0.05] pointer-events-none rotate-45">
        <svg viewBox="0 0 100 100" fill="#2D5A27">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-6 bg-ev-green" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            <h2 className="font-heading text-3xl md:text-4xl text-ev-text">Best Sellers</h2>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="2"><path d="M19 12H5"/></svg>
            <div className="h-[2px] w-6 bg-ev-green" />
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 font-body text-sm font-semibold text-ev-text border border-ev-border rounded-full px-5 py-2 hover:border-ev-green hover:text-ev-green transition-all"
          >
            View All <ChevronRight size={14} />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl border border-ev-border/70 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative bg-gradient-to-br from-ev-cream to-ev-beige p-4 sm:p-6 flex items-center justify-center h-40 sm:h-48">
                {product.badge && (
                  <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm`}>
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-28 sm:h-36 object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="font-heading text-base sm:text-lg font-semibold text-ev-text leading-tight group-hover:text-ev-green transition-colors">
                  {product.name}
                </h3>
                <p className="font-body text-sm font-bold text-ev-text">
                  UGX {product.price.toLocaleString()}
                </p>
                <StarRating rating={product.rating} />
                <button className="w-full mt-2 font-body text-sm font-semibold py-2.5 rounded-lg border-2 border-ev-green text-ev-green hover:bg-ev-green hover:text-white transition-all duration-200">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
