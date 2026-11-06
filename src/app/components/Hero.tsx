import { ArrowRight, Download, Check } from 'lucide-react';
import { profile, siteMeta, heroTelemetry, targetRoles } from '../data/portfolio';
import { withBase } from '../paths';

export function Hero() {
  return (
    <section className="pt-32 sm:pt-36 pb-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-left">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200/80 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          <span className="text-[11px] font-mono font-medium text-slate-700 uppercase tracking-wider">
            {profile.eyebrow}
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] max-w-3xl mb-5">
          {profile.headline}
        </h1>

        {/* Concise Intro */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
          {profile.intro}
        </p>

        {/* Primary Actions */}
        <div className="flex flex-wrap items-center gap-3 mb-14">
          <a
            href="#work"
            className="px-5 py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors"
          >
            <span>View Selected Work</span>
            <ArrowRight size={15} />
          </a>

          <a
            href={withBase(siteMeta.resumePath)}
            download
            className="px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 font-medium text-sm flex items-center gap-2 transition-colors"
          >
            <Download size={15} />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="px-4 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-sm transition-colors"
          >
            Get in Touch →
          </a>
        </div>

        {/* Clean Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-slate-200">
          {heroTelemetry.map((item) => (
            <div key={item.label}>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-800 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Target Roles Section */}
        <div id="roles" className="pt-16">
          <div className="mb-8">
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
              Target Roles &amp; Focus Areas
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Where I Add Immediate Value
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {targetRoles.map((role) => (
              <div
                key={role.title}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-slate-300 transition-colors"
              >
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {role.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {role.summary}
                </p>
                <ul className="space-y-1.5 pt-3 border-t border-slate-200/70">
                  {role.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-medium text-slate-700"
                    >
                      <Check size={13} className="text-slate-900 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
