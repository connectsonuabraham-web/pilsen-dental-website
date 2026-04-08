import { motion } from 'motion/react';
import { Sparkles, Shield, Heart, Coffee } from 'lucide-react';

export default function ClinicExperience() {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-5 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24 max-w-7xl mx-auto">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <h2 className="text-3xl md:text-7xl font-bold text-slate-900 mb-6 md:mb-10 leading-tight md:leading-[1.1]">
              A Modern <br />
              <span className="text-editorial text-primary">Sanctuary.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 md:mb-12">
              Our clinic is designed to provide a calm, welcoming environment with the latest dental technology, ensuring every visit is comfortable and stress-free. We prioritize your well-being from the moment you walk through our doors.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              <div className="group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-bg-tint rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Sparkles size={24} className="md:w-[28px] md:h-[28px]" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Modern Tech</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Advanced diagnostic tools and treatment technology for precise care.</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-bg-tint rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Shield size={24} className="md:w-[28px] md:h-[28px]" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Safe & Secure</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">The highest standards of sterilization and patient safety protocols.</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-bg-tint rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Heart size={24} className="md:w-[28px] md:h-[28px]" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Calm Setting</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">A soothing atmosphere designed to help you feel relaxed and at ease.</p>
              </div>
              <div className="group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-bg-tint rounded-xl md:rounded-2xl flex items-center justify-center text-primary mb-4 md:mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Coffee size={24} className="md:w-[28px] md:h-[28px]" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3">Patient Comfort</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">Complimentary refreshments and amenities for a pleasant experience.</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[32px] md:rounded-[72px] blur-2xl"></div>
              <div className="relative rounded-[32px] md:rounded-[64px] overflow-hidden shadow-xl md:shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Dental Experience" 
                  className="w-full h-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
