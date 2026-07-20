import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { HERO_SLIDES } from '../data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function Hero({ onBookNow }) {
  return (
    <section className="w-full min-h-[90vh] lg:h-[85vh] relative bg-studio-cream overflow-hidden py-4 sm:py-8 lg:py-0">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        touchEventsTarget="container"
        className="w-full h-full"
      >
        {HERO_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full relative overflow-hidden flex items-center py-6 sm:py-10 lg:py-0">
            {/* Editorial Background Panel (Left 72% of the screen on desktop) */}
            <div className="absolute inset-y-12 left-0 w-[72%] bg-studio-beige rounded-r-[32px] pointer-events-none z-10 hidden lg:block" />
            
            {/* Subtle decorative background glows */}
            <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-studio-pink/25 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-studio-rose/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

            {/* Content Container */}
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 relative z-20 h-full">
              
              {/* Left Column (40%): Frosted Glass Content Card */}
              <div className="w-full lg:w-[40%] flex flex-col justify-center text-left">
                <div className="bg-white/40 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-3xl border border-white/50 shadow-xs max-w-lg">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <span className="text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-studio-rose font-semibold mb-2 sm:mb-3 block">
                      {slide.label}
                    </span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-studio-charcoal font-semibold leading-tight tracking-wide mb-3 sm:mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-studio-charcoal/85 font-light tracking-editorial mb-5 sm:mb-8 leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <button
                      onClick={onBookNow}
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-studio-charcoal px-6 sm:px-8 py-3 text-xs sm:text-sm font-medium tracking-luxury uppercase text-studio-charcoal hover:text-white active:bg-studio-charcoal active:text-white transition-colors duration-300 bg-white/60 lg:bg-transparent shadow-xs"
                    >
                      <span className="relative z-10 transition-transform duration-500 group-hover:scale-105 inline-block">
                        {slide.cta}
                      </span>
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-studio-charcoal transition-transform duration-500 ease-out" />
                    </button>
                  </motion.div>
                </div>
              </div>

              {/* Right Column (60%): Full Height Editorial Image */}
              <div className="w-full lg:w-[60%] lg:h-[70vh] flex items-center justify-center lg:justify-end">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="w-full h-56 sm:h-80 lg:h-full rounded-2xl sm:rounded-[24px] overflow-hidden shadow-lg border border-studio-pink/30 bg-white"
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover object-center" 
                  />
                </motion.div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
