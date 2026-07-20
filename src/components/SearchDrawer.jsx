import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search } from 'lucide-react';
import { NAIL_DESIGNS } from '../data';

export default function SearchDrawer({ isOpen, onClose, onSelectDesign }) {
  const [query, setQuery] = useState('');

  const filtered = query.trim() === ''
    ? []
    : NAIL_DESIGNS.filter((design) =>
        design.name.toLowerCase().includes(query.toLowerCase()) ||
        design.description.toLowerCase().includes(query.toLowerCase()) ||
        design.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (design) => {
    onSelectDesign(design);
    setQuery('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-studio-charcoal/40 backdrop-blur-xs"
          />

          {/* Search Panel */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="absolute top-0 left-0 right-0 bg-white border-b border-studio-pink/30 shadow-2xl p-4 sm:p-6 md:p-10 z-10 pt-safe"
          >
            <div className="max-w-4xl mx-auto flex flex-col space-y-6">
              {/* Top Row: Search Input */}
              <div className="flex items-center justify-between border-b border-studio-charcoal pb-3">
                <div className="flex items-center space-x-3 sm:space-x-4 flex-grow mr-2 sm:mr-6">
                  <Search className="w-5 h-5 text-studio-brown stroke-[1.2] flex-shrink-0" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search nail designs (Chrome, French...)"
                    className="w-full text-base sm:text-lg md:text-xl font-serif focus:outline-none placeholder-studio-brown/50 text-studio-charcoal bg-transparent"
                    autoFocus
                  />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full text-studio-brown hover:text-studio-rose hover:bg-studio-cream active:bg-studio-pink/20 transition-colors duration-300"
                  aria-label="Close search"
                >
                  <X className="w-6 h-6 stroke-[1.2]" />
                </button>
              </div>

              {/* Bottom Row: Results List */}
              {query.trim() !== '' && (
                <div className="max-h-[50vh] overflow-y-auto text-left pt-2 space-y-4">
                  <h4 className="text-[10px] uppercase tracking-luxury text-studio-rose font-semibold mb-2">
                    Search Results ({filtered.length})
                  </h4>
                  
                  {filtered.length === 0 ? (
                    <p className="text-xs text-studio-brown font-light">
                      No designs found matching "{query}". Try checking details or tags.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {filtered.map((design) => (
                        <div
                          key={design.id}
                          onClick={() => handleSelect(design)}
                          className="flex items-center space-x-4 p-3 rounded-xl border border-studio-pink/15 hover:border-studio-rose hover:bg-studio-cream/30 transition-all duration-300 cursor-pointer"
                        >
                          <div className="w-14 h-14 rounded-lg overflow-hidden bg-studio-beige flex-shrink-0">
                            <img src={design.images[0]} alt={design.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <h5 className="text-sm font-serif font-medium text-studio-charcoal">
                              {design.name}
                            </h5>
                            <span className="text-[10px] text-studio-rose uppercase tracking-editorial font-medium">
                              ₹{design.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Suggestions */}
              {query.trim() === '' && (
                <div className="text-left space-y-3 pt-2">
                  <h4 className="text-[10px] uppercase tracking-luxury text-studio-brown font-semibold">
                    Popular Searches
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Chrome Collection', 'French Tips', '3D Art', 'Bridal Set', 'Korean Gels'].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="py-2 px-4 rounded-full text-xs border border-studio-pink text-studio-brown hover:border-studio-rose hover:text-studio-rose bg-white transition-all duration-300 font-light"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
