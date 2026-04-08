import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, GraduationCap, Calendar } from 'lucide-react';

const team = [
  {
    name: 'Dr. Hussain Ali',
    role: 'Lead Clinical Director',
    specialization: 'Cosmetic & Restorative Specialist',
    experience: '15+ Years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    description: 'Dr. Hussain Ali is a visionary in restorative dentistry. With over 15 years of experience, he has transformed thousands of smiles using the most advanced implant and cosmetic techniques. He is a frequent speaker at dental conferences and is committed to clinical excellence.',
    stats: [
      { icon: Award, label: 'Master of Implantology' },
      { icon: GraduationCap, label: 'Honors Graduate' },
      { icon: Calendar, label: '15+ Years Experience' }
    ]
  },
  {
    name: 'Dr. Danielle Eglash',
    role: 'Associate Dentist',
    specialization: 'Family & Preventive Care',
    experience: '8+ Years',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800',
    description: 'Dr. Danielle Eglash specializes in family dentistry and preventive care. With a gentle approach and a commitment to education, she ensures that patients of all ages feel at ease while achieving their optimal oral health.',
    stats: [
      { icon: Heart, label: 'Patient Choice Award' },
      { icon: Smile, label: 'Pediatric Specialist' }
    ]
  },
  {
    name: 'Dr. Jose Rosalez',
    role: 'Associate Dentist',
    specialization: 'Oral Surgery & Implants',
    experience: '12+ Years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    description: 'Dr. Jose Rosalez brings extensive experience in oral surgery and implantology. He is known for his precision and compassionate care, helping patients restore their smiles with the latest techniques in modern dentistry.',
    stats: [
      { icon: Shield, label: 'Board Certified' },
      { icon: Sparkles, label: 'Implant Expert' }
    ]
  },
];

import { Heart, Smile, Shield, Sparkles } from 'lucide-react';

export default function Team() {
  const [selectedDoctor, setSelectedDoctor] = useState<typeof team[0] | null>(null);

  return (
    <section id="staff" className="py-24 bg-bg-tint">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
            Expert Hands, <br />
            <span className="text-editorial text-primary">Compassionate Hearts.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            Our team of specialists brings decades of collective experience to every procedure. We are dedicated to providing the highest standard of care in a welcoming environment.
          </p>
          <div className="flex justify-center gap-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-border-subtle">
              <div className="text-3xl font-bold text-primary mb-1">35+</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Years Combined</div>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-border-subtle">
              <div className="text-3xl font-bold text-primary mb-1">10k+</div>
              <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">Smiles Created</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedDoctor(member)}
              className="group flex flex-col p-8 bg-white rounded-[40px] shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-border-subtle"
            >
              <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{member.role}</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-slate-500 text-sm mb-6">{member.specialization}</p>
                <div className="text-primary font-bold text-sm flex items-center gap-2 mt-auto">
                  View Profile <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Doctor Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white rounded-[32px] md:rounded-[48px] shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-10 bg-white/80 backdrop-blur-md p-2 md:p-3 rounded-full text-slate-900 hover:bg-white transition-colors shadow-md"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>
              
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/5 h-64 md:h-auto shrink-0">
                  <img
                    src={selectedDoctor.image}
                    alt={selectedDoctor.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="md:w-3/5 p-8 md:p-16 flex flex-col justify-center">
                  <div className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4">{selectedDoctor.role}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{selectedDoctor.name}</h3>
                  <p className="text-lg md:text-xl text-slate-500 mb-6 md:mb-8">{selectedDoctor.specialization}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                    {selectedDoctor.stats?.map((stat, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600">
                        <div className="text-primary"><stat.icon size={18} className="md:w-5 md:h-5" /></div>
                        <span className="text-xs md:text-sm font-medium">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {selectedDoctor.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { ChevronRight } from 'lucide-react';
