import { motion } from 'motion/react';
import { Plus, Briefcase, GraduationCap } from 'lucide-react';
import { experience, education } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="bg-[#f8fafc] py-24 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Plus className="text-[#111827] w-4 h-4 stroke-[3]" /> 
            <span className="text-[0.9rem] font-bold text-[#111827] uppercase tracking-[0.05em]">
              Experience
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-[#111827]">
            Professional <span className="text-[#00a86b]">Background</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-[#f3f4f6] relative flex flex-col group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-5 mb-8">
              <div className="w-12 h-12 rounded-full bg-[rgba(0,168,107,0.1)] text-[#00a86b] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[rgba(0,168,107,0.15)]">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[1.25rem] font-bold text-[#111827] leading-tight mb-1">
                  {experience.title}
                </h3>
                <p className="text-[#4b5563] text-[0.95rem] font-semibold">
                  {experience.company} <span className="mx-1">&middot;</span> {experience.market}
                </p>
                <p className="text-slate-400 text-sm mt-1 uppercase tracking-wider font-bold">{experience.dates}</p>
              </div>
            </div>
            
            <p className="text-[#4b5563] mb-8 font-medium leading-[1.6] text-[0.95rem]">
              {experience.summary}
            </p>
            
            <ul className="flex flex-col gap-3 mt-auto pt-6 border-t border-slate-100">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx} className="flex gap-3 text-slate-600 items-start text-[0.9rem] leading-[1.6]">
                  <span className="text-[#00a86b] mt-0.5 shrink-0 font-bold">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-[#f3f4f6] relative flex flex-col group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-5 mb-8">
              <div className="w-12 h-12 rounded-full bg-[rgba(0,168,107,0.1)] text-[#00a86b] flex items-center justify-center shrink-0 transition-colors group-hover:bg-[rgba(0,168,107,0.15)]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-[1.25rem] font-bold text-[#111827] leading-tight mb-1">
                  {education.qualification}
                </h3>
                <p className="text-[#4b5563] text-[0.95rem] font-semibold">
                  {education.school}
                </p>
                <p className="text-slate-400 text-sm mt-1 uppercase tracking-wider font-bold">{education.dates}</p>
              </div>
            </div>
            
            <div className="mt-auto bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="text-[#111827] text-[0.85rem] font-bold uppercase tracking-wider mb-3 opacity-80">Key Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-white text-slate-600 text-sm rounded-lg border border-slate-200 font-semibold shadow-sm"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
