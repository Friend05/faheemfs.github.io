import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search as SearchIcon, FileText as FileIcon, GitBranch, ShieldCheck, BarChart3, Sparkles as SparklesIcon, CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Requirements Discovery & BRD',
    icon: SearchIcon,
    subtitle: 'Stakeholder Interviews & Gap Analysis',
    description: 'Conducting in-depth stakeholder interviews to translate complex business needs into unambiguous Business Requirements Documents (BRD) and Functional Specifications (FRD).',
    artifacts: ['BRD / FRD Documentation', 'PESTLE Framework Mapping', 'As-Is vs To-Be Process Flows', 'Stakeholder Alignment Matrix'],
    tools: ['Confluence', 'Draw.io', 'MS Excel', 'Miro'],
    value: '100% Clarity prior to engineering commencement, preventing scope creep.',
    color: 'from-indigo-500 to-indigo-700',
    badge: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  },
  {
    id: '02',
    title: 'Personas & Workflow Mapping',
    icon: FileIcon,
    subtitle: 'User Journeys & UGM Frameworks',
    description: 'Creating detailed User Personas (Saudi & UAE auto markets) and comprehensive end-to-end user journeys to ensure fluid UX and operational efficiency.',
    artifacts: ['Target User Personas', 'User Journey Maps', 'Figma Wireframes', 'Information Architecture'],
    tools: ['Figma', 'Miro', 'Notion', 'Google Workspace'],
    value: '24% Reduction in onboarding steps for end-users.',
    color: 'from-sky-500 to-sky-700',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    id: '03',
    title: 'Jira Sprints & Backlog Delivery',
    icon: GitBranch,
    subtitle: 'User Stories & Acceptance Criteria',
    description: 'Breaking down requirements into clear User Stories with IN/OUT scopes, story points, and measurable Acceptance Criteria across 25+ sprints.',
    artifacts: ['User Story Backlog', 'Acceptance Criteria (Gherkin)', 'Sprint Burndown Reports', 'Dependency Tracking'],
    tools: ['Jira Software', 'Asana', 'Trello', 'Slack'],
    value: '96.8% on-time sprint milestone completion rate.',
    color: 'from-violet-500 to-violet-700',
    badge: 'bg-violet-50 text-violet-700 border-violet-100',
  },
  {
    id: '04',
    title: 'Cross-Functional UAT & QA',
    icon: ShieldCheck,
    subtitle: 'Testing & Quality Validation',
    description: 'Overseeing User Acceptance Testing (UAT), preparing test cases, and collaborating with developers to resolve edge-case failures before production go-live.',
    artifacts: ['UAT Test Scripts', 'Bug Tracking Logs', 'Release Readiness Checklist', 'Training Guides'],
    tools: ['Jira Software', 'Postman', 'Google Sheets'],
    value: 'Zero critical blockers during production deployments.',
    color: 'from-emerald-500 to-emerald-700',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    id: '05',
    title: 'KPI Telemetry & Analytics',
    icon: BarChart3,
    subtitle: 'Post-Launch Evaluation & Optimization',
    description: 'Automating Excel KPI dashboards, EBITDA modeling, client contribution analysis, and revenue velocity tracking to drive continuous product refinement.',
    artifacts: ['Excel KPI Dashboards', 'Pivot Slicer Models', 'EBITDA Margin Summaries', 'Executive Status Reports'],
    tools: ['MS Excel (Advanced Pivot/Power Query)', 'Power BI', 'Google Looker Studio'],
    value: '14+ Hours saved per month on automated reporting.',
    color: 'from-purple-500 to-purple-700',
    badge: 'bg-purple-50 text-purple-700 border-purple-100',
  },
];

export function ProcessWorkflow() {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];
  const Icon = current.icon;

  return (
    <section id="process" className="py-24 relative bg-slate-50/60 border-t border-slate-200/80">
      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-bold text-indigo-700 uppercase tracking-wider mb-4 shadow-sm">
            <SparklesIcon size={13} className="text-indigo-600" />
            Execution Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-display">
            The 5-Stage BA Delivery Lifecycle
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From initial ambiguity and stakeholder interviews to calibrated Excel telemetry and operational scaling.
          </p>
        </div>

        {/* Step Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            const isActive = activeStep === index;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-white border-indigo-300 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/20'
                    : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>
                    STAGE {step.id}
                  </span>
                  <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                    <StepIcon size={16} />
                  </div>
                </div>
                <div className={`text-xs sm:text-sm font-bold leading-snug ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                  {step.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Dossier Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-10 relative overflow-hidden"
          >
            <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Left Column: Stage Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-3 border shadow-sm ${current.badge}">
                    Stage {current.id} — {current.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                    {current.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                    {current.description}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 font-mono">
                    Produced Deliverables &amp; Artifacts
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {current.artifacts.map((artifact) => (
                      <div
                        key={artifact}
                        className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm font-medium text-slate-800 flex items-center gap-2"
                      >
                        <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                        <span>{artifact}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied Tools */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 font-mono">
                    Applied Tools &amp; Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Business Impact Callout */}
              <div className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-50/80 via-purple-50/60 to-pink-50/60 border border-indigo-100 shadow-sm">
                <div>
                  <span className="text-[11px] font-mono font-bold text-indigo-700 uppercase tracking-widest block mb-2">
                    Measurable Business Impact
                  </span>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug font-display">
                    "{current.value}"
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-indigo-100/80">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <span>View Case Study Application</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
