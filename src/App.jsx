import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

// Component Imports
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedGrid from './components/FeaturedGrid';
import NewArrivals from './components/NewArrivals';
import TopCollections from './components/TopCollections';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProductDetailPage from './components/ProductDetailPage';
import BookingDrawer from './components/BookingDrawer';
import SearchDrawer from './components/SearchDrawer';
import MenuDrawer from './components/MenuDrawer';

export default function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'detail'
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [bagItems, setBagItems] = useState([]);
  
  // Drawer States
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  // Sync Booking Bag from Local Storage on mount
  useEffect(() => {
    const savedBag = localStorage.getItem('nailedit_bag_items');
    if (savedBag) {
      try {
        setBagItems(JSON.parse(savedBag));
      } catch (e) {
        console.error('Failed to parse bag items from storage', e);
      }
    }
  }, []);

  // Save Booking Bag to Local Storage when modified
  const updateBagItems = (newItems) => {
    setBagItems(newItems);
    localStorage.setItem('nailedit_bag_items', JSON.stringify(newItems));
  };

  // View transitions and scrolls
  const handleSelectDesign = (design) => {
    setSelectedDesign(design);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedDesign(null);
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setCurrentView('home');
    setSelectedDesign(null);
    
    // Scroll smoothly to Featured Grid section
    setTimeout(() => {
      const gridElem = document.getElementById('featured-grid-section');
      if (gridElem) {
        gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Bag Operations
  const handleAddToBag = (item) => {
    const newBag = [...bagItems, item];
    updateBagItems(newBag);
    setBagOpen(true); // Open drawer immediately on booking click
  };

  const handleRemoveFromBag = (indexToRemove) => {
    const newBag = bagItems.filter((_, idx) => idx !== indexToRemove);
    updateBagItems(newBag);
  };

  const handleClearBag = () => {
    updateBagItems([]);
  };

  const handleBookNowCTA = () => {
    // Scroll to the main catalog section
    const gridElem = document.getElementById('categories-section');
    if (gridElem) {
      gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-studio-cream text-studio-charcoal flex flex-col justify-between selection:bg-studio-rose/25">
      {/* Navigation Header */}
      <Header
        onMenuOpen={() => setMenuOpen(true)}
        onSearchOpen={() => setSearchOpen(true)}
        onBagOpen={() => setBagOpen(true)}
        onNavigateHome={handleNavigateHome}
        bagCount={bagItems.length}
      />

      {/* Pages coordination with fade animation */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Hero Slider */}
              <Hero onBookNow={handleBookNowCTA} />
              
              {/* Category Circular Thumbnails */}
              <div id="categories-section">
                <Categories 
                  selectedCategory={selectedCategory} 
                  onSelectCategory={handleSelectCategory} 
                />
              </div>

              {/* Main Collection Grid */}
              <div id="featured-grid-section">
                <FeaturedGrid 
                  selectedCategory={selectedCategory} 
                  onSelectDesign={handleSelectDesign} 
                />
              </div>

              {/* Top Collections Lookbook Collage */}
              <TopCollections onSelectCategory={handleSelectCategory} />

              {/* New Arrivals Grid */}
              <NewArrivals onSelectDesign={handleSelectDesign} />

              {/* Testimonials Review Slider */}
              <Testimonials />

              {/* Frequently Asked Questions */}
              <FAQ />

            </motion.div>
          ) : (
            <motion.div
              key="detail-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {selectedDesign && (
                <ProductDetailPage
                  design={selectedDesign}
                  onBack={() => setCurrentView('home')}
                  onAddToBag={handleAddToBag}
                  onSelectDesign={handleSelectDesign}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer 
        onNavigateHome={handleNavigateHome} 
        onSelectCategory={handleSelectCategory} 
      />

      {/* DRAWERS / OVERLAYS */}
      
      {/* Search Drawer */}
      <SearchDrawer
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectDesign={handleSelectDesign}
      />

      {/* Booking Drawer */}
      <BookingDrawer
        isOpen={bagOpen}
        onClose={() => setBagOpen(false)}
        bagItems={bagItems}
        onRemoveItem={handleRemoveFromBag}
        onClearBag={handleClearBag}
      />

      {/* Mobile Hamburger Navigation Menu */}
      <MenuDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigateHome={handleNavigateHome}
        onSelectCategory={handleSelectCategory}
        onOpenBooking={() => setBagOpen(true)}
      />

      {/* Floating Mobile WhatsApp Quick Button */}
      <a
        href="https://wa.me/919779047374?text=Bonjour!%20I%20would%20like%20to%20inquire%20about%20a%20nail%20booking"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-30 md:hidden bg-[#25D366] text-white p-3.5 rounded-full shadow-xl flex items-center justify-center border border-white/40 active:scale-95 transition-transform duration-300 mb-safe"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current stroke-0" />
      </a>
    </div>
  );
}
