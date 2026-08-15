import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ChevronDown } from 'lucide-react';
import { faqData } from '../data/portfolio';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#ffffff]">
      <div className="w-full max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Plus className="text-[#111827] w-4 h-4 stroke-[3]" /> 
            <span className="text-[0.9rem] font-bold text-[#111827] uppercase tracking-[0.05em]">
              FAQ
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-[#111827]">
            Frequently Asked <span className="text-[#00a86b]">Questions</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'border-[#00a86b]/30 bg-slate-50/50' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-[1.1rem] font-bold text-[#111827] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#00a86b] text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown size={18} className="stroke-[3]" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-[#4b5563] text-[1.05rem] leading-[1.6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
