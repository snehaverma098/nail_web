import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data';
import { Plus, Minus, Heart } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 px-4 md:px-8 max-w-4xl mx-auto bg-studio-cream border-t border-studio-pink/30">
      {/* Section Title */}
      <div className="text-center mb-16">
        <span className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium block mb-2">
          HAVE QUESTIONS?
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-studio-charcoal font-semibold tracking-wide">
          Frequently Asked Questions
        </h2>
        <div className="w-12 h-[1px] bg-studio-rose mx-auto mt-4" />
      </div>

      {/* Accordion List */}
      <div className="space-y-4 text-left">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-studio-pink/30 overflow-hidden transition-all duration-300 hover:shadow-sm"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full py-5 px-6 md:px-8 flex justify-between items-center text-left focus:outline-none transition-colors duration-300 group"
              >
                <div className="flex items-center space-x-3.5">
                  <Heart className={`w-4 h-4 transition-colors duration-300 stroke-[1.2] ${
                    isOpen ? 'text-studio-rose fill-studio-rose/20' : 'text-studio-brown group-hover:text-studio-rose'
                  }`} />
                  <span className={`font-serif text-base md:text-lg transition-colors duration-300 font-medium ${
                    isOpen ? 'text-studio-rose' : 'text-studio-charcoal group-hover:text-studio-rose'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`p-1.5 rounded-full border transition-all duration-300 ${
                  isOpen ? 'border-studio-rose text-studio-rose bg-studio-pink/20' : 'border-studio-pink text-studio-brown group-hover:border-studio-rose group-hover:text-studio-rose'
                }`}>
                  {isOpen ? (
                    <Minus className="w-4 h-4 stroke-[1.5]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[1.5]" />
                  )}
                </div>
              </button>

              {/* Answer Body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-6 text-sm text-studio-brown font-light leading-relaxed border-t border-studio-pink/10 pt-4 bg-studio-cream/30">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
