import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Details Wrapper */}
          <div>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold text-stone-900 mb-6">
              Visit Tanshu Boutique
            </h2>
            <p className="font-sans text-stone-600 text-lg mb-12">
              Drop by our boutique in Om Prakash Market, or reach out to us to schedule a personalized fitting consultation.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Our Location</h4>
                  <p className="text-stone-600 mt-1">Om Prakash Market, Sector 17 A,<br/>Gurgaon, Haryana 122001</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Call Us</h4>
                  <a href="tel:+919711033915" className="text-stone-600 hover:text-stone-900 mt-1 block">
                    +91-9711033915
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-stone-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900">Opening Hours</h4>
                  <p className="text-stone-600 mt-1">Monday - Saturday: 10:00 AM - 8:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-50 p-8 md:p-12 rounded-2xl border border-stone-200">
            <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-2">Book an Appointment</h3>
            <p className="text-stone-600 mb-8">Leave your details and we'll contact you to confirm your fitting time.</p>

            {submitted ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center border border-green-200">
                <p className="font-semibold mb-2">Thank you!</p>
                <p>Your appointment request has been received. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-900 mb-2">Full Name</label>
                  <input type="text" id="name" required className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white" placeholder="Jane Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-900 mb-2">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white" placeholder="+91 90000 00000" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-stone-900 mb-2">Service Required</label>
                  <select id="service" className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white text-stone-700">
                    <option value="bridal">Bridal Wear Fitting</option>
                    <option value="custom">Custom Tailoring</option>
                    <option value="alterations">Alterations</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-900 mb-2">Message (Optional)</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white" placeholder="Tell us about the design you have in mind..."></textarea>
                </div>
                <button type="submit" className="w-full bg-stone-900 text-white font-medium py-4 rounded-lg hover:bg-stone-800 transition-colors shadow-sm">
                  Send Request
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Embedded Google Maps Full Width */}
        <div className="w-full h-96 md:h-[500px] bg-stone-200 rounded-2xl overflow-hidden relative shadow-inner">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.56994794211!2d77.02674403160867!3d28.4552467140889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d4df6c0397%3A0xeab3a6932de071ce!2sSector%2017A%2C%20Sector%2017%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Tanshu Boutique Map Location"
          ></iframe>
        </div>
        <div className="pt-6 flex justify-center items-center text-sm">
            <a href="https://www.justdial.com/Gurgaon/Tanshu-Boutique-Om-Prakash-Market-Gurgaon-Sector-17/011PXX11-XX11-130304153521-R8M3_BZDET" 
               target="_blank" rel="noopener noreferrer"
               className="text-stone-500 hover:text-stone-900 underline underline-offset-4 transition-colors font-medium">
              View Tanshu Boutique on Justdial
            </a>
        </div>
      </div>
    </section>
  );
}
