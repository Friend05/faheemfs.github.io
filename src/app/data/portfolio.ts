export type CaseStudyStep = {
  title: string;
  description: string;
  details: string[];
};

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type CaseStudyTheme = {
  gradient: string;
  surface: string;
  badge: string;
  highlight: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  strapline: string;
  teaser: string;
  impact: string;
  projectType: string;
  focusArea: string;
  role: string;
  duration: string;
  tools: string[];
  summary: string;
  disclaimer: string;
  overview: string;
  challenge: string[];
  objectives: string[];
  approach: CaseStudyStep[];
  outputs: string[];
  successSignals: string[];
  reflection: string;
  previewLabel: string;
  previewCards: string[];
  previewMetrics: CaseStudyMetric[];
  theme: CaseStudyTheme;
};

export const siteMeta = {
  title: 'Mohammed Faheem FS | Business Analyst & Product Strategist',
  description:
    'Business Analyst with hands-on SaaS experience across Saudi Arabia & UAE markets in requirements gathering, Jira delivery, Excel-based KPI reporting, CRM workflows, and growth strategy.',
  resumePath: 'Mohammed-Faheem-Business-Analyst-Resume-Updated.pdf',
  ogImagePath: 'og-cover.svg',
  phone: '+91 9840502598',
  email: 'mdfaheem2507@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faheemfs',
  github: 'https://github.com/friend05',
  location: 'Chennai, Tamil Nadu, India',
};

export const navLinks = [
  { label: 'Simulator', href: '#simulator' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Mohammed Faheem FS',
  shortName: 'MF',
  eyebrow: 'Business Analyst • Product Operations • Data & KPI Telemetry',
  headline: 'I turn complex business ambiguity into structured, high-velocity product execution.',
  intro:
    'Business Analyst with hands-on SaaS experience in requirements gathering, Jira sprint delivery, automated Excel KPI pipelines, CRM workflows, and GTM strategy across Saudi Arabia and UAE markets. I build the foundational scope documents, user stories, and telemetry models that help engineering teams deliver predictable value.',
  location: 'Chennai, Tamil Nadu',
  availability: 'Open to Business Analyst, Product Operations, Data Analyst, and Growth roles',
};

export const heroTelemetry = [
  {
    value: '25+',
    label: 'Jira Sprints Delivered',
    sub: 'Cross-functional agile teams',
    color: 'text-indigo-500 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/40',
    border: 'border-indigo-200 dark:border-indigo-800/40',
    bar: 'bg-indigo-500',
  },
  {
    value: '75+',
    label: 'Product & System Proposals',
    sub: 'Saudi & UAE SaaS portals',
    color: 'text-sky-500 dark:text-sky-400',
    bg: 'bg-sky-50 dark:bg-sky-950/40',
    border: 'border-sky-200 dark:border-sky-800/40',
    bar: 'bg-sky-500',
  },
  {
    value: '14+ hrs',
    label: 'Saved Monthly via Automation',
    sub: 'Dynamic Excel KPI pipelines',
    color: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/40',
    border: 'border-emerald-200 dark:border-emerald-800/40',
    bar: 'bg-emerald-500',
  },
  {
    value: 'KSA & UAE',
    label: 'Regional SaaS Impact',
    sub: 'Warsha automotive platform',
    color: 'text-purple-500 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-950/40',
    border: 'border-purple-200 dark:border-purple-800/40',
    bar: 'bg-purple-500',
  },
];

export const aboutPoints = [
  'Bridging Strategy & Engineering: Translating executive market positioning into unambiguous Business Requirements Documents (BRDs), Functional Specifications (FRDs), and Jira user stories.',
  'Data & KPI Telemetry: Constructing dynamic Excel pivot models, revenue velocity trackers, and EBITDA margin summaries that empower leadership with real-time operational clarity.',
  'CRM & Workflow Automation: Architecting round-robin lead distribution, chatbot escalation flows, and customer journey touchpoints that minimize onboarding friction.',
  'Agile Sprint Governance: Managing sprint backlogs, conducting grooming sessions, and writing granular Gherkin acceptance criteria to eliminate engineering rework.'
];

export const capabilityGroups = [
  {
    eyebrow: '01',
    title: 'Business Analysis & BRD',
    summary: 'Bring absolute clarity to the problem space before a single line of code is written.',
    items: [
      'Requirements gathering & stakeholder walkthroughs',
      'User stories with Gherkin acceptance criteria',
      'Scope documents & As-Is vs To-Be process mapping',
      'PESTLE framework & competitive benchmarking',
    ],
  },
  {
    eyebrow: '02',
    title: 'Product Operations & Agile',
    summary: 'Keep product work organised, visible, and progressing at high velocity.',
    items: [
      'Sprint planning & backlog grooming in Jira',
      'Low-fidelity wireframing & user flow diagrams',
      'Burndown tracking & blocker resolution',
      'UAT test case authoring & release sign-offs',
    ],
  },
  {
    eyebrow: '03',
    title: 'Data & KPI Telemetry',
    summary: 'Turn raw transactional logs into automated, actionable executive insights.',
    items: [
      'Advanced Excel, Pivot Tables & dynamic slicers',
      'KPI dashboards & EBITDA margin reporting',
      'Google Analytics 4 & UTM campaign tracking',
      'Sales velocity & client contribution analysis',
    ],
  },
  {
    eyebrow: '04',
    title: 'Growth & GTM Strategy',
    summary: 'Connect product features with market positioning, acquisition, and retention.',
    items: [
      'Go-to-Market (GTM) strategy execution',
      'Customer persona modeling (Saudi & UAE)',
      'Business Model Canvas (BMC) design',
      'Cross-border regional expansion planning',
    ],
  },
  {
    eyebrow: '05',
    title: 'CRM & Customer Workflows',
    summary: 'Design frictionless lead ingestion and automated support escalations.',
    items: [
      'CRM pipeline & lead stage configuration',
      'Round-robin lead assignment automation',
      'Bot-to-human chat escalation workflows',
      'Payment gateway integration flowcharts',
    ],
  },
  {
    eyebrow: '06',
    title: 'Systems & Architecture',
    summary: 'Document systems to ensure long-term maintainability and operational trust.',
    items: [
      'Customer support SLA & tiering matrices',
      'BPMN 2.0 flowcharts & state machines',
      'Taxonomy & category hierarchy modeling',
      'Dispute resolution & moderation playbooks',
    ],
  },
];

export const tools = [
  'Jira Software',
  'Microsoft Excel (Advanced)',
  'Pivot Tables & Slicers',
  'Google Analytics 4',
  'Power BI',
  'Figma',
  'Postman',
  'Miro',
  'Confluence',
  'Google Dialogflow',
  'SQL',
  'TasksBoard',
];

export const experience = {
  company: 'Warsha - SaaS Platform',
  market: 'Saudi Arabia & UAE Regional Markets',
  title: 'Business Analyst Intern',
  dates: 'Nov 2025 - Feb 2026',
  summary:
    'Supported product strategy, requirements engineering, data telemetry, and CRM operations for a multi-category automotive and neighborhood marketplace SaaS platform serving regional Middle East markets.',
  highlights: [
    'Spearheaded GTM strategy inputs using PESTLE analysis, competitor matrices, and customer personas for Saudi and UAE launches.',
    'Authored comprehensive scope documents and sprint plans in Jira, delivering 25+ end-to-end tracked tasks across cross-functional engineering teams.',
    'Produced low-fidelity wireframes, detailed user journeys, and Gherkin acceptance criteria to communicate unambiguous requirements.',
    'Established UTM campaign tracking, GA4 telemetry events, heat-map analytics, and dynamic Excel KPI dashboards for executive decision support.',
    'Configured CRM workflows for round-robin lead assignment, automated bot-to-human chat escalations, and payment confirmation states.',
    'Facilitated 75+ product and architecture improvement suggestions through structured stakeholder walkthroughs and Business Model Canvas sessions.',
  ],
};

export const education = {
  qualification: 'B.E. in Electronics & Communication Engineering',
  school: 'Velammal Institute of Technology, Chennai (Anna University)',
  dates: '2023 - 2027',
  coursework: ['Systems Design', 'Data Analytics', 'Quantitative Problem Solving', 'Computational Logic', 'Project Management'],
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'warsha-saas-operations',
    title: 'Warsha SaaS Platform Operations & GTM Architecture',
    strapline: 'GTM strategy, Jira sprint delivery, 20-category taxonomy, and CRM escalation systems for Saudi & UAE SaaS',
    teaser:
      'End-to-end Business Analysis and Product Operations for an automotive and neighborhood marketplace platform entering Saudi Arabia and UAE markets.',
    impact: '25+ Jira Sprints · 75+ Improvements · 20-Category Taxonomy · CRM Routing',
    projectType: 'Professional SaaS Experience',
    focusArea: 'Business Analysis + Product Operations',
    role: 'Business Analyst Intern',
    duration: 'Nov 2025 - Feb 2026',
    tools: ['Jira Software', 'Google Analytics 4', 'Excel & Pivot Tables', 'Miro', 'CRM Automations', 'Dialogflow'],
    summary:
      'Engineered structured product operations, requirement documentation, GTM planning, and automated CRM workflows for a fast-evolving SaaS marketplace serving Middle Eastern regional hubs.',
    disclaimer:
      'Based on professional internship deliverables. Internal proprietary business identifiers have been anonymized for confidentiality.',
    overview:
      'At Warsha, I bridged the gap between executive expansion strategy and agile engineering delivery. The role encompassed defining 20 marketplace categories, mapping booking state machines, configuring CRM lead routing, and setting up KPI telemetry for Riyadh and Dubai user cohorts.',
    challenge: [
      'Translating multi-regional regulatory and cultural requirements into unified product specs.',
      'Maintaining delivery velocity and preventing scope creep across cross-functional teams.',
      'Designing robust booking state machines and customer support escalation tiers.',
    ],
    objectives: [
      'Deliver unambiguous scope documents, user stories, and acceptance criteria in Jira.',
      'Establish GTM framework with PESTLE analysis and localized customer personas.',
      'Configure automated CRM workflows and KPI reporting for stakeholder visibility.',
    ],
    approach: [
      {
        title: 'Market Research & GTM Framing',
        description: 'Conducted PESTLE and competitive benchmarking across Saudi Arabia and UAE automotive and rental platforms.',
        details: ['PESTLE analysis', 'Competitor feature matrix', 'Regional persona mapping', 'Business Model Canvas'],
      },
      {
        title: 'Jira Sprint Governance & Scope Documents',
        description: 'Decomposed high-level feature requests into granular user stories with Gherkin acceptance criteria.',
        details: ['Scope documents', 'Sprint backlog grooming', '25+ delivered Jira tasks', 'Dependency tracking'],
      },
      {
        title: 'Interactive User Journeys & Wireframing',
        description: 'Created low-fidelity wireframes and BPMN flowcharts for booking, modifications, and payment verification.',
        details: ['Low-fidelity wireframes', 'Order state machine', '20-category taxonomy', 'Information architecture'],
      },
      {
        title: 'CRM Workflows & Telemetry Dashboards',
        description: 'Set up automated lead assignment, bot-to-human chat routing, and dynamic Excel KPI reports.',
        details: ['Round-robin routing', 'Chat escalation rules', 'UTM tracking & GA4', 'EBITDA summaries'],
      },
    ],
    outputs: [
      'Complete BRD, FRD, and Scope Documentation suite',
      '25+ Jira sprint tasks delivered with zero critical blockers',
      '20-category marketplace taxonomy with validation schemas',
      'Customer support SLA matrix & 5-tier escalation architecture',
      'Executive KPI & EBITDA summary models in Excel',
    ],
    successSignals: [
      '25+ product tasks tracked and delivered on time in Jira.',
      '75+ improvement suggestions integrated into the product roadmap.',
      'Automated CRM workflows reduced lead assignment latency by 45%.',
    ],
    reflection:
      'Demonstrated how an analytical Business Analyst brings discipline and clarity to fast-paced SaaS teams by uniting strategy, requirement specs, and data telemetry into a single operational cadence.',
    previewLabel: 'SaaS Platform Operations',
    previewCards: ['GTM & Market Strategy', 'Jira Sprint Backlog', 'CRM Workflows & SLA'],
    previewMetrics: [
      { label: 'Tasks Delivered', value: '25+ in Jira' },
      { label: 'Proposals', value: '75+ Structured Suggestions' },
    ],
    theme: {
      gradient: 'from-[#0d1b2a] via-[#163a48] to-[#0f766e]',
      surface: 'border-cyan-500/30 bg-cyan-950/40',
      badge: 'border-cyan-400/40 bg-cyan-900/50 text-cyan-300',
      highlight: 'text-cyan-400',
    },
  },
  {
    id: 'excel-kpi-analytics',
    title: 'Interactive Excel KPI & Revenue Velocity Analytics',
    strapline: 'Multi-year client revenue modeling, dynamic pivot slicers, and automated EBITDA margin reporting',
    teaser:
      'Constructed enterprise-grade Excel business intelligence models transforming raw sales logs into dynamic dashboards, client Pareto analyses, and recurring financial templates.',
    impact: 'Dynamic Slicers · Pareto Client Matrix · 14+ Hrs Saved Monthly',
    projectType: 'Data & Financial Analytics',
    focusArea: 'Data Modeling + KPI Visualization',
    role: 'Lead Business / Data Analyst',
    duration: 'Selected Portfolio Project',
    tools: ['Microsoft Excel (Advanced)', 'Pivot Tables & Slicers', 'Data Modeling', 'Trend Visualization', 'Financial Summaries'],
    summary:
      'Architected interactive Excel analytics suites with multi-tier pivot slicers, calculated fields, and automated tax/EBITDA models for executive decision support.',
    disclaimer:
      'Demonstrates real-world data modeling architecture using anonymized enterprise transaction sets.',
    overview:
      'Built a complete data reporting suite in Microsoft Excel. Developed automated revenue tracking by client and year using calculated fields, pivot tables, and interactive slicers. Formatted financial summaries with automated tax calculations and recurring report templates.',
    challenge: [
      'Disparate transaction data with inconsistent date formats and client naming conventions.',
      'Manual monthly report generation consuming 14+ hours of repetitive effort.',
      'Stakeholders required instant filtering across multi-year client performance without manual recalculations.',
    ],
    objectives: [
      'Design an automated data cleaning and normalization pipeline in Excel.',
      'Build dynamic KPI dashboards with synchronized Pivot Slicers.',
      'Automate monthly revenue velocity and client concentration (Pareto) reporting.',
    ],
    approach: [
      {
        title: 'Data Normalization & Cleaning',
        description: 'Standardized raw client transaction data, handled null values, and prepared structured reference tables.',
        details: ['Data validation rules', 'Formula-based data normalization', 'Structured lookup tables'],
      },
      {
        title: 'Multi-Dimensional Pivot & Slicer Modeling',
        description: 'Constructed synchronized pivot models connected to dynamic interactive slicers for year, quarter, and client tier.',
        details: ['Calculated fields', 'Dynamic date hierarchies', 'Synchronized slicer controls'],
      },
      {
        title: 'Visual Telemetry & Executive Summaries',
        description: 'Designed high-contrast visual charts and automated financial summaries for immediate decision support.',
        details: ['Revenue velocity curves', 'Pareto 80/20 client distribution', 'Automated tax & EBITDA calculations'],
      },
    ],
    outputs: [
      'Interactive Excel KPI Dashboard with multi-tier slicers',
      'Month-wise sales trend and growth pattern visualization',
      'Client revenue contribution matrix',
      'Automated financial summary templates with reusable formula structures',
    ],
    successSignals: [
      'Saved 14+ hours of manual reporting time per month.',
      'Enabled real-time filtering across multiple years and client tiers in &lt; 2 seconds.',
      'Delivered 100% data consistency for executive revenue reviews.',
    ],
    reflection:
      'Proved that clean data architecture and well-crafted Excel tooling can provide enterprise-grade analytics clarity without expensive BI licensing overhead.',
    previewLabel: 'Data & KPI Analytics',
    previewCards: ['Dynamic Slicers', 'Sales Trend Modeling', 'Automated Financials'],
    previewMetrics: [
      { label: 'Platform', value: 'Microsoft Excel' },
      { label: 'Impact', value: '14+ Hrs Saved / Month' },
    ],
    theme: {
      gradient: 'from-[#032b2f] via-[#05445e] to-[#00f0ff]',
      surface: 'border-cyan-500/30 bg-cyan-950/40',
      badge: 'border-cyan-400/40 bg-cyan-900/50 text-cyan-300',
      highlight: 'text-cyan-400',
    },
  },
  {
    id: 'smart-weighing-scale',
    title: 'Tamper-Proof Smart Weighing Scale — SIH Project',
    strapline: 'Secure IoT telemetry, tamper-proof data logging, and audit reporting for Smart India Hackathon',
    teaser:
      'Contributed to a secure IoT monitoring and telemetry logging system designed to ensure measurement integrity, auditability, and tamper-proof reporting.',
    impact: 'Tamper-Proof Logging · Sensor Telemetry · SIH Innovation',
    projectType: 'Smart India Hackathon Project',
    focusArea: 'System Reliability + Data Integrity',
    role: 'Systems & Data Contributor',
    duration: 'Hackathon Initiative',
    tools: ['Sensor Telemetry', 'Data Logging Architecture', 'Requirement Engineering', 'Verification Protocols'],
    summary:
      'Structured the data integrity and telemetry logging flow for a smart weighing scale system, preventing data manipulation in commercial and supply-chain weighments.',
    disclaimer:
      'Developed as part of the Smart India Hackathon innovation competition.',
    overview:
      'This project addressed fraudulent weighment manipulation in industrial and agricultural supply chains. I led the requirement modeling and data flow architecture to ensure every measurement event is cryptographically timestamped and logged without possibility of client-side alteration.',
    challenge: [
      'Physical and digital tamper vectors altering scale readouts during transactions.',
      'Lack of an immutable audit trail for dispute reconciliation.',
      'Ensuring low-latency telemetry transmission over intermittent connectivity.',
    ],
    objectives: [
      'Architect a tamper-proof data logging and verification pipeline.',
      'Define state transition rules from weight capture to cloud sync.',
      'Produce clear functional specs for hardware and firmware teams.',
    ],
    approach: [
      {
        title: 'Threat Modeling & Gap Analysis',
        description: 'Identified vulnerabilities in conventional scale communication protocols.',
        details: ['Tamper vector classification', 'Threat matrix', 'Security requirements'],
      },
      {
        title: 'Telemetry Flow & State Architecture',
        description: 'Mapped the end-to-end data lifecycle from load cell sensor to encrypted cloud log.',
        details: ['State transition diagrams', 'Packet verification schemas', 'Offline cache policies'],
      },
      {
        title: 'Audit Reporting & Validation',
        description: 'Designed reporting views for auditors to verify measurement authenticity.',
        details: ['Dispute verification views', 'Tamper alert triggers', 'Validation checklists'],
      },
    ],
    outputs: [
      'Tamper-proof telemetry flow architecture',
      'Functional specification document for firmware integration',
      'Auditor dashboard wireframes and alert schemas',
    ],
    successSignals: [
      'Zero unverified data mutations in simulated stress testing.',
      'Recognized for exceptional requirements rigor and system integrity design.',
    ],
    reflection:
      'Reinforced the foundational principle that trustworthy business data begins with resilient system design and verifiable telemetry pipelines.',
    previewLabel: 'Data Integrity & Systems',
    previewCards: ['Sensor Telemetry', 'Tamper-Proof Logging', 'Audit Reporting'],
    previewMetrics: [
      { label: 'Forum', value: 'Smart India Hackathon' },
      { label: 'Focus', value: 'Data Integrity' },
    ],
    theme: {
      gradient: 'from-[#2c241b] via-[#7c2d12] to-[#ea580c]',
      surface: 'border-orange-500/30 bg-orange-950/40',
      badge: 'border-orange-400/40 bg-orange-900/50 text-orange-300',
      highlight: 'text-orange-400',
    },
  },
  {
    id: 'navi-glove',
    title: 'Navi Glove — Assistive Navigation System',
    strapline: 'User-centered obstacle detection and haptic feedback wearable for visually impaired individuals',
    teaser:
      'Engineered an assistive wearable concept combining ultrasonic spatial mapping with intuitive haptic feedback through empathetic user research.',
    impact: 'User-Centered Design · Spatial Sensor Mapping · Accessibility Focus',
    projectType: 'Academic Innovation Project',
    focusArea: 'Accessibility + Systems Thinking',
    role: 'Project Lead / UX & Requirements',
    duration: 'Academic Capstone',
    tools: ['User Research', 'Sensor Integration', 'Accessibility Frameworks', 'Systems Design'],
    summary:
      'Designed a wearable assistive mobility aid that detects obstacles in 3D space and communicates distance via graduated haptic pulses.',
    disclaimer:
      'Academic engineering project demonstrating user-centric requirement definition and hardware-software empathy.',
    overview:
      'Navi Glove tackled the critical daily mobility challenge faced by visually impaired individuals: detecting head-height and ground-level obstacles that traditional canes miss. My focus was on user empathy, ergonomics, and latency minimization.',
    challenge: [
      'Traditional white canes cannot detect overhead or hanging obstacles.',
      'Auditory feedback interferes with user awareness of ambient environmental sounds.',
      'Wearable form factor needed to be lightweight, non-intrusive, and highly intuitive.',
    ],
    objectives: [
      'Conduct empathetic user interviews to understand blind mobility pain points.',
      'Define haptic pulse frequency schemas that communicate proximity without cognitive overload.',
      'Deliver complete functional specifications and usability test protocols.',
    ],
    approach: [
      {
        title: 'Empathetic User Research',
        description: 'Observed navigation patterns and gathered feedback on white cane limitations.',
        details: ['User pain-point mapping', 'Sensory bandwidth analysis', 'Safety constraints'],
      },
      {
        title: 'Haptic Feedback Matrix Design',
        description: 'Created a graduated vibration frequency model mapped to obstacle distance.',
        details: ['Distance-to-frequency mapping', 'Ergonomic sensor positioning', 'Low-power operation'],
      },
      {
        title: 'Usability Protocol & Iteration',
        description: 'Structured repeatable obstacle course trials to measure user reaction time.',
        details: ['Reaction latency metrics', 'Ergonomic refinement', 'User confidence scoring'],
      },
    ],
    outputs: [
      'User journey and ergonomics specification document',
      'Ultrasonic & haptic sensor architecture schematic',
      'Usability testing protocol and validation report',
    ],
    successSignals: [
      '38% faster obstacle detection compared to standard white cane navigation in trials.',
      'Demonstrated high user confidence with zero audio interference.',
    ],
    reflection:
      'Solidified my belief that the best engineering solutions are deeply human-centric, putting the real-world user at the heart of every technical decision.',
    previewLabel: 'Accessibility Systems',
    previewCards: ['Mobility Context', 'Obstacle Detection', 'Haptic Guidance'],
    previewMetrics: [
      { label: 'Focus', value: 'User-Centered Accessibility' },
      { label: 'Type', value: 'Engineering Innovation' },
    ],
    theme: {
      gradient: 'from-[#2b1f4a] via-[#4c1d95] to-[#8b5cf6]',
      surface: 'border-violet-500/30 bg-violet-950/40',
      badge: 'border-violet-400/40 bg-violet-900/50 text-violet-300',
      highlight: 'text-violet-400',
    },
  },
  {
    id: 'ai-disaster-management',
    title: 'AI-Enabled Emergency Disaster Management',
    strapline: 'Multi-layer GIS telemetry and AI decision-support architecture for high-pressure disaster response',
    teaser:
      'Structured a conceptual decision-support system integrating satellite GIS layers, situational reports, and automated resource dispatch prioritization.',
    impact: 'GIS Data Layers · Decision Support · Information Architecture',
    projectType: 'Conceptual Systems Project',
    focusArea: 'Information Flow + Crisis Decision Support',
    role: 'Systems Architect / Concept Contributor',
    duration: 'Conceptual Initiative',
    tools: ['GIS Concepts', 'AI Decision Frameworks', 'Information Architecture', 'Process Flowcharts'],
    summary:
      'Architected the end-to-end information flow for disaster monitoring, transforming chaotic situational data into prioritized emergency dispatch queues.',
    disclaimer:
      'Conceptual architecture project exploring data orchestration in crisis management.',
    overview:
      'During flood and natural disaster events, emergency control rooms are overwhelmed by fragmented, unverified messages. This project designed the information architecture that ingests citizen SOS inputs, GIS flood models, and road status into a prioritized triage dashboard.',
    challenge: [
      'Massive noise and duplicate reports during natural disasters.',
      'Fragmented data silos between ground volunteers, emergency responders, and command staff.',
      'Need for sub-minute situational awareness to prioritize life-critical rescues.',
    ],
    objectives: [
      'Design a multi-source data ingestion and deduplication pipeline.',
      'Map GIS layers with real-time road accessibility vectors.',
      'Create an unambiguous triage workflow for emergency coordinators.',
    ],
    approach: [
      {
        title: 'Information Ingestion & Triage Architecture',
        description: 'Structured citizen report classification algorithms and deduplication rules.',
        details: ['Signal taxonomy', 'Deduplication logic', 'Priority scoring matrix'],
      },
      {
        title: 'GIS Multi-Layer Data Fusion',
        description: 'Combined topography, rainfall telemetry, and hospital capacity into a unified map view.',
        details: ['Layered data models', 'Spatial boundary definitions', 'Routing constraint rules'],
      },
      {
        title: 'Command Center Workflow Modeling',
        description: 'Created step-by-step dispatch playbooks for emergency personnel.',
        details: ['Dispatch decision trees', 'Status tracking states', 'After-action audit logs'],
      },
    ],
    outputs: [
      'Crisis information architecture flowchart',
      'Prioritization scoring algorithm specifications',
      'Command center triage dashboard wireframes',
    ],
    successSignals: [
      'Modeled 60% reduction in emergency triage latency across simulated flood scenarios.',
      'Clear, auditable dispatch trail from citizen SOS to rescue confirmation.',
    ],
    reflection:
      'Deepened my expertise in information architecture and how structured data pipelines can bring clarity and order to high-stakes environments.',
    previewLabel: 'Decision Support Systems',
    previewCards: ['GIS Telemetry', 'Triage Logic', 'Command Dashboard'],
    previewMetrics: [
      { label: 'Domain', value: 'Crisis Decision Support' },
      { label: 'Type', value: 'Information Architecture' },
    ],
    theme: {
      gradient: 'from-[#1f2937] via-[#334155] to-[#0369a1]',
      surface: 'border-sky-500/30 bg-sky-950/40',
      badge: 'border-sky-400/40 bg-sky-900/50 text-sky-300',
      highlight: 'text-sky-400',
    },
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((study) => study.id === id) ?? null;
}

export const faqData = [
  {
    question: 'What sets your Business Analyst approach apart?',
    answer:
      'I combine rigorous engineering problem-solving with SaaS product operations. Rather than treating documentation as a bureaucratic formality, I author scope documents, user stories with Gherkin acceptance criteria, and dynamic Excel KPI models that directly accelerate development sprints and eliminate ambiguity for engineering teams.',
  },
  {
    question: 'What was your specific contribution at Warsha SaaS (KSA / UAE)?',
    answer:
      'At Warsha, I managed Jira sprint backlogs across 25+ delivered tasks, conducted PESTLE and competitive benchmarking for Saudi Arabia and UAE go-to-market launches, configured CRM round-robin lead routing and chat escalations, and built automated Excel KPI dashboards for executive revenue tracking.',
  },
  {
    question: 'How do you approach Excel data modeling & KPI reporting?',
    answer:
      'I build robust, repeatable models with clean data validation, calculated pivot fields, and synchronized interactive slicers. My models automate EBITDA margins, client revenue concentration (Pareto distribution), and monthly sales velocity, saving over 14 hours of manual monthly reporting effort.',
  },
  {
    question: 'Which agile methodologies and tools do you work with daily?',
    answer:
      'I work extensively in Scrum and Kanban environments using Jira Software, Confluence, and Miro. My daily toolkit includes Microsoft Excel (Advanced), Google Analytics 4, Figma for wireframing, Postman for API inspection, and SQL for data querying.',
  },
  {
    question: 'Are you open to immediate full-time or contract roles?',
    answer:
      'Yes, I am actively seeking full-time and high-impact opportunities in Business Analysis, Product Operations, Data Analytics, and Growth Strategy. I am based in Chennai and open to on-site, hybrid, or remote roles.',
  },
];
