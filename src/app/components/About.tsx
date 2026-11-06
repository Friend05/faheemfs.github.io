import { aboutContent } from '../data/portfolio';

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 border-t border-zinc-200"
    >
      <div className="max-w-3xl mx-auto px-6 text-left">
        <h2
          id="about-heading"
          className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight mb-6"
        >
          About
        </h2>

        <div className="space-y-4 text-base text-zinc-700 leading-relaxed mb-6">
          {aboutContent.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {aboutContent.coreSkills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded bg-white border border-zinc-200 text-xs font-medium text-zinc-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
