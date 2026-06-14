import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 bg-stone-100">
        <img 
          src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80" 
          alt="Elegant boutique interior and tailored garments" 
          className="w-full h-full object-cover opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-100 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-stone-200 text-xs font-sans text-stone-700 tracking-wide mb-8 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>Top Rated Boutique in Gurgaon, Sector 17 A</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-stone-900 max-w-4xl leading-[1.1] mb-6">
          Exquisite Tailoring & <br className="hidden md:block"/> Designer Wear 
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-stone-600 max-w-2xl mb-10 leading-relaxed">
          Welcome to Tanshu Boutique. With 26 years of excellence in the business, discover personalized fashion, bespoke bridal wear, and impeccable alterations crafted exclusively for you at Om Prakash Market.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded font-medium hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Book an Appointment
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="tel:+919711033915" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded font-medium bg-white text-stone-900 border border-stone-200 hover:bg-stone-50 transition-all">
            Call +91-9711033915
          </a>
        </div>
      </div>
    </section>
  );
}
