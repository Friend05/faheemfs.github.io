import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Sparkles, CheckCircle2, Award, Building2 } from 'lucide-react';
import { experience, education } from '../data/portfolio';

export function Experience() {
  const degree = education.qualification || (education as any).degree || 'B.E. in Electronics & Communication Engineering';
  const school = education.school || (education as any).institution || 'Velammal Institute of Technology, Chennai (Anna University)';
  const dates = education.dates || (education as any).period || '2023 - 2027';

  return (
    <section id="experience" className="py-24 relative bg-slate-50/60 border-t border-slate-200/80 overflow-hidden">
      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles size={13} className="text-indigo-600" />
            Track Record &amp; Education
          </div>
          <h2 className="text-[clamp(2.2rem,3.5vw,3rem)] font-extrabold text-slate-900 leading-tight font-display">
            Professional Experience &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">Engineering Roots</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mt-3 text-base sm:text-lg">
            Demonstrated impact across cross-regional SaaS product operations, agile sprints, and deep analytical foundations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-indigo-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 relative"
          >
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {experience.title}
                    </h3>
                    <span className="text-xs font-mono font-bold px-3 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                      Completed
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-indigo-600 flex items-center gap-1.5">
                    <Building2 size={14} />
                    {experience.company} <span className="text-slate-300">•</span> {experience.market}
                  </p>
                  <p className="text-slate-500 text-xs font-mono mt-0.5">{experience.dates}</p>
                </div>
              </div>
              
              {/* Bullets */}
              <ul className="space-y-3 mb-6">
                {experience.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm font-medium text-slate-700">
                    <CheckCircle2 size={16} className="text-indigo-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact Metric Strip */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-[11px] font-mono font-bold text-indigo-700 uppercase tracking-wider mb-1">
                Verified Platform Impact
              </div>
              <div className="text-xs sm:text-sm text-slate-800 font-semibold">
                Delivered 25+ Jira sprints and automated Excel KPI models supporting KSA &amp; UAE market scaling.
              </div>
            </div>
          </motion.div>

          {/* Education & Engineering */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 hover:shadow-xl hover:border-indigo-300 rounded-3xl p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 relative"
          >
            <div>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-sm">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {degree}
                    </h3>
                    <span className="text-xs font-mono font-bold px-3 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                      In Progress
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-purple-600">
                    {school}
                  </p>
                  <p className="text-slate-500 text-xs font-mono mt-0.5">{dates}</p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Award size={14} className="text-amber-500" />
                    <span>Analytical Rigor &amp; Systems Thinking</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strong foundational coursework in digital systems, statistical analysis, telemetry signal processing, and IoT hardware integration.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    Hackathons &amp; Innovation
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Smart India Hackathon Finalist — Engineered smart weighing scale with tamper-proof telemetry logging.
                  </p>
                </div>
              </div>
            </div>

            {/* GPA / Location Badge */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500">
                Anna University Affiliated
              </span>
              <span className="text-xs font-mono font-bold text-purple-700">
                Chennai, India
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
