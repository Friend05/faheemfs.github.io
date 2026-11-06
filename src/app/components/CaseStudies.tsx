import { useState } from 'react';
import { ArrowUpRight, X, Check } from 'lucide-react';
import { Link } from 'react-router';
import { caseStudies, type CaseStudy } from '../data/portfolio';

export function CaseStudies() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-left">
        {/* Section Header */}
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            Selected Work &amp; Case Studies
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Operations, AI Evals &amp; Analytical Projects
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mt-1.5">
            Practical deliverables across SaaS product operations, end-to-end QA &amp; evaluation rubrics, and executive KPI reporting.
          </p>
        </div>

        {/* Clean 2-Column Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">
                    {study.focusArea}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {study.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  {study.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {study.strapline}
                </p>

                {/* Key Outputs */}
                <div className="space-y-1.5 mb-6">
                  {study.outputs.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check size={13} className="text-slate-900 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tools */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Quick Summary
                  </button>
                  <Link
                    to={`/case-study/${study.id}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-slate-600 transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Summary Modal */}
        {selectedStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-xs">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8 shadow-xl relative text-left">
              <button
                onClick={() => setSelectedStudy(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-1">
                {selectedStudy.projectType} · {selectedStudy.focusArea}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                {selectedStudy.title}
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {selectedStudy.overview}
              </p>

              <div className="space-y-5 text-sm">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedStudy.outputs.map((out, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check size={14} className="text-slate-900 shrink-0 mt-0.5" />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                    Outcomes
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedStudy.successSignals.map((sig, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <span className="text-slate-400">•</span>
                        <span>{sig}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to={`/case-study/${selectedStudy.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-colors"
                >
                  <span>Full Case Study</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
