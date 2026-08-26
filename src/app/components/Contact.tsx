import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, ArrowRight, Sparkles, Send, Linkedin, ShieldCheck, CheckCircle2, Copy, Check } from 'lucide-react';
import { siteMeta } from '../data/portfolio';

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-28 relative bg-gradient-to-b from-slate-50/60 to-white border-t border-slate-200/80 overflow-hidden text-center">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-2xl shadow-slate-200/60 relative overflow-hidden"
        >
          {/* Top Status Header */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold font-mono text-indigo-700 uppercase tracking-wider shadow-sm">
              <Sparkles size={13} className="text-indigo-600" />
              Direct Communication • Open to Roles
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5 font-display"
          >
            Let's Build &amp; Scale <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500">
              High-Impact Products Together
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Looking for a structured Business Analyst with hands-on SaaS requirements, automated Excel telemetry, and cross-functional agile delivery experience? Let's connect.
          </motion.p>

          {/* Interactive Contact Actions */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8 text-left">
            {/* Email Card with Copy */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex items-center justify-between group hover:border-indigo-300 transition-all">
              <a
                href={`mailto:${siteMeta.email}`}
                className="flex items-center gap-3 min-w-0"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">Direct Email</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">
                    {siteMeta.email}
                  </div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(siteMeta.email, 'email')}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-colors shrink-0 cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Phone Card with Copy */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex items-center justify-between group hover:border-purple-300 transition-all">
              <a
                href={`tel:${siteMeta.phone}`}
                className="flex items-center gap-3 min-w-0"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-mono text-slate-500 font-bold uppercase">Direct Call</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 truncate group-hover:text-purple-600 transition-colors">
                    {siteMeta.phone}
                  </div>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(siteMeta.phone, 'phone')}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 hover:text-purple-600 hover:border-purple-200 transition-colors shrink-0 cursor-pointer"
                title="Copy Phone"
              >
                {copiedPhone ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* LinkedIn CTA */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={siteMeta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white font-bold text-sm tracking-wide shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Linkedin size={18} />
              <span>Connect on LinkedIn</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
