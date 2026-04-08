import { motion } from 'motion/react';

const promotions = [
  {
    title: 'Implant Consultation & CBCT',
    description: 'Start your journey to a perfect smile with a comprehensive consultation and 3D imaging.',
    price: '$175',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'In-Office Whitening',
    description: 'Brighten your smile by up to 8 shades in just one visit with our professional whitening system.',
    price: '$299 Only',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Invisalign Consultation',
    description: 'Discover if clear aligners are right for you with a free digital scan and treatment plan.',
    price: 'Free Scan',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Promotions() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="promotions" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6">
            Exclusive Promotions
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Take advantage of our special offers to get the high-quality care you need at an exceptional value.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-16">
          {promotions.map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                rotate: [0, -0.5, 0.5, -0.5, 0],
                transition: { duration: 0.5 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 items-center bg-bg-tint rounded-[32px] md:rounded-[48px] overflow-hidden p-5 md:p-0 shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div className="md:w-1/2 h-64 md:h-[500px] w-full overflow-hidden rounded-[24px] md:rounded-none">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-16">
                <span className="inline-block bg-primary text-white text-[10px] md:text-sm font-bold px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-4 md:mb-6 uppercase tracking-widest shadow-md">
                  {promo.price}
                </span>
                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6">{promo.title}</h3>
                <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed">
                  {promo.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <button 
                    onClick={scrollToAppointment}
                    className="bg-[#22706B] text-white px-8 py-4 md:px-10 md:py-4 rounded-full font-bold text-lg hover:bg-[#184E2A] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
                  >
                    Claim This Offer
                  </button>
                  <div className="flex flex-row sm:flex-col gap-4 sm:gap-0 text-[10px] text-slate-500 font-medium">
                    <span>Limited time offer</span>
                    <span>Same-day appointments</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
