import { experience, education } from '../data/portfolio';

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 border-t border-zinc-200"
    >
      <div className="max-w-3xl mx-auto px-6 text-left">
        <h2
          id="experience-heading"
          className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight mb-8"
        >
          Experience
        </h2>

        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-white border border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3">
              <div>
                <h3 className="text-base font-semibold text-zinc-900">
                  {experience.title}
                </h3>
                <p className="text-sm text-zinc-600">
                  {experience.company} · {experience.market}
                </p>
              </div>
              <span className="text-xs text-zinc-500 shrink-0">
                {experience.dates}
              </span>
            </div>

            <p className="text-sm text-zinc-700 leading-relaxed mb-4">
              {experience.summary}
            </p>

            <ul className="list-disc list-inside space-y-1.5 text-sm text-zinc-700 leading-relaxed">
              {experience.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg bg-white border border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-base font-semibold text-zinc-900">
                  {education.qualification}
                </h3>
                <p className="text-sm text-zinc-600 mt-0.5">
                  {education.school}
                </p>
              </div>
              <span className="text-xs text-zinc-500 shrink-0">
                {education.dates}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
