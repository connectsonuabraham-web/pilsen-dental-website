import { motion } from 'motion/react';
import { Shield, CreditCard, Heart, CheckCircle2 } from 'lucide-react';

export default function Insurance() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="insurance" className="py-12 md:py-24 bg-bg-tint md:bg-white">
      <div className="container mx-auto px-5 md:px-6">
        <div className="bg-transparent md:bg-bg-tint rounded-none md:rounded-[64px] p-0 md:p-24 border-none md:border border-border-subtle overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl hidden md:block"></div>
          
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-7xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight md:leading-[1.1]">
                Accessible <br />
                <span className="text-editorial text-primary">Excellence.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed">
                We believe that financial considerations should never be a barrier to achieving your dream smile. Our team works tirelessly to ensure your care is as affordable as it is exceptional.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                {[
                  'Most PPO & HMO Plans Accepted',
                  'Medicaid Provider',
                  'Flexible 0% Interest Financing',
                  'Transparent Upfront Pricing'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-bold text-sm md:text-base">
                    <CheckCircle2 className="text-primary md:w-6 md:h-6" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-5 md:gap-6">
              {[
                { title: 'Insurance Optimized', desc: 'We maximize your benefits and handle all the paperwork for you.', icon: Shield, img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400' },
                { title: 'Flexible Financing', desc: 'Monthly payment plans through CareCredit and Sunbit starting at $0 down.', icon: CreditCard, img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400' },
                { title: 'In-House Membership', desc: 'No insurance? Our private membership plan offers significant savings.', icon: Heart, img: 'https://images.unsplash.com/photo-1629909608135-ca29ed974bb9?auto=format&fit=crop&q=80&w=400' }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ 
                    y: -5,
                    rotate: [0, -0.5, 0.5, -0.5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="bg-white p-5 md:p-8 rounded-[20px] md:rounded-[40px] shadow-md md:shadow-sm border border-border-subtle flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 group hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="w-full md:w-32 h-48 md:h-32 rounded-xl md:rounded-3xl overflow-hidden shrink-0">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-primary"><item.icon size={20} className="md:w-6 md:h-6" /></div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900">{item.title}</h3>
                    </div>
                    <p className="text-sm md:text-base text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
