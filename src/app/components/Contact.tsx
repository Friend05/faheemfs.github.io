import { motion } from 'motion/react';
import { Mail, ArrowRight, MessageSquare } from 'lucide-react';
import { siteMeta } from '../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="pf-section pf-section-light py-32 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-10 md:p-16 border border-slate-100 shadow-xl text-center relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#00a86b]/20 via-[#00a86b] to-[#00a86b]/20" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00a86b] rounded-full opacity-[0.03] blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#00a86b] rounded-full opacity-[0.03] blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-16 h-16 mx-auto bg-[#00a86b]/10 rounded-2xl flex items-center justify-center mb-8"
          >
            <MessageSquare className="w-8 h-8 text-[#00a86b]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-[#111827] tracking-tight mb-6"
          >
            Let's build something <br className="hidden md:block" />
            <span className="text-[#00a86b]">meaningful together.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-[#4b5563] max-w-2xl mx-auto mb-10"
          >
            Looking for a Business Analyst to bring clarity to your product development? 
            My inbox is always open for opportunities and conversations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
          >
            <a
              href={`mailto:${siteMeta.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#111827] text-white rounded-full font-semibold hover:bg-[#1f2937] hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="tel:+919840502598"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#111827] border border-slate-200 rounded-full font-semibold hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 9840502598
            </a>
            <a
              href={siteMeta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#111827] border border-slate-200 rounded-full font-semibold hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto shadow-sm hover:shadow-md"
            >
              LinkedIn Profile
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
