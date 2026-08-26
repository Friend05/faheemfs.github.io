import { ArrowRight, Download, Sparkles, TrendingUp, CheckCircle2, Award, Zap, Building2, GitBranch, Lightbulb, Clock, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { profile, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

const heroImpacts = [
  {
    value: '25+',
    label: 'Jira Sprints Delivered',
    sub: 'Cross-functional agile teams',
    icon: GitBranch,
    badgeBg: 'bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white shadow-md shadow-indigo-500/30',
    numberColor: 'text-indigo-600',
    progressBar: 'bg-indigo-600',
    tag: 'Impact 01',
  },
  {
    value: '75+',
    label: 'Product & System Proposals',
    sub: 'Saudi & UAE SaaS portals',
    icon: Lightbulb,
    badgeBg: 'bg-gradient-to-tr from-sky-500 to-sky-600 text-white shadow-md shadow-sky-500/30',
    numberColor: 'text-sky-600',
    progressBar: 'bg-sky-600',
    tag: 'Impact 02',
  },
  {
    value: '14+ hrs',
    label: 'Saved Monthly via Automation',
    sub: 'Dynamic Excel KPI pipelines',
    icon: Clock,
    badgeBg: 'bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-500/30',
    numberColor: 'text-emerald-600',
    progressBar: 'bg-emerald-600',
    tag: 'Impact 03',
  },
  {
    value: 'KSA & UAE',
    label: 'Regional SaaS Impact',
    sub: 'Warsha automotive platform',
    icon: Globe,
    badgeBg: 'bg-gradient-to-tr from-purple-500 to-purple-600 text-white shadow-md shadow-purple-500/30',
    numberColor: 'text-purple-600',
    progressBar: 'bg-purple-600',
    tag: 'Impact 04',
  },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-36 sm:pt-40 pb-16 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50">
      {/* Soft Ambient Mesh Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-violet-200/30 to-pink-200/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-sky-200/35 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-slate-200 shadow-sm shadow-slate-200/50 mb-6 backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600"></span>
          </span>
          <span className="text-xs font-semibold text-slate-700 tracking-wide font-mono">
            BUSINESS ANALYST <span className="text-slate-400">•</span> PRODUCT OPERATIONS &amp; STRATEGY
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold tracking-tight text-slate-900 leading-[1.18] max-w-5xl mb-6 font-display"
        >
          <span>From Complex Data to </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 inline-block">
            Clear Business Strategy
          </span>
          <span className="block text-slate-800 mt-1 font-bold">
            I Design &amp; Scale High-Impact Products
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed mb-10 font-normal px-4"
        >
          {profile.intro}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3.5 mb-14"
        >
          <a
            href="#simulator"
            className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2.5 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all group cursor-pointer"
          >
            <Sparkles size={18} className="text-white" />
            <span>Launch Live KPI Simulator</span>
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#work"
            className="px-7 py-3.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 font-semibold text-sm sm:text-base tracking-wide flex items-center gap-2 shadow-sm hover:shadow transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore Case Studies</span>
          </a>

          <a
            href={withBase(siteMeta.resumePath)}
            download
            className="px-6 py-3.5 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 font-semibold text-sm flex items-center gap-2 hover:bg-indigo-100/70 transition-all hover:-translate-y-0.5 cursor-pointer"
          >
            <Download size={16} />
            <span>Official Resume</span>
          </a>
        </motion.div>

        {/* Telemetry Metrics Grid with Distinct & Visible Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl"
        >
          {heroImpacts.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white/95 border border-slate-200/90 shadow-md shadow-slate-200/40 hover:shadow-xl hover:border-indigo-200 p-5 rounded-2xl text-left flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className={`w-10 h-10 rounded-xl ${item.badgeBg} flex items-center justify-center`}>
                    <Icon size={20} className="text-white" strokeWidth={2.4} />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${item.numberColor} mb-1 font-display`}>
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 font-bold leading-snug">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                    {item.sub}
                  </div>
                </div>
                {/* Micro Progress Bar */}
                <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${item.progressBar}`}
                    style={{ width: `${92 - index * 6}%` }}
                  />
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
