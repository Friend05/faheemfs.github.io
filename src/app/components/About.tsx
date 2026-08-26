import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, User, Sparkles, Building2, MapPin, Download } from 'lucide-react';
import { profile, aboutPoints, tools, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white border-t border-slate-200/80">
      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center text-left">
          
          {/* Profile Card Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-200/50 relative">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-emerald-700 tracking-wider uppercase">VERIFIED PROFESSIONAL</span>
                </div>
                <span className="text-xs font-mono font-semibold text-slate-400">FAHEEM FS</span>
              </div>

              {/* Photo View */}
              <div className="relative aspect-[4/4.8] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 mb-5 group shadow-sm">
                <img 
                  src={withBase('/profile.jpg')} 
                  alt={profile.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />
                
                {/* Badge Overlay */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between p-4 rounded-xl bg-white/95 border border-white/80 backdrop-blur-md shadow-lg">
                  <div>
                    <div className="text-sm font-bold text-slate-900 tracking-tight">{profile.name}</div>
                    <div className="text-xs font-semibold text-indigo-600">Business &amp; Data Analyst</div>
                  </div>
                  <div className="text-right text-xs font-mono font-bold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    ACTIVE
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-mono text-slate-500 font-semibold uppercase flex items-center gap-1">
                    <MapPin size={12} className="text-indigo-600" /> Location
                  </div>
                  <div className="font-bold text-slate-800 mt-0.5">{profile.location}</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="text-[10px] font-mono text-slate-500 font-semibold uppercase flex items-center gap-1">
                    <Building2 size={12} className="text-purple-600" /> Experience
                  </div>
                  <div className="font-bold text-slate-800 mt-0.5">Warsha SaaS (KSA/UAE)</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography & Points Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold font-mono text-indigo-700 uppercase tracking-wider mb-4 shadow-sm">
                <Sparkles size={13} className="text-indigo-600" />
                Strategic Profile
              </div>
              <h2 className="text-[clamp(2.2rem,3.5vw,3rem)] font-extrabold text-slate-900 leading-tight font-display">
                Bridging Business Vision &amp; <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">Technical Execution</span>
              </h2>
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {profile.intro || (profile as any).summary}
            </p>

            {/* Core Capability Checklist */}
            <div className="space-y-3 pt-2">
              {aboutPoints.map((point: any, idx: number) => {
                let label = '';
                let text = '';

                if (typeof point === 'string') {
                  const parts = point.split(':');
                  if (parts.length > 1) {
                    label = parts[0];
                    text = parts.slice(1).join(':').trim();
                  } else {
                    text = point;
                  }
                } else if (point && typeof point === 'object') {
                  label = point.label || '';
                  text = point.text || '';
                }

                return (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex items-start gap-3">
                    <div className="p-1 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-600 shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      {label && <span className="font-bold text-slate-900 text-sm">{label}: </span>}
                      <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">{text}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tool Stack */}
            <div className="pt-2">
              <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-3">
                Core Tool Stack &amp; Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
