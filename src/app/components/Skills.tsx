import { capabilityGroups, tools } from '../data/portfolio';

export function Skills() {
  return (
    <section id="capabilities" className="py-16 bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-left">
        <div className="mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            Capabilities &amp; Toolkit
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Core Competencies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {capabilityGroups.map((group) => (
            <div
              key={group.title}
              className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-slate-400">
                  {group.eyebrow}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1 mb-2">
                  {group.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {group.summary}
                </p>
              </div>

              <ul className="space-y-1.5 pt-3 border-t border-slate-100">
                {group.items.map((skill) => (
                  <li key={skill} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-slate-400">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tools Strip */}
        <div className="p-6 rounded-xl bg-white border border-slate-200">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">
            Tools &amp; Platforms
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
