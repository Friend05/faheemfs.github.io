import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  GitPullRequest, 
  Sliders, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Copy, 
  Check, 
  TrendingUp, 
  Layers, 
  Clock, 
  Target,
  Zap
} from 'lucide-react';

interface FeatureItem {
  id: string;
  name: string;
  tag: string;
  defaultReach: number; // 1 - 10
  defaultImpact: number; // 1 - 3 (1 = low, 2 = medium, 3 = massive)
  defaultConfidence: number; // 50 - 100%
  defaultEffort: number; // 1 - 13 story points
  userStory: {
    asA: string;
    iWant: string;
    soThat: string;
    given: string;
    when: string;
    then: string;
    edgeCase: string;
  };
}

interface Scenario {
  id: string;
  name: string;
  domain: string;
  badge: string;
  description: string;
  features: FeatureItem[];
}

const scenarios: Scenario[] = [
  {
    id: 'ksa-expansion',
    name: 'KSA & UAE SaaS Marketplace Expansion',
    domain: 'GTM Strategy & Cross-Border SaaS',
    badge: 'Regional Expansion',
    description: 'Prioritize regional localization, multi-currency pricing (SAR/AED), and ZATCA Phase-2 e-invoicing compliance.',
    features: [
      {
        id: 'zatca-tax',
        name: 'ZATCA Phase-2 Tax & E-Invoice Generation',
        tag: 'Compliance / P0',
        defaultReach: 9,
        defaultImpact: 3,
        defaultConfidence: 95,
        defaultEffort: 5,
        userStory: {
          asA: 'Finance & Operations Lead in Riyadh',
          iWant: 'automated ZATCA-compliant QR-coded tax invoices generated on booking completion',
          soThat: 'all transactions comply with Saudi tax authorities with zero manual invoicing latency.',
          given: 'a customer completes an automotive service booking in Riyadh or Jeddah',
          when: 'payment is confirmed via Mada or credit card gateway',
          then: 'generate a certified cryptographic QR invoice PDF and send copy via WhatsApp/SMS.',
          edgeCase: 'Partial refund or cancellation must generate an amended debit/credit note with synchronized audit log.'
        }
      },
      {
        id: 'crm-routing',
        name: 'Round-Robin Lead Assignment & SLA Engine',
        tag: 'Operations / P1',
        defaultReach: 8,
        defaultImpact: 3,
        defaultConfidence: 90,
        defaultEffort: 5,
        userStory: {
          asA: 'Regional Sales Manager in Dubai',
          iWant: 'inbound workshop partner leads routed automatically to regional account executives based on workshop capacity',
          soThat: 'lead response time drops below 5 minutes and workshop onboarding conversion increases.',
          given: 'a new automotive workshop registers on Warsha portal',
          when: 'registration data passes verification criteria',
          then: 'assign lead to active online sales agent in UAE time zone and trigger Slack notification.',
          edgeCase: 'If assigned agent does not acknowledge within 15 minutes, auto-escalate to regional team lead.'
        }
      },
      {
        id: 'taxonomy-filter',
        name: '20-Category Workshop Service Taxonomy',
        tag: 'Product Discovery / P1',
        defaultReach: 10,
        defaultImpact: 2,
        defaultConfidence: 85,
        defaultEffort: 3,
        userStory: {
          asA: 'Vehicle Owner in Eastern Province',
          iWant: 'to filter workshops by 20 granular service tiers (Periodic Maintenance, Transmission, EV Diagnostics)',
          soThat: 'I find certified repair shops within a 15km radius matching my vehicle make.',
          given: 'user selects vehicle brand (e.g., Toyota, Hyundai, BYD) on home search',
          when: 'user applies "Transmission Specialists" category filter',
          then: 'return verified workshops ranked by proximity, SLA ratings, and instant booking availability.',
          edgeCase: 'Workshops currently at 100% capacity must display estimated next-available slot badge.'
        }
      },
      {
        id: 'arabic-ui',
        name: 'Right-to-Left (RTL) Arabic Workflow Optimization',
        tag: 'UX / Accessibility',
        defaultReach: 9,
        defaultImpact: 2,
        defaultConfidence: 90,
        defaultEffort: 3,
        userStory: {
          asA: 'Arabic-speaking Workshop Supervisor in Dammam',
          iWant: 'fluid RTL navigation and localized vernacular status states (قيد الانتظار, مكتمل)',
          soThat: 'technicians can update repair work orders on tablets without language barriers.',
          given: 'workshop dashboard language is set to Arabic (SAR locale)',
          when: 'technician marks status as "Under Inspection"',
          then: 'real-time Arabic status notification is dispatched to car owner app with localized timestamp.',
          edgeCase: 'Bilingual invoices must maintain exact currency alignment (SAR / ر.س).'
        }
      }
    ]
  },
  {
    id: 'kpi-automation',
    name: 'Automated Excel Telemetry & EBITDA Engine',
    domain: 'Data Architecture & Financial Modeling',
    badge: 'Data Intelligence',
    description: 'Transform raw multi-branch transaction exports into automated pivot models, EBITDA margins, and Pareto client distributions.',
    features: [
      {
        id: 'pivot-slicers',
        name: 'Automated Multi-Year Revenue Slicer Pipeline',
        tag: 'Financial Telemetry / P0',
        defaultReach: 7,
        defaultImpact: 3,
        defaultConfidence: 95,
        defaultEffort: 3,
        userStory: {
          asA: 'Chief Operating Officer / Founder',
          iWant: 'an automated Excel model with synchronized market slicers and calculated gross margin fields',
          soThat: 'I can evaluate quarterly branch EBITDA without spending 14+ hours manually consolidating CSVs.',
          given: 'raw monthly transaction dumps exported from SaaS database',
          when: 'data is refreshed via Power Query pipeline',
          then: 'recalculate client contribution Pareto bars and gross margin variances instantly.',
          edgeCase: 'Missing currency conversion rates must default to fixed SAR-to-USD pegged peg (3.75).'
        }
      },
      {
        id: 'churn-matrix',
        name: 'Cohort Churn & Customer Retention Matrix',
        tag: 'Product Analytics / P1',
        defaultReach: 8,
        defaultImpact: 2,
        defaultConfidence: 85,
        defaultEffort: 5,
        userStory: {
          asA: 'Product Operations Lead',
          iWant: 'monthly cohort retention tables tracking workshop re-order frequency over 30, 60, and 90 days',
          soThat: 'we identify early drop-off signals and deploy targeted account management interventions.',
          given: 'workshop accounts active for at least 60 days',
          when: 'service booking frequency drops by >30% month-over-month',
          then: 'flag account as "At Risk" on executive telemetry board and schedule check-in.',
          edgeCase: 'Seasonal Ramadan / holiday volume shifts must be normalized against historical baseline.'
        }
      },
      {
        id: 'pareto-client',
        name: '80/20 Key Client Concentration Dashboard',
        tag: 'Executive Reporting / P1',
        defaultReach: 6,
        defaultImpact: 3,
        defaultConfidence: 90,
        defaultEffort: 3,
        userStory: {
          asA: 'Head of Growth',
          iWant: 'real-time Pareto distribution tracking top 20% of fleet enterprise clients generating 80% volume',
          soThat: 'we protect top enterprise contracts with custom SLAs and dedicated account support.',
          given: 'aggregated enterprise fleet billing data',
          when: 'client rank changes in top decile',
          then: 'update executive revenue share meter and highlight tier-1 SLA metrics.',
          edgeCase: 'New enterprise accounts in pilot phase must be tagged with 90-day grace period.'
        }
      }
    ]
  }
];

export function InteractiveDashboard() {
  const [selectedScenarioId, setSelectedScenarioId] = useState('ksa-expansion');
  const scenario = scenarios.find(s => s.id === selectedScenarioId) || scenarios[0];

  // Feature scores state
  const [featureScores, setFeatureScores] = useState<Record<string, { reach: number; impact: number; confidence: number; effort: number }>>(() => {
    const initial: Record<string, { reach: number; impact: number; confidence: number; effort: number }> = {};
    scenarios.forEach(s => {
      s.features.forEach(f => {
        initial[f.id] = {
          reach: f.defaultReach,
          impact: f.defaultImpact,
          confidence: f.defaultConfidence,
          effort: f.defaultEffort,
        };
      });
    });
    return initial;
  });

  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(scenario.features[0].id);
  const [copiedGherkin, setCopiedGherkin] = useState(false);

  // Calculate RICE score for a feature
  const calculateRice = (featId: string) => {
    const scores = featureScores[featId] || { reach: 5, impact: 2, confidence: 80, effort: 3 };
    const rice = (scores.reach * scores.impact * (scores.confidence / 100)) / (scores.effort || 1);
    return Math.round(rice * 10) / 10;
  };

  // Ranked features
  const rankedFeatures = useMemo(() => {
    return [...scenario.features].map(f => ({
      ...f,
      riceScore: calculateRice(f.id),
      scores: featureScores[f.id] || { reach: f.defaultReach, impact: f.defaultImpact, confidence: f.defaultConfidence, effort: f.defaultEffort },
    })).sort((a, b) => b.riceScore - a.riceScore);
  }, [scenario, featureScores]);

  // Active selected feature
  const activeFeature = scenario.features.find(f => f.id === selectedFeatureId) || scenario.features[0];
  const activeScores = featureScores[activeFeature.id] || {
    reach: activeFeature.defaultReach,
    impact: activeFeature.defaultImpact,
    confidence: activeFeature.defaultConfidence,
    effort: activeFeature.defaultEffort,
  };

  // Sprint Capacity Metrics
  const totalStoryPoints = scenario.features.reduce((acc, f) => {
    return acc + (featureScores[f.id]?.effort || f.defaultEffort);
  }, 0);
  const sprintCapacityLimit = 20; // 2-week sprint capacity for standard agile pod
  const estimatedSprints = Math.ceil(totalStoryPoints / sprintCapacityLimit);

  const handleScoreChange = (featId: string, field: 'reach' | 'impact' | 'confidence' | 'effort', value: number) => {
    setFeatureScores(prev => ({
      ...prev,
      [featId]: {
        ...prev[featId],
        [field]: value,
      }
    }));
  };

  const copyGherkin = () => {
    const text = `FEATURE: ${activeFeature.name}
USER STORY:
  As a ${activeFeature.userStory.asA}
  I want ${activeFeature.userStory.iWant}
  So that ${activeFeature.userStory.soThat}

ACCEPTANCE CRITERIA (GHERKIN):
  Given ${activeFeature.userStory.given}
  When ${activeFeature.userStory.when}
  Then ${activeFeature.userStory.then}

EDGE CASE & RISK MITIGATION:
  Note: ${activeFeature.userStory.edgeCase}
RICE SCORE: ${calculateRice(activeFeature.id)} | STORY POINTS: ${activeScores.effort} SP`;

    navigator.clipboard.writeText(text);
    setCopiedGherkin(true);
    setTimeout(() => setCopiedGherkin(false), 2000);
  };

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/50 text-left font-sans relative overflow-hidden">
      
      {/* Top Header & Scenario Slicer */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-mono font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles size={13} className="text-indigo-600" />
            Interactive BA Scoping &amp; Sprint Simulator
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
            Feature Prioritization &amp; Gherkin Scoping Engine
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mt-1.5 max-w-2xl">
            Simulate how a Business Analyst evaluates real SaaS feature requests: adjust RICE scoring variables, monitor sprint capacity, and generate production-ready User Stories.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-col sm:flex-row p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner gap-1.5 shrink-0">
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => {
                setSelectedScenarioId(s.id);
                setSelectedFeatureId(s.features[0].id);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer text-left sm:text-center ${
                selectedScenarioId === s.id
                  ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <div className="font-bold">{s.name.split('SaaS')[0]}</div>
              <div className={`text-[10px] font-mono ${selectedScenarioId === s.id ? 'text-indigo-100' : 'text-slate-400'}`}>
                {s.badge}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Overview Sprint Capacity Telemetry */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>Backlog Load</span>
            <span className="text-indigo-600">● {scenario.features.length} Epic Items</span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
            {totalStoryPoints} <span className="text-sm font-semibold text-slate-500 font-sans">Story Points</span>
          </div>
          <div className="text-[11px] text-indigo-600 font-semibold mt-1">
            Across active module
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
            Sprint Velocity
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-display">
            {estimatedSprints} {estimatedSprints === 1 ? 'Sprint' : 'Sprints'}
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-1">
            ~{estimatedSprints * 2} Weeks agile cycle
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
            Top Priority Score
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 font-display">
            {rankedFeatures[0]?.riceScore || 0} <span className="text-xs font-mono text-slate-400">RICE</span>
          </div>
          <div className="text-[11px] text-slate-500 font-medium mt-1 truncate">
            {rankedFeatures[0]?.name}
          </div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider mb-1">
            Scope Clarity
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 font-display">
            100%
          </div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-1 flex items-center gap-1">
            <CheckCircle2 size={12} />
            <span>Gherkin Spec Ready</span>
          </div>
        </div>
      </div>

      {/* Main Interactive Workspace (2 Columns) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Ranked Feature Backlog & RICE Matrix (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers size={16} className="text-indigo-600" />
              Feature Backlog &amp; RICE Priority Ranking
            </h4>
            <span className="text-xs font-mono text-slate-500">
              Click feature to inspect &amp; tune
            </span>
          </div>

          <div className="space-y-3">
            {rankedFeatures.map((feat, index) => {
              const isSelected = feat.id === activeFeature.id;
              const rice = feat.riceScore;

              return (
                <div
                  key={feat.id}
                  onClick={() => setSelectedFeatureId(feat.id)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-50/50 border-indigo-300 shadow-md ring-2 ring-indigo-500/20'
                      : 'bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                        index === 0
                          ? 'bg-indigo-600 text-white'
                          : index === 1
                          ? 'bg-sky-500 text-white'
                          : 'bg-slate-200 text-slate-700'
                      }`}>
                        0{index + 1}
                      </span>
                      <div>
                        <h5 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                          {feat.name}
                        </h5>
                        <span className="text-[11px] font-mono text-indigo-700 font-semibold">
                          {feat.tag}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm sm:text-base font-extrabold text-indigo-700 font-mono">
                        {rice} <span className="text-[10px] text-slate-400 font-sans">RICE</span>
                      </div>
                      <div className="text-[10px] font-mono font-bold text-slate-500">
                        {feat.scores.effort} Story Pts
                      </div>
                    </div>
                  </div>

                  {/* Micro Score Breakdown Bar */}
                  <div className="grid grid-cols-4 gap-2 text-[10px] font-mono text-slate-500 bg-white p-2 rounded-xl border border-slate-200/80 mt-3">
                    <div>Reach: <strong className="text-slate-900">{feat.scores.reach}k</strong></div>
                    <div>Impact: <strong className="text-slate-900">{feat.scores.impact}x</strong></div>
                    <div>Conf: <strong className="text-slate-900">{feat.scores.confidence}%</strong></div>
                    <div>Effort: <strong className="text-slate-900">{feat.scores.effort} pts</strong></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive RICE Sliders for Selected Feature */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mt-6">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
                <Sliders size={14} className="text-indigo-600" />
                Live Calibration for: <span className="text-indigo-600 font-bold">{activeFeature.name}</span>
              </h5>
              <span className="text-xs font-mono font-bold text-indigo-700">
                Score: {calculateRice(activeFeature.id)}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Reach Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Reach (Audience Scale)</span>
                  <span className="font-mono text-indigo-600">{activeScores.reach}k users</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={activeScores.reach}
                  onChange={(e) => handleScoreChange(activeFeature.id, 'reach', Number(e.target.value))}
                  className="w-full accent-indigo-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Impact Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Impact Multiplier</span>
                  <span className="font-mono text-sky-600">{activeScores.impact}x Value</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.5"
                  value={activeScores.impact}
                  onChange={(e) => handleScoreChange(activeFeature.id, 'impact', Number(e.target.value))}
                  className="w-full accent-sky-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Confidence Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Confidence Level</span>
                  <span className="font-mono text-emerald-600">{activeScores.confidence}%</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="100"
                  step="5"
                  value={activeScores.confidence}
                  onChange={(e) => handleScoreChange(activeFeature.id, 'confidence', Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>

              {/* Effort / Story Points Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-semibold text-slate-700">
                  <span>Engineering Effort</span>
                  <span className="font-mono text-purple-600">{activeScores.effort} Story Points</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="13"
                  value={activeScores.effort}
                  onChange={(e) => handleScoreChange(activeFeature.id, 'effort', Number(e.target.value))}
                  className="w-full accent-purple-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Generated User Story & Gherkin Spec (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="p-6 rounded-2xl bg-slate-900 text-slate-100 shadow-xl relative overflow-hidden flex flex-col h-full justify-between">
            
            {/* Window Dots & Copy Button */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-slate-400 font-bold ml-2">
                    JIRA-SPEC // GHERKIN-AC
                  </span>
                </div>

                <button
                  onClick={copyGherkin}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold text-slate-200 transition-colors cursor-pointer border border-slate-700"
                  title="Copy Gherkin Acceptance Criteria"
                >
                  {copiedGherkin ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy Spec</span>
                    </>
                  )}
                </button>
              </div>

              {/* User Story Box */}
              <div className="mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                  1. Agile User Story
                </span>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs leading-relaxed text-slate-200 font-mono">
                  <p><span className="text-pink-400 font-bold">AS A</span> {activeFeature.userStory.asA}</p>
                  <p className="mt-1"><span className="text-pink-400 font-bold">I WANT</span> {activeFeature.userStory.iWant}</p>
                  <p className="mt-1"><span className="text-pink-400 font-bold">SO THAT</span> {activeFeature.userStory.soThat}</p>
                </div>
              </div>

              {/* Acceptance Criteria (Gherkin) */}
              <div className="mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  2. Acceptance Criteria (Gherkin Syntax)
                </span>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs leading-relaxed font-mono space-y-1.5">
                  <p><span className="text-emerald-400 font-bold">GIVEN</span> <span className="text-slate-300">{activeFeature.userStory.given}</span></p>
                  <p><span className="text-emerald-400 font-bold">WHEN</span> <span className="text-slate-300">{activeFeature.userStory.when}</span></p>
                  <p><span className="text-emerald-400 font-bold">THEN</span> <span className="text-slate-300">{activeFeature.userStory.then}</span></p>
                </div>
              </div>

              {/* Edge Case & Risk Handling */}
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  3. Edge Case &amp; Exception Handling
                </span>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 font-mono leading-relaxed">
                  <strong>Risk Policy:</strong> {activeFeature.userStory.edgeCase}
                </div>
              </div>
            </div>

            {/* Bottom Status Chip */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 size={13} /> Ready for Sprint Planning
              </span>
              <span>Est. {activeScores.effort} Story Points</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
