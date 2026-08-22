import React, { useState, useEffect } from 'react';
import { Menu, Search, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ 
  onMenuOpen, 
  onSearchOpen, 
  onBagOpen, 
  onNavigateHome,
  bagCount 
}) {
  const [scrolled, setScrolled] = useState(false);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  const announcements = [
    "Book Any Nail Extension & Get Free Cuticle Care",
    "Flat ₹200 Off First Appointment • Code: FIRST200",
    "Experience Luxury Manicures & Bespoke 3D Art"
  ];

  // Rotate announcements
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Track page scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Promotion Bar */}
      <div className="w-full bg-studio-charcoal text-studio-cream py-2 px-4 text-center overflow-hidden border-b border-studio-brown/20 relative z-50">
        <div className="max-w-7xl mx-auto flex justify-center items-center h-5">
          <AnimatePresence mode="wait">
            <motion.p
              key={announcementIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-xs uppercase tracking-luxury font-medium"
            >
              {announcements[announcementIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Sticky Header */}
      <header
        className={`w-full sticky top-0 z-40 transition-all duration-500 pt-safe ${
          scrolled 
            ? 'glassmorphism py-2.5 md:py-3 shadow-sm' 
            : 'bg-studio-cream/90 py-3.5 md:py-5 border-b border-studio-pink/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Left Menu Icon with 44px touch target */}
          <button 
            onClick={onMenuOpen}
            className="text-studio-charcoal hover:text-studio-rose transition-colors duration-300 focus:outline-none p-2.5 -ml-2 rounded-full active:bg-studio-pink/20"
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.2]" />
          </button>

          {/* Centered Logo */}
          <div 
            onClick={onNavigateHome}
            className="cursor-pointer select-none text-center px-2 flex items-center justify-center space-x-2 sm:space-x-3 group"
          >
            <img 
              src="/logo.png" 
              alt="Nailedit.FRR Logo" 
              className="h-7 sm:h-9 md:h-10 w-auto object-contain rounded-xs shadow-2xs group-hover:scale-105 transition-transform duration-300"
            />
            <div className="text-left">
              <h1 className="text-base sm:text-xl md:text-2xl font-serif font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-studio-charcoal hover:opacity-80 transition-opacity duration-300 uppercase leading-none">
                NAILEDIT.FRR
              </h1>
              <p className="text-[7px] sm:text-[8px] tracking-[0.35em] sm:tracking-[0.4em] uppercase text-studio-rose mt-1 -mr-1 font-medium">
                Punjab &bull; Ludhiana
              </p>
            </div>
          </div>

          {/* Right Icons with 44px touch targets */}
          <div className="flex items-center space-x-1 sm:space-x-3 md:space-x-6">
            <button 
              onClick={onSearchOpen}
              className="text-studio-charcoal hover:text-studio-rose transition-colors duration-300 focus:outline-none p-2.5 rounded-full active:bg-studio-pink/20"
              aria-label="Search designs"
            >
              <Search className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.2]" />
            </button>
            
            <button 
              onClick={onBagOpen}
              className="text-studio-charcoal hover:text-studio-rose transition-colors duration-300 focus:outline-none p-2.5 -mr-2 rounded-full active:bg-studio-pink/20 relative"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.2]" />
              {bagCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1 right-1 bg-studio-rose text-white text-[9px] w-4.5 h-4.5 flex items-center justify-center rounded-full font-sans font-medium shadow-xs"
                >
                  {bagCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
