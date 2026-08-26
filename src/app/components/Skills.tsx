import { motion } from 'motion/react';
import { Target, BarChart, Settings, LineChart, Users, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { capabilityGroups } from '../data/portfolio';

const getSkillStyle = (index: number) => {
  switch (index) {
    case 0: return { icon: <Target size={18} className="text-indigo-600" />, badge: 'bg-indigo-50 border-indigo-100' };
    case 1: return { icon: <Settings size={18} className="text-sky-600" />, badge: 'bg-sky-50 border-sky-100' };
    case 2: return { icon: <BarChart size={18} className="text-emerald-600" />, badge: 'bg-emerald-50 border-emerald-100' };
    case 3: return { icon: <LineChart size={18} className="text-violet-600" />, badge: 'bg-violet-50 border-violet-100' };
    case 4: return { icon: <Users size={18} className="text-pink-600" />, badge: 'bg-pink-50 border-pink-100' };
    case 5: return { icon: <FileText size={18} className="text-amber-600" />, badge: 'bg-amber-50 border-amber-100' };
    default: return { icon: <Target size={18} className="text-indigo-600" />, badge: 'bg-indigo-50 border-indigo-100' };
  }
};

export function Skills() {
  return (
    <section id="capabilities" className="py-24 relative bg-slate-50/60 border-t border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold font-mono text-indigo-700 uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={13} className="text-indigo-600" />
            Competency Matrix
          </div>
          <h2 className="text-[clamp(2.2rem,3.5vw,3rem)] font-extrabold text-slate-900 leading-tight font-display">
            Business Analysis, <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">Data &amp; Growth Systems</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mt-3 text-base sm:text-lg">
            Six operational competencies structured to turn raw stakeholder ambiguity into high-velocity product execution.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {capabilityGroups.map((group, index) => {
            const { icon, badge } = getSkillStyle(index);
            const items = group.items || (group as any).skills || [];

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-indigo-300 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 relative"
              >
                <div>
                  {/* Top Module Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`p-3 rounded-2xl border ${badge}`}>
                      {icon}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      MODULE 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">
                    {group.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                    {group.summary || (group as any).description}
                  </p>
                </div>

                {/* Skills Bullet List */}
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {items.map((skill: string) => (
                    <div key={skill} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                      <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
