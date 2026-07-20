import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, MessageSquare, CheckCircle, Trash2 } from 'lucide-react';

const TIME_SLOTS = [
  '10:00 AM',
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '07:00 PM'
];

export default function BookingDrawer({ 
  isOpen, 
  onClose, 
  bagItems, 
  onRemoveItem,
  onClearBag 
}) {
  const [step, setStep] = useState(1); // 1: Cart Items, 2: Schedule & Info, 3: Success Screen
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instructions, setInstructions] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const totalPrice = bagItems.reduce((acc, item) => acc + item.customPrice, 0);
  const totalDuration = bagItems.reduce((acc, item) => acc + item.duration, 0);

  const handleNextStep = () => {
    if (step === 1 && bagItems.length > 0) {
      setStep(2);
    }
  };

  const handleBackStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !name || !phone) {
      alert('Please fill in all required fields.');
      return;
    }

    const bookingId = 'BKT-' + Math.random().toString(36).substr(2, 9).toUpperCase();
    const bookingDetails = {
      id: bookingId,
      items: bagItems,
      date: selectedDate,
      time: selectedTime,
      clientName: name,
      clientPhone: phone,
      clientWhatsapp: whatsapp || phone,
      instructions: instructions,
      totalPrice,
      totalDuration,
      timestamp: new Date().toISOString()
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('nailedit_bookings') || '[]');
    existing.push(bookingDetails);
    localStorage.setItem('nailedit_bookings', JSON.stringify(existing));

    setConfirmedBooking(bookingDetails);
    setStep(3);
  };

  const handleWhatsAppSync = () => {
    if (!confirmedBooking) return;

    const itemsSummary = confirmedBooking.items.map((item) => 
      `- ${item.name} (${item.length}, ${item.shape}, ${item.color.name})`
    ).join('%0A');

    const message = `Bonjour! I would like to confirm my booking with Nailedit.frr:%0A%0A` +
      `*Booking ID:* ${confirmedBooking.id}%0A` +
      `*Client Name:* ${confirmedBooking.clientName}%0A` +
      `*Date:* ${confirmedBooking.date}%0A` +
      `*Time Slot:* ${confirmedBooking.time}%0A` +
      `*Designs:*%0A${itemsSummary}%0A%0A` +
      `*Total Price:* ₹${confirmedBooking.totalPrice}%0A` +
      `*Duration:* ${confirmedBooking.totalDuration} minutes%0A` +
      `*Instructions:* ${confirmedBooking.instructions || 'None'}`;

    window.open(`https://wa.me/919779047374?text=${message}`, '_blank');
  };

  const handleCloseAndReset = () => {
    setStep(1);
    setSelectedDate('');
    setSelectedTime('');
    setName('');
    setPhone('');
    setWhatsapp('');
    setInstructions('');
    setConfirmedBooking(null);
    onClearBag();
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

          {/* Drawer container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full sm:max-w-md bg-white flex flex-col shadow-2xl relative z-10 border-l border-studio-pink/30 pb-safe pt-safe"
            >
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-studio-pink/30 flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-serif tracking-luxury text-studio-charcoal font-semibold uppercase">
                  {step === 3 ? 'Booking Confirmed' : 'Booking Bag'}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 -mr-1 rounded-full text-studio-brown hover:text-studio-rose hover:bg-studio-cream active:bg-studio-pink/20 transition-all duration-300"
                  aria-label="Close booking bag"
                >
                  <X className="w-5 h-5 stroke-[1.2]" />
                </button>
              </div>

              {/* Step 1: Cart review */}
              {step === 1 && (
                <div className="flex-grow flex flex-col justify-between overflow-hidden">
                  {/* Items List */}
                  <div className="flex-grow overflow-y-auto p-6 space-y-6">
                    {bagItems.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 pt-16">
                        <div className="w-16 h-16 rounded-full bg-studio-cream flex items-center justify-center">
                          <X className="w-6 h-6 text-studio-brown stroke-[1]" />
                        </div>
                        <p className="text-sm font-light text-studio-brown">
                          Your booking bag is currently empty.
                        </p>
                        <button
                          onClick={onClose}
                          className="text-xs uppercase tracking-luxury text-studio-rose border-b border-studio-rose/30 pb-0.5 hover:text-studio-charcoal transition-colors duration-300"
                        >
                          Discover Designs
                        </button>
                      </div>
                    ) : (
                      bagItems.map((item, idx) => (
                        <div key={idx} className="flex space-x-4 border-b border-studio-pink/15 pb-4 last:border-b-0">
                          {/* Image */}
                          <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-studio-beige border border-studio-pink/20">
                            <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                          {/* Details */}
                          <div className="flex-grow text-left">
                            <div className="flex justify-between items-start">
                              <h3 className="text-sm font-serif font-medium text-studio-charcoal leading-tight">
                                {item.name}
                              </h3>
                              <button
                                onClick={() => onRemoveItem(idx)}
                                className="text-studio-brown hover:text-red-500 transition-colors duration-300"
                              >
                                <Trash2 className="w-4 h-4 stroke-[1.2]" />
                              </button>
                            </div>
                            
                            <div className="text-[10px] text-studio-brown uppercase tracking-editorial mt-2 space-y-0.5">
                              <p>Length: <span className="font-medium text-studio-charcoal">{item.length}</span></p>
                              <p>Shape: <span className="font-medium text-studio-charcoal">{item.shape}</span></p>
                              <p>Color: <span className="font-medium text-studio-charcoal">{item.color.name}</span></p>
                            </div>

                            <div className="flex justify-between items-end mt-4">
                              <span className="text-[10px] text-studio-rose font-medium uppercase tracking-editorial">
                                {item.duration} mins
                              </span>
                              <span className="text-sm font-medium text-studio-charcoal">
                                ₹{item.customPrice.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Summary & Footer */}
                  {bagItems.length > 0 && (
                    <div className="p-6 border-t border-studio-pink/30 bg-studio-cream/30 space-y-4">
                      <div className="space-y-2 text-left">
                        <div className="flex justify-between text-xs text-studio-brown uppercase tracking-editorial">
                          <span>Total Services</span>
                          <span>{bagItems.length}</span>
                        </div>
                        <div className="flex justify-between text-xs text-studio-brown uppercase tracking-editorial">
                          <span>Est. Duration</span>
                          <span>{totalDuration} mins</span>
                        </div>
                        <div className="flex justify-between text-sm font-serif font-medium text-studio-charcoal border-t border-studio-pink/20 pt-2">
                          <span>Estimated Price</span>
                          <span>₹{totalPrice.toLocaleString()}</span>
                        </div>
                      </div>

                      <button
                        onClick={handleNextStep}
                        className="w-full bg-studio-charcoal text-white uppercase tracking-luxury text-xs font-semibold py-3.5 rounded-full hover:bg-studio-rose transition-colors duration-300 shadow-md"
                      >
                        Schedule Slot &rarr;
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Date, Time & Client Info */}
              {step === 2 && (
                <form onSubmit={handleConfirmBooking} className="flex-grow flex flex-col justify-between overflow-hidden">
                  <div className="flex-grow overflow-y-auto p-6 space-y-6 text-left">
                    <button
                      type="button"
                      onClick={handleBackStep}
                      className="text-[10px] uppercase tracking-luxury text-studio-rose font-medium hover:text-studio-charcoal transition-colors duration-300"
                    >
                      &larr; Back to Booking Bag
                    </button>

                    {/* Date Picker */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-luxury font-medium text-studio-charcoal flex items-center space-x-1.5">
                        <Calendar className="w-4 h-4 text-studio-rose stroke-[1.2]" />
                        <span>1. Choose Appointment Date *</span>
                      </label>
                      <input
                        type="date"
                        required
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full p-3 rounded-xl border border-studio-pink/70 text-base sm:text-sm focus:outline-none focus:border-studio-rose bg-white"
                      />
                    </div>

                    {/* Time Slots Grid */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-luxury font-medium text-studio-charcoal flex items-center space-x-1.5">
                        <Clock className="w-4 h-4 text-studio-rose stroke-[1.2]" />
                        <span>2. Choose Time Slot *</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {TIME_SLOTS.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-1.5 min-h-[44px] rounded-xl text-xs transition-all duration-300 border text-center font-medium flex items-center justify-center ${
                              selectedTime === time
                                ? 'border-studio-rose bg-studio-rose/10 text-studio-rose shadow-xs'
                                : 'border-studio-pink/70 hover:border-studio-rose/50 active:bg-studio-pink/10 text-studio-charcoal bg-white'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Client Info fields */}
                    <div className="space-y-4 pt-4 border-t border-studio-pink/20">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-luxury font-medium text-studio-charcoal flex items-center space-x-1.5">
                          <User className="w-4 h-4 text-studio-rose stroke-[1.2]" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Jean Dupont"
                          className="w-full p-3 rounded-xl border border-studio-pink/70 text-base sm:text-sm focus:outline-none focus:border-studio-rose bg-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-luxury font-medium text-studio-charcoal flex items-center space-x-1.5">
                          <Phone className="w-4 h-4 text-studio-rose stroke-[1.2]" />
                          <span>Contact Phone *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 99999 99999"
                          className="w-full p-3 rounded-xl border border-studio-pink/70 text-base sm:text-sm focus:outline-none focus:border-studio-rose bg-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-luxury font-medium text-studio-charcoal flex items-center space-x-1.5">
                          <Phone className="w-4 h-4 text-studio-rose stroke-[1.2]" />
                          <span>WhatsApp (Optional)</span>
                        </label>
                        <input
                          type="tel"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="Same as contact phone if empty"
                          className="w-full p-3 rounded-xl border border-studio-pink/70 text-base sm:text-sm focus:outline-none focus:border-studio-rose bg-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-luxury font-medium text-studio-charcoal flex items-center space-x-1.5">
                          <MessageSquare className="w-4 h-4 text-studio-rose stroke-[1.2]" />
                          <span>Special Instructions</span>
                        </label>
                        <textarea
                          value={instructions}
                          onChange={(e) => setInstructions(e.target.value)}
                          placeholder="Length adjustments, base color details, upload requests or allergies..."
                          rows={3}
                          className="w-full p-3 rounded-xl border border-studio-pink/70 text-base sm:text-sm focus:outline-none focus:border-studio-rose resize-none bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="p-6 border-t border-studio-pink/30 bg-studio-cream/30">
                    <button
                      type="submit"
                      className="w-full bg-studio-charcoal text-white uppercase tracking-luxury text-xs font-semibold py-3.5 rounded-full hover:bg-studio-rose transition-colors duration-300 shadow-md"
                    >
                      Book Appointment (₹{totalPrice.toLocaleString()})
                    </button>
                  </div>
                </form>
              )}

              {/* Step 3: Success Screen */}
              {step === 3 && (
                <div className="flex-grow flex flex-col justify-center items-center p-8 text-center space-y-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', delay: 0.1 }}
                  >
                    <CheckCircle className="w-16 h-16 text-studio-rose stroke-[1]" />
                  </motion.div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-studio-charcoal font-semibold">
                      Réservation Confirmée
                    </h3>
                    <p className="text-xs text-studio-brown font-light leading-relaxed max-w-xs">
                      We have successfully registered your slot. A summary has been prepared for validation.
                    </p>
                  </div>

                  {/* Detailed receipt */}
                  {confirmedBooking && (
                    <div className="w-full bg-studio-cream/50 rounded-2xl p-5 border border-studio-pink/20 text-left space-y-3.5">
                      <div className="flex justify-between items-center text-[10px] text-studio-brown uppercase tracking-editorial border-b border-studio-pink/15 pb-2">
                        <span>Booking ID</span>
                        <span className="font-semibold text-studio-charcoal">{confirmedBooking.id}</span>
                      </div>
                      
                      <div className="text-xs text-studio-brown font-light space-y-1">
                        <p>Client: <span className="font-medium text-studio-charcoal">{confirmedBooking.clientName}</span></p>
                        <p>Date: <span className="font-medium text-studio-charcoal">{confirmedBooking.date}</span></p>
                        <p>Time Slot: <span className="font-medium text-studio-charcoal">{confirmedBooking.time}</span></p>
                      </div>

                      <div className="border-t border-studio-pink/15 pt-2 flex justify-between text-xs font-semibold text-studio-charcoal">
                        <span>Total Paid</span>
                        <span>₹{confirmedBooking.totalPrice.toLocaleString()}</span>
                      </div>
                    </div>
                  )}

                  {/* Sync Action */}
                  <div className="w-full pt-4 space-y-3">
                    <button
                      onClick={handleWhatsAppSync}
                      className="w-full bg-studio-rose text-white uppercase tracking-luxury text-xs font-semibold py-3.5 rounded-full hover:bg-studio-charcoal transition-colors duration-300 shadow-sm flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4 fill-current stroke-0" />
                      <span>Confirm via WhatsApp</span>
                    </button>

                    <button
                      onClick={handleCloseAndReset}
                      className="w-full border border-studio-pink text-studio-brown uppercase tracking-luxury text-xs font-medium py-3 rounded-full hover:bg-studio-cream transition-colors duration-300"
                    >
                      Return to Studio
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
