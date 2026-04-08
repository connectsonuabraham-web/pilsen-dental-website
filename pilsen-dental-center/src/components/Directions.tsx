import { motion } from 'motion/react';
import { MapPin, Navigation, Phone, Mail } from 'lucide-react';

export default function Directions() {
  return (
    <section id="directions" className="py-24 bg-bg-tint">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center mb-20">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Visit Our <br />
              <span className="text-editorial text-primary">Pilsen Clinic.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Conveniently located in the heart of Pilsen, Chicago. We offer easy access and a welcoming atmosphere for all our patients.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Address</div>
                  <div className="text-lg font-bold text-slate-900">726 W. 18th St. Chicago, IL 60608</div>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</div>
                  <div className="text-lg font-bold text-slate-900">(312) 733-7454</div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</div>
                  <div className="text-lg font-bold text-slate-900">info@pilsendental.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[48px] overflow-hidden shadow-2xl border-8 border-white relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.234567890123!2d-87.6456789!3d41.8581234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cf123456789%3A0x1234567890abcdef!2s726%20W%2018th%20St%2C%20Chicago%2C%20IL%2060608!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pilsen Dental Center Location"
              ></iframe>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=726+W+18th+St+Chicago+IL+60608', '_blank')}
            className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-primary-dark transition-all flex items-center gap-4 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <Navigation size={24} />
            Get Directions
          </button>
        </div>
      </div>
    </section>
  );
}
