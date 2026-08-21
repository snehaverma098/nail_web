import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, MessageCircle, MapPin, Phone, Youtube } from 'lucide-react';

// Custom stroke-based Pinterest icon matching Lucide style
const PinterestIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M12 2a10 10 0 0 0-3.7 19.3a12.3 12.3 0 0 1 .4-3.4l1.1-4.6s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.5 0 .9-.6 2.3-.9 3.5-.2 1 .5 1.9 1.6 1.9 1.9 0 3.3-2 3.3-4.8 0-2.5-1.8-4.3-4.4-4.3-3 0-4.8 2.3-4.8 4.6 0 .9.3 1.9.8 2.4.1.1.1.2 0 .3l-.3 1.2c0 .1-.2.2-.3.1-1.4-.6-2.2-2.6-2.2-4.2 0-3.4 2.5-6.6 7.2-6.6 3.8 0 6.7 2.7 6.7 6.3 0 3.7-2.4 6.7-5.6 6.7-1.1 0-2.1-.6-2.5-1.3l-.7 2.6c-.3 1.1-.9 2.5-1.4 3.2A10 10 0 1 0 12 2z" />
  </svg>
);

export default function MenuDrawer({ 
  isOpen, 
  onClose, 
  onNavigateHome, 
  onSelectCategory,
  onOpenBooking 
}) {
  const handleCategoryClick = (catId) => {
    onSelectCategory(catId);
    onClose();
  };

  const handleHomeClick = () => {
    onNavigateHome();
    onClose();
  };

  const handleBookClick = () => {
    onOpenBooking();
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

          {/* Menu Drawer */}
          <div className="absolute inset-y-0 left-0 max-w-full flex pr-4 sm:pr-10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-[85vw] max-w-xs sm:max-w-sm bg-studio-cream flex flex-col shadow-2xl relative z-10 border-r border-studio-pink/30 p-5 sm:p-6 justify-between pt-safe pb-safe"
            >
              {/* Top Row: Close button */}
              <div className="flex justify-between items-center pb-5 border-b border-studio-pink/20">
                <div onClick={handleHomeClick} className="cursor-pointer">
                  <h3 className="text-base font-serif font-semibold tracking-luxury text-studio-charcoal uppercase">
                    NAILEDIT.FRR
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 rounded-full text-studio-brown hover:text-studio-rose hover:bg-white active:bg-studio-pink/20 transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 stroke-[1.2]" />
                </button>
              </div>

              {/* Main Links */}
              <div className="flex-grow py-6 overflow-y-auto text-left space-y-6 touch-scroll">
                {/* Pages List */}
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-luxury text-studio-rose font-medium block">
                    SANCTUARY MENU
                  </span>
                  <ul className="space-y-3 font-serif text-lg sm:text-xl font-medium text-studio-charcoal">
                    <li>
                      <button onClick={handleHomeClick} className="hover:text-studio-rose transition-colors duration-300 py-1 block w-full text-left">
                        Home / Catalog
                      </button>
                    </li>
                    <li>
                      <button onClick={handleBookClick} className="hover:text-studio-rose transition-colors duration-300 py-1 block w-full text-left">
                        Book Appointment
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Categories List */}
                <div className="space-y-3">
                  <span className="text-[9px] uppercase tracking-luxury text-studio-rose font-medium block">
                    Nail Collections
                  </span>
                  <ul className="space-y-2 text-xs text-studio-brown uppercase tracking-luxury">
                    {['3D', 'Anime', 'Korean', 'French', 'Minimal', 'Artisanal', 'Custom'].map((cat) => (
                      <li key={cat}>
                        <button 
                          onClick={() => handleCategoryClick(cat.toLowerCase())} 
                          className="hover:text-studio-rose transition-colors duration-300 font-light py-1.5 block w-full text-left"
                        >
                          &bull; {cat} Collection
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer details in Drawer */}
              <div className="border-t border-studio-pink/20 pt-5 text-left space-y-4">
                <div className="space-y-1.5 text-xs text-studio-brown font-light">
                  <p className="flex items-center space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-studio-rose flex-shrink-0" />
                    <span className="truncate">Chimni Road, Shimlapuri, Ludhiana</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-studio-rose flex-shrink-0" />
                    <span>+91 9779047374</span>
                  </p>
                </div>

                {/* Social links with min 40px touch targets */}
                <div className="flex items-center space-x-3 pt-1">
                  <a
                    href="https://instagram.com/nailedit.frr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-studio-pink/50 flex items-center justify-center text-studio-brown hover:text-studio-rose active:scale-95 transition-all duration-300"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4 stroke-[1.2]" />
                  </a>
                  <a
                    href="https://pin.it/6yMjIV7g2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-studio-pink/50 flex items-center justify-center text-studio-brown hover:text-studio-rose active:scale-95 transition-all duration-300"
                    title="Pinterest"
                  >
                    <PinterestIcon className="w-4 h-4 stroke-[1.2]" />
                  </a>
                  <a
                    href="https://youtube.com/@naileditfrr?si=fcW8SOjDyqLBz1yR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-studio-pink/50 flex items-center justify-center text-studio-brown hover:text-studio-rose active:scale-95 transition-all duration-300"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4 stroke-[1.2]" />
                  </a>
                  <a
                    href="https://wa.me/919779047374"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white border border-studio-pink/50 flex items-center justify-center text-studio-brown hover:text-studio-rose active:scale-95 transition-all duration-300"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 stroke-[1.2] fill-current" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
