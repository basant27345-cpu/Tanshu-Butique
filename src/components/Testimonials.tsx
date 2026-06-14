import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonialsData = [
  {
    name: "Priya Sharma",
    location: "Gurgaon",
    text: "Tanshu Boutique has been my go-to for years. The fitting of my bridal lehenga was absolutely perfect. Highly recommend visiting them in Om Prakash Market!",
    rating: 5
  },
  {
    name: "Meera Singh",
    location: "Sector 17 A, Gurgaon",
    text: "The best tailor in Sector 17 A. They always deliver on time and their custom blouse designs are so elegant. Great customer service and attention to detail.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    location: "Sohna Road",
    text: "I gave them a very complex reference image for a designer suit, and they replicated it beautifully with premium fabrics. Absolutely worth it.",
    rating: 5
  }
];

export default function Testimonials() {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0 && name.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setName('');
        setReview('');
      }, 5000);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-5xl font-semibold text-stone-900 text-center mb-16">
          Words from Our Clients
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonialsData.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="font-sans text-stone-700 leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="border-t border-stone-100 pt-4">
                <p className="font-semibold text-stone-900">{t.name}</p>
                <p className="text-sm font-sans text-stone-500">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Submission Section */}
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-2">Leave a Rating</h3>
            <p className="text-stone-600">We value your feedback. Let us know about your experience at Tanshu Boutique.</p>
          </div>

          {submitted ? (
            <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center border border-green-200">
              <p className="font-semibold mb-2">Thank you for your rating!</p>
              <p>Your feedback helps us continuously improve our custom tailoring services.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center gap-3">
                <label className="text-sm font-medium text-stone-900">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setRating(star)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star 
                        className={`w-8 h-8 ${
                          (hoverRating || rating) >= star 
                            ? 'fill-amber-500 text-amber-500' 
                            : 'text-stone-300'
                        }`} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="reviewerName" className="block text-sm font-medium text-stone-900 mb-2">Name</label>
                <input 
                  type="text" 
                  id="reviewerName" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white" 
                  placeholder="Your Name" 
                />
              </div>

              <div>
                <label htmlFor="reviewText" className="block text-sm font-medium text-stone-900 mb-2">Review (Optional)</label>
                <textarea 
                  id="reviewText" 
                  rows={3} 
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-stone-400 bg-white" 
                  placeholder="Share details of your experience..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={rating === 0}
                className="w-full bg-stone-900 text-white font-medium py-4 rounded-lg hover:bg-stone-800 transition-colors shadow-sm disabled:bg-stone-300 disabled:cursor-not-allowed"
              >
                Submit Rating
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
