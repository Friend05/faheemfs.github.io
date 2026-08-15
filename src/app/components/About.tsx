import { motion } from 'motion/react';
import { Plus, ArrowRight } from 'lucide-react';
import { profile, aboutPoints, tools } from '../data/portfolio';
import { withBase } from '../paths';

export function About() {
  return (
    <section id="about" className="bg-[#ffffff] py-24 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
          
          {/* Image Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-[4/5]"
          >
            <div className="absolute inset-0 rounded-[1.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] bg-slate-100">
              <img 
                src={withBase('/profile.jpg')} 
                alt={profile.name}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if the image doesn't load
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop';
                }}
              />
            </div>
          </motion.div>

          {/* Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="pr-0 md:pr-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <Plus className="text-[#111827] w-4 h-4 stroke-[3]" /> 
              <span className="text-[0.9rem] font-bold text-[#111827] uppercase tracking-[0.05em]">
                About Me
              </span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-extrabold text-[#111827] leading-[1.1] tracking-[-0.02em] mb-6 flex items-start gap-2">
              {profile.name}
            </h2>
            
            <div className="text-[#4b5563] text-[1.05rem] leading-[1.7] mb-8">
              <p className="mb-4 font-semibold text-[#111827]">
                I'm Not Just an Analyst. I'm Your Technical Growth Partner.
              </p>
              <p className="mb-4">
                {profile.intro}
              </p>
              {aboutPoints.map((point, idx) => (
                <p key={idx} className="mb-4">
                  {point}
                </p>
              ))}
            </div>

            <div className="mb-10">
              <div className="text-[0.85rem] font-bold text-[#111827] uppercase tracking-widest mb-4">Core Tools & Skills</div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-100 text-slate-700 text-sm font-semibold rounded-full border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 bg-[#00a86b] text-white rounded-full font-semibold text-[0.95rem] transition-transform hover:scale-105">
              Read My Full Story
              <span className="flex items-center justify-center bg-white rounded-full w-6 h-6 ml-1">
                <ArrowRight size={14} className="text-[#00a86b]" />
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
