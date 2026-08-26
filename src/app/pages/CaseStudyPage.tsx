import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Check, Download, Search, ShieldCheck, Target, Layers, Sparkles } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { getCaseStudy, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { MouseGlow } from '../components/MouseGlow';

export function CaseStudyPage() {
  const { id } = useParams();
  const caseStudy = id ? getCaseStudy(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  if (!caseStudy) {
    return (
      <main className="min-h-screen grid place-items-center bg-[#f8fafc] px-5 py-24 text-slate-900 font-sans">
        <MouseGlow />
        <div className="bg-white max-w-lg p-8 text-center rounded-3xl border border-slate-200 shadow-xl">
          <h1 className="text-2xl font-bold font-display text-slate-900">
            Dossier File Not Found
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-mono">
            The requested case study could not be located in system logs.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xs uppercase shadow-md hover:shadow-lg transition-all"
          >
            <ArrowLeft size={14} />
            Return to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900 relative font-sans">
      {/* Smooth Mouse Tracking Spotlight */}
      <MouseGlow />

      {/* Global Header Navigation */}
      <SiteHeader />

      {/* Soft Ambient Mesh Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-violet-200/30 to-pink-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-200/35 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <main className="pt-36 sm:pt-40 pb-20 px-6 max-w-[1140px] mx-auto relative z-10 text-left">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to={{ pathname: '/', hash: '#work' }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:border-slate-300 shadow-sm transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft size={14} />
            <span>Back to Case Studies</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles size={13} className="text-indigo-600" />
              {caseStudy.projectType} • {caseStudy.focusArea}
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-4 font-display">
              {caseStudy.title}
            </h1>

            <p className="text-base sm:text-xl text-indigo-600 leading-relaxed mb-8 max-w-3xl font-semibold">
              {caseStudy.strapline}
            </p>
            
            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {([
                ['Tactical Role', caseStudy.role],
                ['Timeline', caseStudy.duration],
                ['Focus Area', caseStudy.focusArea],
                ['Primary Platform', caseStudy.tools[0]],
              ] as const).map(([label, value]) => (
                <div key={label} className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    {label}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-900 font-bold truncate">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Main Content Sections */}
        <div className="space-y-8">
          
          {/* Overview Card */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md shadow-slate-200/50">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2 font-display">
              <Search className="w-5 h-5 text-indigo-600" />
              Executive Summary &amp; Context
            </h2>
            <div className="text-slate-600 leading-relaxed text-sm sm:text-base">
              {caseStudy.overview}
            </div>
            {caseStudy.disclaimer && (
              <div className="mt-4 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
                <strong>NOTE:</strong> {caseStudy.disclaimer}
              </div>
            )}
          </section>

          {/* Challenge & Objectives Grid */}
          <section className="grid sm:grid-cols-2 gap-6">
             <div className="bg-rose-50/60 rounded-3xl p-6 sm:p-8 border border-rose-200/80 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-rose-900 font-display">The Challenge Matrix</h3>
               <ul className="space-y-3">
                 {caseStudy.challenge.map(c => (
                   <li key={c} className="flex gap-2.5 text-xs sm:text-sm text-slate-700">
                     <span className="text-rose-600 font-bold shrink-0">•</span>
                     <span>{c}</span>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="bg-emerald-50/60 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-emerald-900 font-display">Mission Objectives</h3>
               <ul className="space-y-3">
                 {caseStudy.objectives.map(o => (
                   <li key={o} className="flex gap-2.5 text-xs sm:text-sm text-slate-700">
                     <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                     <span>{o}</span>
                   </li>
                 ))}
               </ul>
             </div>
          </section>

          {/* Tactical Approach */}
          <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md shadow-slate-200/50">
            <h2 className="text-xl font-bold text-slate-900 mb-6 font-display">Tactical Approach &amp; Delivery</h2>
            <div className="space-y-4">
              {caseStudy.approach.map((step, index) => (
                <div key={index} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex gap-4">
                   <div className="font-mono font-bold text-2xl text-indigo-400 shrink-0">
                     0{index+1}
                   </div>
                   <div>
                     <h4 className="font-bold text-base text-slate-900 mb-1 font-display">{step.title}</h4>
                     <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">{step.description}</p>
                     <div className="flex flex-wrap gap-1.5">
                       {step.details.map(d => (
                         <span key={d} className="px-2.5 py-1 bg-white text-slate-700 rounded-lg text-xs font-semibold border border-slate-200">
                           {d}
                         </span>
                       ))}
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Delivered & Success Signals */}
          <section className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-slate-900 font-display">Work Delivered</h3>
               <div className="space-y-2.5">
                 {caseStudy.outputs.map(o => (
                   <div key={o} className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 font-medium flex items-center gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                     <span>{o}</span>
                   </div>
                 ))}
               </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
               <h3 className="font-bold text-lg mb-4 text-slate-900 font-display">Signals of Success</h3>
               <div className="space-y-3">
                 {caseStudy.successSignals.map(s => (
                   <div key={s} className="flex gap-2.5 text-xs sm:text-sm text-slate-700">
                     <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                     <span>{s}</span>
                   </div>
                 ))}
               </div>
            </div>
          </section>

          {/* Applied Tools */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider mb-3 font-mono">
              Applied Tech Stack &amp; Methodologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-50 text-slate-800 text-xs font-semibold border border-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* Reflection Card */}
          <section className="bg-gradient-to-r from-indigo-50/80 via-purple-50/60 to-pink-50/60 p-8 sm:p-10 rounded-3xl border border-indigo-100 shadow-sm">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-700 mb-2">Tactical Reflection</div>
            <p className="text-base sm:text-xl font-normal leading-relaxed text-slate-800 mb-6 italic">
              "{caseStudy.reflection}"
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={{ pathname: '/', hash: '#contact' }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-xs uppercase shadow-md hover:shadow-lg transition-all"
              >
                <span>Initiate Collaboration</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                to={{ pathname: '/', hash: '#work' }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 font-semibold text-xs transition-all"
              >
                <span>Browse More Projects</span>
              </Link>
            </div>
          </section>

        </div>

      </main>

      {/* Global Footer */}
      <SiteFooter />
    </div>
  );
}
