import { profile, navLinks } from '../data/portfolio';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-slate-200/80 relative font-sans">
      <div className="w-full max-w-[1240px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-700 flex items-center justify-center text-white font-extrabold text-sm shadow-sm font-mono">
            MF
          </div>
          <div className="text-left">
            <p className="text-sm font-bold text-slate-900 tracking-tight font-display">
              {profile.name} — Business Analyst &amp; Strategist
            </p>
            <p className="text-xs text-slate-500 font-medium">
              © {currentYear} Mohammed Faheem FS. All rights reserved.
            </p>
          </div>
        </div>

        {/* Center navigation */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-medium">
          {navLinks.slice(0, 5).map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-slate-500 hover:text-indigo-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Open to New Roles
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
