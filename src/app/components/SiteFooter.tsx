import { profile, navLinks } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 text-slate-600 py-10 border-t border-slate-200 font-sans">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="text-left">
          <p className="text-sm font-semibold text-slate-900">
            {profile.name}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">
            Founder&apos;s Office · Chief of Staff · AI Evals · Business Analyst · © {currentYear}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-xs">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg bg-white border border-slate-200 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
