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
  title: "Mohammed Faheem FS | Founder's Office, Chief of Staff, AI Evals & Business Analyst",
  description:
    "Mohammed Faheem FS — Operator and Business Analyst across Founder's Office, Chief of Staff, AI Evals, and Product Operations. Experience scaling SaaS products across Saudi Arabia & UAE markets.",
  resumePath: 'Mohammed-Faheem-Business-Analyst-Resume-Updated.pdf',
  ogImagePath: 'og-cover.svg',
  phone: '+91 9840502598',
  email: 'mdfaheem2507@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faheemfs',
  github: 'https://github.com/friend05',
  location: 'Chennai, Tamil Nadu, India',
};

export const navLinks = [
  { label: 'Roles', href: '#roles' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const targetRoles = [
  {
    title: "Founder's Office",
    summary:
      '0-to-1 execution partner translating founder priorities into structured GTM research, product roadmaps, and operational workflows.',
    highlights: ['GTM & Market Sizing (KSA/UAE)', 'Special Projects & 0-to-1 Execution', 'Cross-Functional Unblocking'],
  },
  {
    title: 'Chief of Staff',
    summary:
      'Driving operating cadence across product, engineering, and growth through clear KPI telemetry, sprint governance, and executive briefs.',
    highlights: ['Executive KPI & EBITDA Dashboards', '25+ Agile Sprints Coordinated', 'SOPs & CRM Process Automation'],
  },
  {
    title: 'AI Evals & Product QA',
    summary:
      'Designing structured evaluation rubrics, prompt/model quality benchmarks, edge-case test suites, and end-to-end product audits.',
    highlights: ['LLM Output & Rubric Evaluation', 'Edge-Case & Adversarial Testing', 'Full-Stack API & UX Verification'],
  },
  {
    title: 'Business Analyst',
    summary:
      'Bridging business strategy and engineering with unambiguous BRDs, Gherkin user stories, state machines, and data models.',
    highlights: ['BRD / FRD & Scope Definition', 'User Stories & Acceptance Criteria', 'Excel Modeling & Data Cleaning'],
  },
];

export const profile = {
  name: 'Mohammed Faheem FS',
  shortName: 'MF',
  eyebrow: "Founder's Office • Chief of Staff • AI Evals • Business Analyst",
  headline: 'Turning ambiguity into structured execution across product, operations, and AI systems.',
  intro:
    "I work at the intersection of strategy, product operations, AI evaluation, and business analysis. With hands-on experience scaling SaaS operations across Saudi Arabia and the UAE, I help founders and product teams define clear requirements, evaluate system quality, automate workflows, and track the metrics that matter.",
  location: 'Chennai, Tamil Nadu',
  availability: "Open to Founder's Office, Chief of Staff, AI Evals, and Business Analyst roles",
};

export const heroTelemetry = [
  {
    value: '25+',
    label: 'Jira Sprints Delivered',
    sub: 'Cross-functional product execution',
  },
  {
    value: '75+',
    label: 'Product & Ops Proposals',
    sub: 'Saudi & UAE SaaS platforms',
  },
  {
    value: '14+ hrs',
    label: 'Saved Monthly via Automation',
    sub: 'Automated Excel KPI pipelines',
  },
  {
    value: 'KSA & UAE',
    label: 'Regional Market Experience',
    sub: 'GTM, CRM & platform operations',
  },
];

export const aboutPoints = [
  "Founder's Office & Chief of Staff Execution: Taking ambiguous, high-priority problems from research and scoping through to cross-functional delivery and executive reporting.",
  'AI Evals & System Verification: Building structured evaluation criteria, testing edge cases, verifying API/UI behavior, and documenting clear quality benchmarks.',
  'Business Analysis & Product Ops: Writing concise BRDs, FRDs, and Gherkin user stories that eliminate engineering rework and keep sprints moving.',
  'Data & KPI Telemetry: Designing clean Excel models, pivot dashboards, and automated reporting templates for leadership visibility.',
];

export const capabilityGroups = [
  {
    eyebrow: '01',
    title: "Founder's Office & Strategy",
    summary: 'Drive 0-to-1 initiatives, market expansion research, and cross-functional alignment.',
    items: [
      'Go-to-Market (GTM) strategy & PESTLE analysis',
      'Competitive benchmarking & persona modeling',
      'Business Model Canvas & unit economics',
      'Executive memos & stakeholder walkthroughs',
    ],
  },
  {
    eyebrow: '02',
    title: 'Chief of Staff & Operations',
    summary: 'Build repeatable operating cadences, KPI visibility, and cross-team accountability.',
    items: [
      'Sprint governance & backlog prioritization in Jira',
      'CRM pipeline & round-robin lead routing',
      'Support SLA matrices & escalation workflows',
      'Cross-functional blocker resolution',
    ],
  },
  {
    eyebrow: '03',
    title: 'AI Evals & Product QA',
    summary: 'Ensure AI outputs, conversational flows, and product releases meet strict quality bars.',
    items: [
      'AI response evaluation & rubric design',
      'Chatbot intent & escalation flow testing (Dialogflow)',
      'End-to-end UAT, edge-case & API verification',
      'Defect triage & structured audit reporting',
    ],
  },
  {
    eyebrow: '04',
    title: 'Business Analysis & Specs',
    summary: 'Translate business goals into clear, testable specifications for engineering teams.',
    items: [
      'BRD, FRD & scope documentation',
      'User stories with Gherkin acceptance criteria',
      'As-Is vs. To-Be process mapping & BPMN flows',
      '20-category marketplace taxonomy modeling',
    ],
  },
  {
    eyebrow: '05',
    title: 'Data & Financial Telemetry',
    summary: 'Turn raw operational data into clean, automated dashboards for decision support.',
    items: [
      'Advanced Excel, Pivot Tables & dynamic slicers',
      'Revenue velocity & Pareto (80/20) client analysis',
      'Automated financial & EBITDA summary templates',
      'GA4 event tracking & UTM attribution',
    ],
  },
  {
    eyebrow: '06',
    title: 'Systems & Information Design',
    summary: 'Structure reliable data pipelines, state transitions, and user-centered workflows.',
    items: [
      'Order & payment state machine architecture',
      'Low-fidelity wireframing & user journey mapping',
      'Tamper-proof telemetry & audit logging',
      'Multi-source triage & decision-support flows',
    ],
  },
];

export const tools = [
  'Jira Software',
  'Confluence',
  'Microsoft Excel (Advanced)',
  'Google Analytics 4',
  'Power BI',
  'Figma',
  'Postman',
  'Miro',
  'Google Dialogflow',
  'SQL',
  'Python (Scripting & QA)',
  'Git & GitHub',
];

export const experience = {
  company: 'Warsha — SaaS Platform',
  market: 'Saudi Arabia & UAE Markets',
  title: 'Business Analyst & Product Operations Intern',
  dates: 'Nov 2025 – Feb 2026',
  summary:
    'Worked closely with leadership and engineering across product strategy, requirements engineering, KPI telemetry, and CRM operations for a multi-category automotive and neighborhood marketplace SaaS platform in the Middle East.',
  highlights: [
    'Shaped GTM strategy for Saudi Arabia and UAE launches using PESTLE analysis, competitor matrices, and localized customer personas.',
    'Owned scope documents and sprint execution in Jira, delivering 25+ end-to-end tracked tasks across cross-functional engineering teams.',
    'Authored low-fidelity wireframes, booking state machines, and Gherkin acceptance criteria to remove ambiguity before development.',
    'Configured automated CRM workflows including round-robin lead routing, bot-to-human chat escalations, and payment state tracking.',
    'Built UTM campaign tracking, GA4 telemetry events, and dynamic Excel KPI dashboards for leadership reviews.',
    'Contributed 75+ structured product, UX, and operational improvement proposals across platform walkthroughs.',
  ],
};

export const education = {
  qualification: 'B.E. in Electronics & Communication Engineering',
  school: 'Velammal Institute of Technology, Chennai (Anna University)',
  dates: '2023 – 2027',
  coursework: ['Systems Design', 'Data Analytics', 'Quantitative Problem Solving', 'Computational Logic', 'Project Management'],
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'warsha-saas-operations',
    title: 'Warsha SaaS Platform Operations & GTM Architecture',
    strapline: 'GTM strategy, 25+ Jira sprints, 20-category taxonomy, and CRM escalation workflows for KSA & UAE markets.',
    teaser:
      'End-to-end Business Analysis, Founder’s Office research, and Product Operations for an automotive and neighborhood marketplace scaling in Saudi Arabia and the UAE.',
    impact: '25+ Jira Sprints · 75+ Proposals · 20-Category Taxonomy',
    projectType: 'SaaS Operations & Strategy',
    focusArea: "Founder's Office · Product Ops · BA",
    role: 'Business Analyst Intern',
    duration: 'Nov 2025 – Feb 2026',
    tools: ['Jira Software', 'Google Analytics 4', 'Excel & Pivot Tables', 'Miro', 'CRM Automations', 'Dialogflow'],
    summary:
      'Structured product operations, requirement specifications, GTM research, and automated CRM workflows for a regional SaaS marketplace.',
    disclaimer:
      'Based on professional internship deliverables. Proprietary internal identifiers have been anonymized.',
    overview:
      'At Warsha, I bridged executive expansion goals and agile engineering execution. My work covered defining a 20-category marketplace taxonomy, mapping booking and payment state machines, configuring CRM lead routing, and building KPI reporting for Riyadh and Dubai launches.',
    challenge: [
      'Translating multi-regional regulatory and customer requirements into clear, unified product specs.',
      'Maintaining sprint velocity and preventing scope creep across distributed teams.',
      'Designing reliable booking state machines and bot-to-human customer support escalation tiers.',
    ],
    objectives: [
      'Deliver clear scope documents, user stories, and Gherkin acceptance criteria in Jira.',
      'Establish a regional GTM framework with PESTLE analysis and localized personas.',
      'Automate CRM lead routing and build recurring Excel KPI dashboards for leadership.',
    ],
    approach: [
      {
        title: 'Market Research & GTM Framing',
        description: 'Conducted PESTLE and competitive benchmarking across Saudi Arabia and UAE marketplaces.',
        details: ['PESTLE analysis', 'Competitor feature matrix', 'Regional persona mapping', 'Business Model Canvas'],
      },
      {
        title: 'Jira Sprint Governance & Scope Specs',
        description: 'Broke down high-level initiatives into testable user stories with Gherkin acceptance criteria.',
        details: ['Scope documents', 'Backlog grooming', '25+ delivered Jira tasks', 'Dependency tracking'],
      },
      {
        title: 'Workflows, Taxonomy & Telemetry',
        description: 'Mapped 20 marketplace categories, CRM round-robin routing, chat escalation rules, and KPI models.',
        details: ['Order state machine', '20-category taxonomy', 'Bot-to-human escalation', 'Excel & GA4 telemetry'],
      },
    ],
    outputs: [
      'Complete BRD, FRD, and Scope Documentation suite',
      '25+ Jira sprint tasks delivered with zero critical blockers',
      '20-category marketplace taxonomy with validation schemas',
      'Customer support SLA matrix & 5-tier escalation workflow',
      'Executive KPI & EBITDA summary models in Excel',
    ],
    successSignals: [
      '25+ product tasks tracked and delivered on schedule in Jira.',
      '75+ structured improvement proposals reviewed with leadership.',
      'Automated CRM routing reduced lead assignment latency by 45%.',
    ],
    reflection:
      'Showed how structured scoping, clear acceptance criteria, and disciplined KPI tracking allow lean teams to execute complex regional launches smoothly.',
    previewLabel: 'SaaS Operations',
    previewCards: ['GTM Strategy', 'Jira Sprint Delivery', 'CRM & AI Escalation'],
    previewMetrics: [
      { label: 'Sprints Delivered', value: '25+ in Jira' },
      { label: 'Proposals', value: '75+ Improvements' },
    ],
    theme: {
      gradient: 'from-slate-900 to-slate-800',
      surface: 'border-slate-200 bg-slate-50',
      badge: 'border-slate-300 bg-slate-100 text-slate-700',
      highlight: 'text-slate-900',
    },
  },
  {
    id: 'jarshare-qa-audit',
    title: 'JarShare Marketplace — End-to-End Product QA & Evaluation Audit',
    strapline: 'Full-stack mobile & API evaluation, 26-screen user journey verification, and security/validation rubric design.',
    teaser:
      'Comprehensive product evaluation, API smoke testing, and UX audit for a peer-to-peer neighborhood culinary marketplace in Riyadh.',
    impact: '26 Live Flows Verified · API & Auth Audit · Structured QA Rubric',
    projectType: 'AI Evals & Product QA',
    focusArea: 'Evaluation Rubrics · QA · Systems Analysis',
    role: 'Product QA & Systems Analyst',
    duration: 'Selected Case Study',
    tools: ['Postman & API Testing', 'Python Verification Scripts', 'Mobile QA', 'State Machine Auditing', 'Security & Input Validation'],
    summary:
      'Executed a rigorous end-to-end product and technical audit covering authentication, GPS map discovery, single-seller cart constraints, payment handshakes, and input security.',
    disclaimer:
      'Independent technical and product quality audit evaluating mobile client behavior and API edge cases.',
    overview:
      'Conducted a systematic evaluation of the JarShare marketplace across buyer and seller workflows. Designed repeatable evaluation rubrics covering OTP authentication, map radius discovery, cart state rules, Moyasar payment integration, and image/profile input validation.',
    challenge: [
      'Verifying complex two-sided marketplace constraints (single-seller cart rules, 15–30 min order acceptance windows).',
      'Testing edge cases across unauthenticated guest browsing, OTP redirects, and profile mutation endpoints.',
      'Auditing file upload and profile validation rules against malformed inputs.',
    ],
    objectives: [
      'Map and verify 26 end-to-end mobile screens and state transitions.',
      'Execute automated API smoke tests and input validation checks.',
      'Compile a structured executive QA report with actionable remediation priorities.',
    ],
    approach: [
      {
        title: 'User Journey & State Machine Verification',
        description: 'Walked through guest exploration, map pin discovery, cart building, and checkout redirects.',
        details: ['26-screen evidence capture', 'Single-seller cart rules', 'Order handshake states'],
      },
      {
        title: 'API & Input Validation Auditing',
        description: 'Tested REST endpoints for authentication, profile updates, and image upload security.',
        details: ['API smoke test suite', 'Payload boundary testing', 'Upload security checks'],
      },
      {
        title: 'Executive Audit & Prioritization Report',
        description: 'Synthesized findings into a clear severity-ranked report for engineering and product teams.',
        details: ['Severity matrix', 'Reproducible steps', 'UX & conversion recommendations'],
      },
    ],
    outputs: [
      'Master QA Audit Report with 26 verified screen states',
      'Automated Python test scripts for profile & upload validation',
      'Two-sided platform architecture & state flow documentation',
    ],
    successSignals: [
      '100% coverage of core buyer discovery, cart, and authentication flows.',
      'Identified critical auth-redirect and validation edge cases prior to scale.',
    ],
    reflection:
      'Demonstrates the exact rigor required in AI Evals and Product Operations: defining clear rubrics, testing adversarial edge cases, and translating technical findings into clear product priorities.',
    previewLabel: 'Product Evaluation & QA',
    previewCards: ['26-Screen Flow Audit', 'API & Security Checks', 'Evaluation Rubrics'],
    previewMetrics: [
      { label: 'Coverage', value: '26 End-to-End Flows' },
      { label: 'Focus', value: 'QA & Evaluation Rubrics' },
    ],
    theme: {
      gradient: 'from-slate-900 to-slate-800',
      surface: 'border-slate-200 bg-slate-50',
      badge: 'border-slate-300 bg-slate-100 text-slate-700',
      highlight: 'text-slate-900',
    },
  },
  {
    id: 'excel-kpi-analytics',
    title: 'Executive Excel KPI & Revenue Velocity Analytics',
    strapline: 'Multi-year client revenue modeling, dynamic pivot slicers, and automated financial summary reporting.',
    teaser:
      'Built clean Excel business intelligence models that turn raw sales logs into dynamic dashboards, Pareto client matrices, and recurring financial templates.',
    impact: 'Dynamic Slicers · Pareto Matrix · 14+ Hrs Saved Monthly',
    projectType: 'Data & Executive Reporting',
    focusArea: 'Chief of Staff · Business Analysis',
    role: 'Business / Data Analyst',
    duration: 'Selected Project',
    tools: ['Microsoft Excel (Advanced)', 'Pivot Tables & Slicers', 'Data Cleaning', 'KPI Dashboards', 'Financial Modeling'],
    summary:
      'Designed interactive Excel analytics models with synchronized pivot slicers, calculated fields, and automated tax/EBITDA summaries for leadership reviews.',
    disclaimer:
      'Demonstrates real-world data modeling architecture using anonymized transaction sets.',
    overview:
      'Built an end-to-end reporting suite in Microsoft Excel to track revenue by client and year, analyze month-wise sales velocity, evaluate 80/20 client concentration, and automate recurring financial summaries.',
    challenge: [
      'Raw transaction logs had inconsistent dates, duplicate client names, and manual formula errors.',
      'Monthly leadership reporting took 14+ hours of repetitive manual spreadsheet work.',
      'Decision-makers needed instant filtering across years and client tiers during reviews.',
    ],
    objectives: [
      'Standardize and clean raw transaction data using structured validation rules.',
      'Build an interactive KPI dashboard controlled by synchronized Pivot Slicers.',
      'Automate monthly sales trend, client contribution, and tax/total summary templates.',
    ],
    approach: [
      {
        title: 'Data Cleaning & Normalization',
        description: 'Standardized raw client transaction logs and built clean reference tables.',
        details: ['Data validation rules', 'Formula normalization', 'Structured lookup tables'],
      },
      {
        title: 'Pivot Table & Slicer Architecture',
        description: 'Connected multi-dimensional pivot tables to interactive slicers for year, quarter, and client tier.',
        details: ['Calculated fields', 'Dynamic date hierarchies', 'Synchronized slicers'],
      },
      {
        title: 'Executive Views & Financial Templates',
        description: 'Created clear visual charts for monthly trends, Pareto client concentration, and tax summaries.',
        details: ['Monthly sales velocity', 'Client contribution matrix', 'Automated financial totals'],
      },
    ],
    outputs: [
      'Interactive Excel KPI Dashboard with multi-tier slicers',
      'Month-wise sales trend and growth analysis views',
      'Client revenue contribution (Pareto) report',
      'Reusable financial summary template with automated calculations',
    ],
    successSignals: [
      'Eliminated 14+ hours of manual monthly reporting work.',
      'Enabled instant multi-year filtering during executive reviews.',
      'Improved accuracy and consistency across recurring financial reports.',
    ],
    reflection:
      'Clean data structure and well-designed Excel models give founders and executives immediate operational clarity without complex BI overhead.',
    previewLabel: 'Executive KPI Reporting',
    previewCards: ['Dynamic Pivot Slicers', 'Sales Trend Analysis', 'Automated Financials'],
    previewMetrics: [
      { label: 'Platform', value: 'Microsoft Excel' },
      { label: 'Efficiency', value: '14+ Hrs Saved / Mo' },
    ],
    theme: {
      gradient: 'from-slate-900 to-slate-800',
      surface: 'border-slate-200 bg-slate-50',
      badge: 'border-slate-300 bg-slate-100 text-slate-700',
      highlight: 'text-slate-900',
    },
  },
  {
    id: 'smart-weighing-scale',
    title: 'Tamper-Proof Smart Weighing Scale — Smart India Hackathon',
    strapline: 'Secure IoT telemetry, tamper-proof data logging, and audit verification workflow.',
    teaser:
      'Designed the data integrity and telemetry logging workflow for a tamper-proof weighing system to prevent manipulation in commercial supply chains.',
    impact: 'Tamper-Proof Logging · Telemetry Verification · SIH Project',
    projectType: 'Systems & Data Integrity',
    focusArea: 'Requirement Modeling · Audit Systems',
    role: 'Systems & Data Contributor',
    duration: 'Smart India Hackathon',
    tools: ['Sensor Telemetry', 'Data Logging Architecture', 'Requirement Engineering', 'Verification Protocols'],
    summary:
      'Structured the requirement model and verification pipeline for a smart weighing scale system that logs immutable measurement records.',
    disclaimer:
      'Developed for the Smart India Hackathon innovation competition.',
    overview:
      'Addressed fraudulent weighment manipulation in supply chains by defining the state transition rules, tamper-detection triggers, and audit verification views from load-cell capture to cloud sync.',
    challenge: [
      'Physical and digital tampering altering scale readouts during transactions.',
      'Lack of a verifiable audit trail for resolving commercial disputes.',
      'Maintaining reliable logging across intermittent connectivity.',
    ],
    objectives: [
      'Define a tamper-evident data logging and verification pipeline.',
      'Map clear state transitions from sensor capture to encrypted storage.',
      'Design auditor views for rapid dispute verification.',
    ],
    approach: [
      {
        title: 'Threat & Gap Analysis',
        description: 'Mapped common physical and calibration tamper vectors.',
        details: ['Tamper classification', 'Integrity requirements', 'Alert rules'],
      },
      {
        title: 'Telemetry Flow Architecture',
        description: 'Specified packet states, offline caching, and sync verification.',
        details: ['State transitions', 'Verification schema', 'Offline queue logic'],
      },
      {
        title: 'Audit Reporting Design',
        description: 'Structured clear verification views and anomaly alerts for inspectors.',
        details: ['Auditor dashboard specs', 'Tamper alert triggers', 'Validation checklist'],
      },
    ],
    outputs: [
      'Tamper-proof telemetry flow specification',
      'Functional requirements for firmware-to-cloud sync',
      'Auditor verification wireframes and alert rules',
    ],
    successSignals: [
      'Zero unverified data mutations in simulated test scenarios.',
      'Commended for clear system integrity and requirement structure.',
    ],
    reflection:
      'Trustworthy analytics and reporting always depend on reliable upstream data capture and clear verification rules.',
    previewLabel: 'Data Integrity',
    previewCards: ['Sensor Telemetry', 'Tamper Detection', 'Audit Views'],
    previewMetrics: [
      { label: 'Program', value: 'Smart India Hackathon' },
      { label: 'Focus', value: 'System Integrity' },
    ],
    theme: {
      gradient: 'from-slate-900 to-slate-800',
      surface: 'border-slate-200 bg-slate-50',
      badge: 'border-slate-300 bg-slate-100 text-slate-700',
      highlight: 'text-slate-900',
    },
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((study) => study.id === id) ?? null;
}

export const faqData = [
  {
    question: "Which roles are you currently targeting?",
    answer:
      "I am targeting Founder's Office, Chief of Staff (Associate/Intern), AI Evals & Product QA, and Business Analyst roles. I thrive in high-ownership environments where I can structure ambiguous problems, run cross-functional sprints, evaluate product/AI quality, and build executive reporting.",
  },
  {
    question: 'What did you deliver during your time at Warsha SaaS (KSA / UAE)?',
    answer:
      'I delivered 25+ tracked Jira tasks across agile sprints, conducted PESTLE and competitor GTM research for Saudi Arabia and UAE launches, designed a 20-category marketplace taxonomy, configured CRM round-robin lead routing and bot-to-human chat escalations, and built dynamic Excel KPI dashboards.',
  },
  {
    question: 'How does your skillset apply to AI Evals and Product QA?',
    answer:
      'I combine structured requirement writing (Gherkin acceptance criteria, state machines, taxonomy rules) with rigorous edge-case testing, chatbot escalation verification, and API/UI auditing—allowing me to design clear evaluation rubrics and benchmark model or product behavior systematically.',
  },
  {
    question: 'Where are you based and what is your availability?',
    answer:
      'I am based in Chennai, India, and open to remote, hybrid, or on-site opportunities globally.',
  },
];
