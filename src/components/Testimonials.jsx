import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play slideshow every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="w-full py-5 sm:py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto bg-studio-cream border-t border-studio-pink/30">
      {/* Section Title */}
      <div className="text-center mb-8 md:mb-10">
        <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-1.5">
          Client Diaries
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-studio-charcoal font-semibold tracking-wide">
          Studio Testimonials
        </h2>
        <div className="w-12 h-[1px] bg-studio-rose mx-auto mt-3" />
      </div>

      {/* Compact Slideshow Container */}
      <div 
        className="max-w-2xl mx-auto relative px-2 sm:px-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrow - Left */}
        <button
          onClick={handlePrev}
          aria-label="Previous review"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-studio-charcoal/60 hover:text-studio-rose p-2 rounded-full hover:bg-studio-pink/20 transition-all duration-300 focus:outline-none hidden sm:flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Slide Content Card */}
        <div className="overflow-hidden min-h-[220px] sm:min-h-[200px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-studio-pink/30 shadow-xs relative text-center w-full"
            >
              {/* Elegant Quote Icon decoration */}
              <Quote className="absolute top-5 right-6 w-8 h-8 text-studio-pink/20 stroke-[1]" />

              {/* Initials Monogram (No Customer Photos) */}
              <div className="w-12 h-12 rounded-full bg-studio-pink/30 text-studio-charcoal font-serif font-semibold text-xs tracking-wider flex items-center justify-center mx-auto mb-3.5 ring-2 ring-studio-pink/50 select-none">
                {currentTestimonial.initials}
              </div>

              {/* Rating Stars & Rating Number */}
              <div className="flex items-center justify-center space-x-1 mb-3 text-studio-rose">
                {[...Array(Math.floor(currentTestimonial.rating))].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-0" />
                ))}
                {currentTestimonial.rating % 1 !== 0 && (
                  <div className="relative">
                    <Star className="w-4 h-4 text-studio-rose/30 fill-current stroke-0" />
                    <div className="absolute inset-0 overflow-hidden w-1/2">
                      <Star className="w-4 h-4 fill-studio-rose text-studio-rose stroke-0" />
                    </div>
                  </div>
                )}
                <span className="text-xs font-sans font-semibold text-studio-charcoal/80 ml-1.5">
                  {currentTestimonial.rating.toFixed(1)}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-studio-brown italic font-light leading-relaxed mb-4 max-w-lg mx-auto">
                "{currentTestimonial.review}"
              </p>

              {/* Client Info */}
              <div className="border-t border-studio-pink/20 pt-3 max-w-xs mx-auto">
                <h4 className="text-xs uppercase tracking-widest text-studio-charcoal font-medium">
                  {currentTestimonial.name}
                </h4>
                <span className="text-[10px] uppercase tracking-editorial text-studio-rose font-light mt-0.5 block">
                  {currentTestimonial.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrow - Right */}
        <button
          onClick={handleNext}
          aria-label="Next review"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-studio-charcoal/60 hover:text-studio-rose p-2 rounded-full hover:bg-studio-pink/20 transition-all duration-300 focus:outline-none hidden sm:flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-5">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
                idx === currentIndex
                  ? 'w-6 bg-studio-rose'
                  : 'w-1.5 bg-studio-brown/30 hover:bg-studio-rose/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
