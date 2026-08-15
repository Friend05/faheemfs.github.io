import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { About } from '../components/About';
import { CaseStudies } from '../components/CaseStudies';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { FAQ } from '../components/FAQ';
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
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#ffffff]">
      <SiteHeader />
      <Hero />
      <About />
      <Skills />
      <CaseStudies />
      <Experience />
      <FAQ />
      <Contact />
      <SiteFooter />
    </div>
  );
}
