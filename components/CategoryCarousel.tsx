import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Teapots & Brewers',
    image: '/assets/products/teapots.png',
    link: '#best-products',
    meta: 'Elevate your tea ritual with elegant brewing essentials',
    count: '12+ items'
  },
  {
    title: 'Flowers & Tea Balls',
    image: '/assets/products/flowers.png',
    link: '#best-products',
    meta: 'Handpicked blooms & infusers for perfect steeping',
    count: '18+ items'
  },
  {
    title: 'Spices & Herbs',
    image: '/assets/products/spices.png',
    link: '#spices',
    meta: 'Authentic flavors from farm to pantry',
    count: '25+ items'
  },
  {
    title: 'Herbal Powders',
    image: '/assets/products/alfafa-juice.png',
    link: '#best-products',
    meta: 'Nutrient-rich superfood blends for daily wellness',
    count: '15+ items'
  },
  {
    title: 'Nuts & Seeds',
    image: '/assets/products/nuts.png',
    link: '#spices',
    meta: 'Premium quality, packed with natural goodness',
    count: '10+ items'
  },
  {
    title: 'Dried Fruits',
    image: '/assets/products/dried-fruits.png',
    link: '#spices',
    meta: "Nature's candy, sun-dried & preservative-free",
    count: '8+ items'
  },
  {
    title: 'Herbal Oils',
    image: '/assets/products/avocado-oil.png',
    link: '#best-products',
    meta: 'Cold-pressed purity for cooking & wellness',
    count: '6+ items'
  },
];

const CategoryCarousel: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const distance = direction === 'left' ? -380 : 380;
    scrollRef.current.scrollBy({ left: distance, behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-24 md:py-32 bg-transparent relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-96 h-96 bg-evaya-sage/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-evaya-terra/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Decorative top border */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-evaya-sage/30" />
          <div className="mx-4 w-2 h-2 rounded-full bg-evaya-sage/40" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-evaya-sage/30" />
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FDFCFB] via-white to-[#F9F6F0] p-10 md:p-14 shadow-2xl shadow-evaya-sage/10 border border-white/50 backdrop-blur-sm">
          {/* Sophisticated gradient overlays */}
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-gradient-radial from-evaya-lightSage/15 via-evaya-lightSage/5 to-transparent blur-2xl pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-gradient-radial from-evaya-terra/12 via-evaya-terra/4 to-transparent blur-2xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-evaya-gold/8 via-evaya-gold/3 to-transparent blur-3xl pointer-events-none" />

          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              {/* Eyebrow with decorative line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-evaya-sage/40" />
                <p className="uppercase text-xs tracking-[0.32em] text-evaya-sage font-semibold">Shop by Category</p>
              </div>

              {/* Main heading */}
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl text-evaya-charcoal leading-[1.1] mb-6 bg-gradient-to-br from-evaya-charcoal to-evaya-sage/80 bg-clip-text">
                Discover Nature's<br/>
                <span className="text-evaya-sage italic">Finest Collection</span>
              </h2>

              {/* Description */}
              <p className="text-evaya-charcoal/75 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                Explore our thoughtfully curated selection of premium teas, artisanal spices, cold-pressed oils,
                and superfood powders—each handpicked to bring nature's luxury into your daily ritual.
              </p>

              {/* Premium badges */}
              <div className="flex flex-wrap gap-3 text-xs">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-evaya-sage/20 hover:border-evaya-sage/40 hover:bg-white transition-all shadow-sm flex items-center gap-2.5 group"
                >
                  <div className="w-6 h-6 rounded-full bg-evaya-sage/10 flex items-center justify-center group-hover:bg-evaya-sage/20 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-evaya-sage">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <span className="text-evaya-charcoal/80 font-medium uppercase tracking-wider">Same-Day Kampala</span>
                </motion.span>

                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-evaya-sage/20 hover:border-evaya-sage/40 hover:bg-white transition-all shadow-sm flex items-center gap-2.5 group"
                >
                  <div className="w-6 h-6 rounded-full bg-evaya-terra/10 flex items-center justify-center group-hover:bg-evaya-terra/20 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-evaya-terra">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <span className="text-evaya-charcoal/80 font-medium uppercase tracking-wider">100+ Products</span>
                </motion.span>

                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-evaya-sage/20 hover:border-evaya-sage/40 hover:bg-white transition-all shadow-sm flex items-center gap-2.5 group"
                >
                  <div className="w-6 h-6 rounded-full bg-evaya-gold/10 flex items-center justify-center group-hover:bg-evaya-gold/20 transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-evaya-gold">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
                    </svg>
                  </div>
                  <span className="text-evaya-charcoal/80 font-medium uppercase tracking-wider">Local Pricing</span>
                </motion.span>
              </div>
            </div>
            {/* Navigation Controls */}
            <div className="flex items-center gap-2 shrink-0 self-end lg:self-auto">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(85, 107, 93, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-evaya-sage/20 hover:border-evaya-sage/40 text-evaya-sage transition-all shadow-lg hover:shadow-xl overflow-hidden"
                onClick={() => scroll('left')}
                aria-label="Scroll categories left"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-evaya-sage/0 to-evaya-sage/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ChevronLeft size={22} strokeWidth={2.5} className="relative z-10 transition-transform group-hover:-translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(85, 107, 93, 0.1)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 rounded-2xl bg-white/90 backdrop-blur-sm border border-evaya-sage/20 hover:border-evaya-sage/40 text-evaya-sage transition-all shadow-lg hover:shadow-xl overflow-hidden"
                onClick={() => scroll('right')}
                aria-label="Scroll categories right"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-evaya-sage/0 to-evaya-sage/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <ChevronRight size={22} strokeWidth={2.5} className="relative z-10 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </div>

          {/* Category Cards */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar pb-6 scroll-smooth"
            >
              {categories.map((category, index) => (
                <motion.a
                  whileHover={{ y: -8 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                  viewport={{ once: true }}
                  key={category.title}
                  href={category.link}
                  className="group relative min-w-[230px] md:min-w-[250px] bg-white/95 backdrop-blur-sm rounded-3xl p-4 flex-shrink-0 overflow-hidden transition-all duration-500 hover:bg-white border border-white/60 shadow-xl hover:shadow-2xl"
                >
                  {/* Card background gradients */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FDFCFB] to-[#F9F6F0] opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-br from-evaya-sage/0 via-evaya-sage/0 to-evaya-sage/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <div className="relative z-10">
                    {/* Image container */}
                    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#FAF7F5] via-white to-[#F9F4EC] border-2 border-evaya-sage/10 group-hover:border-evaya-sage/25 flex items-center justify-center h-36 md:h-40 p-4 mb-5 transition-all duration-500 shadow-inner">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-gradient-to-br from-evaya-lightSage/5 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img
                          src={category.image}
                          alt={category.title}
                          className="relative object-contain w-full h-full max-h-36 md:max-h-40 group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      {/* Title */}
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-serif text-2xl text-evaya-charcoal group-hover:text-evaya-sage transition-colors duration-300 leading-tight">
                          {category.title}
                        </h3>
                        <div className="mt-1 p-1.5 rounded-full bg-evaya-sage/0 group-hover:bg-evaya-sage/10 transition-all duration-300">
                          <ChevronRight
                            size={20}
                            strokeWidth={2.5}
                            className="text-evaya-sage opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-evaya-charcoal/65 group-hover:text-evaya-charcoal/80 leading-relaxed transition-colors duration-300 min-h-[40px]">
                        {category.meta}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-gradient-to-r from-evaya-sage/20 via-evaya-sage/10 to-transparent" />

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-evaya-sage font-semibold">
                          <div className="w-1.5 h-1.5 rounded-full bg-evaya-sage/40 group-hover:bg-evaya-sage transition-colors" />
                          {category.count}
                        </span>
                        <span className="text-xs font-medium text-evaya-charcoal/40 group-hover:text-evaya-sage transition-colors duration-300 flex items-center gap-1">
                          Shop Now
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-0.5 transition-transform">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Scroll fade indicators */}
            <div className="absolute left-0 top-0 bottom-6 w-12 bg-gradient-to-r from-[#F9F6F0] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-[#F9F6F0] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCarousel;
