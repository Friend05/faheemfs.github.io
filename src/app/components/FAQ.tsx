import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { faqData } from '../data/portfolio';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 relative bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-[900px] mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={13} className="text-indigo-600" />
            Knowledge Base &amp; FAQ
          </div>
          <h2 className="text-[clamp(2.2rem,3.5vw,3rem)] font-extrabold text-slate-900 leading-tight font-display">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">Questions</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mt-3 text-base sm:text-lg">
            Quick insights into my Business Analyst methodologies, SaaS product operations, and technical toolkit.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-slate-50/80 border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/60 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-display">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-xl bg-white text-slate-500 transition-transform duration-300 shrink-0 border border-slate-200 ${
                      isOpen ? 'rotate-180 text-indigo-600 bg-indigo-50 border-indigo-100' : ''
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 font-normal">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
