import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [imgSrc, setImgSrc] = useState('/hero_editorial_luxury.jpg');

  const handleImageError = () => {
    // Fallback to category_luxury.jpg if generated image fails to load
    setImgSrc('/category_luxury.jpg');
  };

  return (
    <section className="w-full relative bg-gradient-to-b from-[#1E0307] via-[#35080F] to-[#1E0307] text-[#FAF5F0] overflow-hidden min-h-[85vh] md:min-h-[90vh] py-12 sm:py-16 md:py-20 lg:py-24 px-4 flex flex-col justify-center items-center">
      {/* Background Decorative Glows */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[750px] md:w-[900px] h-[500px] sm:h-[750px] md:h-[900px] bg-gradient-to-r from-[#6E111F]/25 via-[#4A0A14]/20 to-[#9E2A3B]/15 rounded-full blur-[140px] pointer-events-none z-0" 
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4E0C17]/35 via-transparent to-[#140205]/90 pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-[0.2em] sm:tracking-[0.28em] md:tracking-[0.34em] lg:tracking-[0.38em] uppercase leading-none select-none text-[#FDF8F3] drop-shadow-md -mr-[0.2em] sm:-mr-[0.28em] md:-mr-[0.34em] lg:-mr-[0.38em]"
        >
          NAILEDIT.FRR
        </motion.h1>

        {/* Location Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.45em] sm:tracking-[0.55em] text-[#D9A091] font-sans font-medium mt-3 sm:mt-4 md:mt-5 opacity-90 select-none -mr-[0.45em] sm:-mr-[0.55em]"
        >
          PUNJAB &bull; LUDHIANA
        </motion.p>

        {/* Single Centerpiece Nail Art Image */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-12 md:mt-16 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl px-2 sm:px-4"
        >
          <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[28px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-white/15 ring-1 ring-[#D9A091]/25 bg-[#1A0206]">
            <img
              src={imgSrc}
              onError={handleImageError}
              alt="NAILEDIT.FRR Luxury Nail Extension Artistry"
              className="w-full h-[240px] sm:h-[320px] md:h-[380px] lg:h-[440px] object-cover object-center transform transition-transform duration-1000 ease-out hover:scale-105"
            />
            {/* Subtle Inner Glass Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F0307]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
