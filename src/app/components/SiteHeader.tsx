import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono text-xs font-bold tracking-tight">
            MF
          </div>
          <div className="text-left">
            <div className="text-sm font-semibold text-slate-900 tracking-tight">
              Mohammed Faheem FS
            </div>
            <div className="text-[11px] text-slate-500 hidden sm:block">
              Founder&apos;s Office · Chief of Staff · AI Evals · BA
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href={withBase(siteMeta.resumePath)}
            download
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight size={13} />
          </a>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 text-left">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-slate-900 border-b border-slate-100 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
