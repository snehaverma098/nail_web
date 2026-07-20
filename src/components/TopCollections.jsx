import React from 'react';
import { motion } from 'framer-motion';

const COLLECTIONS = [
  {
    id: "3d",
    title: "3D Sweetheart Cute",
    subtitle: "Hand-sculpted cat charms & bows in pink",
    image: "/collection_1.jpg"
  },
  {
    id: "anime",
    title: "Dark Manga & Red Chrome",
    subtitle: "Hand-painted dark aesthetic vectors",
    image: "/collection_2.jpg"
  },
  {
    id: "custom",
    title: "Sakura Blossom & Cat",
    subtitle: "Cherry blossom art with custom 3D accents",
    image: "/collection_3.jpg"
  },
  {
    id: "korean",
    title: "Gothic Noir Horror",
    subtitle: "High-contrast black & white graphic sets",
    image: "/collection_4.jpg"
  }
];

export default function TopCollections({ onSelectCategory }) {
  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto bg-studio-cream border-t border-studio-pink/30">
      {/* Section Title */}
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-2">
          Visual Lookbook
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-studio-charcoal font-semibold tracking-wide">
          Top Collections
        </h2>
        <div className="w-12 h-[1px] bg-studio-rose mx-auto mt-4" />
      </div>

      {/* Grid Collage (2-Column Mobile App Style) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
        {COLLECTIONS.map((col) => (
          <motion.div
            key={col.id}
            onClick={() => onSelectCategory(col.id)}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl sm:rounded-2xl group cursor-pointer border border-studio-pink/20 shadow-sm aspect-[3/4] w-full active:scale-[0.99] transition-transform duration-300"
          >
            {/* Image zoom on hover */}
            <div className="absolute inset-0 bg-studio-charcoal/35 group-hover:bg-studio-charcoal/20 transition-all duration-700 z-10" />
            <img
              src={col.image}
              alt={col.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              loading="lazy"
            />

            {/* Minimal caption details */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 md:p-8">
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-studio-pink mb-0.5 sm:mb-1 block font-medium">
                Signature Capsule
              </span>
              <h3 className="text-sm sm:text-xl md:text-2xl font-serif text-white font-medium mb-0.5 sm:mb-1 group-hover:text-studio-pink transition-colors duration-300 line-clamp-1">
                {col.title}
              </h3>
              <p className="text-[10px] sm:text-xs text-white/85 font-light tracking-editorial line-clamp-1">
                {col.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
