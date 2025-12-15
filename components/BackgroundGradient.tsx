import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGradient: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none select-none">
      {/* Base background color */}
      <div className="absolute inset-0 bg-evaya-beige transition-colors duration-1000" />
      
      {/* Subtle Noise Texture Overlay for high-end feel */}
      <div 
        className="absolute inset-0 opacity-[0.3] mix-blend-soft-light z-[10]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />

      {/* Moving Gradient Orbs */}
      <motion.div 
        className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-evaya-lightSage/30 blur-[100px] mix-blend-multiply"
        animate={{ 
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-evaya-terra/20 blur-[120px] mix-blend-multiply"
        animate={{ 
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute top-[40%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-evaya-sage/10 blur-[120px] mix-blend-multiply"
        animate={{ 
          x: [0, 40, -20, 0],
          y: [0, -40, 20, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className="absolute bottom-[20%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-orange-100/30 blur-[100px] mix-blend-multiply"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default BackgroundGradient;