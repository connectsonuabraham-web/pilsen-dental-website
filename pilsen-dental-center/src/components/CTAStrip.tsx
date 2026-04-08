import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTAStrip() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-bg-tint border-y border-border-subtle/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-[1.1]">
              Ready to <span className="text-editorial text-primary">Transform?</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
              Book your consultation today and take the first step toward a more confident you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 w-full lg:w-auto">
            <button 
              onClick={scrollToAppointment}
              className="bg-primary text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-primary-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 w-full lg:w-auto flex items-center justify-center gap-3 group"
            >
              Book Appointment <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="tel:3127337454"
              className="bg-white text-primary border-2 border-primary/10 px-12 py-6 rounded-full font-bold text-xl hover:border-primary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:translate-y-0 w-full lg:w-auto flex items-center justify-center gap-4 group"
            >
              <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              (312) 733-7454
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
