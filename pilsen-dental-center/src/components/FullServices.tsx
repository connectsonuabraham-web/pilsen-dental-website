import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Sparkles, Shield, Heart, Smile } from 'lucide-react';

const services = [
  {
    title: 'Dental Implants',
    description: 'The gold standard for tooth replacement. Permanent, stable, and natural-looking.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Smile Makeovers',
    description: 'A comprehensive approach to aesthetic perfection using veneers, whitening, and more.',
    icon: Sparkles,
    image: 'https://res.cloudinary.com/dhg6olslt/image/upload/w_800,q_90,f_auto/v1775655292/e5ea0b7ef4f742680ea43b2097a732a8_sfavsb.jpg',
  },
  {
    title: 'Invisalign',
    description: 'Clear aligner therapy for a straighter smile without the look of traditional braces.',
    icon: Smile,
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'General Dentistry',
    description: 'Routine cleanings, fillings, and preventive care for the whole family.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
  },
];

export default function FullServices() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-7xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight md:leading-[1.1]">
              Comprehensive <br />
              <span className="text-editorial text-primary">Dental Excellence.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600">
              From routine maintenance to complex restorative procedures, we provide a full spectrum of dental services with a focus on quality and comfort.
            </p>
          </div>
          <button 
            onClick={scrollToAppointment}
            className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group"
          >
            View All Services <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.5 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-[32px] md:rounded-[48px] border-2 border-primary/10 bg-bg-tint hover:border-primary hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden group/card"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 bg-primary text-white group-hover/card:scale-110 transition-transform duration-500">
                      <service.icon size={24} className="md:w-[28px] md:h-[28px]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="bg-primary/10 text-primary text-[8px] md:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-1">Featured</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                    {service.description}
                  </p>
                  <button 
                    onClick={scrollToAppointment}
                    className="font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2 w-fit text-sm md:text-base"
                  >
                    Learn More <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
