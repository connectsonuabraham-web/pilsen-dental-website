import { CalendarCheck, ClipboardList, HeartPulse, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: CalendarCheck,
    title: 'Expert Consultation',
    description: 'Meet with our specialists to discuss your goals and undergo a comprehensive 3D digital scan.',
  },
  {
    icon: ClipboardList,
    title: 'Custom Treatment Plan',
    description: 'Receive a personalized roadmap designed to achieve your ideal aesthetic and functional results.',
  },
  {
    icon: HeartPulse,
    title: 'Painless Procedure',
    description: 'Experience anxiety-free care in our modern clinic, utilizing the latest in gentle dental technology.',
  },
  {
    icon: Sparkles,
    title: 'Reveal Your New Smile',
    description: 'Walk out with a transformed smile that looks natural, feels great, and lasts a lifetime.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-5 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start md:items-end mb-16 md:mb-24">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-7xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight md:leading-[1.1]">
              Your Smile <br />
              <span className="text-editorial text-primary">Transformation Process.</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We've refined every step of the patient journey to ensure a seamless, high-end experience from your first visit to your final reveal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="mb-6 md:mb-10 relative">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-bg-tint rounded-2xl md:rounded-[32px] flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 md:group-hover:-translate-y-2 group-hover:shadow-xl">
                  <step.icon size={28} className="md:w-[40px] md:h-[40px]" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-32 w-full border-t-2 border-dashed border-slate-100 -z-10"></div>
                )}
              </div>
              <div className="text-primary font-bold text-[10px] md:text-xs uppercase tracking-widest mb-3 md:mb-4">Step 0{index + 1}</div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
