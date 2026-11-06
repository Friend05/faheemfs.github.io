import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { getCaseStudy } from '../data/portfolio';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export function CaseStudyPage() {
  const { id } = useParams();
  const caseStudy = id ? getCaseStudy(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  if (!caseStudy) {
    return (
      <main className="min-h-screen grid place-items-center bg-white px-5 py-24 text-slate-900 font-sans">
        <div className="max-w-md p-8 text-center rounded-xl border border-slate-200">
          <h1 className="text-xl font-bold text-slate-900">
            Case Study Not Found
          </h1>
          <p className="text-xs text-slate-500 mt-2">
            The requested project could not be found.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors"
          >
            <ArrowLeft size={14} />
            Return to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 selection:bg-slate-900 selection:text-white relative font-sans">
      <SiteHeader />

      <main className="pt-28 sm:pt-32 pb-20 px-6 max-w-4xl mx-auto text-left">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to={{ pathname: '/', hash: '#work' }}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Back to Selected Work</span>
          </Link>
        </div>

        {/* Header */}
        <section className="mb-10 pb-8 border-b border-slate-200">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            {caseStudy.projectType} · {caseStudy.focusArea}
          </p>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-3">
            {caseStudy.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            {caseStudy.strapline}
          </p>

          {/* Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
            {([
              ['Role', caseStudy.role],
              ['Timeline', caseStudy.duration],
              ['Focus', caseStudy.focusArea],
              ['Impact', caseStudy.impact.split('·')[0].trim()],
            ] as const).map(([label, value]) => (
              <div key={label}>
                <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  {label}
                </p>
                <p className="text-xs sm:text-sm text-slate-900 font-semibold mt-0.5 truncate">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Content */}
        <div className="space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
              Overview
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {caseStudy.overview}
            </p>
            {caseStudy.disclaimer && (
              <p className="mt-3 text-xs text-slate-500 italic">
                Note: {caseStudy.disclaimer}
              </p>
            )}
          </section>

          {/* Challenge & Objectives */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-3">
                Problem &amp; Constraints
              </h3>
              <ul className="space-y-2">
                {caseStudy.challenge.map((c) => (
                  <li key={c} className="flex gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <span className="text-slate-400 shrink-0">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-sm text-slate-900 mb-3">
                Objectives
              </h3>
              <ul className="space-y-2">
                {caseStudy.objectives.map((o) => (
                  <li key={o} className="flex gap-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Approach */}
          <section>
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4">
              Execution &amp; Approach
            </h2>
            <div className="space-y-4">
              {caseStudy.approach.map((step, index) => (
                <div key={index} className="p-5 rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-baseline gap-2.5 mb-1">
                    <span className="font-mono text-xs text-slate-400">
                      0{index + 1}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.details.map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Deliverables & Outcomes */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-bold text-sm text-slate-900 mb-3">
                Key Deliverables
              </h3>
              <ul className="space-y-2">
                {caseStudy.outputs.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-white">
              <h3 className="font-bold text-sm text-slate-900 mb-3">
                Outcomes &amp; Signals
              </h3>
              <ul className="space-y-2">
                {caseStudy.successSignals.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <span className="text-slate-400">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Tools */}
          <section className="pt-4 border-t border-slate-200">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
              Tools &amp; Methods
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Takeaway */}
          <section className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
              Key Takeaway
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-800 mb-5">
              {caseStudy.reflection}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 text-white font-medium text-xs hover:bg-slate-800 transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to={{ pathname: '/', hash: '#work' }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 font-medium text-xs transition-colors"
              >
                <span>View All Work</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
