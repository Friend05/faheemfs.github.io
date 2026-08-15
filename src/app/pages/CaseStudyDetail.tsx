import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { 
  ArrowLeft, 
  Target, 
  Users, 
  CheckCircle2, 
  TrendingUp,
  Lightbulb,
  FileText,
  Pen,
  BarChart3,
  Rocket,
  Database,
  Search
} from 'lucide-react';

const caseStudiesData = {
  'course-management-dashboard': {
    title: 'Course Management Dashboard',
    subtitle: 'Helping users track learning progress efficiently',
    role: 'Business Analyst + UX Thinking',
    duration: '3 weeks',
    tags: ['UX', 'BA', 'Figma'],
    image: 'https://images.unsplash.com/photo-1761593280919-766a4acbcfca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc1NTQ3MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-blue-500 to-cyan-500',
    overview: 'This project focused on creating an intuitive dashboard for course tracking that helps students monitor their learning progress, upcoming assignments, and course completion status. The goal was to reduce confusion and improve student engagement.',
    problem: {
      title: 'The Problem',
      description: 'Students were struggling to keep track of multiple courses, deadlines, and progress across different platforms. This led to missed assignments, confusion about course status, and reduced engagement.',
      points: [
        'Students had to visit multiple pages to check course status',
        'No clear visualization of progress',
        'Important deadlines were being missed',
        'Lack of motivational elements to encourage completion'
      ]
    },
    goal: {
      title: 'The Goal',
      description: 'Design a centralized dashboard that provides clear visibility of course progress, upcoming deadlines, and completion status while motivating students to stay engaged.',
      metrics: [
        'Reduce time spent searching for course information by 60%',
        'Increase assignment completion rate by 40%',
        'Improve student engagement metrics by 35%'
      ]
    },
    myRole: {
      title: 'My Role',
      description: 'I served as both a Business Analyst and UX thinker for this project, bridging the gap between user needs and technical implementation.',
      responsibilities: [
        'Conducted user research and gathered requirements',
        'Created user personas and journey maps',
        'Defined acceptance criteria for all features',
        'Designed wireframes and prototypes in Figma',
        'Collaborated with developers on implementation'
      ]
    },
    process: [
      {
        icon: Lightbulb,
        title: 'Research & Discovery',
        description: 'Interviewed 15 students to understand pain points',
        details: [
          'Conducted user interviews',
          'Analyzed existing platforms',
          'Identified key frustrations',
          'Created user personas'
        ]
      },
      {
        icon: FileText,
        title: 'Requirements Gathering',
        description: 'Documented clear requirements and user stories',
        details: [
          'Wrote 25+ user stories',
          'Defined acceptance criteria',
          'Prioritized features using MoSCoW',
          'Created functional requirements document'
        ]
      },
      {
        icon: Pen,
        title: 'Design & Prototype',
        description: 'Created wireframes and interactive prototypes',
        details: [
          'Sketched initial concepts',
          'Built low-fidelity wireframes',
          'Designed high-fidelity mockups in Figma',
          'Created interactive prototype'
        ]
      },
      {
        icon: Users,
        title: 'Testing & Validation',
        description: 'Validated design with real users',
        details: [
          'Conducted usability testing with 10 users',
          'Gathered feedback and iterated',
          'Refined based on user insights',
          'Achieved 92% satisfaction score'
        ]
      }
    ],
    solution: {
      title: 'The Solution',
      description: 'A clean, intuitive dashboard that provides at-a-glance visibility of all courses, with progress indicators, upcoming deadlines, and motivational elements.',
      features: [
        {
          title: 'Progress Visualization',
          description: 'Clear progress bars and completion percentages for each course'
        },
        {
          title: 'Deadline Calendar',
          description: 'Integrated calendar view showing all upcoming assignments and deadlines'
        },
        {
          title: 'Quick Actions',
          description: 'One-click access to continue learning or view assignments'
        },
        {
          title: 'Achievement System',
          description: 'Badges and milestones to motivate continued learning'
        }
      ]
    },
    outcome: {
      title: 'Outcome & Impact',
      results: [
        {
          metric: '65%',
          description: 'Reduction in time searching for course info'
        },
        {
          metric: '48%',
          description: 'Increase in assignment completion rate'
        },
        {
          metric: '42%',
          description: 'Improvement in daily active users'
        },
        {
          metric: '92%',
          description: 'User satisfaction score'
        }
      ]
    },
    beforeAfter: {
      before: [
        'Students visited 4-5 different pages to check course status',
        'Progress tracking was unclear and confusing',
        'Deadlines were frequently missed',
        'Low engagement with course materials'
      ],
      after: [
        'All information accessible from a single dashboard',
        'Clear visual progress indicators for every course',
        'Proactive deadline reminders and notifications',
        'Increased engagement through gamification'
      ]
    },
    learnings: [
      'Visual hierarchy is crucial for dashboard design - users need to quickly scan and understand key information',
      'Gamification elements significantly boost engagement, but must be subtle and non-intrusive',
      'Regular user testing throughout the process prevented major redesigns later',
      'Clear acceptance criteria helped developers implement exactly what was needed',
      'Balancing information density with clean design is an ongoing challenge that requires iteration'
    ]
  },
  'food-delivery-checkout': {
    title: 'Food Delivery Checkout Optimization',
    subtitle: 'Reducing drop-offs and improving conversion',
    role: 'Business Analyst',
    duration: '2 weeks',
    tags: ['BA', 'UX'],
    image: 'https://images.unsplash.com/photo-1729860649884-40ec104f9dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzc1NTY5MDM5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-purple-500 to-pink-500',
    overview: 'This project aimed to streamline the checkout process for a food delivery platform that was experiencing high cart abandonment rates. Through business analysis and UX improvements, we simplified the flow and reduced friction points.',
    problem: {
      title: 'The Problem',
      description: 'The food delivery app had a complex checkout process with multiple steps, causing 67% of users to abandon their carts before completing the order.',
      points: [
        'Checkout process required 6 separate screens',
        'Users had to re-enter delivery information each time',
        'Payment options were buried and confusing',
        'No clear indication of order total until final step'
      ]
    },
    goal: {
      title: 'The Goal',
      description: 'Simplify the checkout process to reduce cart abandonment and increase order completion rates while maintaining necessary information collection.',
      metrics: [
        'Reduce checkout steps from 6 to 3 screens',
        'Decrease cart abandonment by 40%',
        'Increase successful orders by 35%',
        'Improve checkout completion time by 50%'
      ]
    },
    myRole: {
      title: 'My Role',
      description: 'As the Business Analyst, I analyzed user behavior data, identified pain points, and worked with stakeholders to define requirements for a streamlined checkout experience.',
      responsibilities: [
        'Analyzed checkout funnel data and drop-off points',
        'Conducted stakeholder interviews to understand business constraints',
        'Mapped current vs. ideal user journey',
        'Created detailed requirements for simplified flow',
        'Collaborated with UX designer on implementation'
      ]
    },
    process: [
      {
        icon: BarChart3,
        title: 'Data Analysis',
        description: 'Analyzed checkout funnel and user behavior',
        details: [
          'Reviewed analytics data for 3 months',
          'Identified exact drop-off points',
          'Analyzed user session recordings',
          'Calculated potential revenue impact'
        ]
      },
      {
        icon: Users,
        title: 'User Research',
        description: 'Interviewed users about checkout experience',
        details: [
          'Conducted 12 user interviews',
          'Sent survey to 500+ users',
          'Analyzed support tickets',
          'Identified top 5 pain points'
        ]
      },
      {
        icon: FileText,
        title: 'Requirements Definition',
        description: 'Documented new checkout flow requirements',
        details: [
          'Created user stories for simplified flow',
          'Defined acceptance criteria',
          'Mapped new journey flow',
          'Got stakeholder approval'
        ]
      },
      {
        icon: Rocket,
        title: 'Implementation & Testing',
        description: 'Collaborated on implementation and A/B testing',
        details: [
          'Worked with dev team on implementation',
          'Set up A/B test framework',
          'Monitored conversion metrics',
          'Iterated based on results'
        ]
      }
    ],
    solution: {
      title: 'The Solution',
      description: 'A streamlined 3-step checkout process that consolidates information, remembers user preferences, and provides clear cost breakdown at every stage.',
      features: [
        {
          title: 'Single-Page Checkout',
          description: 'Consolidated address, payment, and order confirmation into one scrollable page'
        },
        {
          title: 'Smart Defaults',
          description: 'Auto-filled saved addresses and payment methods for returning users'
        },
        {
          title: 'Live Price Breakdown',
          description: 'Real-time display of subtotal, fees, and total throughout the process'
        },
        {
          title: 'Express Checkout',
          description: 'One-click reorder for repeat customers'
        }
      ]
    },
    outcome: {
      title: 'Outcome & Impact',
      results: [
        {
          metric: '52%',
          description: 'Reduction in cart abandonment'
        },
        {
          metric: '43%',
          description: 'Increase in completed orders'
        },
        {
          metric: '58%',
          description: 'Faster checkout completion time'
        },
        {
          metric: '$280K',
          description: 'Additional monthly revenue'
        }
      ]
    },
    beforeAfter: {
      before: [
        'Users had to navigate through 6 different screens',
        'Delivery information had to be entered every time',
        'Payment methods were on a separate page',
        'Order total was only visible at the final step'
      ],
      after: [
        'Everything accessible on a single scrollable page',
        'Saved addresses and payment methods auto-filled',
        'All payment options visible upfront',
        'Live price breakdown updated in real-time'
      ]
    },
    learnings: [
      'Data analysis is crucial - it revealed that 73% of drop-offs happened at the payment screen',
      'Removing unnecessary steps can dramatically improve conversion without sacrificing important information',
      'Showing total cost upfront builds trust and reduces checkout anxiety',
      'A/B testing validated that single-page checkout performed 43% better than multi-step',
      'Business stakeholders need to see data-driven ROI to approve major changes'
    ]
  },
  'student-data-management': {
    title: 'Student Data Management',
    subtitle: 'Improving data visibility and decision-making',
    role: 'Business Analyst',
    duration: '4 weeks',
    tags: ['BA', 'SQL'],
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzc1NDc2Mjk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-indigo-500 to-purple-500',
    overview: 'This project involved restructuring how student data was stored, accessed, and visualized for academic administrators. By optimizing the database and creating better reporting tools, we improved decision-making capabilities.',
    problem: {
      title: 'The Problem',
      description: 'The institution struggled with fragmented student data across multiple systems, making it difficult for administrators to get timely insights about student performance, attendance, and engagement.',
      points: [
        'Data scattered across 5 different databases',
        'Reports took 2-3 days to generate manually',
        'No real-time visibility into student metrics',
        'Difficult to identify at-risk students early'
      ]
    },
    goal: {
      title: 'The Goal',
      description: 'Create a unified data system with optimized queries and intuitive dashboards that provide real-time insights into student performance and enable proactive intervention.',
      metrics: [
        'Consolidate data into single source of truth',
        'Reduce report generation time from days to minutes',
        'Enable real-time student performance tracking',
        'Identify at-risk students 4 weeks earlier'
      ]
    },
    myRole: {
      title: 'My Role',
      description: 'As the Business Analyst with SQL expertise, I analyzed the data architecture, wrote queries to consolidate information, and defined requirements for the new reporting interface.',
      responsibilities: [
        'Mapped existing data structures and relationships',
        'Wrote SQL queries to consolidate and clean data',
        'Designed normalized database schema',
        'Created reporting requirements and mockups',
        'Collaborated with developers on dashboard implementation'
      ]
    },
    process: [
      {
        icon: Search,
        title: 'Data Discovery',
        description: 'Mapped existing data sources and structures',
        details: [
          'Audited all 5 existing databases',
          'Identified data redundancies and gaps',
          'Mapped relationships between systems',
          'Documented current data flow'
        ]
      },
      {
        icon: Database,
        title: 'Database Optimization',
        description: 'Designed normalized schema and wrote queries',
        details: [
          'Created entity-relationship diagrams',
          'Normalized to 3NF',
          'Wrote complex SQL queries for data consolidation',
          'Optimized query performance with indexes'
        ]
      },
      {
        icon: BarChart3,
        title: 'Reporting Requirements',
        description: 'Defined what insights administrators needed',
        details: [
          'Interviewed 8 administrators',
          'Identified key metrics and KPIs',
          'Created mockups of ideal reports',
          'Prioritized features based on impact'
        ]
      },
      {
        icon: Rocket,
        title: 'Implementation & Validation',
        description: 'Built dashboards and validated accuracy',
        details: [
          'Collaborated on dashboard development',
          'Verified data accuracy across systems',
          'Trained administrators on new tools',
          'Established data quality monitoring'
        ]
      }
    ],
    solution: {
      title: 'The Solution',
      description: 'A unified database with optimized queries and automated dashboards that provide real-time insights into student performance, attendance, and engagement metrics.',
      features: [
        {
          title: 'Consolidated Database',
          description: 'Single source of truth with properly normalized schema and relationships'
        },
        {
          title: 'Automated Reports',
          description: 'Pre-built SQL queries that generate reports in seconds instead of days'
        },
        {
          title: 'Real-time Dashboards',
          description: 'Live visualization of key metrics updated every hour'
        },
        {
          title: 'At-Risk Alerts',
          description: 'Automated identification of students falling behind based on multiple factors'
        }
      ]
    },
    outcome: {
      title: 'Outcome & Impact',
      results: [
        {
          metric: '95%',
          description: 'Reduction in report generation time'
        },
        {
          metric: '4 weeks',
          description: 'Earlier identification of at-risk students'
        },
        {
          metric: '78%',
          description: 'Improvement in data accuracy'
        },
        {
          metric: '12 hours',
          description: 'Per week saved in manual reporting'
        }
      ]
    },
    beforeAfter: {
      before: [
        'Data scattered across 5 separate systems',
        'Reports generated manually taking 2-3 days',
        'No real-time visibility into student metrics',
        'At-risk students identified too late to help'
      ],
      after: [
        'All data unified in optimized database',
        'Automated reports generated in under 1 minute',
        'Real-time dashboards updated hourly',
        'Early warning system for at-risk students'
      ]
    },
    learnings: [
      'Database normalization is essential but must balance with query performance needs',
      'Understanding the business context helped prioritize which data relationships mattered most',
      'SQL optimization (proper indexing, query structure) can dramatically improve performance',
      'Administrators need actionable insights, not just data - visualization is crucial',
      'Data quality issues compound over time - establishing monitoring early is critical'
    ]
  }
};

export function CaseStudyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const caseStudy = id ? caseStudiesData[id as keyof typeof caseStudiesData] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Back button */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 pt-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-5xl lg:text-6xl mb-4">{caseStudy.title}</h1>
            <p className="text-2xl text-muted-foreground mb-8">{caseStudy.subtitle}</p>

            <div className="flex flex-wrap gap-6 mb-12">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Role</p>
                <p className="font-medium">{caseStudy.role}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Duration</p>
                <p className="font-medium">{caseStudy.duration}</p>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.gradient} opacity-20`} />
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl mb-6">Overview</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {caseStudy.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-16 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-xl">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="text-3xl">{caseStudy.problem.title}</h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {caseStudy.problem.description}
            </p>

            <div className="grid gap-4">
              {caseStudy.problem.points.map((point, index) => (
                <div key={index} className="flex gap-3 p-4 bg-red-50 rounded-xl">
                  <span className="text-red-600 font-medium">•</span>
                  <span className="text-foreground/80">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Goal */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-xl">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl">{caseStudy.goal.title}</h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {caseStudy.goal.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {caseStudy.goal.metrics.map((metric, index) => (
                <div key={index} className="p-4 bg-green-50 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mb-2" />
                  <span className="text-foreground/80">{metric}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* My Role */}
      <section className="px-6 py-16 bg-blue-50/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl">{caseStudy.myRole.title}</h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {caseStudy.myRole.description}
            </p>

            <div className="space-y-3">
              {caseStudy.myRole.responsibilities.map((responsibility, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-foreground/80">{responsibility}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Process</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="text-blue-600">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-16 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-xl">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl">{caseStudy.solution.title}</h2>
            </div>
            
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {caseStudy.solution.description}
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.solution.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outcome */}
      <section className="px-6 py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">{caseStudy.outcome.title}</h2>
            <div className="w-20 h-1 bg-white/30 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {caseStudy.outcome.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-3">{result.metric}</div>
                <p className="text-white/80">{result.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Before vs After</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl mb-6 text-red-900">Before</h3>
              <div className="space-y-4">
                {caseStudy.beforeAfter.before.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-red-200 rounded-full flex-shrink-0 mt-0.5">
                      <span className="text-red-700 text-xs">✕</span>
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl mb-6 text-green-900">After</h3>
              <div className="space-y-4">
                {caseStudy.beforeAfter.after.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-xl">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <h2 className="text-3xl">Key Learnings</h2>
            </div>

            <div className="space-y-4">
              {caseStudy.learnings.map((learning, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 flex items-center justify-center bg-yellow-100 rounded-full flex-shrink-0 mt-0.5">
                      <span className="text-yellow-700 text-sm font-medium">{index + 1}</span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{learning}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl mb-6">Interested in working together?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help solve your business challenges
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/#contact')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Get in Touch
              </button>
              <button
                onClick={() => navigate('/')}
                className="px-8 py-4 bg-white border-2 border-border text-foreground rounded-xl hover:shadow-lg transition-all"
              >
                View More Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}