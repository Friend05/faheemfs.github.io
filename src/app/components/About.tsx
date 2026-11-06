import { profile, aboutPoints } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-left">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-start">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
              About
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
              How I Operate
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {profile.intro}
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Base</span>
                <span className="font-medium text-slate-900">{profile.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Regional Experience</span>
                <span className="font-medium text-slate-900">Saudi Arabia &amp; UAE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Status</span>
                <span className="font-medium text-emerald-700">Available Immediately</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {aboutPoints.map((point, idx) => {
              const parts = point.split(':');
              const label = parts.length > 1 ? parts[0] : '';
              const text = parts.length > 1 ? parts.slice(1).join(':').trim() : point;

              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-50/70 border border-slate-200"
                >
                  {label && (
                    <div className="text-sm font-bold text-slate-900 mb-1">
                      {label}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
