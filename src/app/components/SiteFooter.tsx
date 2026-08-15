import { profile } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f8fafc] text-[#141419] py-8 border-t border-black/5">
      <div className="pf-container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#6b6560]">
          © {currentYear} {profile.name}. All rights reserved.
        </p>
        
        <button 
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm font-medium text-[#141419] hover:text-[#c8a97e] transition-colors"
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
