import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const featuredTestimonials = [
  {
    name: 'Sarah Johnson',
    text: 'The best dental experience I have ever had. The staff is professional and the results are amazing! My new smile has completely changed my confidence.',
    rating: 5,
    role: 'Smile Makeover Patient'
  },
  {
    name: 'Michael Chen',
    text: 'Pilsen Dental Center transformed my smile with dental implants. I feel so much more confident now. The technology they use is state-of-the-art.',
    rating: 5,
    role: 'Implant Patient'
  }
];

const testimonialsRow1 = [
  {
    name: 'Elena Rodriguez',
    text: 'Very clean clinic and friendly doctors. They explained everything clearly before starting the treatment.',
    rating: 5,
  },
  {
    name: 'David Wilson',
    text: 'I used to be afraid of dentists, but they made me feel so comfortable here. Great for families!',
    rating: 5,
  },
  {
    name: 'Jessica Taylor',
    text: 'Professional, efficient, and kind. The whitening treatment exceeded my expectations.',
    rating: 5,
  },
  {
    name: 'Robert Martinez',
    text: 'Excellent care and state-of-the-art equipment. I am very happy with my new implants.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 mb-32 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Stories of <br />
              <span className="text-editorial text-primary">Transformation.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We don't just treat teeth; we change lives. Read how our patients have regained their confidence through our expert care.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9/5 Google Rating</span>
            </div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {featuredTestimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-bg-tint p-12 rounded-[48px] relative group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-border-subtle"
              >
                <Quote className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors" size={80} />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-xl text-slate-800 mb-8 leading-relaxed font-medium italic relative z-10">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-bold text-slate-900 text-lg">{t.name}</div>
                  <div className="text-primary text-sm font-bold uppercase tracking-widest">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling Row */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
          className="flex gap-10 whitespace-nowrap"
        >
          {[...testimonialsRow1, ...testimonialsRow1].map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-border-subtle shadow-sm w-[400px] flex-shrink-0 whitespace-normal">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 italic leading-relaxed">"{t.text}"</p>
              <div className="font-bold text-slate-900">{t.name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
