import { profile, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-16 sm:pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 text-left">
        <p className="text-sm font-medium text-zinc-900">
          {profile.name}
        </p>
        <p className="text-sm text-zinc-600 mt-0.5">
          {profile.roleTitle}
        </p>

        <p className="text-xs font-medium text-teal-700 tracking-wide mt-4">
          {profile.focusLine}
        </p>

        <h1
          id="hero-heading"
          className="text-2xl sm:text-4xl font-semibold text-zinc-900 tracking-tight leading-snug mt-4 mb-5"
        >
          {profile.headline}
        </h1>

        <p className="text-base text-zinc-600 leading-relaxed max-w-2xl mb-8">
          {profile.summary}
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="px-4 py-2.5 rounded-md bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Selected Work
          </a>
          <a
            href={withBase(siteMeta.resumePath)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-md bg-white border border-zinc-300 text-zinc-800 text-sm font-medium hover:border-zinc-400 transition-colors"
          >
            Resume (PDF)
          </a>
          <a
            href="#contact"
            className="px-3 py-2.5 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
