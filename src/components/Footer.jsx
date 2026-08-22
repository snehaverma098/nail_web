import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Heart, Instagram, Youtube } from 'lucide-react';

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

export default function Footer({ onNavigateHome, onSelectCategory }) {
  return (
    <footer className="w-full bg-studio-charcoal text-studio-cream pt-16 pb-8 px-4 md:px-8 border-t border-studio-brown/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 text-left">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div onClick={onNavigateHome} className="cursor-pointer inline-flex items-center space-x-3 mb-4">
            <img src="/logo.png" alt="Nailedit.FRR Logo" className="h-9 md:h-10 w-auto object-contain rounded-xs" />
            <div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold tracking-[0.2em] text-white uppercase">
                NAILEDIT.FRR
              </h3>
              <p className="text-[8px] tracking-[0.4em] uppercase text-studio-rose mt-0.5">
                Punjab &bull; Ludhiana
              </p>
            </div>
          </div>
          <p className="text-xs text-studio-pink/70 font-light leading-relaxed max-w-xs mt-4">
            A premium, bespoke nail sanctuary crafting avant-garde extensions, precision builder gels, and editorial nail designs.
          </p>
          <a
            href="https://wa.me/919779047374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-studio-rose text-white text-xs uppercase tracking-luxury font-medium py-3 px-6 rounded-full mt-6 hover:bg-white hover:text-studio-charcoal transition-colors duration-300 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-current stroke-0" />
            <span>WhatsApp Sync</span>
          </a>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-1">
          <h4 className="text-xs uppercase tracking-luxury text-studio-rose font-medium mb-6">
            Bespoke Services
          </h4>
          <ul className="space-y-3.5 text-xs text-studio-pink/80 font-light">
            <li>
              <button onClick={() => onSelectCategory("3d")} className="hover:text-white transition-colors duration-300">
                3D Sculpted Art
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory("anime")} className="hover:text-white transition-colors duration-300">
                Anime Aesthetic Sets
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory("korean")} className="hover:text-white transition-colors duration-300">
                Korean Glass Nails
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory("french")} className="hover:text-white transition-colors duration-300">
                French Tip Extensions
              </button>
            </li>
            <li>
              <button onClick={() => onSelectCategory("artisanal")} className="hover:text-white transition-colors duration-300">
                Artisanal Couture Sets
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-1">
          <h4 className="text-xs uppercase tracking-luxury text-studio-rose font-medium mb-6">
            The Salon
          </h4>
          <ul className="space-y-4 text-xs text-studio-pink/80 font-light">
            <li className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-studio-rose flex-shrink-0 mt-0.5 stroke-[1.2]" />
              <span className="leading-relaxed">
                Chimni Road, Shimlapuri, Ludhiana
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-studio-rose flex-shrink-0 stroke-[1.2]" />
              <span>+91 9779047374</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-studio-rose flex-shrink-0 stroke-[1.2]" />
              <span>naileditfrr@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Instagram className="w-4 h-4 text-studio-rose flex-shrink-0 stroke-[1.2]" />
              <a href="https://instagram.com/nailedit.frr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                nailedit.frr
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <PinterestIcon className="w-4 h-4 text-studio-rose flex-shrink-0 stroke-[1.2]" />
              <a href="https://pin.it/6yMjIV7g2" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                Pinterest
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Youtube className="w-4 h-4 text-studio-rose flex-shrink-0 stroke-[1.2]" />
              <a href="https://youtube.com/@naileditfrr?si=fcW8SOjDyqLBz1yR" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours Column */}
        <div className="md:col-span-1">
          <h4 className="text-xs uppercase tracking-luxury text-studio-rose font-medium mb-6">
            Opening Hours
          </h4>
          <ul className="space-y-3.5 text-xs text-studio-pink/80 font-light">
            <li className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-studio-rose flex-shrink-0 mt-0.5 stroke-[1.2]" />
              <div>
                <p className="font-medium text-white mb-0.5">Tuesday – Saturday</p>
                <p className="text-[11px] text-studio-pink/65">10:00 AM – 08:00 PM</p>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-studio-rose flex-shrink-0 mt-0.5 stroke-[1.2]" />
              <div>
                <p className="font-medium text-white mb-0.5">Sunday</p>
                <p className="text-[11px] text-studio-pink/65">11:00 AM – 06:00 PM</p>
              </div>
            </li>
            <li className="text-[10px] text-studio-rose/80 font-medium tracking-editorial">
              &bull; Mondays Closed &bull;
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-studio-brown/10 flex flex-col md:flex-row justify-between items-center text-xs text-studio-pink/55 font-light space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} NAILEDIT.FRR. All rights reserved.</p>
        <p className="flex items-center space-x-1">
          <span>Crafted with</span>
          <Heart className="w-3 h-3 text-studio-rose fill-studio-rose stroke-0" />
          <span>for luxury standards.</span>
        </p>
      </div>
    </footer>
  );
}
