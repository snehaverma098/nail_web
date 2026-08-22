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
    <section className="w-full relative bg-gradient-to-b from-[#4A0715] via-[#3B0510] to-[#2B030B] text-[#FAF3EB] overflow-hidden py-5 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 selection:bg-[#E5C384]/30 min-h-0 border-b border-[#E5C384]/20 shadow-md">
      
      {/* 1. Deep Burgundy Velvet / Vignette Texture Overlay */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#560A19]/50 via-[#3B0510]/80 to-[#1F0208]/95 pointer-events-none z-0" 
        aria-hidden="true"
      />
      
      {/* 2. Soft Vignette Borders */}
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(15,1,4,0.7)] pointer-events-none z-0" aria-hidden="true" />

      {/* 3. Subtle Fabric Grain Texture */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none z-0 bg-[radial-gradient(#E5C384_1px,transparent_1px)] [background-size:32px_32px]" 
        aria-hidden="true" 
      />

      {/* 4. Ambient Warm Champagne Spotlight Glow */}
      <div 
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[350px] bg-gradient-to-r from-[#7D1127]/25 via-[#E5C384]/15 to-[#9E1B36]/20 rounded-full blur-[90px] pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* 5. Subtle Floating Gold Particles */}
      <GoldParticles />

      {/* Compact Horizontal Hero Rectangular Banner Layout */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-row items-center justify-center gap-3.5 sm:gap-6 md:gap-10">
        
        {/* LEFT: Square Logo Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0 group"
        >
          {/* Subtle Glow behind Logo */}
          <div 
            className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-[#E5C384]/25 via-[#F0D59E]/30 to-[#E5C384]/20 rounded-lg blur-md opacity-80 pointer-events-none" 
            aria-hidden="true" 
          />

          {/* Logo Image */}
          <img 
            src="/logo.png" 
            alt="Nailedit.FRR Official Stamp Logo" 
            className="relative z-10 w-[95px] h-[95px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[170px] object-contain rounded-sm drop-shadow-md transition-transform duration-300 group-hover:scale-105"
          />
        </motion.div>

        {/* RIGHT: Text Stack (NAILEDIT.FRR -> PUNJAB · LUDHIANA -> Nails by Jazz) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center text-left space-y-1 sm:space-y-1.5 md:space-y-2 select-none min-w-0"
        >
          {/* Main Title: NAILEDIT.FRR */}
          <h1 className="font-display font-light text-lg sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.16em] sm:tracking-[0.2em] uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EB] to-[#F3E2CE] drop-shadow-md">
            NAILEDIT.FRR
          </h1>

          {/* Subtitle: PUNJAB · LUDHIANA */}
          <p className="text-[7.5px] sm:text-xs md:text-sm uppercase tracking-[0.3em] sm:tracking-[0.45em] text-[#E5C384] font-sans font-medium opacity-90">
            PUNJAB &bull; LUDHIANA
          </p>

          {/* Decorative Divider */}
          <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-[#E5C384]/80 to-transparent my-0.5 sm:my-1" />

          {/* Cursive Signature: Nails by Jazz */}
          <span className="font-cursive font-normal text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#F0D59E] tracking-normal block leading-tight drop-shadow-sm">
            Nails by Jazz
          </span>
        </motion.div>

      </div>
    </section>
  );
}
