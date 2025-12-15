import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Droplets, ShieldCheck, Sparkles } from 'lucide-react';

const heroBottle = '/assets/product-14.jpg';
const textureShot = 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?auto=format&fit=crop&w=700&q=80';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 160]);
  const y2 = useTransform(scrollY, [0, 500], [0, -120]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Background Animated Blobs (Liquid Motion) */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-evaya-sage/25 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-evaya-terra/25 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[20%] right-[10%] w-[35vw] h-[35vw] bg-evaya-lightSage/20 rounded-full blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 120, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        {/* Main Content */}
        <div className="space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white/40 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full text-evaya-charcoal font-sans tracking-[0.25em] text-[10px] uppercase shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-evaya-terra animate-pulse" />
            New Ritual Drop — Botanical Rescue Oil
          </motion.span>

          <motion.h1
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-evaya-charcoal leading-[1.05] tracking-tight"
          >
            Skin-first botanics,
            <br />
            <span className="italic text-evaya-sage font-light">for luminous rituals.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-sans text-evaya-charcoal/80 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            High-performance blends crafted with cold-pressed actives, clinically balanced for sensitive skin and packaged to elevate the counter it sits on.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-evaya-charcoal text-evaya-beige font-sans tracking-[0.2em] text-[11px] uppercase font-medium hover:bg-evaya-sage shadow-lg hover:shadow-xl transition-all duration-300 clickable rounded-sm"
            >
              Shop the ritual
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-evaya-charcoal text-evaya-charcoal font-sans tracking-[0.2em] text-[11px] uppercase font-medium hover:bg-evaya-charcoal hover:text-white transition-all duration-300 clickable rounded-sm bg-transparent"
            >
              Build my routine
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
            {[
              { icon: Sparkles, title: 'Clinical glow', copy: 'Visible radiance in 14 days' },
              { icon: Droplets, title: 'Barrier-safe', copy: 'Dermatologist tested on sensitive skin' },
              { icon: ShieldCheck, title: 'Consciously sourced', copy: 'Traceable botanicals, zero silicones' },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 rounded-sm border border-white/60 bg-white/60 backdrop-blur-md px-4 py-3 shadow-sm"
              >
                <item.icon size={18} className="text-evaya-sage mt-1" />
                <div>
                  <p className="font-serif text-lg text-evaya-charcoal">{item.title}</p>
                  <p className="font-sans text-sm text-gray-500">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <motion.div
            style={{ y: y1 }}
            className="relative overflow-hidden rounded-[2px] bg-white/30 backdrop-blur-2xl border border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.08)] p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/10 pointer-events-none" />
            <div className="relative rounded-sm overflow-hidden aspect-[3/4]">
              <img
                src={heroBottle}
                alt="Evaya ritual oil bottle"
                className="w-full h-full object-cover scale-105 mix-blend-multiply opacity-95"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-evaya-charcoal text-[10px] font-sans px-3 py-1.5 rounded-sm tracking-[0.2em] uppercase border border-evaya-sage/10">
                Refillable glass
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-serif text-2xl text-evaya-charcoal">Botanical Rescue Oil</p>
                <p className="font-sans text-sm text-gray-500">Marula, Cacay, Neroli • 30ml</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: y2 }}
            className="absolute -left-12 -bottom-16 w-48 h-48 rounded-full overflow-hidden border border-white/40 shadow-2xl hidden md:block"
          >
            <img src={textureShot} alt="Botanical texture" className="w-full h-full object-cover opacity-90" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-evaya-charcoal/50 animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
