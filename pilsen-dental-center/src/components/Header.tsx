import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Meet Our Staff', href: '#staff' },
  { name: 'Services', href: '#services' },
  { name: 'Schedule', href: '#appointment-section' },
  { name: 'Directions', href: '#directions' },
  { name: 'Insurance', href: '#insurance' },
  { name: 'Promotions', href: '#promotions' },
];

export default function Header() {
  const scrollToAppointment = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center h-full">
          <img 
            src="https://res.cloudinary.com/dhg6olslt/image/upload/w_400,q_90,f_auto/v1775656380/91_9995802311_1_pbxhrl.png" 
            alt="Pilsen Dental Center" 
            className="h-28 -my-8 md:h-[512px] md:-my-48 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Side: Nav + Contact */}
        <div className="flex items-center gap-12">
          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.href === '#appointment-section' ? scrollToAppointment : undefined}
                className="text-base font-bold text-slate-700 hover:text-primary transition-all duration-300 whitespace-nowrap relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="tel:3127337454" className="flex items-center gap-3 text-slate-800 hover:text-primary transition-all duration-300 font-bold text-lg group">
              <div className="bg-bg-tint p-2 rounded-xl group-hover:bg-primary group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              (312) 733-7454
            </a>
            <button 
              onClick={scrollToAppointment}
              className="bg-[#22706B] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#184E2A] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
