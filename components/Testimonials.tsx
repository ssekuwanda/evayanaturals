import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Kampala',
    rating: 5,
    text: 'The Ashwagandha and Moringa Powder have completely changed my energy levels. Best natural products in Uganda!',
  },
  {
    name: 'David K.',
    location: 'Entebbe',
    rating: 5,
    text: 'Fast delivery and amazing quality. The spices are so fresh and aromatic. My kitchen has never smelled better.',
  },
  {
    name: 'Grace N.',
    location: 'Kampala',
    rating: 5,
    text: "I've been using their Batana Oil for 3 months. My hair has never been healthier. Highly recommend EVAYA!",
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? '#DAA520' : '#E0D5C0'}
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-ev-green/3 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-ev-gold/5 rounded-full blur-3xl" />
      </div>

      {/* Leaf */}
      <div className="absolute top-6 right-16 w-14 h-14 opacity-[0.07] pointer-events-none leaf-float" style={{ animationDelay: '1s' }}>
        <svg viewBox="0 0 100 100" fill="#2D5A27"><path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/></svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-6 bg-ev-green" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            <h2 className="font-heading text-3xl md:text-4xl text-ev-text">
              What Our Customers Say
            </h2>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2D5A27" strokeWidth="2"><path d="M19 12H5"/></svg>
            <div className="h-[2px] w-6 bg-ev-green" />
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="bg-ev-cream rounded-2xl p-6 border border-ev-border/60 shadow-sm hover:shadow-md transition-shadow relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-ev-green/15">
                <Quote size={32} />
              </div>

              <StarRating rating={review.rating} />
              <p className="font-body text-base text-ev-text mt-4 mb-5 leading-relaxed italic">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-ev-border/40">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-ev-green/10 flex items-center justify-center">
                  <span className="font-heading text-sm font-bold text-ev-green">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-ev-text">{review.name}</p>
                  <p className="font-body text-xs text-ev-muted">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
