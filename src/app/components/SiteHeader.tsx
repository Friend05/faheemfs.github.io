import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
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
    <header className={`pf-nav ${isScrolled ? 'scrolled' : ''}`} style={{position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', width: 'calc(100% - 40px)', maxWidth: '1200px', zIndex: 1000, transition: 'all 0.3s ease'}}>
      <nav className="pf-nav-inner" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', background: isScrolled ? 'rgba(10, 10, 15, 0.85)' : 'rgba(255, 255, 255, 0.03)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: isScrolled ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '0 1rem 0 1.5rem', boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none', transition: 'all 0.3s ease'}}>
        {/* Logo */}
        <a href="#" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none'}}>
          <span style={{fontFamily: 'var(--pf-font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.02em'}}>
            Faheem <span style={{color: 'var(--pf-accent)', fontWeight: 400}}>FS</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <ul style={{display: 'flex', alignItems: 'center', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0}}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  style={{fontSize: '0.95rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', textDecoration: 'none', transition: 'color 0.2s'}}
                  onMouseOver={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Actions & Mobile Toggle */}
        <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
          <a
            href={withBase(siteMeta.resumePath)}
            download
            className="hidden md:flex"
            style={{fontSize: '0.95rem', fontWeight: 700, padding: '0.6rem 1.5rem', background: 'var(--pf-accent)', color: '#111827', borderRadius: '9999px', textDecoration: 'none', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 0 20px rgba(0, 168, 107, 0.3)', alignItems: 'center'}}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 168, 107, 0.5)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 107, 0.3)'; }}
          >
            Resume
          </a>

          <button
            className="md:hidden"
            style={{background: 'none', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', width: '40px', height: '40px', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050b09] flex flex-col p-8 transform transition-transform" style={{ paddingTop: '6rem' }}>
          <button 
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-2xl font-semibold text-white py-4 border-b border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className="mt-8">
            <a
              href={withBase(siteMeta.resumePath)}
              download
              className="flex items-center justify-center w-full rounded-full bg-[#00a86b] px-6 py-4 text-lg font-bold text-[#111827]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
