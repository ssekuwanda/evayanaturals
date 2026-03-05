import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const goals = [
  {
    title: 'Digestion &\nGut Health',
    image: '/assets/products/honey.png',
    bg: '/assets/product-2.jpg',
    rating: 4.8,
    link: '#best-sellers',
  },
  {
    title: 'Energy\n& Vitality',
    image: '/assets/products/bee-pollen.png',
    bg: '/assets/product-3.jpg',
    rating: 4.7,
    link: '#best-sellers',
  },
  {
    title: 'Skin &\nHair Care',
    image: '/assets/products/avocado-oil.png',
    bg: '/assets/product-4.jpg',
    rating: 4.9,
    link: '#best-sellers',
  },
  {
    title: 'Immunity\nBoost',
    image: '/assets/products/spices.png',
    bg: '/assets/product-5.jpg',
    rating: 4.8,
    link: '#best-sellers',
  },
  {
    title: 'Stress\n& Sleep',
    image: '/assets/products/flowers.png',
    bg: '/assets/product-6.jpg',
    rating: 4.6,
    link: '#best-sellers',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill={i < Math.floor(rating) ? '#DAA520' : '#E0D5C0'}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const WellnessGoals: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <section id="wellness-goals" className="py-16 md:py-20 bg-ev-cream relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute -right-10 top-10 w-32 h-32 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 100 100" fill="#2D5A27">
          <path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-[2px] w-8 bg-ev-green" />
              <span className="font-body text-xs uppercase tracking-[0.2em] text-ev-green font-semibold">Curated for You</span>
              <div className="h-[2px] w-8 bg-ev-green" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl text-ev-text">
              Shop by <span className="text-ev-green italic font-accent">Wellness Goal</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="hidden sm:flex w-10 h-10 rounded-full border-2 border-ev-border hover:border-ev-green items-center justify-center text-ev-muted hover:text-ev-green transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="hidden sm:flex w-10 h-10 rounded-full border-2 border-ev-border hover:border-ev-green items-center justify-center text-ev-muted hover:text-ev-green transition-all"
            >
              <ChevronRight size={18} />
            </button>
            <a
              href="#best-sellers"
              className="inline-flex items-center gap-1 font-body text-sm font-semibold text-ev-green hover:underline ml-2"
            >
              Shop All <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto no-scrollbar pb-4 scroll-smooth"
        >
          {goals.map((goal, i) => (
            <motion.a
              key={goal.title}
              href={goal.link}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative flex-shrink-0 w-[200px] sm:w-[220px] bg-white rounded-2xl overflow-hidden border border-ev-border/60 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-36 overflow-hidden">
                <img
                  src={goal.bg}
                  alt={goal.title.replace('\n', ' ')}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Floating product image */}
                <div className="absolute bottom-2 right-2 w-14 h-14 rounded-xl bg-white/90 backdrop-blur-sm p-1.5 shadow-lg border border-white/80">
                  <img src={goal.image} alt="" className="w-full h-full object-contain" />
                </div>
              </div>
              {/* Content */}
              <div className="p-4 space-y-2">
                <h3 className="font-heading text-base font-semibold text-ev-text leading-tight whitespace-pre-line group-hover:text-ev-green transition-colors">
                  {goal.title}
                </h3>
                <StarRating rating={goal.rating} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessGoals;
