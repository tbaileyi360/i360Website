import {
  AiCapabilitySection,
  CapabilityItem,
  CompanyIdentifiers,
  CompanyInfo,
  CompanyValue,
  ContractVehicle,
  Differentiator,
  Leader,
  NavLink,
  Partner,
  ServiceItem,
  Testimonial,
} from '../models/site.models';

export const COMPANY: CompanyInfo = {
  name: 'i360technologies',
  tagline: 'results.teamwork.integrity',
  phone: '703-476-4100',
  fax: '703-342-4343',
  email: 'info@i360technologies.com',
  securityEmail: 'ddijoy@i360technologies.com',
  hq: {
    label: 'Corporate Headquarters',
    lines: ['2300 Wilson Blvd, Ste 700 #1116', 'Arlington, VA 22201'],
  },
  branch: {
    label: 'Branch Office',
    lines: ['3 Armory Road, Suite 100', 'Prince Frederick, MD 20678'],
  },
};

export const NAV_LINKS: NavLink[] = [
  {
    label: 'About',
    path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Capabilities', path: '/capabilities' },
      { label: 'Mission, Vision & Values', path: '/mission' },
      { label: 'Leadership', path: '/leadership' },
    ],
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'All Services', path: '/services' },
      { label: 'Financial Management', path: '/services/financial-management' },
      { label: 'Robotic Process Automation', path: '/services/rpa' },
      { label: 'Program & Project Management', path: '/services/program-project-management' },
      { label: 'Acquisition Management', path: '/services/acquisition-management' },
      { label: 'Business Intelligence', path: '/services/business-intelligence' },
      { label: 'Application Development', path: '/services/application-development' },
      { label: 'Operations & Maintenance', path: '/services/operations-maintenance' },
    ],
  },
  { label: 'Contract Vehicles', path: '/contract-vehicles' },
  { label: 'Careers', path: '/careers' },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: 'financial-management',
    title: 'Financial Management Solutions',
    short: 'Streamline federal financial processes with Oracle Federal Financials expertise.',
    summary:
      'Innovative enterprise solutions that modernize accounting, reporting, analytics, and internal controls for Federal agencies.',
    body: [
      'Throughout our corporate history, i360 has focused on implementing, upgrading, and supporting Oracle Federal Financials (OFF) applications and related technologies specifically for Federal Government agencies.',
      'Our most extensive experience is configuring and integrating OFF solutions to transform Federal Financial Management accounting, operations, reporting, analytics, and internal controls — achieving operational improvement, regulatory compliance, data integrity, and clean financial statements.',
      'Our consultants combine deep OFF expertise with private-sector GAAP experience, enabling us to configure core functionality in innovative ways that meet complex requirements without costly customizations.',
      'We also apply AI-assisted help desk and O&M practices on long-lived Oracle Federal Financials estates — improving responsiveness while keeping humans in the loop for financial actions.',
    ],
    highlights: [
      {
        title: 'Oracle Federal Financials',
        description: 'Expert-level OFF implementation, upgrade, and support.',
      },
      {
        title: 'Compliance & Controls',
        description: 'Aligned with Federal regulations, Treasury mandates, and clean audit outcomes.',
      },
      {
        title: 'Process Modernization',
        description: 'Business process improvement grounded in commercial best practices.',
      },
    ],
    seeAlso: {
      label: 'AI & intelligent automation on Capabilities',
      path: '/capabilities',
      fragment: 'ai',
    },
  },
  {
    slug: 'rpa',
    title: 'Robotic Process Automation (RPA)',
    short: 'Automate repetitive work while establishing lasting RPA best practices.',
    summary:
      'End-to-end RPA programs that establish Centers of Excellence, scalable platforms, and sustainable automation pipelines.',
    body: [
      'Our RPA solutions help clients establish and manage thriving automation programs. We set every client up for long-term success by building best practices, procedures, and robust platform architecture.',
      'Our methodology covers Center of Excellence creation, pipeline generation, platform architecture, development standards, and support operations — helping clients avoid common scalability and security pitfalls.',
      'We deliver across industry-leading platforms including UiPath and Blue Prism.',
      'Federal RPA programs are moving toward governed, agentic platforms. i360 extends CoE work from production bots to exception-handling agents — reusing authorized platforms, bot identities, and human-in-the-loop controls for finance operations.',
    ],
    highlights: [
      {
        title: 'Vision',
        description: 'RPA CoE guidelines, messaging, and automation pipeline strategy.',
      },
      {
        title: 'Platform',
        description: 'Scalable architecture designed around security and privacy requirements.',
      },
      {
        title: 'Delivery & Support',
        description: 'Best-practice bots, training workshops, and helpdesk methodologies.',
      },
    ],
    seeAlso: {
      label: 'AI & intelligent automation on Capabilities',
      path: '/capabilities',
      fragment: 'ai',
    },
  },
  {
    slug: 'program-project-management',
    title: 'Program and Project Management',
    short: 'Optimize program delivery through tailored management approaches.',
    summary:
      'Disciplined program and project leadership that keeps complex federal initiatives on schedule, on budget, and aligned to mission outcomes.',
    body: [
      'i360 provides seasoned program and project managers who bring structure, transparency, and accountability to multi-workstream federal initiatives.',
      'We tailor management approaches to each engagement — applying Agile, hybrid, and traditional methods as appropriate — while maintaining clear governance, risk management, and stakeholder communication.',
    ],
    highlights: [
      {
        title: 'Delivery Discipline',
        description: 'Cost, schedule, and scope control with actionable reporting.',
      },
      {
        title: 'Adaptive Methods',
        description: 'Agile, hybrid, and waterfall approaches matched to program needs.',
      },
    ],
  },
  {
    slug: 'acquisition-management',
    title: 'Acquisition Management Solutions',
    short: 'Deep contract lifecycle expertise for public-sector clients.',
    summary:
      'Acquisition support spanning planning, solicitation, award, and contract administration for federal programs.',
    body: [
      'i360 brings deep contract lifecycle management expertise to public-sector clients, helping agencies navigate complex procurement requirements with confidence.',
      'Our teams support acquisition planning, solicitation development, evaluation support, and post-award administration so programs stay compliant and mission-ready.',
    ],
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence and Analytics',
    short: 'Modern reporting systems that unlock clearer business insights.',
    summary:
      'Analytics and reporting solutions that turn financial and operational data into decisions leaders can trust.',
    body: [
      'We help agencies modernize reporting and analytics environments so leaders can move from static reports to actionable insight.',
      'Our teams design dashboards, data models, and reporting frameworks that improve transparency, integrity, and decision speed across financial and operational domains.',
    ],
  },
  {
    slug: 'application-development',
    title: 'Application Development',
    short: 'End-to-end custom web applications that are functional and scalable.',
    summary:
      'Custom application design and development focused on usability, security, and long-term maintainability.',
    body: [
      'i360 develops end-to-end custom web applications that solve specific mission and business needs for federal clients.',
      'We emphasize clean architecture, secure coding practices, and scalable designs that integrate with enterprise platforms and existing workflows.',
    ],
  },
  {
    slug: 'operations-maintenance',
    title: 'Operations and Maintenance',
    short: 'Empower operational efficiencies and continuous improvement.',
    summary:
      'Steady-state operations support that keeps critical systems reliable, optimized, and ready for change.',
    body: [
      'Our operations and maintenance teams keep enterprise systems healthy day to day while identifying opportunities for performance and process improvement.',
      'We provide responsive support, proactive monitoring practices, and continuous enhancement so agencies can focus on mission outcomes.',
      'On Oracle EBS / Federal Financials managed services, we use AI-assisted triage and knowledge support to strengthen help desk and O&M performance — without removing human approval from financial postings.',
    ],
    seeAlso: {
      label: 'AI & intelligent automation on Capabilities',
      path: '/capabilities',
      fragment: 'ai',
    },
  },
];

export const PARTNERS: Partner[] = [
  {
    name: 'Oracle Partner',
    detail: 'Deep Oracle E-Business Suite and Federal Financials expertise across federal shared service platforms.',
  },
  { name: 'UiPath Partner', detail: 'Enterprise RPA delivery, CoE enablement, and platform architecture.' },
  { name: 'Scaled Agile Partner', detail: 'SAFe-aligned delivery and Lean-Agile transformation support for federal programs.' },
  { name: 'Infor Partner', detail: 'Corporate partnership supporting modern ERP and operations solutions.' },
  { name: 'Association of Government Accountants', detail: 'Professional alignment with public-sector financial excellence.' },
  { name: 'Project Management Institute', detail: 'Commitment to recognized program and project management standards.' },
];

export const CAPABILITY_OVERVIEW =
  'i360 is a small-business federal IT and financial-management systems integrator, founded in 2001. Our core franchise is Oracle E-Business Suite and Oracle Federal Financials for federal shared service providers — with proven depth in agency migrations, R12 upgrades, Treasury-mandate integrations, reporting, and a federally recognized UiPath RPA program.';

export const CAPABILITIES: CapabilityItem[] = [
  {
    title: 'Oracle EBS / Federal Financials O&M',
    proof:
      'Prime support to OMB-designated FM shared service providers — including long-running OFF and CLM support at DOI Interior Business Center and Delphi/PRISM support at FAA Enterprise Services Center.',
    relatedService: 'financial-management',
  },
  {
    title: 'Agency migrations onto shared services',
    proof:
      'Multiple OFF and contract lifecycle management implementations onto SSP platforms, including first-of-kind PRISM deployments and agency onboarding to ESC Delphi/PRISM.',
    relatedService: 'financial-management',
  },
  {
    title: 'Upgrades and patching',
    proof:
      'End-to-end Oracle upgrades and ongoing quarterly security patching for large multi-agency shared service environments.',
    relatedService: 'operations-maintenance',
  },
  {
    title: 'Interfaces and Treasury integrations',
    proof:
      'Complex federal interface landscapes spanning G-Invoicing, IPP, IPAC, GTAS, CARS, SPS, travel, banking, and real-time PRISM–OFF integration patterns.',
    relatedService: 'financial-management',
  },
  {
    title: 'Federal FM operations and audit support',
    proof:
      'Month-, quarter-, and year-end close; DATA Act and GTAS deliverables; Subledger Accounting SME support with outcomes that include clean reconciliations and unqualified audit opinions.',
    relatedService: 'financial-management',
  },
  {
    title: 'Reporting, BI, and analytics',
    proof:
      'OBIEE/OAS, BI Publisher, Enterprise Command Center, and Power BI reporting modernization for shared service customers and acquisition systems.',
    relatedService: 'business-intelligence',
  },
  {
    title: 'RPA and intelligent automation',
    proof:
      'Built and sustained an ESC RPA Center of Excellence with UiPath ATO, unattended bots delivering significant labor-hour savings, and recognized innovation awards.',
    relatedService: 'rpa',
  },
  {
    title: 'Agile / SAFe delivery',
    proof:
      'Led Lean-Agile/SAFe transformation work at ESC, with Scaled Agile partnership, two-week sprints, and PI planning on current programs.',
    relatedService: 'program-project-management',
  },
  {
    title: 'Application modernization',
    proof:
      'Modernization of time-and-labor and related applications (.NET upgrades, Telerik reporting) plus Power Platform and APEX delivery experience.',
    relatedService: 'application-development',
  },
  {
    title: 'PMO, OCM, and training',
    proof:
      'PMP-led program management across multi-task-order SSP work, plus go-live training, train-the-trainer, job aids, and hypercare for large agency implementations.',
    relatedService: 'program-project-management',
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Shared service provider depth',
    description:
      'Prime support to two OMB-designated FM shared service providers (IBC and ESC), plus Treasury ARC experience — the foundation of our federal financial systems franchise.',
  },
  {
    title: 'Incumbent continuity',
    description:
      'Continuous delivery at FAA ESC since 2010 and at DOI IBC since 2014, reducing transition risk for complex multi-agency platforms.',
  },
  {
    title: 'Treasury mandate expertise',
    description:
      'Hands-on delivery of G-Invoicing, GTAS, DATA Act, IPP, and related Treasury integrations that agencies must get right.',
  },
  {
    title: 'Agile and SAFe leadership',
    description:
      'Proven Lean-Agile transformation support and Scaled Agile partnership, including inaugural SAFe work at ESC.',
  },
  {
    title: 'Customer-validated quality',
    description:
      'Strong past-performance feedback on management and delivery, with innovation recognition for RPA outcomes.',
  },
  {
    title: 'Prime self-performance',
    description:
      'A track record of performing critical task orders with i360 teams end to end — accountable ownership, not layered handoffs.',
  },
];

export const CAPABILITY_CUSTOMERS: string[] = [
  'DOI Interior Business Center and customer agencies',
  'DOT FAA Enterprise Services Center',
  'Treasury Bureau of the Fiscal Service (ARC) and CDFI Fund',
  'Department of Commerce BAS (as subcontractor)',
  'Additional civilian and DoD programs through SSP and teaming work',
];

export const AI_CAPABILITY_SECTION: AiCapabilitySection = {
  headline: 'Governed automation on the Oracle and RPA estates we already run',
  intro: [
    'Federal demand for AI in financial management is landing inside shared-service Oracle platforms and RPA programs agencies already operate — driven by audit readiness, payment integrity, and pressure for measurable outcomes.',
    'i360’s path is agentic upgrades and AI-assisted O&M on that base, with human oversight on financial actions — not a greenfield AI practice.',
  ],
  offerings: [
    {
      title: 'RPA → agentic modernization',
      description:
        'Upgrade existing UiPath bot fleets to exception-handling agents on authorized public-sector platforms. Builds on the FAA ESC RPA Center of Excellence — including production unattended bots, UiPath ATO patterns, and governed bot credentialing.',
      relatedService: 'rpa',
    },
    {
      title: 'AI-augmented Oracle EBS / OFF managed service',
      description:
        'GenAI-assisted ticket triage, knowledge support, and patch/regression assistance for long-lived OFF O&M at shared service providers. Builds on IBC and ESC help desk, upgrades, and Treasury interface support.',
      relatedService: 'operations-maintenance',
    },
    {
      title: 'Audit-readiness & reconciliation automation',
      description:
        'Matching, evidence packaging, and close support as an extension of month-/year-end close, GTAS, and DATA Act work — helping CFOs meet evidence burdens without treating AI as a substitute for controls.',
      relatedService: 'financial-management',
    },
  ],
  delivery: [
    'Deliver on authorized platforms (for example FedRAMP-oriented UiPath public-sector clouds and OCI Generative AI patterns) rather than seeking a standalone FedRAMP package for every component.',
    'Keep a human approver on financial postings and payment-related actions.',
    'Reuse existing bot identity and ATO patterns where they already exist.',
    'Approach Oracle Fusion AI agents through teaming until i360 holds owned Fusion references.',
  ],
};

export const COMPANY_IDENTIFIERS: CompanyIdentifiers = {
  legalName: 'i360technologies, Inc.',
  sizeStatus: 'Small Business',
  uei: 'GK7KYFNWZKA8',
  cage: '1TZB3',
  founded: '2001',
  primaryNaics: '541512 — Computer Systems Design Services',
};

export const CONTRACT_VEHICLES: ContractVehicle[] = [
  {
    agency: 'GSA',
    title: 'Multiple Award Schedule (MAS)',
    contractId: '47QTCA20D008V',
    summary:
      'Streamlined access to i360 IT and financial-management services through GSA MAS, including FM QSMO marketplace SINs.',
    details: [
      'SIN 54151S — Information Technology Professional Services',
      'SIN 518210C — Cloud Computing and Cloud Related IT Professional Services',
      'SIN 518210FM — Financial Management Services (Solution/Service Adoption & Transition; Technology Operations Support)',
      'Period of performance through April 8, 2030',
    ],
  },
  {
    agency: 'GSA',
    title: 'OASIS+ Small Business',
    contractId: '47QRCA25DSB97',
    summary:
      'Governmentwide vehicle for complex professional services — Management & Advisory and Technical & Engineering domains.',
    details: ['Period of performance December 19, 2024 – December 18, 2029'],
  },
  {
    agency: 'FAA',
    title: 'eFAST',
    contractId: 'DTFAWA10A-00002',
    summary:
      'FAA Electronic FAA Accelerated and Simplified Tasks MOA supporting business administration, systems development, systems support, and documentation & training.',
    contactEmail: 'eFASTinfo@i360technologies.com',
  },
  {
    agency: 'FAA ESC',
    title: 'Teaming Partner BPA (TP2)',
    contractId: '6973GH-24-A-00001',
    summary:
      'Active FAA Enterprise Services Center teaming partner BPA covering RPA, application modernization, and related financial systems support.',
    details: ['Active through October 2028'],
  },
  {
    agency: 'EXIM',
    title: 'Agency BPA',
    contractId: '83310123AF032',
    summary:
      'Export-Import Bank of the United States BPA for technical and financial management systems support.',
    details: ['Period of performance June 2023 – June 2028'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'i360 provided a project team that was professional, thorough and knowledgeable, and the high quality of work products delivered reflected the project team’s capabilities and level of experience.',
    attribution: 'Civilian Agency',
  },
];

export const LEADERSHIP: Leader[] = [
  {
    name: 'Mike Meyer',
    title: 'Chairman and Chief Executive Officer',
    bio: 'Leads i360’s vision and strategy, guiding the firm since its founding in 2001.',
  },
  {
    name: 'Ed Willey',
    title: 'Chief Operating Officer',
    bio: 'Oversees day-to-day operations and delivery excellence across client engagements.',
  },
  {
    name: 'Bart Perkins',
    title: 'Board of Directors Member',
    bio: 'Provides independent industry perspective and governance as a board member.',
  },
];

export const VALUES: CompanyValue[] = [
  {
    name: 'Results',
    description:
      'Be customer focused; produce high quality deliverables; meet or exceed expectations. If it’s worth doing, it’s worth doing right.',
  },
  {
    name: 'Teamwork',
    description:
      'Work with customers as partners; respect one another; take responsibility for the team’s contributions. We all win together.',
  },
  {
    name: 'Integrity',
    description:
      'Be trustworthy. Always do the right thing even if you think no one will ever know.',
  },
  {
    name: 'Honesty',
    description:
      'Communicate openly with customers — no surprises. Tell the truth, even when it’s painful.',
  },
  {
    name: 'Fun',
    description:
      'Enjoy our successes and learn from our failures. Enjoy the ride.',
  },
];

export const NAICS: string[] = [
  '518210 — Data Processing, Hosting, and Related Services',
  '519190 — All Other Information Services',
  '541219 — Other Accounting Services',
  '541330 — Engineering Services',
  '541511 — Custom Computer Programming Services',
  '541512 — Computer Systems Design Services (Primary)',
  '541513 — Computer Facilities Management Services',
  '541519 — Other Computer Related Services',
  '541611 — Administrative Management and General Management Consulting Services',
  '541613 — Marketing Consulting Services',
  '541618 — Other Management Consulting Services',
  '541990 — All Other Professional, Scientific, and Technical Services',
  '561110 — Office Administrative Services',
  '561410 — Document Preparation Services',
  '561499 — All Other Business Support Services',
  '611420 — Computer Training',
  '611430 — Professional and Management Development Training',
  '611710 — Educational Support Services',
];

