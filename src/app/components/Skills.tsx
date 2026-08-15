import { motion } from 'motion/react';
import { Plus, Target, BarChart, Settings, LineChart, Users, FileText } from 'lucide-react';
import { capabilityGroups } from '../data/portfolio';

// Map capability indices to distinct icons
const getIcon = (index: number) => {
  const props = { className: "w-6 h-6 text-[#00a86b]" };
  switch (index) {
    case 0: return <Target {...props} />; // Business Analysis
    case 1: return <Settings {...props} />; // Product Operations
    case 2: return <BarChart {...props} />; // Data & Analytics
    case 3: return <LineChart {...props} />; // Growth Strategy
    case 4: return <Users {...props} />; // CRM Workflows
    case 5: return <FileText {...props} />; // Documentation
    default: return <Target {...props} />;
  }
};

export function Skills() {
  return (
    <section id="capabilities" className="py-24 bg-[#f8fafc]">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Plus className="text-[#111827] w-4 h-4 stroke-[3]" /> 
            <span className="text-[0.9rem] font-bold text-[#111827] uppercase tracking-[0.05em]">
              Capabilities
            </span>
          </div>
          <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-[#111827]">
            Business Analysis, <span className="text-[#00a86b]">Data &amp; Growth</span>
          </h2>
          <p className="text-[#4b5563] max-w-[500px] mt-4 text-[1.05rem]">
            Six core capabilities. One cohesive approach to building better products.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilityGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),_0_2px_4px_-1px_rgba(0,0,0,0.03)] border border-[#f3f4f6] relative flex flex-col group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 rounded-full bg-[rgba(0,168,107,0.1)] flex items-center justify-center transition-colors group-hover:bg-[rgba(0,168,107,0.15)]">
                  {getIcon(index)}
                </div>
                <span className="text-xs font-bold text-slate-300">
                  {group.eyebrow}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-[#111827] mb-3">
                {group.title}
              </h3>
              <p className="text-[#4b5563] leading-[1.6] text-[0.95rem] mb-6">
                {group.summary}
              </p>

              <div className="mt-auto pt-4 border-t border-slate-100">
                <ul className="flex flex-col gap-2">
                  {group.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-[#00a86b] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
