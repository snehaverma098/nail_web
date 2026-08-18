import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="w-full relative bg-gradient-to-b from-[#4A0715] via-[#3B0510] to-[#2B030B] text-[#FAF3EB] overflow-hidden py-8 sm:py-14 md:py-24 lg:py-28 px-4 flex flex-col justify-center items-center text-center selection:bg-[#E5C384]/30 md:min-h-[70vh] lg:min-h-[80vh]">
      
      {/* Subtle Velvet & Satin Texture Background Overlays */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,_var(--tw-gradient-stops))] from-[#6B0C20]/40 via-transparent to-[#1F0208]/90 pointer-events-none z-0" 
        aria-hidden="true"
      />
      
      {/* Ambient Warm Champagne Glow behind Title */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] md:w-[950px] h-[500px] sm:h-[800px] md:h-[950px] bg-gradient-to-r from-[#7D1127]/25 via-[#4E0817]/20 to-[#9E1B36]/15 rounded-full blur-[140px] pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* Minimal Champagne Dust Accents at Edges */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 bg-[radial-gradient(#E5C384_1px,transparent_1px)] [background-size:48px_48px]" aria-hidden="true" />

      {/* Main Content Composition Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        
        {/* 1. Main Brand Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-[2.4rem] sm:text-[5rem] md:text-[7.25rem] lg:text-[8.5rem] xl:text-[9.5rem] tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.38em] lg:tracking-[0.42em] uppercase leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EB] to-[#F3E2CE] drop-shadow-lg -mr-[0.2em] sm:-mr-[0.3em] md:-mr-[0.38em] lg:-mr-[0.42em]"
        >
          NAILEDIT.FRR
        </motion.h1>

        {/* 2. Location Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[9px] sm:text-xs md:text-sm uppercase tracking-[0.45em] sm:tracking-[0.6em] text-[#E5C384] font-sans font-medium mt-2.5 sm:mt-5 md:mt-7 opacity-90 select-none -mr-[0.45em] sm:-mr-[0.6em]"
        >
          PUNJAB &bull; LUDHIANA
        </motion.p>

        {/* 3. Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.7 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-36 sm:w-60 md:w-80 my-4 sm:my-7 flex items-center justify-center gap-2.5 sm:gap-3 select-none"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#E5C384]/50 to-[#E5C384]" />
          <span className="text-[#E5C384] text-[10px] sm:text-xs md:text-sm font-serif">✦</span>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-[#E5C384]/50 to-[#E5C384]" />
        </motion.div>

        {/* 4. Cursive Artist Signature */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="select-none"
        >
          <span className="font-cursive font-normal text-2xl sm:text-4xl md:text-6xl lg:text-7xl text-[#F0D59E] tracking-normal block leading-tight drop-shadow-md">
            Nails by Jazz
          </span>
        </motion.div>

      </div>
    </section>
  );
}
