export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="#" className="font-serif text-2xl font-semibold text-white tracking-tight mb-4 inline-block">
            Tanshu Boutique
          </a>
          <p className="max-w-sm mt-4 text-stone-500 leading-relaxed">
            Your trusted local partner for premium custom tailoring, bridal wear, and designer outfits in Om Prakash Market, Sector 17 A, Gurgaon, with 26 years of excellence.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-3">
            <li>Om Prakash Market, Sec 17 A</li>
            <li>Gurgaon, HR 122001</li>
            <li>
               <a href="tel:+919711033915" className="hover:text-white transition-colors">
                  +91-9711033915
               </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-stone-800 text-sm text-stone-600 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Tanshu Boutique. All rights reserved.</p>
        <div className="mt-4 md:mt-0 space-x-6">
          <a href="#" className="hover:text-stone-300">Privacy Policy</a>
          <a href="#" className="hover:text-stone-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
