export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  problem: string;
  role: string;
  whatIDid: string[];
  result: string;
  toolsOrArtifact: string[];
};

export type AdditionalProject = {
  id: string;
  title: string;
  context: string;
  problem: string;
  role: string;
  whatIDid: string;
  result: string;
  toolsOrArtifact: string;
};

export const siteMeta = {
  title: 'Mohammed Faheem FS — Business Analyst & Generalist Operator',
  description:
    'Mohammed Faheem FS — Business Analyst & Generalist Operator. Open to AI Evals & Product QA, Chief of Staff, Founder’s Office, Business Analysis, and Business Operations roles.',
  resumePath: 'Mohammed-Faheem-Business-Analyst-Resume-Updated.pdf',
  ogImagePath: 'og-cover.svg',
  phone: '+91 9840502598',
  email: 'mdfaheem2507@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faheemfs',
  github: 'https://github.com/friend05',
  location: 'Chennai, Tamil Nadu, India',
};

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Roles', href: '#roles' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: siteMeta.resumePath, isResume: true },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Mohammed Faheem FS',
  roleTitle: 'Business Analyst & Generalist Operator',
  focusLine: 'AI Evals · Chief of Staff · Founder’s Office',
  headline: 'I turn ambiguous problems into clear decisions, reliable systems, and shipped work.',
  summary:
    'With hands-on SaaS experience across Saudi Arabia and UAE markets, I scope product requirements, test complex user flows, build Excel reporting models, and coordinate cross-functional execution.',
  location: 'Chennai, India',
};

export const mainProjects: CaseStudy[] = [
  {
    id: 'jarshare-ai-evals-qa',
    title: 'JarShare — AI Evals & Product QA',
    category: 'AI Evals & Product QA',
    problem:
      'A peer-to-peer neighborhood food marketplace needed systematic verification across guest browsing, OTP authentication, map discovery, single-seller cart rules, payment handshakes, and input security before scaling.',
    role: 'Product QA & Systems Analyst (Independent Audit)',
    whatIDid: [
      'Designed a structured evaluation checklist covering 26 end-to-end buyer and seller mobile flows.',
      'Tested REST API endpoints for authentication redirects, profile updates, and file upload validation using Python scripts.',
      'Documented reproducible edge cases, state transition bugs, and UX fixes in a prioritized audit report.',
    ],
    result:
      'Delivered a complete QA audit report and verification test suite covering 26 live screens, API smoke tests, and input validation checks.',
    toolsOrArtifact: [
      '26-Screen QA Audit Report',
      'Python API & Upload Test Scripts',
      'Platform Architecture Specification',
    ],
  },
  {
    id: 'warsha-saas-operations',
    title: 'Warsha SaaS — GTM, Operations & Cross-functional Execution',
    category: 'GTM, Operations & Execution',
    problem:
      'A multi-category SaaS marketplace expanding into Saudi Arabia and the UAE needed clear product specs, localized market research, structured sprint tracking, and automated CRM lead routing.',
    role: 'Business Analyst Intern (Nov 2025 – Feb 2026)',
    whatIDid: [
      'Conducted PESTLE analysis, competitor benchmarking, and customer persona mapping for Saudi and UAE market entry.',
      'Wrote scope documents, user stories with Gherkin acceptance criteria, and low-fidelity wireframes across 25+ Jira sprint tasks.',
      'Structured a 20-category marketplace taxonomy, CRM round-robin lead routing, and bot-to-human chat escalation rules.',
    ],
    result:
      'Shipped 25+ tracked Jira tasks, contributed 75+ documented product and workflow improvements, and standardized onboarding and support handoffs.',
    toolsOrArtifact: [
      'Jira Software & Confluence',
      'BRD / FRD & 20-Category Taxonomy',
      'CRM Routing & Chat Escalation Flows',
      'GA4 & UTM Tracking',
    ],
  },
  {
    id: 'executive-kpi-analytics',
    title: 'Executive KPI Analytics — Business Operations & Decision Support',
    category: 'Business Operations & Analytics',
    problem:
      'Raw client sales logs were inconsistent and required repetitive manual spreadsheet work to track multi-year revenue trends, client concentration, and tax summaries.',
    role: 'Business Analyst (Portfolio Project)',
    whatIDid: [
      'Cleaned and standardized transaction records using structured validation rules and lookup tables in Microsoft Excel.',
      'Built interactive Pivot Table dashboards with synchronized slicers to filter revenue by client, month, and year.',
      'Created reusable financial summary templates with automated tax and total calculations.',
    ],
    result:
      'Replaced manual spreadsheet rework with a single interactive workbook for reviewing monthly sales trends and top client contributions.',
    toolsOrArtifact: [
      'Microsoft Excel (Pivot Tables & Slicers)',
      'Client Revenue Contribution Matrix',
      'Automated Financial Summary Template',
    ],
  },
];

export const additionalProjects: AdditionalProject[] = [
  {
    id: 'smart-weighing-scale',
    title: 'Tamper-Proof Smart Weighing Scale',
    context: 'Smart India Hackathon',
    problem:
      'Commercial weighing scales were vulnerable to physical and digital manipulation without an verifiable audit log.',
    role: 'Systems & Data Contributor',
    whatIDid:
      'Mapped tamper vectors and defined the data-logging flow from sensor capture to audit verification.',
    result:
      'Delivered a clear functional specification and audit alert workflow for tamper-evident weight logging.',
    toolsOrArtifact: 'Telemetry Flow Spec · Audit Verification Rules',
  },
  {
    id: 'navi-glove',
    title: 'Navi Glove — Assistive Navigation System',
    context: 'Academic Engineering Project',
    problem:
      'Visually impaired users needed a non-intrusive way to detect upper-body and ground obstacles without blocking ambient sound.',
    role: 'Project Lead (Requirements & Usability)',
    whatIDid:
      'Researched mobility constraints and designed an ultrasonic obstacle detection wearable with graduated haptic feedback.',
    result:
      'Built and tested a working wearable prototype that signals obstacle proximity through vibration patterns.',
    toolsOrArtifact: 'Usability Test Protocol · Sensor & Haptic Mapping',
  },
  {
    id: 'ai-disaster-management',
    title: 'AI-Enabled Emergency Disaster Management',
    context: 'Conceptual Systems Project',
    problem:
      'Emergency response teams face duplicate reports and fragmented situational data during floods and natural disasters.',
    role: 'Systems Contributor',
    whatIDid:
      'Structured an information flow combining citizen SOS reports, GIS map layers, and triage prioritization rules.',
    result:
      'Produced a conceptual decision-support architecture and command triage wireframe for emergency dispatch.',
    toolsOrArtifact: 'Information Flow Diagram · Triage Priority Matrix',
  },
];

export const targetRoles = [
  {
    title: 'AI Evals & Product QA',
    status: 'Open to Role',
    description:
      'Designing evaluation rubrics, testing prompt and system behavior against edge cases, auditing user flows, and writing clear defect reports.',
  },
  {
    title: 'Chief of Staff',
    status: 'Open to Role (Associate / Intern)',
    description:
      'Supporting leadership with structured research, sprint coordination, KPI reporting, and cross-functional follow-through.',
  },
  {
    title: 'Founder’s Office',
    status: 'Open to Role',
    description:
      'Taking 0-to-1 initiatives from ambiguous brief to working process across GTM research, product scoping, and operations.',
  },
  {
    title: 'Business Analysis',
    status: 'Prior Experience',
    description:
      'Translating business needs into clear scope documents, Gherkin user stories, process maps, and testable acceptance criteria.',
  },
  {
    title: 'Business Operations',
    status: 'Prior Experience',
    description:
      'Building CRM workflows, support escalation tiers, and clean Excel dashboards that keep daily operations running smoothly.',
  },
];

export const experience = {
  company: 'Warsha — SaaS Platform',
  market: 'Saudi Arabia & UAE Markets',
  title: 'Business Analyst Intern',
  dates: 'Nov 2025 – Feb 2026',
  summary:
    'Worked across product scoping, GTM research, KPI reporting, and CRM workflows for a multi-category automotive and neighborhood marketplace.',
  highlights: [
    'Supported Saudi Arabia and UAE launch strategy with PESTLE analysis, competitor benchmarks, and customer personas.',
    'Authored scope documents, wireframes, and Gherkin acceptance criteria across 25+ tracked Jira tasks.',
    'Configured CRM round-robin lead routing, bot-to-human chat escalation flows, and UTM/GA4 tracking.',
    'Documented 75+ product, UX, and workflow improvement suggestions during stakeholder walkthroughs.',
  ],
};

export const education = {
  qualification: 'B.E. in Electronics & Communication Engineering',
  school: 'Velammal Institute of Technology, Chennai (Anna University)',
  dates: '2023 – 2027',
};

export const aboutContent = {
  paragraphs: [
    'I am a Business Analyst and generalist operator based in Chennai, India. My background combines engineering systems thinking with practical SaaS execution across product requirements, quality evaluation, and operational reporting.',
    'Whether writing user stories for developers, auditing end-to-end product flows, or building clean Excel dashboards for leadership, I focus on clarity, speed, and reliable follow-through.',
  ],
  coreSkills: [
    'Requirements & BRD/FRD Writing',
    'User Stories (Gherkin) & Jira Sprints',
    'AI Evals, QA & Edge-Case Testing',
    'Microsoft Excel (Pivot Tables & Slicers)',
    'GTM Research & Competitive Analysis',
    'CRM Workflows & Process Mapping',
  ],
};

export function getCaseStudy(id: string): CaseStudy | null {
  return mainProjects.find((study) => study.id === id) ?? null;
}
