export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  summary: string;
  body: string[];
  highlights?: { title: string; description: string }[];
}

export interface NavLink {
  label: string;
  path: string;
  children?: { label: string; path: string }[];
}

export const COMPANY = {
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
  { label: 'Contact', path: '/contact' },
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
    ],
  },
];

export const PARTNERS = [
  { name: 'Oracle Partner', detail: 'Gold-level Oracle expertise across Federal Financials and related stacks.' },
  { name: 'UiPath Partner', detail: 'Enterprise RPA delivery, CoE enablement, and platform architecture.' },
  { name: 'Infor Partner', detail: 'Corporate partnership supporting modern ERP and operations solutions.' },
  { name: 'Association of Government Accountants', detail: 'Professional alignment with public-sector financial excellence.' },
  { name: 'Project Management Institute', detail: 'Commitment to recognized program and project management standards.' },
];

export const TESTIMONIALS = [
  {
    quote:
      'i360 provided a project team that was professional, thorough and knowledgeable, and the high quality of work products delivered reflected the project team’s capabilities and level of experience.',
    attribution: 'Civilian Agency',
  },
];

export const LEADERSHIP = [
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

export const VALUES = [
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

export const NAICS = [
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

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((service) => service.slug === slug);
}
