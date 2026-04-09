import React, { useEffect, useRef, useState } from 'react';
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setCanScrollLeft(container.scrollLeft > 8);
    setCanScrollRight(container.scrollLeft < maxScrollLeft - 8);
  };

  const scroll = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const firstCard = container.querySelector<HTMLElement>('[data-goal-card]');
    const gap = window.innerWidth < 640 ? 16 : 20;
    const scrollAmount = firstCard ? firstCard.offsetWidth + gap : Math.round(container.clientWidth * 0.85);

    container.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();

    const handleScroll = () => updateScrollState();
    const handleResize = () => updateScrollState();

    container.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <div className="mb-2 flex items-center gap-2 sm:gap-3">
              <div className="h-[2px] w-8 bg-ev-green" />
              <span className="font-body text-xs uppercase tracking-[0.2em] text-ev-green font-semibold">Curated for You</span>
              <div className="h-[2px] w-8 bg-ev-green" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-ev-text leading-tight">
              Shop by <span className="text-ev-green italic font-accent">Wellness Goals</span>
            </h2>
          </div>
          <div className="flex items-center justify-between gap-3 sm:justify-end">
            <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ev-border text-ev-muted transition-all hover:border-ev-green hover:text-ev-green disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              disabled={!canScrollRight}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ev-border text-ev-muted transition-all hover:border-ev-green hover:text-ev-green disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRight size={18} />
            </button>
            </div>
            <a
              href="#best-sellers"
              className="inline-flex items-center gap-1 whitespace-nowrap font-body text-sm font-semibold text-ev-green hover:underline"
            >
              Shop All <ChevronRight size={14} />
            </a>
          </div>
        </div>

        {/* Cards */}
        <div
          id="wellness-goals-carousel"
          ref={scrollRef}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 scroll-smooth sm:mx-0 sm:gap-5 sm:px-0"
        >
          {goals.map((goal, i) => (
            <motion.a
              key={goal.title}
              href={goal.link}
              data-goal-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative w-[78vw] max-w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl border border-ev-border/60 bg-white shadow-sm transition-all duration-300 hover:shadow-xl sm:w-[220px]"
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
