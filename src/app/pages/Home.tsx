import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { HudLoader } from '../components/HudLoader';
import { MouseGlow } from '../components/MouseGlow';
import { About } from '../components/About';
import { CaseStudies } from '../components/CaseStudies';
import { Contact } from '../components/Contact';
import { Experience } from '../components/Experience';
import { Hero } from '../components/Hero';
import { FAQ } from '../components/FAQ';
import { SiteFooter } from '../components/SiteFooter';
import { SiteHeader } from '../components/SiteHeader';
import { Skills } from '../components/Skills';
import { InteractiveDashboard } from '../components/InteractiveDashboard';
import { ProcessWorkflow } from '../components/ProcessWorkflow';
import { RoiCalculator } from '../components/RoiCalculator';

export function Home() {
  const location = useLocation();
  const [loaderComplete, setLoaderComplete] = useState(false);

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
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#f8fafc] text-slate-900 selection:bg-indigo-500/20 selection:text-indigo-900 relative font-sans">
      {/* Minimalist Numerical Preloader */}
      <HudLoader onComplete={() => setLoaderComplete(true)} />

      {/* Smooth Mouse Tracking Spotlight */}
      <MouseGlow />

      {/* Global Header Navigation */}
      <SiteHeader />

      {/* Executive Hero */}
      <Hero />

      {/* Live Interactive Analytics Simulator & ROI Estimator */}
      <section id="simulator" className="py-20 relative bg-gradient-to-b from-slate-50 via-indigo-50/20 to-white border-t border-slate-200/80">
        <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 space-y-12">
          <InteractiveDashboard />
          <RoiCalculator />
        </div>
      </section>

      {/* Interactive 5-Stage BA Lifecycle */}
      <ProcessWorkflow />

      {/* Case Studies & Project Dossiers */}
      <CaseStudies />

      {/* Competency Matrix */}
      <Skills />

      {/* Executive Profile & Technical Weaponry */}
      <About />

      {/* Career Track Record & Academic Background */}
      <Experience />

      {/* Knowledge Base FAQ */}
      <FAQ />

      {/* Direct Contact Hub */}
      <Contact />

      {/* Professional Footer */}
      <SiteFooter />
    </div>
  );
}
