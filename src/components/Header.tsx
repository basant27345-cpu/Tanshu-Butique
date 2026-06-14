import { MapPin, Phone, Clock, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-stone-200">
      {/* Top Banner for Local NAP SEO */}
      <div className="bg-stone-900 text-stone-100 py-2 px-4 text-xs font-sans tracking-wide hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Om Prakash Market, Sector 17 A, Gurgaon</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Mon-Sat: 10AM - 8PM</span>
          </div>
          <a href="tel:+919711033915" className="flex items-center gap-1.5 hover:text-stone-300 transition-colors">
            <Phone className="w-3.5 h-3.5" /> +91-9711033915
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <a href="#" className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-stone-900 leading-none">
            Tanshu Boutique
          </a>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1">Gurgaon • Sec-17A • Est. 1998</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-stone-600">
          <a href="#services" className="hover:text-stone-900 transition-colors">Services</a>
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
          <a href="#testimonials" className="hover:text-stone-900 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          <a href="#contact" className="bg-stone-900 text-white px-5 py-2.5 rounded hover:bg-stone-800 transition-colors">
            Book Fitting
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden p-2 text-stone-600" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-200 shadow-xl py-4 flex flex-col px-4 gap-4 font-sans text-stone-700 font-medium">
          <a href="#services" onClick={() => setIsMenuOpen(false)} className="block py-2">Services</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)} className="block py-2">About</a>
          <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-2">Testimonials</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block py-2">Contact</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-stone-900 text-white px-5 py-3 rounded text-center mt-2">
            Book Fitting
          </a>
        </div>
      )}
    </header>
  );
}
