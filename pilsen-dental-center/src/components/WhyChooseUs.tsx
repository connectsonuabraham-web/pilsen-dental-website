import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const features = [
  'Advanced 3D Imaging',
  'Convenient Pilsen Location',
  'Specialist-Led Dental Team',
  'Most Insurance Accepted',
  'Flexible Financing Options',
  'Personalized Patient Care',
];

export default function WhyChooseUs() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-bg-tint overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch min-h-[800px]">
        {/* Left Side: Full-height Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
        >
          <img 
            src="https://res.cloudinary.com/dhg6olslt/image/upload/w_1200,q_90,f_auto/v1775655276/67444f4c6a0106001d2c640e_etdtim.jpg" 
            alt="Modern Dental Office" 
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/5"></div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 flex items-center py-12 md:py-24 px-5 md:px-16 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-7xl font-bold text-slate-900 mb-6 md:mb-10 leading-tight md:leading-[1.1]">
              Why Choose <br />
              <span className="text-editorial text-primary">Pilsen Dental.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed">
              Since 2014, we've been providing the Pilsen community with gentle, personalized, high-quality dental care. Our team is dedicated to making every visit comfortable and stress-free.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-12 mb-10 md:mb-16">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="bg-primary/10 p-1.5 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Check size={16} strokeWidth={4} />
                  </div>
                  <span className="text-slate-800 font-bold text-base md:text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
              <button 
                onClick={scrollToAppointment}
                className="bg-primary text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-bold text-lg md:text-xl hover:bg-primary-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto flex items-center justify-center gap-3 group"
              >
                Book Appointment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex flex-row sm:flex-col gap-4 sm:gap-0 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                <span>Free consultation</span>
                <span>Same-day available</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
