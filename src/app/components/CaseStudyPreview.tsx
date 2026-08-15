import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../data/portfolio';

interface CaseStudyPreviewProps {
  study: CaseStudy;
  index: number;
}

export function CaseStudyPreview({ study, index }: CaseStudyPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1 }}
      className="pf-card p-6 md:p-8 rounded-2xl flex flex-col h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${study.theme.gradient} opacity-5 rounded-bl-full pointer-events-none transition-opacity duration-300 group-hover:opacity-10`} />
      
      <div className="mb-6 relative z-10">
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-5 ${study.theme.badge}`}>
          {study.projectType}
        </span>
        <h3 className="text-2xl font-display font-semibold text-[#111827] mb-3 group-hover:text-blue-600 transition-colors">
          {study.title}
        </h3>
        <p className="text-[#4b5563] font-medium leading-relaxed">
          {study.strapline}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {study.tools.slice(0, 3).map((tool, i) => (
          <span key={i} className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-600">
            {tool}
          </span>
        ))}
        {study.tools.length > 3 && (
          <span className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded text-xs font-medium text-gray-500">
            +{study.tools.length - 3}
          </span>
        )}
      </div>

      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow relative z-10">
        {study.teaser}
      </p>
      
      <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between relative z-10">
        <span className="text-sm font-semibold text-[#111827] uppercase tracking-wider group-hover:text-blue-600 transition-colors">
          View Case Study
        </span>
        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
