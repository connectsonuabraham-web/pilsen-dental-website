import { motion } from 'motion/react';
import { CheckCircle2, Calendar, ShieldCheck, Clock } from 'lucide-react';

export default function AppointmentSection() {
  return (
    <section id="appointment-section" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-5 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-3xl md:text-7xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight md:leading-[1.1]">
            Begin Your <br />
            <span className="text-editorial text-primary">Transformation.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Schedule your consultation today. Our specialists are ready to design your perfect smile in the heart of Pilsen.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-[32px] md:rounded-[64px] border border-border-subtle shadow-[0_16px_32px_-8px_rgba(0,0,0,0.05)] md:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col lg:flex-row">
          {/* Image Side */}
          <div className="lg:w-[45%] h-64 lg:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
              alt="Dentist and Patient Interaction" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Form Side */}
          <div className="lg:w-[55%] p-6 md:p-16 lg:p-24 flex flex-col justify-center bg-bg-tint/30">
            <form className="space-y-6 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane Smith" 
                    className="w-full bg-white border border-slate-100 rounded-xl md:rounded-2xl px-6 py-4 md:px-8 md:py-5 text-slate-900 placeholder:text-slate-300 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm text-sm md:text-base"
                  />
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="jane@example.com" 
                    className="w-full bg-white border border-slate-100 rounded-xl md:rounded-2xl px-6 py-4 md:px-8 md:py-5 text-slate-900 placeholder:text-slate-300 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm text-sm md:text-base"
                  />
                </div>
              </div>

              <div className="space-y-3 md:space-y-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(312) 000-0000" 
                  className="w-full bg-white border border-slate-100 rounded-xl md:rounded-2xl px-6 py-4 md:px-8 md:py-5 text-slate-900 placeholder:text-slate-300 focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all shadow-sm text-sm md:text-base"
                />
              </div>

              <div className="pt-4 md:pt-6">
                <button 
                  type="submit"
                  className="w-full bg-primary text-white py-4 md:py-6 rounded-xl md:rounded-2xl font-bold text-lg md:text-xl hover:bg-primary-dark transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                >
                  Book Appointment Now
                </button>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mt-8 md:mt-10 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={14} />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="text-primary" size={14} />
                    <span>Same-day available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-primary" size={14} />
                    <span>Insurance accepted</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
