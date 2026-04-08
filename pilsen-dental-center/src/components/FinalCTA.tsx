import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 leading-[1.1]">
            Ready for your <br />
            <span className="text-editorial italic opacity-90">perfect smile?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-16 font-medium max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied patients who have transformed their lives with our expert care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <button
              onClick={scrollToAppointment}
              className="bg-white text-primary px-12 py-6 rounded-full font-bold text-xl hover:bg-slate-50 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0 flex items-center gap-3 group"
            >
              Book Your Appointment <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="text-white/60 font-bold text-sm uppercase tracking-[0.2em]">
              Limited Availability This Week
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
