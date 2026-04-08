import { Users, Calendar, ShieldCheck, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

const trustItems = [
  { icon: Users, text: '5000+ Happy Patients', sub: 'Trusted by Pilsen' },
  { icon: Calendar, text: '10+ Years Experience', sub: 'Expertise You Can Trust' },
  { icon: ShieldCheck, text: 'Advanced Technology', sub: 'Precision Care' },
  { icon: CreditCard, text: 'Medicaid & PPO Accepted', sub: 'Accessible Dentistry' },
];

export default function TrustBar() {
  return (
    <section className="bg-bg-tint py-12 md:py-16 border-y border-border-subtle/50">
      <div className="container mx-auto px-5 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-5 group"
            >
              <div className="bg-white w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 md:group-hover:-translate-y-2 shrink-0">
                <item.icon size={24} className="md:w-[28px] md:h-[28px]" />
              </div>
              <div className="text-left md:text-center">
                <div className="text-base md:text-lg font-bold text-slate-900 mb-0.5 md:mb-1 leading-tight">
                  {item.text}
                </div>
                <div className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  {item.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
