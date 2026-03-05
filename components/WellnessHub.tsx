import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Leaf, Heart, Zap, Droplets, Moon, ArrowLeft } from 'lucide-react';

/* ─── Pillar data ─── */
const pillars = [
  {
    icon: '🌿',
    title: 'Nourish the Body',
    text: 'Feed your cells with essential nutrients from herbs, whole foods, and carefully sourced natural supplements that support every system in your body.',
    image: '/assets/product-2.jpg',
  },
  {
    icon: '⚖️',
    title: 'Balance Hormones',
    text: 'Adaptogenic herbs like Ashwagandha and Maca help your body respond to stress, regulate cortisol, and restore hormonal equilibrium naturally.',
    image: '/assets/product-3.jpg',
  },
  {
    icon: '🔥',
    title: 'Support Fertility & Vitality',
    text: 'Roots and minerals such as Tongkat Ali, Shilajit, and Red Maca nurture reproductive health, boost energy, and restore your natural drive.',
    image: '/assets/product-4.jpg',
  },
  {
    icon: '💧',
    title: 'Cleanse & Detoxify',
    text: 'Powerful herbs like Moringa, Dandelion Root, and Chlorella help remove toxins, support digestion, and keep your body feeling light and clear.',
    image: '/assets/product-5.jpg',
  },
  {
    icon: '🧘',
    title: 'Calm the Mind & Lift the Mood',
    text: 'Soothing botanicals like Chamomile, Lemon Balm, and Valerian Root promote deep relaxation, restful sleep, and emotional balance.',
    image: '/assets/product-6.jpg',
  },
];

/* ─── Supplement categories ─── */
const categories = [
  {
    number: 1,
    title: 'Female Hormone Balance, Fertility & Reproductive Health',
    color: 'from-pink-50 to-rose-50',
    border: 'border-rose-200',
    accent: 'text-rose-700',
    badge: 'bg-rose-100 text-rose-700',
    herbs: 'Shatavari, Maca (Red & Yellow), Chasteberry (Powder & Seeds), Dong Quai, Red Clover, Wild Yam, Motherwort, Sarsaparilla, Red Raspberry Leaf, Black Cohosh',
  },
  {
    number: 2,
    title: 'Male Hormonal & Fertility Support',
    color: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    accent: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
    herbs: 'Tongkat Ali, Black Maca, Tribulus Terrestris, Red Ginseng, Shilajit (Ultra, Resin, 8-in-1, Gummies), Ashwagandha, Horny Goat Weed, Saw Palmetto, Zinc Glycinate, Pumpkin Seeds',
  },
  {
    number: 3,
    title: 'Energy, Strength, Vitality & Brain Support',
    color: 'from-amber-50 to-yellow-50',
    border: 'border-amber-200',
    accent: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-700',
    herbs: 'Ginkgo Biloba, Lion\'s Mane, Ashwagandha, Reishi Mushroom, Shilajit, Ginseng, Gotu Kola',
  },
  {
    number: 4,
    title: 'Gut & Digestive Health',
    color: 'from-green-50 to-emerald-50',
    border: 'border-green-200',
    accent: 'text-green-700',
    badge: 'bg-green-100 text-green-700',
    herbs: 'Licorice, Slippery Elm, Fennel Seeds, Dandelion Root, Marshmallow Root, Cat\'s Claw, Chamomile, Garcinia Cambogia, Mullein Leaf',
  },
  {
    number: 5,
    title: 'Lymphatic & Detox Support',
    color: 'from-teal-50 to-cyan-50',
    border: 'border-teal-200',
    accent: 'text-teal-700',
    badge: 'bg-teal-100 text-teal-700',
    herbs: 'Dandelion Root, Burdock Root, Cleavers, Sarsaparilla, Licorice, Nettle Leaf, Milk Thistle, Chlorella, Spirulina, Blood Cleanser, Bentonite Clay, Activated Charcoal, Poke Root, Castor Oil Blend',
  },
  {
    number: 6,
    title: 'Weight & Metabolism Support',
    color: 'from-orange-50 to-amber-50',
    border: 'border-orange-200',
    accent: 'text-orange-700',
    badge: 'bg-orange-100 text-orange-700',
    herbs: 'Green Tea, Matcha, Cayenne Pepper, Garcinia Cambogia, L-Carnitine, Sea Moss, Spirulina, Chlorella, Dandelion, Cinnamon',
  },
  {
    number: 7,
    title: 'Immunity & Anti-Aging',
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
    accent: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-700',
    herbs: 'Elderberry, Vitamin C, Reishi Mushroom, Chaga Mushroom, Marine Collagen, Propolis Extract, Saffron, Shiitake Mushroom, Rosehip Oil',
  },
  {
    number: 8,
    title: 'Sleep & Anxiety Support',
    color: 'from-indigo-50 to-blue-50',
    border: 'border-indigo-200',
    accent: 'text-indigo-700',
    badge: 'bg-indigo-100 text-indigo-700',
    herbs: 'Valerian Root, Ashwagandha, Lavender Essential Oil, Reishi Mushroom, Chamomile, Peppermint, Gotu Kola',
  },
  {
    number: 9,
    title: 'Prostate & Male Wellness',
    color: 'from-sky-50 to-blue-50',
    border: 'border-sky-200',
    accent: 'text-sky-700',
    badge: 'bg-sky-100 text-sky-700',
    herbs: 'Prunus Africana, Saw Palmetto, Stinging Nettle, Pumpkin Seed, Maca Root, Ashwagandha, Zinc',
  },
  {
    number: 10,
    title: 'Anti-Cancer & Cellular Support',
    color: 'from-red-50 to-rose-50',
    border: 'border-red-200',
    accent: 'text-red-700',
    badge: 'bg-red-100 text-red-700',
    herbs: 'Soursop, Turmeric, Chaga Mushroom, Reishi Mushroom, Shiitake Mushroom, Spirulina, Chlorella',
  },
  {
    number: 11,
    title: 'Testosterone & Male Hormonal Support',
    color: 'from-slate-50 to-gray-100',
    border: 'border-slate-200',
    accent: 'text-slate-700',
    badge: 'bg-slate-100 text-slate-700',
    herbs: 'Tongkat Ali, Tribulus Terrestris, Black Maca, Ginseng, Shilajit, Horny Goat Weed, Fenugreek, Zinc, Ashwagandha',
  },
  {
    number: 12,
    title: 'Fibroid & Uterine Support',
    color: 'from-fuchsia-50 to-pink-50',
    border: 'border-fuchsia-200',
    accent: 'text-fuchsia-700',
    badge: 'bg-fuchsia-100 text-fuchsia-700',
    herbs: 'Fibroid Tea, Red Raspberry Leaf, Dong Quai, Shatavari, Wild Yam, Chasteberry (Seeds & Extract), Castor Oil',
  },
  {
    number: 13,
    title: 'Blood Sugar & Blood Pressure Support',
    color: 'from-red-50 to-orange-50',
    border: 'border-red-200',
    accent: 'text-red-700',
    badge: 'bg-red-100 text-red-700',
    herbs: 'Cinnamon, Hawthorn Berry, Turmeric, Berberine, Bitter Melon, Fenugreek, Buchu Leaf',
  },
  {
    number: 14,
    title: 'Joint, Bone & Arthritis Support',
    color: 'from-stone-50 to-amber-50',
    border: 'border-stone-200',
    accent: 'text-stone-700',
    badge: 'bg-stone-200 text-stone-700',
    herbs: 'MSM, Turmeric, Omega 3, Shilajit, Sea Moss, Ashwagandha, White Willow Bark, Cat\'s Claw, Celtic Sea Salt, Magnesium, Zinc',
  },
  {
    number: 15,
    title: 'Hair, Skin & Beauty Care',
    color: 'from-pink-50 to-fuchsia-50',
    border: 'border-pink-200',
    accent: 'text-pink-700',
    badge: 'bg-pink-100 text-pink-700',
    herbs: 'Chebe Powder, Amla Powder, Brahmi Powder, Shikakai Powder, Henna, Indigo, Aloe Vera Gel, Batana Oil, Castor Oil, Marula Oil, Carrot Seed Oil, Calendula Oil, Essential Oils, Shea Butter, Cocoa Butter, Beard Oil',
  },
];

/* ─── Active filter state for categories ─── */
const WellnessHub: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<number | null>(null);

  const displayed = activeFilter !== null
    ? categories.filter(c => c.number === activeFilter)
    : categories;

  return (
    <div className="bg-ev-cream min-h-screen pt-20">
      {/* ═══════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ev-greenDark via-ev-green to-ev-greenLight py-20 md:py-28">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img src="/assets/product-1.jpg" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-ev-greenDark/90 via-ev-green/85 to-ev-greenLight/80" />
        </div>

        {/* Leaf decorations */}
        <div className="absolute top-8 left-8 w-24 h-24 opacity-15 pointer-events-none leaf-float">
          <svg viewBox="0 0 100 100" fill="white"><path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/></svg>
        </div>
        <div className="absolute bottom-8 right-12 w-20 h-20 opacity-10 pointer-events-none leaf-float" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 100 100" fill="white" transform="rotate(120)"><path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/></svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-body mb-6 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Home
            </a>
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12 bg-white/30" />
              <Leaf size={20} className="text-ev-goldLight" />
              <div className="h-px w-12 bg-white/30" />
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              The Path to Wellness<br />
              <span className="font-accent italic text-ev-goldLight">Begins with Nature</span>
            </h1>
            <p className="font-body text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Wellness is a state of balance in mind, body, and spirit.
              At Evaya Naturals, we believe true wellness starts from within — through nourishment, rest, and nature's healing touch.
            </p>
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0 40C360 10 720 70 1080 40C1260 25 1380 35 1440 40V80H0V40Z" fill="#FBF8F1"/>
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FIVE PILLARS
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-ev-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-ev-green" />
              <span className="font-body text-xs uppercase tracking-[0.25em] text-ev-green font-semibold">Our Philosophy</span>
              <div className="h-[2px] w-8 bg-ev-green" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-ev-text">
              The Pillars of <span className="text-ev-green italic font-accent">Natural Wellness</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}
              >
                {/* Image - alternates left/right */}
                <div className={`relative rounded-3xl overflow-hidden shadow-lg h-64 sm:h-72 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ev-greenDark/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">{pillar.icon}</div>
                </div>

                {/* Text */}
                <div className={`space-y-4 py-4 ${i % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-ev-green text-white font-heading text-sm font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h3 className="font-heading text-2xl md:text-3xl text-ev-text">{pillar.title}</h3>
                  </div>
                  <p className="font-body text-base text-ev-muted leading-relaxed max-w-lg">
                    {pillar.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          QUOTE BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-ev-greenDark" />
        <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none">
          <img src="/assets/product-7.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ev-greenDark/40 via-ev-greenDark to-ev-greenDark" />
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-25 pointer-events-none">
          <img src="/assets/product-8.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-ev-greenDark/40 via-ev-greenDark to-ev-greenDark" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Leaf size={28} className="text-ev-goldLight mx-auto mb-5" />
            <blockquote className="font-accent italic text-2xl md:text-3xl lg:text-4xl text-white leading-snug mb-6">
              "At Evaya Naturals, wellness isn't a trend — it's a return to what your body already knows:
              <span className="text-ev-goldLight"> nature.</span>"
            </blockquote>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#DAA520">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SUPPLEMENT GUIDE
      ═══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-28 h-28 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="#2D5A27"><path d="M50 5C30 20 10 45 15 75c5 25 30 20 35 15C55 85 75 70 80 45 85 20 65 5 50 5z"/></svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-ev-green" />
              <Heart size={16} className="text-ev-green" />
              <div className="h-[2px] w-8 bg-ev-green" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-ev-text mb-4">
              Why Take <span className="text-ev-green italic font-accent">Supplements?</span>
            </h2>
            <p className="font-body text-lg text-ev-muted max-w-2xl mx-auto leading-relaxed">
              Nature provides targeted support for every system in your body. Find the right herbs for your wellness goals below.
            </p>
          </motion.div>

          {/* Quick filter pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveFilter(null)}
              className={`font-body text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                activeFilter === null
                  ? 'bg-ev-green text-white border-ev-green'
                  : 'bg-white text-ev-muted border-ev-border hover:border-ev-green hover:text-ev-green'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.number}
                onClick={() => setActiveFilter(activeFilter === cat.number ? null : cat.number)}
                className={`font-body text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                  activeFilter === cat.number
                    ? 'bg-ev-green text-white border-ev-green'
                    : 'bg-white text-ev-muted border-ev-border hover:border-ev-green hover:text-ev-green'
                }`}
              >
                {cat.number}. {cat.title.split(',')[0].split('&')[0].trim()}
              </button>
            ))}
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {displayed.map((cat, i) => (
              <motion.div
                key={cat.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.4 }}
                layout
                className={`bg-gradient-to-br ${cat.color} rounded-2xl border ${cat.border} p-6 hover:shadow-lg transition-all duration-300 group`}
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <span className={`flex-shrink-0 w-9 h-9 rounded-xl ${cat.badge} font-heading text-sm font-bold flex items-center justify-center`}>
                    {cat.number}
                  </span>
                  <h3 className={`font-heading text-lg font-semibold ${cat.accent} leading-tight`}>
                    {cat.title}
                  </h3>
                </div>

                {/* Divider */}
                <div className={`h-px ${cat.border} mb-4`} />

                {/* Herbs */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.herbs.split(', ').map((herb) => (
                    <span
                      key={herb}
                      className="inline-block font-body text-xs bg-white/80 text-ev-text px-2.5 py-1 rounded-full border border-white/60 shadow-sm"
                    >
                      {herb}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA STRIP
      ═══════════════════════════════════════════ */}
      <section className="py-14 bg-ev-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-ev-text mb-4">
              Ready to Start Your Wellness Journey?
            </h2>
            <p className="font-body text-base text-ev-muted mb-6 max-w-xl mx-auto">
              Browse our full collection of premium natural products or chat with us for personalised recommendations.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/shop"
                className="inline-flex items-center gap-2 bg-ev-green hover:bg-ev-greenDark text-white font-body font-semibold text-sm px-7 py-3.5 rounded-full transition-all shadow-lg shadow-ev-green/20 hover:shadow-xl"
              >
                Shop Products <ChevronRight size={16} />
              </a>
              <a
                href="https://wa.me/256773178790?text=Hi%20EVAYA%20Naturals%2C%20I%20need%20help%20choosing%20the%20right%20supplements"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm text-ev-text px-7 py-3.5 rounded-full border-2 border-ev-border hover:border-ev-green hover:text-ev-green transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Get Expert Advice
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WellnessHub;
