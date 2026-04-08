import { useState } from 'react';
import { motion } from 'motion/react';

const services = [
  {
    id: 'preventive',
    title: 'Preventive Care',
    description: 'Routine examinations, cleanings, sealants, fluoride treatments, and home care guidance to keep your smile healthy.',
    image: 'https://images.unsplash.com/photo-1593054910314-d7185131f4ec?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'family',
    title: 'Family Dental Care',
    description: 'Composite fillings, crowns, periodontal treatment, and root canal therapy — all designed for maximum comfort.',
    image: 'https://images.unsplash.com/photo-1559832333-548121f97d85?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState<string | null>('preventive');

  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive dental care for you and your family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setActiveId(service.id)}
              className={`rounded-[32px] overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                activeId === service.id 
                  ? 'border-primary shadow-xl scale-[1.02]' 
                  : 'border-slate-100 shadow-sm hover:border-primary/30'
              }`}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10 bg-white">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToAppointment();
                  }}
                  className={`px-8 py-3 rounded-xl font-bold transition-all ${
                    activeId === service.id
                      ? 'bg-primary text-white'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
