import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowLeft, Filter, Leaf } from 'lucide-react';

/* ─── Product type ─── */
interface Product {
  name: string;
  category: string;
  image?: string;
}

/* ─── Per-product image URLs (from freshgrain.net) ─── */
const productImages: Record<string, string> = {
  'Activated Charcoal': '/assets/shop/activated-charcoal.png',
  'Alfalfa Powder': '/assets/shop/alfalfa-powder.png',
  'Aloe Vera Gel': '/assets/shop/aloe-vera-gel.png',
  'Aloe Vera Powder': '/assets/shop/aloe-vera-powder.png',
  'Amla Oil': '/assets/shop/amla-oil.png',
  'Amla Powder': '/assets/shop/amla-powder.png',
  'Ashwagandha': '/assets/shop/ashwagandha.png',
  'Batana China': '/assets/shop/batana-china.png',
  'Batana Oil Bottle': '/assets/shop/batana-oil-bottle.png',
  'Batana Oil Butter': '/assets/shop/batana-oil-butter.png',
  'Batana Oil Honduran': '/assets/shop/batana-oil-honduran.png',
  'Batana Oil Shampoo': '/assets/shop/batana-oil-shampoo.png',
  'Bentonite Clay': '/assets/shop/bentonite-clay.png',
  'Biotin Capsules': '/assets/shop/biotin-capsules.png',
  'Bitter Melon': '/assets/shop/bitter-melon.png',
  'Black Castor Oil': '/assets/shop/black-castor-oil.webp',
  'Black Cohosh': '/assets/shop/black-cohosh.png',
  'Black Maca': '/assets/shop/black-maca.png',
  'Black Seed Oil': '/assets/shop/black-seed-oil.jpg',
  'Bladderwrack': '/assets/shop/bladderwrack.png',
  'Blueberry Extract': '/assets/shop/blueberry-extract.png',
  'Bone & Joint Support': '/assets/shop/bone-joint-support.png',
  'Boric Acid Suppositories': '/assets/shop/boric-acid-suppositories.png',
  'Buchu Leaf': '/assets/shop/buchu-leaf.png',
  'Burdock Root': '/assets/shop/burdock-root.png',
  'Calendula Oil': '/assets/shop/calendula-oil.png',
  'Castor Oil (Glass Bottle)': '/assets/shop/castor-oil-glass-bottle.png',
  'Castor Oil Pack': '/assets/shop/castor-oil-pack.webp',
  'Cayenne Pepper': '/assets/shop/cayenne-pepper.png',
  'Celtic Sea Salt': '/assets/shop/celtic-sea-salt.png',
  'Celtic Sea Salt (50g)': '/assets/shop/celtic-sea-salt-50g.png',
  'Chaga Mushroom': '/assets/shop/chaga-mushroom.png',
  'Chamomile': '/assets/shop/chamomile.png',
  'Chasteberry': '/assets/shop/chasteberry.png',
  'Chia Seeds': '/assets/shop/chia-seeds.png',
  'Chlorella Powder': '/assets/shop/chlorella-powder.png',
  'Cinnamon': '/assets/shop/cinnamon.png',
  'Coconut Oil': '/assets/shop/coconut-oil.png',
  'Cranberry Powder': '/assets/shop/cranberry-powder.png',
  'Dandelion Root': '/assets/shop/dandelion-root.png',
  'Dong Quai': '/assets/shop/dong-quai.png',
  'Elderberry': '/assets/shop/elderberry.png',
  'Epsom Salt': '/assets/shop/epsom-salt.png',
  'Fenugreek Powder': '/assets/shop/fenugreek-powder.png',
  'Fenugreek Seeds': '/assets/shop/fenugreek-seeds.png',
  'Flax Seeds': '/assets/shop/flax-seeds.png',
  'Ginkgo Biloba': '/assets/shop/ginkgo-biloba.png',
  'Ginseng': '/assets/shop/ginseng.png',
  'Hair Growth Oil (Mix)': '/assets/shop/hair-growth-oil-mix.jpg',
  'Hawthorn Berry Powder': '/assets/shop/hawthorn-berry-powder.png',
  'Hibiscus': '/assets/shop/hibiscus.png',
  'Horny Goat Weed': '/assets/shop/horny-goat-weed.png',
  'Inositol Capsules': '/assets/shop/inositol-capsules.png',
  'Lavender Essential Oil': '/assets/shop/lavender-essential-oil.png',
  'Licorice': '/assets/shop/licorice.jpg',
  'MSM': '/assets/shop/msm.png',
  'Magnesium Glycinate': '/assets/shop/magnesium-glycinate.png',
  'Magnesium Glycinate (120 caps)': '/assets/shop/magnesium-glycinate-120-caps.png',
  'Marine Collagen': '/assets/shop/marine-collagen.png',
  'Marshmallow Root': '/assets/shop/marshmallow-root.png',
  'Matcha': '/assets/shop/matcha.png',
  'Milk Thistle': '/assets/shop/milk-thistle.png',
  'Moringa Leaf Powder': '/assets/shop/moringa-leaf-powder.png',
  'Moringa Oil': '/assets/shop/moringa-oil.png',
  'Motherwort': '/assets/shop/motherwort.png',
  'Mugwort': '/assets/shop/mugwort.png',
  'Mullein Leaf': '/assets/shop/mullein-leaf.png',
  'Mulondo Powder': '/assets/shop/mulondo-powder.png',
  'Neem Leaf Powder': '/assets/shop/neem-leaf-powder.png',
  'Omega 3 Oil Capsules': '/assets/shop/omega-3-oil-capsules.png',
  'Oregano Oil': '/assets/shop/oregano-oil.png',
  'Pressure Tea': '/assets/shop/pressure-tea.webp',
  'Propolis Extract': '/assets/shop/propolis-extract.png',
  'Psyllium Husk': '/assets/shop/psyllium-husk.png',
  'Qasil (500g)': '/assets/shop/qasil-500g.png',
  'Qasil Powder': '/assets/shop/qasil-powder.png',
  'Raw Probiotics': '/assets/shop/raw-probiotics.jpg',
  'Red Clover': '/assets/shop/red-clover.png',
  'Red Ginseng': '/assets/shop/red-ginseng.png',
  'Red Maca': '/assets/shop/red-maca.png',
  'Red Raspberry Leaf': '/assets/shop/red-raspberry-leaf.png',
  'Reishi Mushroom': '/assets/shop/reishi-mushroom.png',
  'Rose Water': '/assets/shop/rose-water.png',
  'Rosehip Oil': '/assets/shop/rosehip-oil.png',
  'Rosemary': '/assets/shop/rosemary.png',
  'Rubbed Oregano': '/assets/shop/rubbed-oregano.png',
  'Saffron': '/assets/shop/saffron.png',
  'Sarsaparilla': '/assets/shop/sarsaparilla.png',
  'Saw Palmetto': '/assets/shop/saw-palmetto.png',
  'Sea Moss Powder': '/assets/shop/sea-moss-powder.jpg',
  'Shiitake Mushroom': '/assets/shop/shiitake-mushroom.png',
  'Shilajit 8-in-1': '/assets/shop/shilajit-8-in-1.webp',
  'Shilajit Gummies': '/assets/shop/shilajit-gummies.jpg',
  'Shilajit Resin': '/assets/shop/shilajit-resin.webp',
  'Shilajit Tablets': '/assets/shop/shilajit-tablets.webp',
  'Shilajit Ultra': '/assets/shop/shilajit-ultra.webp',
  'Slippery Elm': '/assets/shop/slippery-elm.png',
  'Slippery Elm Extract': '/assets/shop/slippery-elm-extract.png',
  'Soursop': '/assets/shop/soursop.png',
  'Spearmint Oil': '/assets/shop/spearmint-oil.png',
  'Spearmint Powder': '/assets/shop/spearmint-powder.png',
  'Spirulina': '/assets/shop/spirulina.png',
  'Stinging Nettle Powder Extract': '/assets/shop/stinging-nettle-powder-extract.png',
  'Tea Tree Oil': '/assets/shop/tea-tree-oil.png',
  'Tongkat Ali': '/assets/shop/tongkat-ali.png',
  'Tribulus Terrestris': '/assets/shop/tribulus-terrestris.png',
  'Turkey Tail': '/assets/shop/turkey-tail.png',
  'Turmeric & Aloe Vera Face Mask': '/assets/shop/turmeric-aloe-vera-face-mask.png',
  'Turmeric Extract': '/assets/shop/turmeric-extract.png',
  'Turmeric Face & Body Butter': '/assets/shop/turmeric-face-body-butter.png',
  'Turmeric Face & Body Scrub': '/assets/shop/turmeric-face-body-scrub.png',
  'Turmeric Face Wash': '/assets/shop/turmeric-face-wash.png',
  'Turmeric Soap': '/assets/shop/turmeric-soap.png',
  'Vitamin C': '/assets/shop/vitamin-c.png',
  'Wild Yam Capsules': '/assets/shop/wild-yam-capsules.png',
  'Wild Yam Powder': '/assets/shop/wild-yam-powder.png',
  'Yellow Maca': '/assets/products/logo-evaya.png',
};

/* ─── All products from stock taking document ─── */
const allProducts: Product[] = [
  // Oils & Butters
  { name: 'Amla Oil', category: 'Oils & Butters' },
  { name: 'Batana Oil Bottle', category: 'Oils & Butters' },
  { name: 'Batana Oil Butter', category: 'Oils & Butters' },
  { name: 'Batana Oil Honduran', category: 'Oils & Butters' },
  { name: 'Batana China', category: 'Oils & Butters' },
  { name: 'Black Castor Oil', category: 'Oils & Butters' },
  { name: 'Black Seed Oil', category: 'Oils & Butters' },
  { name: 'Body Oil', category: 'Oils & Butters' },
  { name: 'Calendula Oil', category: 'Oils & Butters' },
  { name: 'Carrot Seed Oil', category: 'Oils & Butters' },
  { name: 'Castor Oil (Glass Bottle)', category: 'Oils & Butters' },
  { name: 'Castor Oil Pack', category: 'Oils & Butters' },
  { name: 'Coconut Oil', category: 'Oils & Butters' },
  { name: 'Cocoa Butter (1kg)', category: 'Oils & Butters' },
  { name: 'Facial Oil', category: 'Oils & Butters' },
  { name: 'Fenugreek Oil', category: 'Oils & Butters' },
  { name: 'Lavender Essential Oil', category: 'Oils & Butters' },
  { name: 'Marula Oil', category: 'Oils & Butters' },
  { name: 'Moringa Oil', category: 'Oils & Butters' },
  { name: 'Oregano Oil', category: 'Oils & Butters' },
  { name: 'Papaya Oil', category: 'Oils & Butters' },
  { name: 'Rosehip Oil', category: 'Oils & Butters' },
  { name: 'Spearmint Oil', category: 'Oils & Butters' },
  { name: 'Tea Tree Oil', category: 'Oils & Butters' },
  { name: 'Shea Butter (Kids)', category: 'Oils & Butters' },
  { name: 'Shea Butter (250g)', category: 'Oils & Butters' },
  { name: 'Shea Butter (500g & 1kg)', category: 'Oils & Butters' },
  { name: 'Whipped Cocoa + Shea', category: 'Oils & Butters' },

  // Herbal Supplements
  { name: 'Ashwagandha', category: 'Herbal Supplements' },
  { name: 'Bone & Joint Support', category: 'Herbal Supplements' },
  { name: 'Bitter Melon', category: 'Herbal Supplements' },
  { name: 'Blueberry Extract', category: 'Herbal Supplements' },
  { name: 'Biotin Capsules', category: 'Herbal Supplements' },
  { name: 'Blood Cleanser', category: 'Herbal Supplements' },
  { name: 'Buchu Leaf', category: 'Herbal Supplements' },
  { name: 'Burdock Root', category: 'Herbal Supplements' },
  { name: 'Black Cohosh', category: 'Herbal Supplements' },
  { name: 'Black Maca', category: 'Herbal Supplements' },
  { name: 'Bladderwrack', category: 'Herbal Supplements' },
  { name: 'Chasteberry', category: 'Herbal Supplements' },
  { name: "Cat's Claw", category: 'Herbal Supplements' },
  { name: 'Chaga Mushroom', category: 'Herbal Supplements' },
  { name: 'Cleavers', category: 'Herbal Supplements' },
  { name: 'Chamomile', category: 'Herbal Supplements' },
  { name: 'Dong Quai', category: 'Herbal Supplements' },
  { name: 'Dandelion Root', category: 'Herbal Supplements' },
  { name: 'Elderberry', category: 'Herbal Supplements' },
  { name: 'Feverfew', category: 'Herbal Supplements' },
  { name: 'Gotu Kola', category: 'Herbal Supplements' },
  { name: 'Ginseng', category: 'Herbal Supplements' },
  { name: 'Red Ginseng', category: 'Herbal Supplements' },
  { name: 'Ginkgo Biloba', category: 'Herbal Supplements' },
  { name: 'Horny Goat Weed', category: 'Herbal Supplements' },
  { name: 'Hibiscus', category: 'Herbal Supplements' },
  { name: "Lion's Mane", category: 'Herbal Supplements' },
  { name: 'Licorice', category: 'Herbal Supplements' },
  { name: 'Inositol Capsules', category: 'Herbal Supplements' },
  { name: 'Ladies Kashera', category: 'Herbal Supplements' },
  { name: 'MSM', category: 'Herbal Supplements' },
  { name: 'Marine Collagen', category: 'Herbal Supplements' },
  { name: 'Mullein Leaf', category: 'Herbal Supplements' },
  { name: 'Milk Thistle', category: 'Herbal Supplements' },
  { name: 'Motherwort', category: 'Herbal Supplements' },
  { name: 'Magnesium Glycinate', category: 'Herbal Supplements' },
  { name: 'Magnesium Glycinate (120 caps)', category: 'Herbal Supplements' },
  { name: 'Mugwort', category: 'Herbal Supplements' },
  { name: 'Marshmallow Root', category: 'Herbal Supplements' },
  { name: 'Omega 3 Oil Capsules', category: 'Herbal Supplements' },
  { name: 'Psyllium Husk', category: 'Herbal Supplements' },
  { name: 'Propolis Extract', category: 'Herbal Supplements' },
  { name: 'Prunus Africana', category: 'Herbal Supplements' },
  { name: 'Poke Root', category: 'Herbal Supplements' },
  { name: 'Red Maca', category: 'Herbal Supplements' },
  { name: 'Raw Probiotics', category: 'Herbal Supplements' },
  { name: 'Red Clover', category: 'Herbal Supplements' },
  { name: 'Reishi Mushroom', category: 'Herbal Supplements' },
  { name: 'Red Raspberry Leaf', category: 'Herbal Supplements' },
  { name: 'Shilajit Ultra', category: 'Herbal Supplements' },
  { name: 'Shilajit Gummies', category: 'Herbal Supplements' },
  { name: 'Shilajit Resin', category: 'Herbal Supplements' },
  { name: 'Shilajit 8-in-1', category: 'Herbal Supplements' },
  { name: 'Shilajit Tablets', category: 'Herbal Supplements' },
  { name: 'Saw Palmetto', category: 'Herbal Supplements' },
  { name: 'Shiitake Mushroom', category: 'Herbal Supplements' },
  { name: 'Shatavari Powder', category: 'Herbal Supplements' },
  { name: 'Sarsaparilla', category: 'Herbal Supplements' },
  { name: 'Slippery Elm Extract', category: 'Herbal Supplements' },
  { name: 'Slippery Elm', category: 'Herbal Supplements' },
  { name: 'Soursop', category: 'Herbal Supplements' },
  { name: 'Tongkat Ali', category: 'Herbal Supplements' },
  { name: 'Tribulus Terrestris', category: 'Herbal Supplements' },
  { name: 'Turmeric Extract', category: 'Herbal Supplements' },
  { name: 'Turkey Tail', category: 'Herbal Supplements' },
  { name: 'Ulcer Relief', category: 'Herbal Supplements' },
  { name: 'Valerian Root', category: 'Herbal Supplements' },
  { name: 'Vitex Seeds', category: 'Herbal Supplements' },
  { name: 'Vitamin C', category: 'Herbal Supplements' },
  { name: 'Wormwood', category: 'Herbal Supplements' },
  { name: 'Wild Yam Powder', category: 'Herbal Supplements' },
  { name: 'Wild Yam Capsules', category: 'Herbal Supplements' },
  { name: 'White Willow Bark', category: 'Herbal Supplements' },
  { name: 'Yellow Maca', category: 'Herbal Supplements' },

  // Herbal Powders
  { name: 'Amla Powder', category: 'Herbal Powders' },
  { name: 'Aloe Vera Powder', category: 'Herbal Powders' },
  { name: 'Alfalfa Powder', category: 'Herbal Powders' },
  { name: 'Brahmi Powder', category: 'Herbal Powders' },
  { name: 'Bhringraj Powder', category: 'Herbal Powders' },
  { name: 'Chlorella Powder', category: 'Herbal Powders' },
  { name: 'Cranberry Powder', category: 'Herbal Powders' },
  { name: 'Fenugreek Powder', category: 'Herbal Powders' },
  { name: 'Hawthorn Berry Powder', category: 'Herbal Powders' },
  { name: 'Moringa Leaf Powder', category: 'Herbal Powders' },
  { name: 'Mulondo Powder', category: 'Herbal Powders' },
  { name: 'Neem Leaf Powder', category: 'Herbal Powders' },
  { name: 'Qasil Powder', category: 'Herbal Powders' },
  { name: 'Qasil (500g)', category: 'Herbal Powders' },
  { name: 'Sea Moss Powder', category: 'Herbal Powders' },
  { name: 'Spearmint Powder', category: 'Herbal Powders' },
  { name: 'Spirulina', category: 'Herbal Powders' },
  { name: 'Stinging Nettle Powder Extract', category: 'Herbal Powders' },

  // Spices & Herbs
  { name: 'Cayenne Pepper', category: 'Spices & Herbs' },
  { name: 'Celtic Sea Salt', category: 'Spices & Herbs' },
  { name: 'Celtic Sea Salt (50g)', category: 'Spices & Herbs' },
  { name: 'Cinnamon', category: 'Spices & Herbs' },
  { name: 'Rubbed Oregano', category: 'Spices & Herbs' },
  { name: 'Saffron', category: 'Spices & Herbs' },
  { name: 'Rosemary', category: 'Spices & Herbs' },

  // Herbal Teas
  { name: 'Fibroid Tea', category: 'Herbal Teas' },
  { name: 'Infection Herb Infusion', category: 'Herbal Teas' },
  { name: 'Matcha', category: 'Herbal Teas' },
  { name: 'Pressure Tea', category: 'Herbal Teas' },
  { name: 'Tubal Blockage Tea', category: 'Herbal Teas' },

  // Hair Care
  { name: 'Batana Oil Shampoo', category: 'Hair Care' },
  { name: 'Beard Oil', category: 'Hair Care' },
  { name: 'Beard Balm', category: 'Hair Care' },
  { name: 'Chebe Powder', category: 'Hair Care' },
  { name: 'Hair Growth Oil (Mix)', category: 'Hair Care' },
  { name: 'Henna', category: 'Hair Care' },
  { name: 'Indigo', category: 'Hair Care' },
  { name: 'Shikakai Powder', category: 'Hair Care' },

  // Skincare
  { name: 'African Black Soap', category: 'Skincare' },
  { name: 'Aloe Vera Gel', category: 'Skincare' },
  { name: 'Bentonite Clay', category: 'Skincare' },
  { name: 'Rose Water', category: 'Skincare' },
  { name: 'Shea Butter Soap', category: 'Skincare' },
  { name: 'Strawberry Luxe Balm', category: 'Skincare' },
  { name: 'Tag Relief Soap', category: 'Skincare' },
  { name: 'Tag Relief Oil', category: 'Skincare' },
  { name: 'Turmeric Face & Body Butter', category: 'Skincare' },
  { name: 'Turmeric Face Wash', category: 'Skincare' },
  { name: 'Turmeric & Aloe Vera Face Mask', category: 'Skincare' },
  { name: 'Turmeric Face & Body Scrub', category: 'Skincare' },
  { name: 'Turmeric Soap', category: 'Skincare' },
  { name: 'Witch Hazel', category: 'Skincare' },

  // Wellness
  { name: 'Activated Charcoal', category: 'Wellness' },
  { name: 'Boric Acid Suppositories', category: 'Wellness' },
  { name: 'Epsom Salt', category: 'Wellness' },
  { name: 'Wet Slippery Pills', category: 'Wellness' },
  { name: 'Yoni Detox Pearls', category: 'Wellness' },

  // Seeds & Superfoods
  { name: 'Chia Seeds', category: 'Seeds & Superfoods' },
  { name: 'Flax Seeds', category: 'Seeds & Superfoods' },
  { name: 'Fenugreek Seeds', category: 'Seeds & Superfoods' },
];

/* ─── Category icon map ─── */
const categoryIcons: Record<string, string> = {
  'Oils & Butters': '/assets/products/avocado-oil.png',
  'Herbal Supplements': '/assets/products/bee-pollen.png',
  'Herbal Powders': '/assets/products/alfafa-juice.png',
  'Spices & Herbs': '/assets/products/spices.png',
  'Herbal Teas': '/assets/products/teapots.png',
  'Hair Care': '/assets/products/avocado-oil.png',
  'Skincare': '/assets/products/honey.png',
  'Wellness': '/assets/products/flowers.png',
  'Seeds & Superfoods': '/assets/products/nuts.png',
};

const categoryColors: Record<string, string> = {
  'Oils & Butters': 'bg-amber-50 text-amber-700 border-amber-200',
  'Herbal Supplements': 'bg-green-50 text-green-700 border-green-200',
  'Herbal Powders': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Spices & Herbs': 'bg-orange-50 text-orange-700 border-orange-200',
  'Herbal Teas': 'bg-teal-50 text-teal-700 border-teal-200',
  'Hair Care': 'bg-purple-50 text-purple-700 border-purple-200',
  'Skincare': 'bg-pink-50 text-pink-700 border-pink-200',
  'Wellness': 'bg-blue-50 text-blue-700 border-blue-200',
  'Seeds & Superfoods': 'bg-lime-50 text-lime-700 border-lime-200',
};

const ShopPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');
    if (q) {
      setSearchQuery(q);
      setSelectedCategory('All');
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (searchQuery.trim()) {
      params.set('q', searchQuery.trim());
    } else {
      params.delete('q');
    }
    const next = params.toString();
    const target = `/shop${next ? `?${next}` : ''}`;
    if (`${window.location.pathname}${window.location.search}` !== target) {
      window.history.replaceState({}, '', target);
    }
  }, [searchQuery]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProducts.map(p => p.category))).sort();
    return ['All', ...cats];
  }, []);

  const filtered = useMemo(() => {
    return allProducts
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
        return matchesSearch && matchesCat;
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedCategory]);

  // Group by category (not alphabetical letter)
  const grouped = useMemo(() => {
    const map: Record<string, Product[]> = {};
    for (const p of filtered) {
      if (!map[p.category]) map[p.category] = [];
      map[p.category].push(p);
    }

    for (const category of Object.keys(map)) {
      map[category].sort((a, b) => a.name.localeCompare(b.name));
    }

    const orderedCategories = categories.filter((c) => c !== 'All');
    return orderedCategories
      .filter((category) => map[category]?.length)
      .map((category) => [category, map[category]] as [string, Product[]]);
  }, [filtered, categories]);

  return (
    <div className="bg-ev-cream min-h-screen pt-20">
      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ev-greenDark via-ev-green to-ev-greenLight py-16 md:py-20">
        <div className="absolute inset-0">
          <img src="/assets/product-10.jpg" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-ev-greenDark/90 via-ev-green/85 to-ev-greenLight/80" />
        </div>

        {/* Leaves */}
        <div className="absolute top-6 left-6 w-20 h-20 opacity-15 pointer-events-none leaf-float">
          <svg viewBox="0 0 100 100" fill="white"><path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/></svg>
        </div>
        <div className="absolute bottom-6 right-8 w-16 h-16 opacity-10 pointer-events-none leaf-float" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 100 100" fill="white" transform="rotate(90)"><path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/></svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <a href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-5 transition-colors">
              <ArrowLeft size={16} /> Back to Home
            </a>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-white/30" />
              <Leaf size={18} className="text-ev-goldLight" />
              <div className="h-px w-10 bg-white/30" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl text-white leading-tight mb-4">
              Our Complete <span className="font-accent italic text-ev-goldLight">Product Collection</span>
            </h1>
            <p className="font-body text-lg text-white/80 max-w-xl mx-auto mb-3">
              Browse {allProducts.length}+ premium natural products — herbs, oils, powders, teas, and wellness essentials.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-full text-white/80 border border-white/15">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                {allProducts.length} Products
              </span>
              <span className="px-3 py-1.5 bg-white/10 rounded-full text-white/80 border border-white/15">
                {categories.length - 1} Categories
              </span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 30C360 10 720 50 1080 30C1260 20 1380 30 1440 30V60H0V30Z" fill="#FBF8F1"/>
          </svg>
        </div>
      </section>

      {/* ═══ SEARCH & FILTERS ═══ */}
      <section className="py-8 bg-ev-cream sticky top-[52px] z-30 border-b border-ev-border/40 backdrop-blur-sm bg-ev-cream/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-5">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ev-muted/50" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products by name..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl border-2 border-ev-border focus:border-ev-green bg-white text-ev-text placeholder:text-ev-muted/50 outline-none transition-all shadow-sm focus:shadow-md font-body text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-ev-muted/50 hover:text-ev-text transition-colors"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            <Filter size={16} className="text-ev-muted self-center mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-body text-xs font-semibold px-3.5 py-2 rounded-full border transition-all ${
                  selectedCategory === cat
                    ? 'bg-ev-green text-white border-ev-green shadow-sm'
                    : 'bg-white text-ev-muted border-ev-border hover:border-ev-green hover:text-ev-green'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result count */}
          <p className="text-center mt-3 font-body text-xs text-ev-muted">
            Showing <span className="font-semibold text-ev-green">{filtered.length}</span> of {allProducts.length} products
          </p>
        </div>
      </section>

      {/* ═══ PRODUCT GRID ═══ */}
      <section className="py-10 md:py-14 bg-ev-cream relative overflow-hidden">
        {/* Background deco */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-ev-green/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-ev-gold/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Category summary cards (when showing all) */}
          {selectedCategory === 'All' && !searchQuery && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
              {categories.filter(c => c !== 'All').map((cat, i) => {
                const count = allProducts.filter(p => p.category === cat).length;
                return (
                  <motion.button
                    key={cat}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    onClick={() => setSelectedCategory(cat)}
                    className="group bg-white rounded-2xl border border-ev-border/60 p-4 text-left hover:shadow-lg hover:border-ev-green/30 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-ev-beige flex items-center justify-center mb-3 overflow-hidden">
                      <img src={categoryIcons[cat]} alt="" className="w-7 h-7 object-contain" />
                    </div>
                    <p className="font-heading text-sm font-semibold text-ev-text group-hover:text-ev-green transition-colors leading-tight mb-1">
                      {cat}
                    </p>
                    <p className="font-body text-xs text-ev-muted">{count} products</p>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* Products by letter group */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={selectedCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {grouped.map(([category, products]) => (
                  <div key={category} className="mb-8">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-xl bg-ev-beige border border-ev-border/50 flex items-center justify-center overflow-hidden shadow-sm">
                        <img src={categoryIcons[category]} alt="" className="w-6 h-6 object-contain" />
                      </span>
                      <span className="font-heading text-base text-ev-text">{category}</span>
                      <div className="h-px flex-1 bg-ev-border/60" />
                      <span className="font-body text-xs text-ev-muted">{products.length} items</span>
                    </div>

                    {/* Product cards grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                      {products.map((product, idx) => {
                        const logoFallback = '/assets/products/logo-evaya.png';
                        const imageSrc = productImages[product.name] || logoFallback;
                        const hasSpecificImage = !!productImages[product.name] && productImages[product.name] !== logoFallback;

                        return (
                          <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: Math.min(idx * 0.02, 0.2), duration: 0.3 }}
                            className="group bg-white rounded-xl border border-ev-border/50 p-4 hover:shadow-md hover:border-ev-green/30 transition-all duration-200 cursor-default"
                          >
                          {/* Product image */}
                          <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-ev-cream to-ev-beige flex items-center justify-center mb-3 overflow-hidden">
                            <img
                              src={imageSrc}
                              alt={product.name}
                              onError={(e) => {
                                if (!e.currentTarget.src.endsWith(logoFallback)) {
                                  e.currentTarget.src = logoFallback;
                                }
                              }}
                              className={`object-contain group-hover:scale-110 transition-all duration-300 ${
                                hasSpecificImage
                                  ? 'w-full h-full object-cover opacity-90 group-hover:opacity-100'
                                  : 'w-3/4 h-3/4 opacity-70 group-hover:opacity-100'
                              }`}
                              loading="lazy"
                            />
                          </div>
                          {/* Name */}
                          <h3 className="font-heading text-sm font-medium text-ev-text leading-tight mb-1.5 group-hover:text-ev-green transition-colors">
                            {product.name}
                          </h3>
                          {/* Category badge */}
                          <span className={`inline-block font-body text-[10px] font-semibold px-2 py-0.5 rounded-full border ${categoryColors[product.category]}`}>
                            {product.category}
                          </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Search size={48} className="mx-auto text-ev-muted/20 mb-4" />
                <p className="font-heading text-xl text-ev-text mb-2">No products found</p>
                <p className="font-body text-sm text-ev-muted">Try adjusting your search or filter</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-12 bg-white border-t border-ev-border/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl text-ev-text mb-3">Can't Find What You're Looking For?</h2>
          <p className="font-body text-sm text-ev-muted mb-5">
            We regularly update our inventory. Contact us for custom orders and wholesale pricing.
          </p>
          <a
            href="https://wa.me/256773178790?text=Hi%20EVAYA%20Naturals%2C%20I%27m%20looking%20for%20a%20specific%20product"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE57] text-white font-body font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-lg shadow-[#25D366]/20"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ask Us on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
