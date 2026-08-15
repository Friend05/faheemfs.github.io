import { motion } from 'motion/react';
import { Plus, ArrowRight, FolderKanban } from 'lucide-react';
import { caseStudies } from '../data/portfolio';

export function CaseStudies() {
  return (
    <section id="work" className="py-24 bg-[#ffffff] overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Plus className="text-[#111827] w-4 h-4 stroke-[3]" /> 
              <span className="text-[0.9rem] font-bold text-[#111827] uppercase tracking-[0.05em]">
                Selected Work
              </span>
            </div>
            <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-[#111827]">
              Case Studies &amp; <span className="text-[#00a86b]">Projects</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-300 transition-colors pointer-events-none opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-800 hover:border-slate-300 transition-colors pointer-events-none opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Carousel Grid (using flex overflow for exact match feel) */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-none w-[85vw] sm:w-[400px] md:w-[450px] snap-center bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05),_0_4px_6px_-2px_rgba(0,0,0,0.025)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-[#00a86b]/10 group-hover:border-[#00a86b]/20 transition-colors">
                  <FolderKanban className="w-6 h-6 text-slate-600 group-hover:text-[#00a86b] transition-colors" />
                </div>
                <span className="text-[0.75rem] font-bold px-3 py-1 rounded-full bg-[rgba(0,168,107,0.1)] text-[#00a86b] uppercase tracking-[0.05em]">
                  {study.projectType}
                </span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-[#111827] leading-[1.2] tracking-[-0.02em] mb-4">
                {study.title}
              </h3>
              
              <p className="text-[#4b5563] leading-[1.6] text-[0.95rem] mb-6">
                {study.teaser}
              </p>
              
              <div className="mt-auto">
                <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100">
                  <div className="text-[#111827] text-[0.85rem] font-bold uppercase tracking-wider mb-1 opacity-60">Key Impact</div>
                  <div className="text-[#111827] text-[0.95rem] font-semibold">
                    {study.impact}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-[#00a86b] text-[0.9rem] font-semibold pt-4 border-t border-slate-100 cursor-not-allowed opacity-70">
                  Detailed Case Study Coming Soon
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Hide scrollbar styles directly in component for clean CSS */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
