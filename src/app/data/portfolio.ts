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
  title: 'Mohammed Faheem FS | Business Analyst Portfolio',
  description:
    'Business Analyst portfolio — requirements gathering, product operations, Excel-based KPI reporting, CRM workflows, and growth strategy.',
  resumePath: 'Mohammed-Faheem-Business-Analyst-Resume-Updated.pdf',
  ogImagePath: 'og-cover.svg',
  phone: '+91 9840502598',
  email: 'mdfaheem2507@gmail.com',
  linkedin: 'https://www.linkedin.com/in/faheemfs',
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'Mohammed Faheem FS',
  shortName: 'MF',
  eyebrow: 'Business Analyst | Data & Excel | Business Analysis',
  headline: 'I turn complex business needs into clear, actionable product work.',
  intro:
    'Business Analyst with hands-on SaaS experience in requirements gathering, Jira delivery, Excel-based KPI reporting, CRM workflows, and growth strategy. I bring structure to the path between a business question and a useful decision.',
  location: 'Chennai, Tamil Nadu',
  availability: 'Open to Business Analyst, Product Operations, Growth, and Data Analyst roles',
};

export const heroProof = [
  { value: '25+', label: 'Jira-tracked tasks delivered end to end' },
  { value: '75+', label: 'Product improvement suggestions presented' },
  { value: '01', label: 'SaaS internship across Saudi Arabia and UAE markets' },
];

export const aboutPoints = [
  'Most teams struggle to turn high-level strategy into executable tasks. I help bridge that gap by combining business analysis, product operations, and data-driven insights into one cohesive workflow.',
  'From mapping out user journeys and writing precise acceptance criteria to configuring CRM workflows and building KPI dashboards, I focus on creating systems that provide clarity to developers and stakeholders alike.',
  'I don\'t just write requirements. I build the foundational infrastructure—scope documents, sprint plans, and tracking mechanisms—that helps teams deliver the right features efficiently and predictably.'
];

export const capabilityGroups = [
  {
    eyebrow: '01',
    title: 'Business Analysis',
    summary: 'Bring clarity to the problem before the team starts building.',
    items: [
      'Requirements gathering',
      'User stories and acceptance criteria',
      'Scope documents and workflow mapping',
      'PESTLE and competitive analysis',
    ],
  },
  {
    eyebrow: '02',
    title: 'Product Operations',
    summary: 'Keep product work organised, visible, and ready to move forward.',
    items: [
      'Sprint planning and backlog management',
      'Jira task tracking',
      'Low-fidelity wireframing',
      'Roadmap presentations',
    ],
  },
  {
    eyebrow: '03',
    title: 'Data & Analytics',
    summary: 'Use the right performance signals to support a better next decision.',
    items: [
      'Excel and Pivot Tables',
      'KPI dashboards and EBITDA reporting',
      'Google Analytics and UTM tracking',
      'Heat-map analysis',
    ],
  },
  {
    eyebrow: '04',
    title: 'Growth Strategy',
    summary: 'Connect product operations to positioning and acquisition.',
    items: [
      'Go-to-market planning',
      'Customer personas',
      'Business Model Canvas',
      'Regional expansion strategy',
    ],
  },
  {
    eyebrow: '05',
    title: 'CRM Workflows',
    summary: 'Design efficient lead and customer management systems.',
    items: [
      'CRM configuration',
      'Round-robin lead assignment',
      'Bot-to-human chat escalation',
      'Payment integration flows',
    ],
  },
  {
    eyebrow: '06',
    title: 'Documentation',
    summary: 'Ensure alignment through clear, accessible product records.',
    items: [
      'Stakeholder walkthroughs',
      'Information architecture',
      'Flowcharts and user journeys',
      'Product metrics frameworks',
    ],
  },
];

export const tools = [
  'Jira',
  'Excel & Pivot Tables',
  'Google Analytics',
  'Miro',
  'Postman',
  'Google Dialogflow',
  'TasksBoard',
  'Substack',
];

export const experience = {
  company: 'Warsha - SaaS Platform',
  market: 'Saudi Arabia / UAE Market',
  title: 'Business Analyst Intern',
  dates: 'Nov 2025 - Feb 2026',
  summary:
    'Supported product, strategy, reporting, and CRM operations for a SaaS platform entering and serving regional markets.',
  highlights: [
    'Designed a full GTM strategy using PESTLE analysis, competitive benchmarking, and customer personas to guide launch positioning.',
    'Created scope documents and sprint plans, managed the product backlog in Jira, and delivered 25+ tracked tasks across development cycles.',
    'Produced low-fidelity wireframes, user stories, and acceptance criteria to communicate requirements to development teams.',
    'Set up UTM tracking, Google Analytics events, heat-map analysis, KPI dashboards, and EBITDA summaries for stakeholder decision-making.',
    'Configured CRM workflows for round-robin lead assignment, bot-to-human chat escalation, and payment integration flows.',
    'Facilitated 75+ product improvement suggestions through structured walkthroughs, roadmap presentations, and a Business Model Canvas.',
  ],
};

export const education = {
  qualification: 'B.E. - Electronics and Communication Engineering',
  school: 'Velammal Institute of Technology, Chennai',
  dates: '2023 - 2027 (Expected)',
  coursework: ['Systems Design', 'Data Analysis', 'Project Management', 'Communication', 'Problem Solving'],
};

export const processSteps = [
  {
    step: '01',
    title: 'Understand the context',
    description: 'Identify the business goal, user need, stakeholders, constraints, and decisions that matter.',
  },
  {
    step: '02',
    title: 'Make the work clear',
    description: 'Turn ambiguity into scope, stories, flows, acceptance criteria, and a shared delivery plan.',
  },
  {
    step: '03',
    title: 'Support the decision',
    description: 'Use reporting, Excel summaries, and product signals to show what deserves attention next.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'warsha-saas-operations',
    title: 'Warsha SaaS Operations',
    strapline: 'Supporting a SaaS platform with product structure, growth planning, and reporting',
    teaser:
      'Business analysis internship work spanning GTM planning, Jira delivery, product requirements, analytics, and CRM setup.',
    impact: '25+ Tasks Delivered · CRM Workflows · KPI Dashboards',
    projectType: 'Professional experience',
    focusArea: 'Business analysis + operations',
    role: 'Business Analyst Intern',
    duration: 'Nov 2025 - Feb 2026',
    tools: ['Jira', 'Google Analytics', 'Excel', 'Miro', 'CRM workflows'],
    summary:
      'This work brought strategy, product operations, reporting, and customer workflows into a more structured operating rhythm for a SaaS platform.',
    disclaimer:
      'This portfolio summary is based on my internship work. It intentionally excludes confidential product screens, proprietary data, and internal documents.',
    overview:
      'At Warsha, I supported the work needed to move from regional go-to-market thinking into clearer product delivery and performance monitoring. The role combined business analysis, product operations, data reporting, CRM configuration, and stakeholder communication.',
    challenge: [
      'Translate market, user, and stakeholder inputs into clearer product priorities.',
      'Maintain delivery visibility across multiple development cycles and product tasks.',
      'Create a more consistent way to observe acquisition, engagement, and operational signals.',
    ],
    objectives: [
      'Build structured inputs for GTM positioning and regional expansion.',
      'Make requirements and development work easier to follow through Jira, stories, and scope documents.',
      'Support stakeholder decisions with KPI, financial, and workflow reporting.',
    ],
    approach: [
      {
        title: 'Frame the market and user context',
        description: 'Used structured strategy tools to clarify the launch environment and product positioning.',
        details: ['PESTLE analysis', 'Competitive benchmarking', 'Customer persona development', 'Business Model Canvas'],
      },
      {
        title: 'Organise product delivery',
        description: 'Converted product needs into visible delivery work across documents, backlogs, and development cycles.',
        details: ['Scope documents', 'Sprint plans', 'Jira backlog management', '25+ tracked tasks delivered'],
      },
      {
        title: 'Clarify product requirements',
        description: 'Created lightweight artefacts that gave development teams a clearer view of the intended flow and behaviour.',
        details: ['Low-fidelity wireframes', 'User stories', 'Acceptance criteria', 'Flowcharts and user journeys'],
      },
      {
        title: 'Establish performance and CRM workflows',
        description: 'Connected operational workflows with analytics and reporting signals for more informed follow-up.',
        details: ['UTM and Google Analytics events', 'Heat-map analysis and KPI dashboards', 'EBITDA summaries', 'Lead assignment, chat escalation, and payment flows'],
      },
    ],
    outputs: [
      'GTM strategy inputs and customer persona work',
      'Scope documents, sprint plans, and Jira backlog management',
      'User stories, acceptance criteria, low-fidelity wireframes, flowcharts, and journey maps',
      'KPI dashboards, EBITDA summaries, and a product metrics framework',
      'CRM configuration for lead assignment, chat escalation, and payments',
    ],
    successSignals: [
      '25+ product tasks tracked and delivered end to end in Jira.',
      '75+ product improvement suggestions presented through structured stakeholder walkthroughs and roadmap discussions.',
      'Analytics events, UTM tracking, heat-map analysis, and KPI dashboards set up to support performance monitoring.',
    ],
    reflection:
      'The internship reinforced how valuable a BA can be when strategy, delivery detail, reporting, and stakeholder communication are treated as one connected system.',
    previewLabel: 'SaaS operations',
    previewCards: ['GTM + market framing', 'Requirements + Jira delivery', 'Analytics + CRM workflows'],
    previewMetrics: [
      { label: 'Tasks', value: '25+ delivered' },
      { label: 'Suggestions', value: '75+ shared with stakeholders' },
    ],
    theme: {
      gradient: 'from-[#0d1b2a] via-[#163a48] to-[#0f766e]',
      surface: 'border-cyan-200 bg-cyan-50',
      badge: 'border-cyan-200 bg-cyan-100 text-cyan-950',
      highlight: 'text-cyan-950',
    },
  },
  {
    id: 'navi-glove',
    title: 'Navi Glove',
    strapline: 'An assistive navigation concept for visually impaired users',
    teaser:
      'Academic project exploring sensor-based obstacle detection through a user-centred accessibility lens.',
    impact: 'User-Centred Design · Systems Integration · Accessibility Focus',
    projectType: 'Academic project',
    focusArea: 'Accessibility + systems thinking',
    role: 'Project contributor',
    duration: 'Academic project',
    tools: ['Sensor integration', 'User-centred problem solving', 'Systems design'],
    summary:
      'Navi Glove focused on a practical accessibility challenge: how a wearable aid could help users sense obstacles in their environment.',
    disclaimer:
      'This is an academic project. The portfolio describes the problem, system focus, and contribution without claiming unverified user or commercial results.',
    overview:
      'The project explored a wearable obstacle-detection aid for visually impaired users. My focus was on user-centred problem solving and the real-world accessibility context of the concept.',
    challenge: [
      'Make an assistive concept relevant to a real mobility need.',
      'Consider how sensor integration can support obstacle awareness.',
      'Keep user impact at the centre of the technical solution.',
    ],
    objectives: [
      'Explore a wearable navigation aid for obstacle detection.',
      'Connect the system idea to practical accessibility needs.',
      'Practice user-centred framing within an engineering project.',
    ],
    approach: [
      {
        title: 'Understand the use context',
        description: 'Started from the everyday mobility challenge the concept was intended to support.',
        details: ['Obstacle awareness', 'Wearable interaction', 'Accessibility impact'],
      },
      {
        title: 'Define the system focus',
        description: 'Explored the role of sensor integration in detecting environmental obstacles.',
        details: ['Sensor-based detection', 'Wearable form factor', 'Real-world usage context'],
      },
      {
        title: 'Keep the problem human',
        description: 'Treated the technical work as a response to a user need rather than an isolated component exercise.',
        details: ['User-centred framing', 'Practical problem solving', 'Accessibility-first thinking'],
      },
    ],
    outputs: ['Assistive navigation concept', 'Sensor-integration approach', 'User-centred problem framing'],
    successSignals: ['A clear accessibility problem framed for a wearable solution.', 'A system concept grounded in obstacle detection and real-world use.'],
    reflection:
      'Navi Glove strengthened my interest in systems that are technically thoughtful and still grounded in the people who will use them.',
    previewLabel: 'Accessibility systems',
    previewCards: ['Mobility context', 'Obstacle detection', 'Wearable assistance'],
    previewMetrics: [
      { label: 'Lens', value: 'User-centred accessibility' },
      { label: 'Project type', value: 'Academic' },
    ],
    theme: {
      gradient: 'from-[#2b1f4a] via-[#4c1d95] to-[#8b5cf6]',
      surface: 'border-violet-200 bg-violet-50',
      badge: 'border-violet-200 bg-violet-100 text-violet-950',
      highlight: 'text-violet-950',
    },
  },
  {
    id: 'ai-disaster-management',
    title: 'AI-Enabled Disaster Management',
    strapline: 'A conceptual decision-support system for emergency response',
    teaser:
      'Conceptual project structuring a data-driven approach for disaster monitoring and emergency decision support.',
    impact: 'AI/GIS Concepts · Information Architecture · Decision Workflows',
    projectType: 'Conceptual project',
    focusArea: 'Information flow + decision support',
    role: 'Concept contributor',
    duration: 'Conceptual project',
    tools: ['AI concepts', 'GIS concepts', 'Information flow design'],
    summary:
      'This concept explored how AI and GIS-informed data could be organised to support disaster monitoring and emergency-response decisions.',
    disclaimer:
      'This is a conceptual project. It presents the system and information-flow thinking without claiming a production deployment or measured operational impact.',
    overview:
      'The project structured a data-driven concept for disaster monitoring and emergency response. It was an opportunity to think about how relevant information needs to travel from signals to a usable decision in high-pressure scenarios.',
    challenge: [
      'Organise data signals for a time-sensitive response context.',
      'Connect AI and GIS concepts into a coherent decision-support idea.',
      'Keep the information flow understandable for emergency-response use.',
    ],
    objectives: [
      'Structure a concept for disaster monitoring and response support.',
      'Use information-flow design to make the system idea easier to follow.',
      'Practice data-driven problem framing in a complex domain.',
    ],
    approach: [
      {
        title: 'Frame the response need',
        description: 'Defined the project around monitoring and emergency-response decision support.',
        details: ['Disaster monitoring', 'Emergency response context', 'Decision support'],
      },
      {
        title: 'Connect information layers',
        description: 'Considered how AI and GIS concepts could work as part of one data-informed system.',
        details: ['AI concepts', 'GIS concepts', 'Data-driven monitoring'],
      },
      {
        title: 'Design for information flow',
        description: 'Focused on the movement from available signals to a clear response-oriented view.',
        details: ['Signal-to-decision flow', 'System clarity', 'Response support'],
      },
    ],
    outputs: ['Conceptual system structure', 'Information-flow design direction', 'Decision-support framing'],
    successSignals: ['A clear conceptual link between monitoring data and response decisions.', 'An information-flow approach suited to a complex emergency context.'],
    reflection:
      'This project developed my interest in how information architecture and analysis can make difficult decisions easier to navigate.',
    previewLabel: 'Decision support',
    previewCards: ['Monitoring signals', 'GIS + AI concepts', 'Response information flow'],
    previewMetrics: [
      { label: 'Lens', value: 'Decision support' },
      { label: 'Project type', value: 'Conceptual' },
    ],
    theme: {
      gradient: 'from-[#1f2937] via-[#334155] to-[#0369a1]',
      surface: 'border-sky-200 bg-sky-50',
      badge: 'border-sky-200 bg-sky-100 text-sky-950',
      highlight: 'text-sky-950',
    },
  },
  {
    id: 'smart-weighing-scale',
    title: 'Tamper-Proof Smart Weighing Scale',
    strapline: 'A reliability-focused monitoring and data-logging concept',
    teaser:
      'Smart India Hackathon work focused on trustworthy measurement, secure data logging, and useful system reporting.',
    impact: 'Data Logging · System Reliability · Secure Measurement',
    projectType: 'Smart India Hackathon',
    focusArea: 'Reliability + reporting',
    role: 'Project contributor',
    duration: 'Hackathon project',
    tools: ['Data logging', 'System monitoring', 'Measurement reporting'],
    summary:
      'The project centred on the importance of reliable measurement records and trustworthy reporting in a smart-scale system.',
    disclaimer:
      'This is a Smart India Hackathon project. The summary focuses on the solution direction and contribution rather than making unverified deployment claims.',
    overview:
      'This project explored a secure data-logging and monitoring solution for a smart weighing scale. The central problem was reliability: keeping measurement information trustworthy and making system reporting useful.',
    challenge: [
      'Treat measurement accuracy as a core system concern.',
      'Support reliable data logging and monitoring.',
      'Create a reporting approach that users can trust.',
    ],
    objectives: [
      'Contribute to a reliability-focused smart-scale concept.',
      'Centre data logging and monitoring within the solution approach.',
      'Frame reporting around measurement trustworthiness.',
    ],
    approach: [
      {
        title: 'Focus on trusted measurement',
        description: 'Defined measurement accuracy and reliability as the most important design concerns.',
        details: ['Measurement accuracy', 'Reliability', 'Trustworthy records'],
      },
      {
        title: 'Consider monitoring and logging',
        description: 'Contributed to a system direction that connects scale data with secure monitoring and logging.',
        details: ['Data logging', 'Monitoring concept', 'System visibility'],
      },
      {
        title: 'Keep reporting meaningful',
        description: 'Approached reporting as part of the system trust model, not just an output screen.',
        details: ['Measurement reporting', 'Reliable information', 'Decision-ready records'],
      },
    ],
    outputs: ['Smart-scale monitoring concept', 'Secure data-logging direction', 'Reliability-focused reporting approach'],
    successSignals: ['A solution direction centred on accuracy, monitoring, and trustworthy records.', 'Reporting considerations connected to system reliability.'],
    reflection:
      'The project taught me that trustworthy data starts with reliable systems, clear monitoring, and reporting people can depend on.',
    previewLabel: 'Trusted systems',
    previewCards: ['Measurement accuracy', 'Secure data logging', 'Monitoring + reporting'],
    previewMetrics: [
      { label: 'Lens', value: 'Reliability' },
      { label: 'Project type', value: 'Smart India Hackathon' },
    ],
    theme: {
      gradient: 'from-[#2c241b] via-[#7c2d12] to-[#ea580c]',
      surface: 'border-orange-200 bg-orange-50',
      badge: 'border-orange-200 bg-orange-100 text-orange-950',
      highlight: 'text-orange-950',
    },
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((study) => study.id === id) ?? null;
}

export const faqData = [
  {
    question: "What does your role as a Business Analyst involve?",
    answer: "My role focuses on bridging the gap between business strategy and technical execution. I work with stakeholders to gather requirements, write precise user stories, manage the product backlog in Jira, and ensure development teams have the clarity they need to build the right solutions."
  },
  {
    question: "Do you have experience with data analysis and reporting?",
    answer: "Yes, data is central to how I measure success. I use Excel (Pivot Tables), Google Analytics, and UTM tracking to monitor product performance. I also build KPI dashboards and EBITDA financial summaries to give stakeholders a clear view of how features are impacting the bottom line."
  },
  {
    question: "What methodologies do you use for project delivery?",
    answer: "I primarily operate in Agile environments. I am experienced in sprint planning, backlog grooming, and creating low-fidelity wireframes to visualize requirements before development begins. I also conduct structured walkthroughs to ensure alignment."
  },
  {
    question: "Can you help with Growth and CRM?",
    answer: "Absolutely. I have hands-on experience designing Go-to-Market (GTM) strategies, developing customer personas, and configuring CRM workflows. This includes setting up round-robin lead assignment, bot-to-human chat escalation, and mapping payment integration flows."
  },
  {
    question: "What tools do you work with daily?",
    answer: "My core stack includes Jira for project management, Excel and Power BI for data analysis, Google Analytics for performance tracking, and tools like Miro, Postman, and Google Dialogflow for diagramming, API testing, and workflow automation."
  }
];
