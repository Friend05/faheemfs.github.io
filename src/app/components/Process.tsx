import { motion } from 'motion/react';
import { Route } from 'lucide-react';
import { processSteps } from '../data/portfolio';

export function Process() {
  return (
    <section id="process" className="pf-section pf-section-light py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="flex items-center gap-2 mb-6"
        >
          <Route className="text-[#00a86b] w-5 h-5" />
          <span className="pf-section-label-text font-medium text-[#4b5563]">
            How I Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-[#111827]"
        >
          My standard <span className="text-[#00a86b]">process</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.1 }}
              className="pf-card p-8 bg-slate-50 border border-slate-100 rounded-2xl relative overflow-hidden group hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-6xl font-black text-slate-100 group-hover:text-slate-50 absolute top-4 right-4 transition-colors duration-300 pointer-events-none select-none z-0">
                {step.step}
              </div>
              <div className="relative z-10 mt-8">
                <h3 className="text-xl font-bold text-[#111827] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#4b5563] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
