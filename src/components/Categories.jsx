import React from 'react';
import { CATEGORIES, NAIL_DESIGNS } from '../data';
import { ChevronRight } from 'lucide-react';

export default function Categories({ selectedCategory, onSelectCategory }) {
  return (
    <section className="w-full py-5 sm:py-8 md:py-12 px-4 md:px-8 max-w-7xl mx-auto bg-studio-cream">
      {/* Section Title */}
      <div className="flex justify-between items-end mb-4 sm:mb-8 border-b border-studio-pink/30 pb-3">
        <div>
          <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-1">
            Browse By Look
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-studio-charcoal font-semibold">
            Collections <span className="text-studio-rose">&bull;</span> Categories
          </h2>
        </div>
        <button 
          onClick={() => onSelectCategory(null)} 
          className="text-xs uppercase tracking-luxury text-studio-brown hover:text-studio-rose transition-colors duration-300 flex items-center space-x-1"
        >
          <span>View All</span>
          <ChevronRight className="w-4.5 h-4.5 stroke-[1.2]" />
        </button>
      </div>

      {/* Horizontal Circular Carousel */}
      <div className="flex overflow-x-auto space-x-5 sm:space-x-6 md:space-x-10 pb-2 sm:pb-4 no-scrollbar snap-x snap-mandatory scroll-smooth touch-scroll cursor-grab active:cursor-grabbing px-1">
        {CATEGORIES.map((category) => {
          const isSelected = selectedCategory === category.id;
          const realSetCount = NAIL_DESIGNS.filter((design) => design.category === category.id).length;

          return (
            <div
              key={category.id}
              onClick={() => onSelectCategory(isSelected ? null : category.id)}
              className="flex-shrink-0 flex flex-col items-center group cursor-pointer snap-start"
            >
              {/* Circular Avatar */}
              <div 
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full overflow-hidden p-1 transition-all duration-500 relative ${
                  isSelected 
                    ? 'ring-2 ring-studio-rose scale-105 shadow-sm' 
                    : 'ring-1 ring-studio-pink/50 group-hover:ring-studio-rose/50 group-hover:scale-105'
                }`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Active Indicator Backdrop */}
                {isSelected && (
                  <div className="absolute inset-1 rounded-full bg-studio-rose/10 flex items-center justify-center" />
                )}
              </div>

              {/* Name & Count */}
              <p className={`text-[11px] sm:text-xs md:text-sm uppercase tracking-widest mt-3 sm:mt-4 transition-colors duration-300 font-medium ${
                isSelected ? 'text-studio-rose' : 'text-studio-charcoal group-hover:text-studio-rose'
              }`}>
                {category.name}
              </p>
              <span className="text-[9px] md:text-[10px] tracking-editorial text-studio-brown uppercase mt-0.5 sm:mt-1 font-medium">
                {realSetCount} {realSetCount === 1 ? 'Set' : 'Sets'}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
