import { experience, education } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="py-16 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-left">
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            Experience &amp; Education
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Professional Track Record
          </h2>
        </div>

        <div className="space-y-6">
          {/* Professional Experience Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {experience.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-0.5">
                  {experience.company} · {experience.market}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 shrink-0">
                {experience.dates}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-5">
              {experience.summary}
            </p>

            <ul className="space-y-2.5">
              {experience.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <span className="text-slate-400 font-mono mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Card */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {education.qualification}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-0.5">
                  {education.school}
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 shrink-0">
                {education.dates}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <span
                  key={course}
                  className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
