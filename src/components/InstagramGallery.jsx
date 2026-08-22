import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data';

export default function InstagramGallery() {
  return (
    <section className="w-full py-5 sm:py-8 md:py-12 bg-studio-cream border-t border-studio-pink/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 sm:mb-10 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div className="text-left mb-4 md:mb-0">
          <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-1">
            Social Showcase
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-studio-charcoal font-semibold">
            Instagram Gallery
          </h2>
        </div>
        <a
          href="https://instagram.com/nailedit.frr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-luxury text-studio-rose hover:text-studio-charcoal transition-colors duration-300 font-medium flex items-center space-x-2 border-b border-studio-rose/30 pb-1"
        >
          <Instagram className="w-4 h-4 stroke-[1.2]" />
          <span>Follow @nailedit.frr</span>
        </a>
      </div>

      {/* Grid of Posts */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 px-4 md:px-8 max-w-[1600px] mx-auto">
        {INSTAGRAM_POSTS.map((post) => (
          <motion.a
            key={post.id}
            href="https://instagram.com/nailedit.frr"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: post.id * 0.05 }}
            className="relative aspect-square overflow-hidden rounded-2xl group border border-studio-pink/10 bg-studio-beige cursor-pointer"
          >
            {/* Image zoom */}
            <img
              src={post.image}
              alt={`Instagram post ${post.id}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-studio-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white stroke-[1.5]" />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
