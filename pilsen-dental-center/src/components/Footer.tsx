import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Meet Our Staff', href: '#staff' },
  { name: 'Services', href: '#services' },
  { name: 'Transformations', href: '#before-after' },
  { name: 'Insurance', href: '#insurance' },
  { name: 'Promotions', href: '#promotions' },
];

export default function Footer() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white pt-16 md:pt-32 pb-12 border-t border-border-subtle relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 mb-16 md:mb-24">
          <div className="lg:col-span-5">
            <img 
              src="https://res.cloudinary.com/dhg6olslt/image/upload/w_800,q_90,f_auto/v1775655529/91_9995802311_2_n2odre.png" 
              alt="Pilsen Dental Center" 
              className="h-16 md:h-28 object-contain mb-8 md:mb-10"
              referrerPolicy="no-referrer"
            />
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight mb-6 md:mb-8">
              Experience the <br />
              <span className="text-editorial text-primary">Art of Dentistry.</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-md">
              Providing premium, human-centric dental care in Pilsen since 2014. We combine advanced technology with a gentle touch.
            </p>
            <button 
              onClick={scrollToAppointment}
              className="bg-primary text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-xl flex items-center gap-3 group w-full sm:w-auto justify-center"
            >
              Book Your Visit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12">
            <div>
              <h3 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 md:mb-8">Navigation</h3>
              <ul className="flex flex-col gap-4 md:gap-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-600 hover:text-primary transition-colors font-bold text-xs md:text-sm uppercase tracking-widest">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="sm:col-span-2">
              <h3 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 md:mb-8">Contact Information</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-bg-tint p-3 rounded-xl text-primary shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1 text-sm md:text-base">Our Location</div>
                    <div className="text-slate-600 text-xs md:text-sm">726 W. 18th St. Chicago, IL 60608</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-bg-tint p-3 rounded-xl text-primary shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1 text-sm md:text-base">Call Us</div>
                    <div className="text-slate-600 text-xs md:text-sm">(312) 733-7454</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-bg-tint p-3 rounded-xl text-primary shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 mb-1 text-sm md:text-base">Email Us</div>
                    <div className="text-slate-600 text-xs md:text-sm">info@pilsendental.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border-subtle gap-8">
          <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © 2026 Pilsen Dental Center. All rights reserved.
          </div>
          <div className="flex gap-10 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Large Faded Logo Text */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden h-40 flex items-end justify-center">
        <img 
          src="https://res.cloudinary.com/dhg6olslt/image/upload/w_800,q_90,f_auto/v1775655529/91_9995802311_2_n2odre.png"
          alt=""
          className="h-[20vw] object-contain opacity-5 translate-y-1/4"
          referrerPolicy="no-referrer"
        />
      </div>
    </footer>
  );
}
