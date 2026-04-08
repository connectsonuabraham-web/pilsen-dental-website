import { motion } from 'motion/react';
import { Star, ShieldCheck, Award } from 'lucide-react';

export default function Hero() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBeforeAfter = () => {
    const element = document.getElementById('before-after');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Dark Green Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dhg6olslt/image/upload/w_1920,q_90,f_auto/v1775655292/e5ea0b7ef4f742680ea43b2097a732a8_sfavsb.jpg"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#0a2e2c]/50"></div>
      </div>

      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-white/90 text-[10px] md:text-sm font-bold tracking-widest uppercase">
                Trusted by 5,000+ Happy Patients
              </span>
            </div>

            <h1 className="text-4xl md:text-8xl font-bold text-white leading-tight md:leading-[0.9] mb-8 md:mb-10 tracking-tighter">
              Transform Your Smile <br />
              <span className="text-editorial text-white/70">with Expert Care.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-white/90 mb-10 md:mb-14 max-w-2xl leading-relaxed font-medium">
              Experience the future of dentistry in Pilsen. We combine advanced technology with a gentle touch to deliver life-changing dental implants and cosmetic smile makeovers.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <button 
                onClick={scrollToAppointment}
                className="w-full md:w-auto bg-[#22706B] text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-[#1a5652] transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0"
              >
                Book Implant Consultation
              </button>
              <button 
                onClick={scrollToBeforeAfter}
                className="w-full md:w-auto bg-transparent border-2 border-white text-white px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-lg md:text-xl hover:bg-white hover:text-[#22706B] transition-all"
              >
                View Transformations
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
