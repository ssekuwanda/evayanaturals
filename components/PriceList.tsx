import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

type PriceRow = {
  product: string;
  quantity: number;
  amount: number;
  total: number;
  category: string;
};

const allProducts: PriceRow[] = [
  // A
  { product: 'Amla oil', quantity: 8, amount: 55000, total: 440000, category: 'Oils & Butters' },
  { product: 'Amla powder', quantity: 3, amount: 65000, total: 195000, category: 'Herbal Powders' },
  { product: 'Ashwagandha', quantity: 4, amount: 75000, total: 300000, category: 'Herbal Supplements' },
  { product: 'Aloe Vera powder', quantity: 10, amount: 65000, total: 650000, category: 'Herbal Powders' },
  { product: 'Aloe Vera gel', quantity: 2, amount: 45000, total: 90000, category: 'Skincare' },
  { product: 'Activated charcoal', quantity: 7, amount: 75000, total: 525000, category: 'Wellness' },
  { product: 'Alfalfa powder', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Powders' },
  { product: 'African black soap', quantity: 4, amount: 50000, total: 200000, category: 'Skincare' },

  // B
  { product: 'Bone & joint', quantity: 10, amount: 75000, total: 750000, category: 'Herbal Supplements' },
  { product: 'Bitter melon', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Blueberry', quantity: 10, amount: 80000, total: 800000, category: 'Herbal Supplements' },
  { product: 'Batana oil bottle', quantity: 16, amount: 55000, total: 880000, category: 'Oils & Butters' },
  { product: 'Batana oil butter', quantity: 5, amount: 75000, total: 375000, category: 'Oils & Butters' },
  { product: 'Batana oil shampoo', quantity: 1, amount: 120000, total: 120000, category: 'Hair Care' },
  { product: 'Batana oil Honduran', quantity: 5, amount: 100000, total: 500000, category: 'Oils & Butters' },
  { product: 'Batana China', quantity: 98, amount: 100000, total: 980000, category: 'Oils & Butters' },
  { product: 'Beard oil', quantity: 4, amount: 55000, total: 220000, category: 'Hair Care' },
  { product: 'Beard balm', quantity: 5, amount: 60000, total: 300000, category: 'Hair Care' },
  { product: 'Black castor oil', quantity: 8, amount: 55000, total: 440000, category: 'Oils & Butters' },
  { product: 'Black seed oil', quantity: 6, amount: 35000, total: 210000, category: 'Oils & Butters' },
  { product: 'Body oil', quantity: 5, amount: 60000, total: 300000, category: 'Skincare' },
  { product: 'Biotin capsules', quantity: 2, amount: 65000, total: 130000, category: 'Herbal Supplements' },
  { product: 'Boric acid suppositories', quantity: 11, amount: 65000, total: 715000, category: 'Wellness' },
  { product: 'Blood cleanser', quantity: 7, amount: 65000, total: 455000, category: 'Herbal Supplements' },
  { product: 'Brahmi powder', quantity: 3, amount: 65000, total: 195000, category: 'Herbal Powders' },
  { product: 'Buchu leaf', quantity: 11, amount: 85000, total: 935000, category: 'Herbal Supplements' },
  { product: 'Burdock root', quantity: 10, amount: 80000, total: 800000, category: 'Herbal Supplements' },
  { product: 'Black cohosh', quantity: 10, amount: 80000, total: 800000, category: 'Herbal Supplements' },
  { product: 'Black maca', quantity: 7, amount: 75000, total: 525000, category: 'Herbal Supplements' },
  { product: 'Bentonite clay', quantity: 2, amount: 65000, total: 130000, category: 'Skincare' },
  { product: 'Bhringraj', quantity: 6, amount: 65000, total: 390000, category: 'Herbal Powders' },
  { product: 'Bladderwrack', quantity: 6, amount: 80000, total: 480000, category: 'Herbal Supplements' },

  // C
  { product: 'Chebe powder', quantity: 1, amount: 65000, total: 65000, category: 'Hair Care' },
  { product: 'Chlorella powder', quantity: 8, amount: 75000, total: 600000, category: 'Herbal Powders' },
  { product: 'Castor oil glass', quantity: 27, amount: 55000, total: 1485000, category: 'Oils & Butters' },
  { product: 'Castor oil pack', quantity: 10, amount: 130000, total: 1300000, category: 'Wellness' },
  { product: 'Chamomile', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Cayenne pepper', quantity: 8, amount: 65000, total: 520000, category: 'Spices & Herbs' },
  { product: 'Calendula oil', quantity: 6, amount: 60000, total: 360000, category: 'Oils & Butters' },
  { product: 'Celtic sea salt', quantity: 6, amount: 60000, total: 360000, category: 'Spices & Herbs' },
  { product: 'Celtic sea salt 50', quantity: 6, amount: 120000, total: 720000, category: 'Spices & Herbs' },
  { product: 'Cranberry powder', quantity: 11, amount: 80000, total: 880000, category: 'Herbal Powders' },
  { product: 'Chasteberry', quantity: 1, amount: 75000, total: 75000, category: 'Herbal Supplements' },
  { product: "Cat's claw", quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Carrot seed oil', quantity: 9, amount: 55000, total: 495000, category: 'Oils & Butters' },
  { product: 'Coconut oil', quantity: 3, amount: 55000, total: 165000, category: 'Oils & Butters' },
  { product: 'Chaga mushroom', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Cleavers', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Cinnamon', quantity: 11, amount: 75000, total: 825000, category: 'Spices & Herbs' },

  // D
  { product: 'Dong quai', quantity: 8, amount: 85000, total: 680000, category: 'Herbal Supplements' },
  { product: 'Dandelion root', quantity: 6, amount: 75000, total: 450000, category: 'Herbal Supplements' },

  // E
  { product: 'Elderberry', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },
  { product: 'Epsom salt', quantity: 10, amount: 45000, total: 450000, category: 'Wellness' },

  // F
  { product: 'Feverfew', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },
  { product: 'Fenugreek powder', quantity: 7, amount: 65000, total: 525000, category: 'Herbal Powders' },
  { product: 'Fenugreek oil', quantity: 7, amount: 55000, total: 385000, category: 'Oils & Butters' },
  { product: 'Fibroid tea', quantity: 6, amount: 65000, total: 390000, category: 'Herbal Teas' },
  { product: 'Facial oil', quantity: 8, amount: 60000, total: 480000, category: 'Skincare' },

  // G
  { product: 'Gotukola', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },
  { product: 'Ginseng', quantity: 3, amount: 80000, total: 240000, category: 'Herbal Supplements' },
  { product: 'Ginseng (Red)', quantity: 8, amount: 80000, total: 640000, category: 'Herbal Supplements' },
  { product: 'Ginkgo biloba', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },

  // H
  { product: 'Henna', quantity: 3, amount: 60000, total: 180000, category: 'Hair Care' },
  { product: 'Horny goat weed', quantity: 9, amount: 85000, total: 765000, category: 'Herbal Supplements' },
  { product: 'Hibiscus', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Hawthorn berry powder', quantity: 8, amount: 80000, total: 640000, category: 'Herbal Powders' },

  // I-L
  { product: "Lion's mane", quantity: 7, amount: 85000, total: 595000, category: 'Herbal Supplements' },
  { product: 'Licorice', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },
  { product: 'Indigo', quantity: 20, amount: 65000, total: 1300000, category: 'Hair Care' },
  { product: 'Inositol capsules', quantity: 4, amount: 65000, total: 260000, category: 'Herbal Supplements' },
  { product: 'Infection herb infusion', quantity: 2, amount: 65000, total: 130000, category: 'Herbal Teas' },
  { product: 'Ladies kashera', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },
  { product: 'Lavender essential oil', quantity: 1, amount: 55000, total: 55000, category: 'Oils & Butters' },

  // M
  { product: 'MSM', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Mulondo powder', quantity: 10, amount: 75000, total: 750000, category: 'Herbal Powders' },
  { product: 'Matcha', quantity: 6, amount: 80000, total: 480000, category: 'Herbal Teas' },
  { product: 'Marine collagen', quantity: 4, amount: 75000, total: 300000, category: 'Wellness' },
  { product: 'Mullein leaf', quantity: 5, amount: 75000, total: 375000, category: 'Herbal Supplements' },
  { product: 'Milk thistle', quantity: 3, amount: 65000, total: 195000, category: 'Herbal Supplements' },
  { product: 'Mother wort', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Marula oil', quantity: 15, amount: 60000, total: 900000, category: 'Oils & Butters' },
  { product: 'Moringa oil', quantity: 2, amount: 55000, total: 110000, category: 'Oils & Butters' },
  { product: 'Magnesium glycinate 120', quantity: 1, amount: 150000, total: 150000, category: 'Herbal Supplements' },
  { product: 'Magnesium glycinate', quantity: 4, amount: 75000, total: 300000, category: 'Herbal Supplements' },
  { product: 'Mugwort', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Marshmallow root', quantity: 10, amount: 75000, total: 750000, category: 'Herbal Supplements' },

  // N-O
  { product: 'Neem leaf powder', quantity: 6, amount: 75000, total: 450000, category: 'Herbal Powders' },
  { product: 'Omega 3 oil capsules', quantity: 5, amount: 65000, total: 325000, category: 'Herbal Supplements' },
  { product: 'Oregano oil', quantity: 4, amount: 65000, total: 260000, category: 'Oils & Butters' },

  // P
  { product: 'Psyllium husk', quantity: 3, amount: 80000, total: 240000, category: 'Herbal Supplements' },
  { product: 'Propolis extract', quantity: 10, amount: 80000, total: 800000, category: 'Wellness' },
  { product: 'Prunus africana', quantity: 6, amount: 75000, total: 450000, category: 'Herbal Supplements' },
  { product: 'Pressure tea', quantity: 2, amount: 65000, total: 130000, category: 'Herbal Teas' },
  { product: 'Papaya oil', quantity: 6, amount: 55000, total: 330000, category: 'Oils & Butters' },
  { product: 'Poke root', quantity: 7, amount: 80000, total: 560000, category: 'Herbal Supplements' },

  // Q-R
  { product: 'Qasil powder', quantity: 3, amount: 45000, total: 135000, category: 'Skincare' },
  { product: 'Qasil 500', quantity: 4, amount: 55000, total: 220000, category: 'Skincare' },
  { product: 'Red maca', quantity: 4, amount: 75000, total: 300000, category: 'Herbal Supplements' },
  { product: 'Raw probiotics', quantity: 2, amount: 75000, total: 150000, category: 'Wellness' },
  { product: 'Rubbed Oregano', quantity: 10, amount: 75000, total: 750000, category: 'Spices & Herbs' },
  { product: 'Red clover', quantity: 7, amount: 65000, total: 455000, category: 'Herbal Supplements' },
  { product: 'Rosehip', quantity: 3, amount: 35000, total: 105000, category: 'Herbal Supplements' },
  { product: 'Reishi mushroom', quantity: 11, amount: 80000, total: 880000, category: 'Herbal Supplements' },

  // S
  { product: 'Shilajit gummies', quantity: 66, amount: 150000, total: 9900000, category: 'Herbal Supplements' },
  { product: 'Shilajit resin', quantity: 4, amount: 150000, total: 600000, category: 'Herbal Supplements' },
  { product: 'Shilajit 8in1', quantity: 59, amount: 150000, total: 8850000, category: 'Herbal Supplements' },
  { product: 'Shilajit tablets', quantity: 1, amount: 110000, total: 110000, category: 'Herbal Supplements' },
  { product: 'Saffron', quantity: 3, amount: 65000, total: 195000, category: 'Spices & Herbs' },
  { product: 'Saw palmetto', quantity: 9, amount: 80000, total: 720000, category: 'Herbal Supplements' },
  { product: 'Stinging nettle powder extract', quantity: 6, amount: 65000, total: 390000, category: 'Herbal Powders' },
  { product: 'Shikakai powder', quantity: 9, amount: 55000, total: 490000, category: 'Hair Care' },
  { product: 'Shiitake', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Spearmint powder', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Powders' },
  { product: 'Spearmint oil', quantity: 10, amount: 75000, total: 750000, category: 'Oils & Butters' },
  { product: 'Shatavari powder', quantity: 8, amount: 85000, total: 680000, category: 'Herbal Powders' },
  { product: 'Sarsaparilla', quantity: 9, amount: 80000, total: 720000, category: 'Herbal Supplements' },
  { product: 'Shea butter kids', quantity: 4, amount: 35000, total: 140000, category: 'Skincare' },
  { product: 'Shea butter 250g', quantity: 7, amount: 35000, total: 245000, category: 'Skincare' },
  { product: 'Slippery elm extract', quantity: 4, amount: 75000, total: 300000, category: 'Herbal Supplements' },
  { product: 'Slippery elm', quantity: 8, amount: 75000, total: 600000, category: 'Herbal Supplements' },
  { product: 'Strawberry luxe balm', quantity: 5, amount: 60000, total: 300000, category: 'Skincare' },
  { product: 'Soursop', quantity: 4, amount: 65000, total: 260000, category: 'Herbal Supplements' },
  { product: 'Sea moss powder', quantity: 2, amount: 65000, total: 130000, category: 'Herbal Powders' },

  // T
  { product: 'Tag relief soap', quantity: 2, amount: 45000, total: 90000, category: 'Skincare' },
  { product: 'Tubal blockage tea', quantity: 4, amount: 65000, total: 260000, category: 'Herbal Teas' },
  { product: 'Turmeric face and body butter', quantity: 5, amount: 45000, total: 225000, category: 'Skincare' },
  { product: 'Turmeric face and body scrub', quantity: 13, amount: 45000, total: 585000, category: 'Skincare' },
  { product: 'Tongkat Ali', quantity: 3, amount: 75000, total: 225000, category: 'Herbal Supplements' },
  { product: 'Tribulus terestries', quantity: 4, amount: 85000, total: 340000, category: 'Herbal Supplements' },
  { product: 'Turmeric extract', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },
  { product: 'Turkey tail', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Turmeric soap', quantity: 1, amount: 45000, total: 45000, category: 'Skincare' },

  // U-V
  { product: 'Ulcer relief', quantity: 4, amount: 65000, total: 260000, category: 'Herbal Supplements' },
  { product: 'Valerian root', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },
  { product: 'Vitex seeds', quantity: 13, amount: 75000, total: 975000, category: 'Herbal Supplements' },
  { product: 'Vitamin C', quantity: 9, amount: 75000, total: 675000, category: 'Herbal Supplements' },

  // W-Y
  { product: 'Wormwood', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
  { product: 'Witch hazel', quantity: 1, amount: 45000, total: 45000, category: 'Skincare' },
  { product: 'Wild yam powder', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Powders' },
  { product: 'Wild yam capsules', quantity: 9, amount: 130000, total: 1170000, category: 'Herbal Supplements' },
  { product: 'Wet slippery pills', quantity: 13, amount: 150000, total: 1950000, category: 'Wellness' },
  { product: 'White willow bark', quantity: 10, amount: 75000, total: 750000, category: 'Herbal Supplements' },
  { product: 'Yoni detox pearls', quantity: 55, amount: 5000, total: 275000, category: 'Wellness' },
  { product: 'Yellow maca', quantity: 11, amount: 75000, total: 825000, category: 'Herbal Supplements' },
];

const PriceList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProducts.map(p => p.category))).sort();
    return ['All', ...cats];
  }, []);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearch = product.product.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="price-list" className="py-20 md:py-24 bg-gradient-to-b from-white via-[#FAF7F5] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-evaya-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-evaya-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-evaya-sage/40" />
            <img src="/assets/products/logo-leaf.png" alt="EVAYA Naturals leaf mark" className="w-8 opacity-60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-evaya-sage/40" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-evaya-charcoal leading-tight mb-4">
            Complete <span className="text-evaya-sage italic">Product Catalog</span>
          </h2>

          <p className="text-evaya-charcoal/70 text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            Browse our full inventory of premium natural products with live pricing in UGX. Quantity and totals removed for a clean price view.
          </p>

          <div className="flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-evaya-sage/20 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-evaya-charcoal/70">{allProducts.length} Products</span>
            </div>
            <div className="px-4 py-2 bg-white rounded-full border border-evaya-sage/20 shadow-sm">
              <span className="text-evaya-charcoal/70">{categories.length - 1} Categories</span>
            </div>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          {/* Search Input */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-evaya-sage/40">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-evaya-sage/20 focus:border-evaya-sage/40 bg-white/80 backdrop-blur-sm text-evaya-charcoal placeholder:text-evaya-charcoal/40 outline-none transition-all shadow-sm focus:shadow-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-evaya-charcoal/40 hover:text-evaya-charcoal transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-evaya-sage text-white shadow-md'
                    : 'bg-white/80 text-evaya-charcoal/70 border border-evaya-sage/20 hover:border-evaya-sage/40 hover:bg-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Counter */}
          <div className="text-center text-sm text-evaya-charcoal/60">
            Showing <span className="font-semibold text-evaya-sage">{filteredProducts.length}</span> of {allProducts.length} products
          </div>
        </div>

        {/* Price Table */}
        <div className="overflow-hidden rounded-3xl border-2 border-evaya-sage/20 bg-white shadow-xl">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-[2fr_1fr_1fr] gap-4 px-6 py-4 bg-gradient-to-r from-evaya-sage to-evaya-sage/90 text-white text-xs uppercase tracking-[0.18em] font-bold">
            <span>Product Name</span>
            <span>Category</span>
            <span className="text-right">Unit Price (UGX)</span>
          </div>

          {/* Table Body */}
          <div className="max-h-[600px] overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.product}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.5) }}
                  className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-3 md:gap-4 px-4 md:px-6 py-4 border-b last:border-b-0 border-evaya-sage/10 hover:bg-evaya-sage/5 transition-colors group"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-serif text-lg text-evaya-charcoal font-medium">{product.product}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-evaya-sage/10 text-evaya-sage">{product.category}</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 text-sm">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-evaya-charcoal/50 block">Price</span>
                        <span className="text-evaya-charcoal font-semibold">UGX {product.amount.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <span className="hidden md:block font-serif text-base text-evaya-charcoal font-medium group-hover:text-evaya-sage transition-colors">
                    {product.product}
                  </span>
                  <span className="hidden md:block text-xs px-3 py-1 rounded-full bg-evaya-sage/10 text-evaya-sage self-start whitespace-nowrap overflow-hidden text-ellipsis">
                    {product.category}
                  </span>
                  <span className="hidden md:block text-right text-sm text-evaya-charcoal/80">
                    UGX {product.amount.toLocaleString()}
                  </span>
                </motion.div>
              ))
            ) : (
              <div className="py-16 text-center">
                <svg className="w-16 h-16 mx-auto text-evaya-charcoal/20 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
                <p className="text-evaya-charcoal/60 text-lg mb-2">No products found</p>
                <p className="text-evaya-charcoal/40 text-sm">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </div>

        {/* Download/Export Options */}
        <div className="mt-8 text-center">
          <p className="text-xs text-evaya-charcoal/50 uppercase tracking-wider">
            Need a custom quote? <a href="#contact" className="text-evaya-sage hover:underline font-semibold">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
