import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major PPO insurance plans and Medicaid. Our dedicated team will help you maximize your benefits and handle all the paperwork for you.',
  },
  {
    question: 'Is treatment painful?',
    answer: 'Your comfort is our absolute priority. We use advanced technology and gentle techniques to ensure a virtually pain-free experience. We also offer various sedation options for anxious patients.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Absolutely. We offer flexible financing options through CareCredit and Sunbit, allowing you to pay for your treatment in affordable monthly installments, often with 0% interest.',
  },
  {
    question: 'How long does treatment take?',
    answer: 'Treatment times vary depending on the procedure. Routine cleanings take about an hour, while more complex treatments like implants or Invisalign depend on your specific needs. We always provide a clear timeline during your consultation.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-bg-tint">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-[1.1]">
              Common <br />
              <span className="text-editorial text-primary">Questions.</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Find answers to common questions about our services, insurance, and what to expect during your visit.
            </p>
          </div>

          <div className="lg:w-2/3">
            <div className="space-y-6 mb-10 md:mb-12">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-[32px] overflow-hidden transition-all duration-500 border ${
                    openIndex === index ? 'bg-white border-primary shadow-xl' : 'bg-white/50 border-border-subtle hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left transition-colors"
                  >
                    <span className="text-xl font-bold text-slate-900">{faq.question}</span>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-bg-tint text-primary'
                    }`}>
                      {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="p-8 pt-0 text-slate-600 leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Still have questions card moved here */}
            <div className="bg-white p-8 rounded-[32px] border border-border-subtle shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <HelpCircle size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-lg">Still have questions?</div>
                  <p className="text-sm text-slate-500">Our team is here to help you with any specific concerns you might have.</p>
                </div>
              </div>
              <a href="tel:3127337454" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-dark transition-all shadow-lg whitespace-nowrap">
                Call us at (312) 733-7454
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
