import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { label: 'Work', href: '#work', external: false },
    { label: 'Roles', href: '#roles', external: false },
    { label: 'About', href: '#about', external: false },
    { label: 'Resume', href: withBase(siteMeta.resumePath), external: true },
    { label: 'Contact', href: '#contact', external: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#faf9f6]/95 backdrop-blur-xs border-b border-zinc-200">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold text-zinc-900 tracking-tight hover:text-teal-700 transition-colors"
        >
          Mohammed Faheem FS
        </a>

        {/* Desktop Nav: Work · Roles · About · Resume · Contact */}
        <nav aria-label="Primary navigation" className="hidden sm:flex items-center gap-6">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="sm:hidden p-2 -mr-2 text-zinc-600 hover:text-zinc-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="sm:hidden bg-[#faf9f6] border-b border-zinc-200 px-6 py-4 flex flex-col gap-3 text-left"
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
