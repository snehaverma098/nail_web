import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock } from 'lucide-react';

const NEW_ARRIVALS = [
  {
    id: "design-10",
    name: "Aura Quartz Chrome",
    tag: "Trending",
    price: 2300,
    duration: 75,
    rating: 4.9,
    reviewsCount: 32,
    images: ["/custom_arrival_1.jpg"],
    description: "Multidimensional chrome reflecting soft lavender, mint, and pearl pink. Emulates high-end aura crystals."
  },
  {
    id: "design-11",
    name: "Baroque Gold Filigree",
    tag: "New Launch",
    price: 4500,
    duration: 160,
    rating: 5.0,
    reviewsCount: 8,
    images: ["/custom_arrival_2.jpg"],
    description: "Exquisite hand-sculpted 3D vintage frame vectors layered in 18k liquid gold chrome detailing."
  },
  {
    id: "design-12",
    name: "Milky Way Cat Eye",
    tag: "Viral",
    price: 2500,
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
      <div className="text-center mb-16">
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

      {/* Grid Layout (2-Column Mobile Shopping App Style) */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-10">
        {NEW_ARRIVALS.map((design, index) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group cursor-pointer flex flex-col h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-studio-pink/30 hover:shadow-md active:scale-[0.99] transition-all duration-300"
            onClick={() => onSelectDesign(design)}
          >
            {/* Card Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-studio-beige">
              {/* Product Tag */}
              <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 z-10 bg-studio-rose text-white text-[8px] sm:text-[9px] uppercase tracking-luxury py-0.5 px-2.5 sm:py-1 sm:px-3 rounded-full font-medium shadow-xs">
                {design.tag}
              </span>

              <img
                src={design.images[0]}
                alt={design.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Mobile & Desktop Cover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-studio-charcoal/40 via-transparent to-transparent lg:bg-studio-charcoal/10 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-2.5 sm:pb-6">
                <span className="bg-white/95 backdrop-blur-xs text-studio-charcoal uppercase tracking-luxury text-[9px] sm:text-xs font-semibold py-1.5 px-3.5 sm:py-2.5 sm:px-8 rounded-full shadow-md group-hover:bg-studio-charcoal group-hover:text-white transition-colors duration-300">
                  Book Appointment
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-5 md:p-6 flex flex-col flex-grow text-left">
              <div className="flex justify-between items-center mb-1.5 sm:mb-3">
                <div className="flex items-center text-studio-rose space-x-1">
                  <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current stroke-[1]" />
                  <span className="text-[11px] sm:text-xs font-medium">{design.rating}</span>
                  <span className="text-[9px] sm:text-[10px] text-studio-brown">({design.reviewsCount})</span>
                </div>
                <div className="flex items-center text-studio-brown text-[10px] sm:text-[11px] uppercase tracking-editorial space-x-1">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[1.2]" />
                  <span>{design.duration}m</span>
                </div>
              </div>

              <h3 className="text-xs sm:text-lg md:text-xl font-serif text-studio-charcoal group-hover:text-studio-rose transition-colors duration-300 font-medium mb-1 sm:mb-2 line-clamp-1">
                {design.name}
              </h3>
              
              <p className="text-[10px] sm:text-xs text-studio-brown line-clamp-2 mb-2 sm:mb-4 leading-relaxed font-light">
                {design.description}
              </p>

              <div className="mt-auto pt-2 sm:pt-4 border-t border-studio-pink/30 flex justify-between items-center">
                <div>
                  <span className="text-[8px] sm:text-[9px] text-studio-brown uppercase tracking-editorial block leading-none mb-0.5">
                    Starting from
                  </span>
                  <span className="text-xs sm:text-base font-medium text-studio-charcoal">
                    ₹{design.price.toLocaleString()}
                  </span>
                </div>
                <span className="text-[8px] sm:text-[10px] uppercase tracking-luxury text-studio-rose font-medium group-hover:translate-x-1 transition-transform duration-300">
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
