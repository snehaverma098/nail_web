import React from 'react';
import { motion } from 'framer-motion';

// Floating Gold Dust Particle Component
const GoldParticles = () => {
  const particles = [
    { top: '15%', left: '5%', size: 2.5, delay: 0 },
    { top: '70%', left: '10%', size: 2, delay: 1.2 },
    { top: '25%', right: '8%', size: 3, delay: 0.7 },
    { top: '75%', right: '12%', size: 2.2, delay: 1.8 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.2, y: 0 }}
          animate={{ 
            opacity: [0.2, 0.7, 0.2], 
            y: [-4, 4, -4],
          }}
          transition={{
            duration: 4 + i,
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
            boxShadow: '0 0 6px #E5C384',
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <section className="w-full relative bg-gradient-to-b from-[#4A0715] via-[#3B0510] to-[#2B030B] text-[#FAF3EB] overflow-hidden py-6 sm:py-10 md:py-14 lg:py-16 px-4 sm:px-6 md:px-10 selection:bg-[#E5C384]/30 min-h-0 border-b border-[#E5C384]/20 shadow-md">
      
      {/* 1. Deep Burgundy Velvet / Vignette Texture Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#560A19]/50 via-[#3B0510]/80 to-[#1F0208]/95 pointer-events-none z-0" 
        aria-hidden="true"
      />
      
      {/* 2. Soft Vignette Borders */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(15,1,4,0.75)] pointer-events-none z-0" aria-hidden="true" />

      {/* 3. Subtle Fabric Grain Texture */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0 bg-[radial-gradient(#E5C384_1px,transparent_1px)] [background-size:32px_32px]" 
        aria-hidden="true" 
      />

      {/* 4. Ambient Warm Champagne Spotlight Glow */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[400px] bg-gradient-to-r from-[#7D1127]/30 via-[#E5C384]/15 to-[#9E1B36]/25 rounded-full blur-[100px] pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* 5. Subtle Floating Gold Particles */}
      <GoldParticles />

      {/* Full-width Horizontal Rectangular Hero Banner Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
        
        {/* LEFT: Square Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0 group"
        >
          {/* Subtle Glow behind Logo */}
          <div 
            className="absolute -inset-2.5 sm:-inset-4 bg-gradient-to-tr from-[#E5C384]/30 via-[#F0D59E]/35 to-[#E5C384]/25 rounded-lg blur-md opacity-85 pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Logo Image */}
          <img 
            src="/logo.png" 
            alt="Nailedit.FRR Official Stamp Logo" 
            className="relative z-10 w-[115px] h-[115px] sm:w-[165px] sm:h-[165px] md:w-[210px] md:h-[210px] lg:w-[250px] lg:h-[250px] object-contain rounded-sm drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>

        {/* RIGHT: Text Stack (NAILEDIT.FRR -> PUNJAB · LUDHIANA -> Nails by Jazz) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center text-left space-y-1.5 sm:space-y-2.5 md:space-y-3 select-none flex-grow min-w-0"
        >
          {/* Main Title: NAILEDIT.FRR (Bolder & Larger) */}
          <h1 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-[0.14em] sm:tracking-[0.18em] uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EB] to-[#F3E2CE] drop-shadow-lg">
            NAILEDIT.FRR
          </h1>

          {/* Subtitle: PUNJAB · LUDHIANA */}
          <p className="text-[9px] sm:text-xs md:text-sm lg:text-base uppercase tracking-[0.35em] sm:tracking-[0.5em] text-[#E5C384] font-sans font-medium opacity-95">
            PUNJAB &bull; LUDHIANA
          </p>

          {/* Decorative Divider */}
          <div className="w-24 sm:w-44 md:w-56 h-[1.5px] bg-gradient-to-r from-[#E5C384] via-[#E5C384]/70 to-transparent my-1 sm:my-1.5" />

          {/* Cursive Signature: Nails by Jazz (Right Aligned, Free-Style Cursive) */}
          <div className="w-full flex justify-end pt-0.5 sm:pt-1">
            <span className="font-cursive font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F0D59E] tracking-wide text-right block leading-tight drop-shadow-[0_2px_12px_rgba(240,213,158,0.4)]">
              Nails by Jazz
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
