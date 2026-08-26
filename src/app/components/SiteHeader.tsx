import { useState, useEffect } from 'react';
import { Menu, X, Download, Sparkles, Sun, Moon } from 'lucide-react';
import { navLinks, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';
import { useTheme } from '../context/ThemeContext';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Gradient Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] z-[9999] bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-[1240px] z-50 transition-all duration-300">
        <nav
          className={`flex items-center justify-between h-16 px-4 sm:px-6 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'bg-white/90 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl'
              : 'bg-white/75 border border-white/80 shadow-sm backdrop-blur-md'
          }`}
        >
          {/* Logo / Personal Brand */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform font-mono">
              MF
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight flex items-center gap-1.5 font-display">
                Mohammed Faheem <span className="text-indigo-600 font-mono text-[11px] font-bold px-1.5 py-0.5 rounded bg-indigo-50 border border-indigo-100">FS</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium">Business Analyst &amp; Strategist</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            <a
              href="#simulator"
              className="px-3 py-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 rounded-xl bg-indigo-50/80 border border-indigo-100 hover:bg-indigo-100/70 transition-all duration-200 flex items-center gap-1.5"
            >
              <Sparkles size={13} className="text-indigo-600" />
              Live KPI Simulator
            </a>
            {navLinks.filter(l => l.href !== '#simulator').map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-950 rounded-xl hover:bg-slate-100/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions & Hire Status */}
          <div className="flex items-center gap-2.5">
            {/* Live Availability Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available
            </div>

            {/* Resume Button */}
            <a
              href={withBase(siteMeta.resumePath)}
              download
              className="hidden sm:flex items-center gap-2 text-xs font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              className="lg:hidden p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Drawer */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl flex flex-col p-8 pt-24 border-b border-slate-200 lg:hidden text-left">
            <button 
              className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-900 rounded-xl bg-slate-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col gap-2">
              <a
                href="#simulator"
                className="text-base font-bold text-indigo-600 py-3 border-b border-slate-100 flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Sparkles size={18} />
                Live KPI Simulator
              </a>
              {navLinks.filter(l => l.href !== '#simulator').map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium text-slate-800 hover:text-indigo-600 py-3 border-b border-slate-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="mt-8 flex flex-col gap-3">
              <a
                href={withBase(siteMeta.resumePath)}
                download
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download size={18} />
                Download Official Resume
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
