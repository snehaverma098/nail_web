import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';

const NEW_ARRIVALS = [
  {
    id: "design-10",
    name: "Cherry Doll",
    tag: "Trending",
    price: 999,
    duration: 75,
    rating: 4.9,
    reviewsCount: 32,
    images: ["/custom_arrival_1.jpg"],
    description: "Multidimensional chrome reflecting soft lavender, mint, and pearl pink. Emulates high-end aura crystals."
  },
  {
    id: "design-11",
    name: "Bow & Meow",
    tag: "New Launch",
    price: 999,
    duration: 160,
    rating: 5.0,
    reviewsCount: 8,
    images: ["/custom_arrival_2.jpg"],
    description: "Exquisite hand-sculpted 3D vintage frame vectors layered in 18k liquid gold chrome detailing."
  },
  {
    id: "design-12",
    name: "Circus of Horrors",
    tag: "Viral",
    price: 699,
    duration: 90,
    rating: 4.9,
    reviewsCount: 46,
    images: ["/custom_arrival_3.jpg"],
    description: "Deep space midnight magnetic glitter base highlighting a silver stardust band. Pure cosmic luxury."
  }
];

export default function NewArrivals({ onSelectDesign }) {
  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto bg-studio-cream border-t border-studio-pink/30">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-2">
          Fresh From The Studio
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-studio-charcoal font-semibold tracking-wide">
          New Arrivals
        </h2>
        <p className="text-xs uppercase tracking-editorial text-studio-brown mt-2">
          Discover this week's trending boutique designs
        </p>
        <div className="w-12 h-[1px] bg-studio-rose mx-auto mt-4" />
      </div>

      {/* Grid Layout (Perfect Square Cards & Aligned Content) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8 items-stretch">
        {NEW_ARRIVALS.map((design, index) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2) }}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-studio-pink/30 hover:shadow-md active:scale-[0.99] transition-all duration-300 transform-gpu"
            onClick={() => onSelectDesign(design)}
          >
            {/* Card Square Image */}
            <div className="relative aspect-square w-full overflow-hidden bg-studio-beige flex-shrink-0">

              <img
                src={design.images[0]}
                alt={design.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />


            </div>

            {/* Content Area (Neat, Balanced Alignment) */}
            <div className="p-3 sm:p-5 flex flex-col flex-grow justify-between text-left min-w-0">
              <div>
                {/* Rating & Duration */}
                <div className="flex justify-between items-center mb-1.5 sm:mb-2.5 gap-1">
                  <div className="flex items-center text-studio-rose space-x-1 min-w-0">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current stroke-[1] flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs font-medium leading-none">{design.rating}</span>
                    <span className="text-[8px] sm:text-[10px] text-studio-brown leading-none">({design.reviewsCount})</span>
                  </div>
                  <div className="flex items-center text-studio-brown text-[9px] sm:text-[11px] uppercase tracking-editorial space-x-1 flex-shrink-0">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[1.2]" />
                    <span>{design.duration}m</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xs sm:text-base md:text-lg font-serif text-studio-charcoal group-hover:text-studio-rose transition-colors duration-300 font-medium leading-snug break-words">
                  {design.name}
                </h3>
              </div>

              {/* Price & CTA Alignment */}
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3.5 border-t border-studio-pink/30 flex justify-between items-center gap-1">
                <div className="min-w-0">
                  <span className="text-[8px] sm:text-[9px] text-studio-brown uppercase tracking-editorial block leading-none mb-0.5 truncate">
                    Starting from
                  </span>
                  <span className="text-xs sm:text-base font-medium text-studio-charcoal leading-none block">
                    ₹{design.price.toLocaleString()}
                  </span>
                </div>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-luxury text-studio-rose font-medium group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 whitespace-nowrap">
                  Options &rarr;
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
