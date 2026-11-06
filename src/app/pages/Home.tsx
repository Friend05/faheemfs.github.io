import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { About } from '../components/About';
import { CaseStudies } from '../components/CaseStudies';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { Skills } from '../components/Skills';

export function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');

    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash]);

  return (
    <div
      id="top"
      className="min-h-screen bg-[#faf9f6] text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans"
    >
      <SiteHeader />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Selected Work */}
        <CaseStudies />
        {/* 3. Target Roles */}
        <Skills />
        {/* 4. Experience */}
        <Experience />
        {/* 5. About */}
        <About />
        {/* 6. Contact */}
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
