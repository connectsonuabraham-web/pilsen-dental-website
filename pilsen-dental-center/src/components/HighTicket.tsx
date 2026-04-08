import { motion } from 'motion/react';
import { CheckCircle2, Award, ShieldCheck, Zap } from 'lucide-react';

export default function HighTicket() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-5 md:px-6">
        <div className="relative max-w-7xl mx-auto">
          {/* Background Layered Section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-bg-tint rounded-[40px] md:rounded-[100px] -rotate-2 -z-10 opacity-50"></div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Image Section - Asymmetric & Overflowing */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10">
                <div className="rounded-[32px] md:rounded-[48px] overflow-hidden shadow-xl md:shadow-2xl border-4 md:border-8 border-white">
                  <img 
                    src="https://res.cloudinary.com/dhg6olslt/image/upload/w_900,q_90,f_auto/v1775654177/acabd7a9b8ae7b0fe7883b60bc7dd9c1_w8l2r9.jpg" 
                    alt="Confident Smiling Patient" 
                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[40px] shadow-2xl hidden md:block border border-border-subtle"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                      <Award size={32} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">15+ Years</div>
                      <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Clinical Excellence</div>
                    </div>
                  </div>
                </motion.div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </motion.div>

            {/* Content Section - Transformation Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="lg:w-1/2 relative z-20"
            >
              <div className="bg-white/80 backdrop-blur-md p-6 md:p-16 rounded-[40px] md:rounded-[64px] shadow-lg md:shadow-xl border border-white/50">
                <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight md:leading-[1.1]">
                  Restore Your Smile. <br />
                  <span className="text-editorial text-primary">Reclaim Your Confidence.</span>
                </h2>
                
                <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed">
                  A permanent solution designed to look, feel, and function like your natural teeth — so you can smile, eat, and live with confidence again.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
                  <div className="flex items-start gap-4">
                    <div className="bg-bg-tint p-3 rounded-xl text-primary shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Lifetime Solution</h4>
                      <p className="text-sm text-slate-500">Titanium implants built to last a lifetime.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-bg-tint p-3 rounded-xl text-primary shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Advanced 3D Tech</h4>
                      <p className="text-sm text-slate-500">Precision planning with digital 3D scans.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <button 
                    onClick={scrollToAppointment}
                    className="bg-[#22706B] text-white px-8 py-4 md:px-12 md:py-6 rounded-full font-bold text-lg md:text-2xl hover:bg-[#184E2A] transition-all shadow-xl md:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 w-full text-center"
                  >
                    Start Your Smile Transformation
                  </button>
                  
                  <div className="flex flex-wrap justify-center gap-x-6 md:gap-x-8 gap-y-3">
                    <div className="flex items-center gap-2 text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-widest">
                      <CheckCircle2 className="text-primary" size={14} />
                      <span>Free consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-widest">
                      <CheckCircle2 className="text-primary" size={14} />
                      <span>Same-day appointments</span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] md:text-sm text-slate-500 font-bold uppercase tracking-widest">
                      <CheckCircle2 className="text-primary" size={14} />
                      <span>Trusted by 500+ Patients</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
