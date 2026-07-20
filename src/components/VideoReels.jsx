import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { REELS } from '../data';
import { Play, Eye } from 'lucide-react';

export default function VideoReels() {
  const scrollContainerRef = useRef(null);

  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto bg-studio-cream border-t border-studio-pink/30">
      {/* Section Title */}
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-2">
          Watch The Artistry
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-studio-charcoal font-semibold tracking-wide">
          Studio Reels
        </h2>
        <p className="text-xs uppercase tracking-editorial text-studio-brown mt-2">
          Autoplay BTS of our artisan crafting process
        </p>
        <div className="w-12 h-[1px] bg-studio-rose mx-auto mt-4" />
      </div>

      {/* Horizontal Reels Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 sm:space-x-6 pb-6 no-scrollbar snap-x snap-mandatory scroll-smooth touch-scroll cursor-grab active:cursor-grabbing px-1"
      >
        {REELS.map((reel) => (
          <motion.div
            key={reel.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex-shrink-0 w-[210px] sm:w-[250px] md:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden relative group border border-studio-pink/30 shadow-md snap-start"
          >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/80 via-transparent to-studio-charcoal/20 z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

            {/* Video Player */}
            <video
              src={reel.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Floating Play Indicator */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                <Play className="w-5 h-5 text-white fill-current translate-x-[1px]" />
              </div>
            </div>

            {/* Reel Details (Caption, views count) */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-20 text-left">
              <div className="flex items-center text-studio-pink text-[10px] uppercase tracking-editorial mb-1">
                <Eye className="w-3.5 h-3.5 mr-1" />
                <span>{reel.views} views</span>
              </div>
              <h3 className="text-white font-medium text-sm md:text-base leading-snug font-sans tracking-wide">
                {reel.title}
              </h3>
              <p className="text-[10px] text-white/70 font-light mt-1 font-sans">
                @nailedit.frr
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
