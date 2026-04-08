import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const segments = [
  {
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth. Restore your smile's function and aesthetics.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    cta: "Book Implant Consultation",
    link: "#appointment-section"
  },
  {
    title: "Smile Makeover",
    description: "A custom combination of cosmetic treatments to give you the bright, perfect smile you've always wanted.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    cta: "Get Smile Assessment",
    link: "#appointment-section"
  },
  {
    title: "Invisalign",
    description: "Straighten your teeth discreetly with clear, removable aligners. No wires, no brackets, just results.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    cta: "Check Invisalign Pricing",
    link: "#appointment-section"
  }
];

export default function UserSegmentation() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">How Can We Help You Today?</h2>
          <p className="text-xl text-slate-600">Choose your path to a healthier, more confident smile. We specialize in high-end restorative and cosmetic dentistry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10,
                rotate: [0, -1, 1, -1, 0],
                transition: { duration: 0.5 }
              }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[40px] aspect-[4/5] cursor-pointer shadow-lg hover:shadow-2xl"
              onClick={() => scrollToSection(segment.link)}
            >
              <img
                src={segment.image}
                alt={segment.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="text-3xl font-bold text-white mb-4">{segment.title}</h3>
                <p className="text-white/80 mb-8 line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {segment.description}
                </p>
                <div className="flex items-center gap-2 text-white font-bold group-hover:translate-x-2 transition-transform">
                  <span>{segment.cta}</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
