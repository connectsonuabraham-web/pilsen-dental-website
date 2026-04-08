import { motion } from 'motion/react';

const cases = [
  {
    title: 'Full Dental Implants',
    description: 'Complete upper and lower restoration using advanced 3D imaging and titanium implants.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Porcelain Veneers',
    description: 'Custom-crafted veneers to correct spacing, color, and alignment for a perfect smile.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Invisalign Transformation',
    description: 'Discreet alignment correction over 12 months using clear, removable aligners.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
  },
];

export default function BeforeAfter() {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="before-after" className="py-24 bg-bg-tint">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Real Results, <br />
            <span className="text-editorial text-primary">Real Confidence.</span>
          </h2>
          <p className="text-xl text-slate-600">
            Witness the life-changing results our patients have achieved through personalized treatment plans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.5 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-[48px] overflow-hidden shadow-lg border border-border-subtle group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 right-6 flex justify-between">
                  <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">BEFORE</span>
                  <span className="bg-primary text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em]">AFTER</span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
