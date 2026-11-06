import { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check } from 'lucide-react';
import { siteMeta } from '../data/portfolio';
import { withBase } from '../paths';

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
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 text-left">
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
            Let&apos;s Connect
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
            Open to Founder&apos;s Office, Chief of Staff, AI Evals, and Business Analyst roles. Reach out directly via email, phone, or LinkedIn.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mb-8">
          {/* Email */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <a href={`mailto:${siteMeta.email}`} className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                <Mail size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Email</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate hover:underline">
                  {siteMeta.email}
                </div>
              </div>
            </a>
            <button
              onClick={() => copyToClipboard(siteMeta.email, 'email')}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shrink-0 cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Phone */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <a href={`tel:${siteMeta.phone}`} className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                <Phone size={16} />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-slate-500 uppercase">Phone</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate hover:underline">
                  {siteMeta.phone}
                </div>
              </div>
            </a>
            <button
              onClick={() => copyToClipboard(siteMeta.phone, 'phone')}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors shrink-0 cursor-pointer"
              title="Copy Phone"
            >
              {copiedPhone ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteMeta.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href={withBase(siteMeta.resumePath)}
            download
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:border-slate-300 text-xs sm:text-sm font-medium transition-colors"
          >
            <span>Download Resume PDF</span>
            <ArrowUpRight size={14} />
          </a>

          <a
            href={siteMeta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-medium transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
