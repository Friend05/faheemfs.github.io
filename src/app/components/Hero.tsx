import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { profile, heroProof, siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

export function Hero() {
  return (
    <section className="pf-section pf-section-dark overflow-hidden relative text-center min-h-screen flex items-center pt-[160px]">
      <div className="pf-hero-grid"></div>
      <div className="pf-hero-glow"></div>
      
      <div className="pf-container relative z-10 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.1rem,5.5vw,4.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-[#ffffff] max-w-5xl mx-auto mb-5"
        >
          <span className="block">From Complex Data to</span>
          <span className="pf-text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#00d68f] to-[#00a86b] pb-1 block font-black">
            Actionable Insights
          </span>
          <span className="block">I Build the Whole System</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[clamp(1rem,2.5vw,1.2rem)] text-[rgba(255,255,255,0.75)] leading-[1.6] max-w-[600px] mb-10 px-2"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a href="#work" className="pf-btn pf-btn-primary flex items-center gap-3 px-6 md:px-[1.75rem] py-3 md:py-[0.8rem] rounded-full bg-[#00a86b] text-[#050b09] font-bold text-base shadow-[0_10px_25px_rgba(0,168,107,0.3)] hover:-translate-y-0.5 hover:shadow-[0_15px_30px_rgba(0,168,107,0.4)] transition-all">
            Explore my work
            <span className="pf-btn-icon flex items-center justify-center bg-white rounded-full w-8 h-8 transition-transform group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </a>
          <a
            href={withBase(siteMeta.resumePath)}
            download
            className="pf-btn pf-btn-secondary flex items-center px-6 md:px-[1.75rem] py-3 md:py-[0.8rem] rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] text-white font-semibold text-base hover:bg-[rgba(255,255,255,0.1)] transition-all"
          >
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 w-full max-w-[800px] border-y border-[rgba(255,255,255,0.05)] py-8 px-4"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0, 168, 107, 0.03), transparent)' }}
        >
          {heroProof.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-0 flex-1 min-w-[120px]">
              <span className="text-2xl md:text-[1.5rem] font-extrabold text-[#00a86b] tracking-tight">
                {item.value}
              </span>
              <span className="text-[0.75rem] text-[rgba(255,255,255,0.6)] uppercase tracking-wider text-center mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
