import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Heart, ArrowLeft, ShieldCheck, HelpCircle } from 'lucide-react';
import { NAIL_DESIGNS } from '../data';

export default function ProductDetailPage({ 
  design, 
  onBack, 
  onAddToBag, 
  onSelectDesign 
}) {
  const [activeImage, setActiveImage] = useState(design.images[0]);
  const [hoveredImage, setHoveredImage] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Dynamically generate unique shuffled related designs for each nail set
  const relatedDesigns = React.useMemo(() => {
    const others = NAIL_DESIGNS.filter((d) => d.id !== design.id);
    
    // Hash based on design.id string for deterministic shuffle per design
    let hash = 0;
    for (let i = 0; i < design.id.length; i++) {
      hash = (hash << 5) - hash + design.id.charCodeAt(i);
      hash |= 0;
    }
    
    // Sort items deterministically based on hash & category matching
    const sorted = [...others].sort((a, b) => {
      const aCategoryMatch = a.category === design.category ? -1 : 1;
      const bCategoryMatch = b.category === design.category ? -1 : 1;
      if (aCategoryMatch !== bCategoryMatch) return aCategoryMatch - bCategoryMatch;
      
      const aKey = (Math.abs(hash * 31 + a.id.length * 17 + a.price) % 100);
      const bKey = (Math.abs(hash * 31 + b.id.length * 17 + b.price) % 100);
      return aKey - bKey;
    });

    // Vary item count (5 or 6 items) per design set so each opened set has a different count & selection
    const count = (Math.abs(hash) % 2 === 0) ? 6 : 5;
    return sorted.slice(0, count);
  }, [design.id, design.category]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePos({ x, y });
  };

  const handleBook = () => {
    const customizedItem = {
      ...design,
      customPrice: design.price
    };
    onAddToBag(customizedItem);
  };

  return (
    <section className="w-full py-10 pb-20 md:pb-0 px-4 md:px-8 max-w-7xl mx-auto bg-studio-cream">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-xs uppercase tracking-luxury text-studio-brown hover:text-studio-rose transition-colors duration-300 mb-8 border-b border-studio-pink/10 pb-2 text-left"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to collection</span>
      </button>

      {/* Main Detail Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 text-left">
        {/* Left Side: Image Gallery */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-4">
          {/* Thumbnails list */}
          {design.images && design.images.length > 1 && (
            <div className="flex md:flex-col order-2 md:order-1 gap-3 overflow-x-auto md:overflow-x-visible no-scrollbar">
              {design.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                    activeImage === img ? 'border-studio-rose scale-95 shadow-sm' : 'border-transparent hover:border-studio-rose/55'
                  }`}
                >
                  <img src={img} alt={`${design.name} view ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Main Zoomable Image Frame */}
          <div 
            className="flex-grow order-1 md:order-2 aspect-[4/5] bg-studio-beige rounded-2xl overflow-hidden relative border border-studio-pink/30 group"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHoveredImage(true)}
            onMouseLeave={() => setHoveredImage(false)}
          >
            <img
              src={activeImage}
              alt={design.name}
              className={`w-full h-full object-cover transition-transform duration-200 ease-out origin-center ${
                hoveredImage ? 'scale-150' : 'scale-100'
              }`}
              style={hoveredImage ? {
                transformOrigin: `${mousePos.x}% ${mousePos.y}%`
              } : undefined}
            />

            {/* Hover magnifying notice */}
            <div className="absolute bottom-4 right-4 bg-white/75 backdrop-blur-sm text-[10px] uppercase tracking-luxury py-1 px-3 rounded-full text-studio-charcoal pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              Hover to Zoom
            </div>
          </div>
        </div>

        {/* Right Side: Customization Options */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          {/* Tag & Title */}
          <div className="border-b border-studio-pink/30 pb-6 mb-6">
            <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-2">
              Premium Nail Artistry
            </span>
            <h1 className="text-3xl md:text-4xl font-serif text-studio-charcoal font-semibold tracking-wide mb-3">
              {design.name}
            </h1>

            {/* Ratings and Reviews */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-1.5">
                <div className="flex text-studio-rose">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-0" />
                  ))}
                </div>
                <span className="text-xs text-studio-charcoal font-medium font-sans">
                  {design.rating}
                </span>
                <span className="text-[10px] text-studio-brown font-sans font-light">
                  ({design.reviewsCount} verified reviews)
                </span>
              </div>
              
              <div className="flex items-center text-studio-brown text-xs uppercase tracking-editorial space-x-1">
                <Clock className="w-4 h-4 stroke-[1.2]" />
                <span>{design.duration} Mins Session</span>
              </div>
            </div>
          </div>

          {/* Pricing Details */}
          <div className="mb-6 flex justify-between items-end">
            <div>
              <span className="text-[10px] uppercase tracking-editorial text-studio-brown block mb-1">
                Base Investment
              </span>
              <span className="text-2xl md:text-3xl font-serif font-medium text-studio-charcoal">
                ₹{design.price.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Service Description */}
          <p className="text-sm text-studio-brown font-light leading-relaxed mb-8">
            {design.description}
          </p>

          {/* BOOKING ACTION */}
          <div className="space-y-6 border-t border-studio-pink/30 pt-6">
            {/* Book Now Button (Desktop / Main Container) */}
            <div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBook}
                className="w-full bg-studio-charcoal text-white uppercase tracking-luxury text-sm font-semibold py-4 rounded-full hover:bg-studio-rose active:bg-studio-rose transition-colors duration-500 shadow-md flex items-center justify-center space-x-2.5"
              >
                <span>Book Appointment</span>
                <span className="text-[11px] font-light font-sans opacity-80">
                  (₹{design.price.toLocaleString()})
                </span>
              </motion.button>
            </div>

            {/* Sticky Bottom Action Bar for Mobile Devices (< md) */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-studio-pink/30 p-3 px-4 flex justify-between items-center shadow-2xl md:hidden pb-safe">
              <div>
                <span className="text-[9px] uppercase tracking-editorial text-studio-brown block leading-tight">
                  Bespoke Set
                </span>
                <span className="text-base font-serif font-semibold text-studio-charcoal">
                  ₹{design.price.toLocaleString()}
                </span>
              </div>
              <button
                onClick={handleBook}
                className="bg-studio-charcoal text-white uppercase tracking-luxury text-xs font-semibold py-3 px-6 rounded-full hover:bg-studio-rose active:bg-studio-rose transition-colors duration-300 shadow-md flex items-center space-x-1.5"
              >
                <span>Book Now</span>
              </button>
            </div>

            {/* Quality Standard badge */}
            <div className="flex items-center space-x-3.5 pt-4 text-xs text-studio-brown font-light">
              <ShieldCheck className="w-5 h-5 text-studio-rose stroke-[1.2] flex-shrink-0" />
              <span>Medical-grade autoclave sanitation & single-use files guaranteed.</span>
            </div>
          </div>
        </div>
      </div>

      {/* RELATED DESIGNS SECTION */}
      <div className="border-t border-studio-pink/30 pt-10 sm:pt-16 text-left">
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-studio-charcoal font-semibold">
            Related Designs
          </h2>
          <span className="text-[10px] sm:text-xs uppercase tracking-luxury text-studio-brown font-medium">
            {relatedDesigns.length} Curated Sets
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 items-stretch">
          {relatedDesigns.map((rel) => (
            <div
              key={rel.id}
              onClick={() => {
                onSelectDesign(rel);
                setActiveImage(rel.images[0]);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-studio-pink/30 hover:shadow-md active:scale-[0.99] transition-all duration-300 transform-gpu"
            >
              <div className="aspect-square w-full overflow-hidden bg-studio-beige flex-shrink-0">
                <img
                  src={rel.images[0]}
                  alt={rel.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between text-left min-w-0">
                <div>
                  <div className="flex items-center text-studio-rose space-x-1 mb-1">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current stroke-[1] flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-medium leading-none">{rel.rating}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-serif text-studio-charcoal group-hover:text-studio-rose transition-colors duration-300 font-medium leading-snug break-words">
                    {rel.name}
                  </h3>
                </div>
                <div className="mt-2 pt-2 border-t border-studio-pink/20 flex justify-between items-center gap-1">
                  <span className="text-xs sm:text-sm font-medium text-studio-charcoal leading-none block">
                    ₹{rel.price.toLocaleString()}
                  </span>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-luxury text-studio-rose font-medium group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                    View &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
