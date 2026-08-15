import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Check, Download, Search } from 'lucide-react';
import { Link, useParams } from 'react-router';
import { CaseStudyPreview } from '../components/CaseStudyPreview';
import { getCaseStudy, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

export function CaseStudyPage() {
  const { id } = useParams();
  const caseStudy = id ? getCaseStudy(id) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [id]);

  if (!caseStudy) {
    return (
      <main className="min-h-screen grid place-items-center bg-[#f8fafc] px-5 py-24">
        <div className="pf-card max-w-lg p-8 text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#111827]">
            Project not found
          </h1>
          <Link to="/" className="pf-btn pf-btn-primary mt-8">Back to portfolio</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Internal pages use a solid dark header instead of clear glass to distinguish */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#050b09] text-white py-4 px-6 flex justify-between items-center shadow-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium hover:text-[#00a86b] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
        <a href={withBase(siteMeta.resumePath)} download className="pf-btn pf-btn-secondary text-sm px-4 py-2">
          <Download className="w-4 h-4" />
          Resume
        </a>
      </header>

      <div className="pt-32 pb-16 px-5 sm:px-8 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[1fr_0.88fr] items-center mb-24">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="pf-badge">{caseStudy.projectType}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111827] leading-tight mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-lg text-[#4b5563] leading-relaxed mb-10 max-w-2xl">
              {caseStudy.strapline}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {([
                ['Role', caseStudy.role],
                ['Timeline', caseStudy.duration],
                ['Tools', caseStudy.tools.slice(0, 3).join(', ')],
              ] as const).map(([label, value]) => (
                <div key={label} className="pf-card p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00a86b] mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-[#111827] font-medium">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.97, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
             <CaseStudyPreview study={caseStudy} />
          </motion.div>
        </section>

        {/* Content sections */}
        <div className="space-y-16 max-w-4xl">
          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-6 flex items-center gap-2">
              <Search className="w-5 h-5 text-[#00a86b]" />
              Overview
            </h2>
            <div className="pf-card p-8 text-[#4b5563] leading-relaxed text-lg">
              {caseStudy.overview}
            </div>
            {caseStudy.disclaimer && (
              <div className="mt-4 p-4 rounded-xl bg-orange-50 border border-orange-100 text-orange-800 text-sm">
                <strong>Context Note:</strong> {caseStudy.disclaimer}
              </div>
            )}
          </section>

          <section className="grid sm:grid-cols-2 gap-6">
             <div className="pf-card p-8">
               <h3 className="font-bold text-xl mb-6 text-[#111827]">The Challenge</h3>
               <ul className="space-y-3">
                 {caseStudy.challenge.map(c => (
                   <li key={c} className="flex gap-3 text-[#4b5563]">
                     <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                     {c}
                   </li>
                 ))}
               </ul>
             </div>
             <div className="pf-card p-8">
               <h3 className="font-bold text-xl mb-6 text-[#111827]">Objectives</h3>
               <ul className="space-y-3">
                 {caseStudy.objectives.map(o => (
                   <li key={o} className="flex gap-3 text-[#4b5563]">
                     <Check className="w-4 h-4 text-[#00a86b] mt-1 shrink-0" />
                     {o}
                   </li>
                 ))}
               </ul>
             </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#111827] mb-6">Approach</h2>
            <div className="space-y-6">
              {caseStudy.approach.map((step, index) => (
                <div key={index} className="pf-card p-6 flex gap-6">
                   <div className="font-display font-bold text-3xl text-[rgba(0,168,107,0.2)]">
                     0{index+1}
                   </div>
                   <div>
                     <h4 className="font-bold text-lg text-[#111827] mb-2">{step.title}</h4>
                     <p className="text-[#4b5563] mb-4">{step.description}</p>
                     <div className="flex flex-wrap gap-2">
                       {step.details.map(d => (
                         <span key={d} className="px-3 py-1 bg-[#f3f4f6] text-[#4b5563] rounded-md text-sm">
                           {d}
                         </span>
                       ))}
                     </div>
                   </div>
                </div>
              ))}
            </div>
          </section>

          <section className="grid sm:grid-cols-2 gap-6">
            <div className="pf-card p-8">
               <h3 className="font-bold text-xl mb-6 text-[#111827]">Work Delivered</h3>
               <div className="space-y-2">
                 {caseStudy.outputs.map(o => (
                   <div key={o} className="p-3 bg-[#f8fafc] border border-slate-100 rounded-lg text-sm text-[#4b5563] font-medium">
                     {o}
                   </div>
                 ))}
               </div>
            </div>
            <div className="pf-card p-8">
               <h3 className="font-bold text-xl mb-6 text-[#111827]">Signals of Success</h3>
               <div className="space-y-4">
                 {caseStudy.successSignals.map(s => (
                   <div key={s} className="flex gap-3 text-[#4b5563]">
                     <Check className="w-5 h-5 text-[#00a86b] shrink-0" />
                     {s}
                   </div>
                 ))}
               </div>
            </div>
          </section>
        </div>

        {/* Reflection Footer */}
        <section className="mt-24 pf-card p-10 bg-[#00a86b] text-white border-none">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[rgba(255,255,255,0.7)] mb-4">Reflection</h2>
          <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-3xl mb-8">
            "{caseStudy.reflection}"
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to={{pathname: '/', hash: '#contact'}} className="pf-btn bg-white text-[#00a86b] px-6 py-3">
              Work with me <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
