import React from 'react';
import { motion } from 'framer-motion';

// Gold Filigree Ornamental Flourish Components
const GoldFiligreeLeft = () => (
  <svg 
    viewBox="0 0 120 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-14 sm:w-20 md:w-28 lg:w-32 h-auto text-[#E5C384] opacity-80 flex-shrink-0"
  >
    <path 
      d="M2 15 C 25 15, 35 3, 60 15 C 80 27, 95 15, 118 15" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    <path 
      d="M30 15 C 40 8, 50 8, 60 15 C 70 22, 80 22, 90 15" 
      stroke="currentColor" 
      strokeWidth="0.75" 
      strokeDasharray="2 2"
    />
    <circle cx="118" cy="15" r="2.5" fill="currentColor" />
    <circle cx="60" cy="15" r="1.5" fill="currentColor" />
    <path d="M45 10 C 42 5, 36 6, 38 12" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

const GoldFiligreeRight = () => (
  <svg 
    viewBox="0 0 120 30" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className="w-14 sm:w-20 md:w-28 lg:w-32 h-auto text-[#E5C384] opacity-80 flex-shrink-0"
  >
    <path 
      d="M118 15 C 95 15, 85 3, 60 15 C 40 27, 25 15, 2 15" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round"
    />
    <path 
      d="M90 15 C 80 8, 70 8, 60 15 C 50 22, 40 22, 30 15" 
      stroke="currentColor" 
      strokeWidth="0.75" 
      strokeDasharray="2 2"
    />
    <circle cx="2" cy="15" r="2.5" fill="currentColor" />
    <circle cx="60" cy="15" r="1.5" fill="currentColor" />
    <path d="M75 10 C 78 5, 84 6, 82 12" stroke="currentColor" strokeWidth="0.8" />
  </svg>
);

// Floating Gold Dust Particle Component
const GoldParticles = () => {
  const particles = [
    { top: '12%', left: '8%', size: 3, delay: 0 },
    { top: '22%', right: '10%', size: 2.5, delay: 1.2 },
    { top: '65%', left: '6%', size: 2, delay: 0.7 },
    { top: '75%', right: '8%', size: 3.5, delay: 1.8 },
    { top: '35%', left: '14%', size: 2, delay: 2.3 },
    { top: '48%', right: '12%', size: 2.8, delay: 0.4 },
    { top: '85%', left: '18%', size: 2.2, delay: 1.5 },
    { top: '15%', right: '20%', size: 3, delay: 2.7 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ 
            opacity: [0.2, 0.75, 0.2], 
            y: [-6, 6, -6],
            x: [-3, 3, -3]
          }}
          transition={{
            duration: 5 + (i % 3),
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: p.top,
            left: p.left,
            right: p.right,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '50%',
            backgroundColor: '#E5C384',
            boxShadow: '0 0 8px #E5C384',
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="w-full relative bg-gradient-to-b from-[#4A0715] via-[#3B0510] to-[#2B030B] text-[#FAF3EB] overflow-hidden py-10 sm:py-16 md:py-20 lg:py-24 px-4 flex flex-col justify-center items-center text-center selection:bg-[#E5C384]/30 min-h-[85vh] lg:min-h-[90vh]">
      
      {/* 1. Deep Burgundy Velvet / Vignette Texture Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#560A19]/50 via-[#3B0510]/80 to-[#1F0208]/95 pointer-events-none z-0" 
        aria-hidden="true"
      />
      
      {/* 2. Soft Vignette Borders */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(15,1,4,0.85)] pointer-events-none z-0" aria-hidden="true" />

      {/* 3. Subtle Fabric Grain Texture */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0 bg-[radial-gradient(#E5C384_1px,transparent_1px)] [background-size:40px_40px]" 
        aria-hidden="true" 
      />

      {/* 4. Ambient Warm Champagne Spotlight Glow behind Content */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] sm:w-[700px] md:w-[850px] h-[450px] sm:h-[700px] md:h-[850px] bg-gradient-to-r from-[#7D1127]/20 via-[#E5C384]/10 to-[#9E1B36]/15 rounded-full blur-[130px] pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* 5. Minimal Subtle Floating Gold Dust */}
      <GoldParticles />

      {/* Main Editorial Hero Composition */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-7">
        
        {/* 1. MAIN BRAND TITLE: NAILEDIT.FRR */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-light text-[2.4rem] sm:text-[4.75rem] md:text-[6.5rem] lg:text-[7.8rem] xl:text-[8.75rem] tracking-[0.22em] sm:tracking-[0.3em] md:tracking-[0.35em] lg:tracking-[0.38em] uppercase leading-none select-none text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EB] to-[#F3E2CE] drop-shadow-xl -mr-[0.22em] sm:-mr-[0.3em] md:-mr-[0.35em] lg:-mr-[0.38em]"
        >
          NAILEDIT.FRR
        </motion.h1>

        {/* 2. LOCATION: PUNJAB · LUDHIANA WITH FLANKING GOLD LINES */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md sm:max-w-xl md:max-w-2xl flex items-center justify-center gap-3 sm:gap-5 select-none px-4"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#E5C384]/40 to-[#E5C384]/90" />
          <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.45em] sm:tracking-[0.6em] text-[#E5C384] font-sans font-medium opacity-95 whitespace-nowrap -mr-[0.45em] sm:-mr-[0.6em]">
            PUNJAB &bull; LUDHIANA
          </span>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent via-[#E5C384]/40 to-[#E5C384]/90" />
        </motion.div>

        {/* 3. DECORATIVE ORNAMENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 select-none text-[#E5C384]/90 py-0.5"
        >
          <span className="text-xs sm:text-sm font-serif opacity-60">──────</span>
          <span className="text-xs sm:text-sm md:text-base">✦</span>
          <span className="text-xs sm:text-sm font-serif opacity-60">──────</span>
        </motion.div>

        {/* 4. CURSIVE ARTIST SIGNATURE: Nails by Jazz */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="select-none"
        >
          <span className="font-cursive font-normal text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] text-[#F0D59E] tracking-wide block leading-tight drop-shadow-[0_2px_12px_rgba(229,195,132,0.3)]">
            Nails by Jazz
          </span>
        </motion.div>

        {/* 5. PROVIDED LOGO IMAGE WITH ELEGANT FLOURISHES & SPOTLIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative pt-2 sm:pt-4 flex items-center justify-center gap-2 sm:gap-6 md:gap-10 w-full"
        >
          {/* Left Gold Filigree Flourish */}
          <GoldFiligreeLeft />

          {/* Logo Frame Container */}
          <div className="relative group flex-shrink-0">
            {/* Soft Ambient Gold/Champagne Glow behind Stamp Logo */}
            <div 
              className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#E5C384]/20 via-[#F0D59E]/30 to-[#E5C384]/15 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Exact Provided Logo Image */}
            <img 
              src="/logo.png" 
              alt="Nailedit.FRR Official Stamp Logo" 
              className="relative z-10 w-[240px] sm:w-[300px] md:w-[360px] lg:w-[410px] h-auto object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </div>

          {/* Right Gold Filigree Flourish */}
          <GoldFiligreeRight />
        </motion.div>

      </div>
    </section>
  );
}
