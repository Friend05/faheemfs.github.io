import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Sparkles, X, Target, Layers, ExternalLink, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import { caseStudies, type CaseStudy } from '../data/portfolio';

const categories = ['All Projects', 'SaaS Operations', 'Data & KPI Analytics', 'Engineering & Systems'];

export function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const filteredStudies = caseStudies.filter((study) => {
    if (activeCategory === 'All Projects') return true;
    if (activeCategory === 'SaaS Operations') {
      return study.id.includes('warsha') || study.focusArea.toLowerCase().includes('operations');
    }
    if (activeCategory === 'Data & KPI Analytics') {
      return study.id.includes('excel') || study.focusArea.toLowerCase().includes('data') || study.focusArea.toLowerCase().includes('reporting');
    }
    if (activeCategory === 'Engineering & Systems') {
      return study.id.includes('navi') || study.id.includes('disaster') || study.id.includes('smart-weighing');
    }
    return true;
  });

  return (
    <section id="work" className="py-24 relative bg-white border-t border-slate-200/80">
      <div className="w-full max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold font-mono text-indigo-700 uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles size={13} className="text-indigo-600" />
              Verified Project Dossiers
            </div>
            <h2 className="text-[clamp(2.2rem,3.5vw,3rem)] font-extrabold text-slate-900 leading-tight font-display">
              Case Studies &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">Delivered Impact</span>
            </h2>
            <p className="text-slate-600 max-w-xl mt-3 text-base sm:text-lg">
              Explore key business analysis, Excel telemetry models, and SaaS operational frameworks.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200/80 self-start md:self-auto shadow-inner">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-md shadow-indigo-500/25'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between text-left group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider">
                    <ShieldCheck size={12} className="text-indigo-600" />
                    {study.projectType}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-500">
                    {study.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 font-display">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed line-clamp-3">
                  {study.strapline}
                </p>

                {/* Key Deliverables Highlights */}
                <div className="space-y-2 mb-6">
                  {study.outputs.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {study.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold"
                    >
                      {tool}
                    </span>
                  ))}
                  {study.tools.length > 3 && (
                    <span className="px-2 py-1 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 text-xs font-mono">
                      +{study.tools.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Quick Preview
                  </button>
                  <Link
                    to={`/case-study/${study.id}`}
                    className="p-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20 hover:scale-105 transition-all flex items-center justify-center"
                    aria-label="View Full Case Study"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Case Study Modal */}
        <AnimatePresence>
          {selectedStudy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white border border-slate-200/90 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative text-left"
              >
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="absolute top-6 right-6 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                  <ShieldCheck size={13} className="text-indigo-600" />
                  {selectedStudy.projectType} • {selectedStudy.focusArea}
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
                  {selectedStudy.title}
                </h3>
                <p className="text-sm sm:text-base text-indigo-600 font-semibold mb-6">
                  {selectedStudy.strapline}
                </p>

                <div className="space-y-6 text-sm text-slate-700">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2 font-mono">
                      Executive Summary
                    </h4>
                    <p className="leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                      {selectedStudy.overview}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-rose-900 mb-2 font-mono">
                        Key Challenges
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {selectedStudy.challenge.map((c, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-rose-600 font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                      <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-900 mb-2 font-mono">
                        Key Objectives
                      </h4>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {selectedStudy.objectives.map((o, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 mb-2 font-mono">
                      Delivered Outputs
                    </h4>
                    <div className="space-y-2">
                      {selectedStudy.outputs.map((out, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedStudy(null)}
                    className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 text-xs font-bold cursor-pointer"
                  >
                    Close Preview
                  </button>
                  <Link
                    to={`/case-study/${selectedStudy.id}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Open Full Tactical File</span>
                    <ExternalLink size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
