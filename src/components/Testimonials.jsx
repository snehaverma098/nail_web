import React from 'react';
import { TESTIMONIALS } from '../data';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-7xl mx-auto bg-studio-cream border-t border-studio-pink/30">
      {/* Section Title */}
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-2">
          Client Diaries
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-studio-charcoal font-semibold tracking-wide">
          Studio Testimonials
        </h2>
        <div className="w-12 h-[1px] bg-studio-rose mx-auto mt-4" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="bg-white p-8 rounded-2xl border border-studio-pink/30 flex flex-col items-center text-center shadow-sm relative group hover:shadow-md transition-shadow duration-500"
          >
            {/* Elegant Quote Icon decoration */}
            <Quote className="absolute top-6 right-8 w-8 h-8 text-studio-pink/25 stroke-[1]" />

            {/* Client Avatar */}
            <div className="w-16 h-16 rounded-full overflow-hidden mb-5 ring-2 ring-studio-pink/50 p-0.5">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Stars rating */}
            <div className="flex space-x-1 mb-4 text-studio-rose">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current stroke-0" />
              ))}
            </div>

            {/* Client Quote */}
            <p className="text-sm text-studio-brown italic font-light leading-relaxed mb-6 flex-grow">
              "{testimonial.review}"
            </p>

            {/* Client details */}
            <div className="border-t border-studio-pink/20 pt-4 w-full">
              <h4 className="text-sm uppercase tracking-widest text-studio-charcoal font-medium">
                {testimonial.name}
              </h4>
              <span className="text-[10px] uppercase tracking-editorial text-studio-rose font-light mt-0.5 block">
                {testimonial.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
