import { Scissors, Palette, Sparkles, Shirt } from 'lucide-react';

const services = [
  {
    icon: <Scissors className="w-6 h-6" />,
    title: "Custom Tailoring",
    description: "Perfectly fitted garments made to your exact measurements. Blouses, suits, formal wear, and casuals."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Bridal Wear",
    description: "Make your big day special with our handcrafted bridal collections and personalized trousseau services."
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Designer Boutique",
    description: "Explore our exclusive, in-house designed collections featuring premium fabrics and unique patterns."
  },
  {
    icon: <Shirt className="w-6 h-6" />,
    title: "Flawless Alterations",
    description: "Expert resizing, hemming, and restyling of your favorite pieces to give them a second life."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-stone-900 mb-6">Our Services</h2>
          <p className="font-sans text-stone-600 text-lg">
            Specializing in ladies wear, we bring 26 years of craftsmanship to every stitch. Visit us in Sector 17 A, Gurgaon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-xl bg-stone-50 border border-stone-100/50 hover:bg-stone-100 transition-colors group">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-stone-800 mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-3">{service.title}</h3>
              <p className="font-sans text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
