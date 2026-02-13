import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="bg-white pt-28 pb-16" id="top">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-evaya-lightSage/30 blur-2xl" />
          <div className="absolute -right-8 -bottom-10 w-36 h-36 rounded-full bg-evaya-terra/20 blur-2xl" />
          <div className="relative rounded-[28px] overflow-hidden bg-[#F8F5F0] border border-[#E6DED4] soft-card">
            <img
              src="/assets/products/spices.png"
              alt="Assortment of EVAYA Naturals spices"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <img src="/assets/products/logo-leaf.png" alt="EVAYA Naturals leaf" className="w-12 h-auto" />
          <p className="uppercase tracking-[0.22em] text-sm text-evaya-sage font-semibold">
            Best Quality Products
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-evaya-charcoal leading-tight">
            Join the Health reform
          </h1>
          <div className="h-[2px] w-16 bg-[var(--secondary)]" />
          <blockquote className="font-serif text-2xl md:text-3xl text-evaya-charcoal/90 italic leading-snug">
            “Health is a treasure. Of all temporal possessions it is the most precious.”
          </blockquote>
          <p className="font-sans text-xs uppercase tracking-[0.28em] text-evaya-sage">
            ― Ellen G. White, Counsels on Diet and Foods
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#categories"
              className="btn-primary rounded-full px-6 py-3 text-sm font-semibold tracking-wide shadow-sm hover:shadow-lg transition-all"
            >
              Shop by Category
            </a>
            <a
              href="#best-products"
              className="px-6 py-3 rounded-full border border-evaya-charcoal/20 text-evaya-charcoal font-semibold text-sm tracking-wide hover:border-evaya-charcoal hover:shadow-md transition-all bg-white"
            >
              View Products
            </a>
          </div>
          <div className="flex flex-wrap gap-6 pt-2 text-sm text-evaya-charcoal/80">
            <div>
              <span className="font-semibold text-evaya-charcoal">Huge Savings</span>
              <p className="text-evaya-charcoal/70">At the lowest prices</p>
            </div>
            <div>
              <span className="font-semibold text-evaya-charcoal">Best Spices</span>
              <p className="text-evaya-charcoal/70">Plant-based, organic picks</p>
            </div>
            <div>
              <span className="font-semibold text-evaya-charcoal">Fast Delivery</span>
              <p className="text-evaya-charcoal/70">Right to your doorstep</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
