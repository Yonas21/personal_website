import {ArrowDownTrayIcon, BuildingOffice2Icon, ClockIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import porfolioImage4 from '../images/portfolio/portfolio-4.webp';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Yonas Alem | Senior Full Stack Engineer',
  description:
    'Yonas Alem is a senior full stack engineer in Addis Ababa (EAT, UTC+3). Node.js, PostgreSQL, and React. Production work across marketplace analytics, gaming, and payments. Open to remote roles.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  name: 'Yonas Alem',
  title: 'Senior Full Stack Engineer',
  detail: 'Node.js · PostgreSQL · React · Remote from Addis Ababa, EAT (UTC+3)',
  description: (
    <>
      I take production systems apart — marketplace analytics, real-money gaming, payments — and leave them cheaper,
      faster, and less likely to fail silently. Open to remote senior full-stack roles.
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      download: 'Yonas_Alem_Software_Engineer_Resume.pdf',
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: (
    <>
      <p>
        I am Yonas Alem, a senior full stack engineer in Addis Ababa. I work in Node.js, PostgreSQL, and React, usually
        on systems where a silent failure costs real money. I have cut infrastructure spend by about 35% (roughly $100K
        a year), improved platform performance around 30%, and shipped payment integrations used by products that have
        handled more than 3 billion ETB in transaction volume.
      </p>
      <p>
        Day to day that means schema design, APIs, React frontends, AWS, and the debugging that starts with a job that
        never ran. Production code lives in private employer repos; the case studies on this site are the public
        record, and I will walk through the systems on a hiring call. Available as a remote hire from Ethiopia (EAT,
        UTC+3).
      </p>
    </>
  ),
  stats: [
    {value: '5+', label: 'Years in production'},
    {value: '35%', label: 'Infra cost reduced'},
    {value: '~30%', label: 'Performance gain'},
    {value: '3B+', label: 'ETB on rails I integrated'},
  ],
  aboutItems: [
    {label: 'Location', text: 'Addis Ababa, Ethiopia', Icon: MapIcon},
    {label: 'Timezone', text: 'EAT (UTC+3)', Icon: ClockIcon},
    {label: 'Availability', text: 'Remote senior full-stack', Icon: BuildingOffice2Icon},
    {label: 'Currently', text: 'TPK Synergy Limited', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Prisma', 'gRPC', 'tRPC', 'REST', 'BullMQ'],
  },
  {
    name: 'Data',
    skills: ['PostgreSQL', 'Redis'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Cloud',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'Datadog'],
  },
  {
    name: 'Integrations',
    skills: ['Amazon SP-API', 'Amazon Ads API', 'Mastercard', 'Visa', 'Telebirr', 'OAuth 2.0'],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Keeping 17 cron jobs alive after deploy',
    subtitle: 'TPK Synergy Limited',
    kind: 'Reliability case study · private production system',
    problem:
      'After every deploy, recurring Amazon sync jobs died quietly. Dashboards looked fine until the data was a day old.',
    description:
      'I traced the failure through BullMQ job state, ioredis connections, Node process shutdown, and the Railway scheduler, then put explicit shutdown handling on 17 cron processes so a deploy could not leave work stranded.',
    result: 'Sync jobs survive deploys instead of going silent until a seller notices bad numbers.',
    technologies: ['Node.js', 'BullMQ', 'Redis', 'Railway'],
  },
  {
    title: 'Reports that used to take two hours',
    subtitle: 'Mereb Technologies',
    kind: 'Performance case study · private production system',
    problem: 'Reporting on about a million records ran for two hours and blocked people who needed the numbers.',
    description:
      'I moved the expensive work out of ad-hoc application paths: indexing, read/write separation, caching, and a redesigned status-checking flow so the database did the aggregation instead of the app.',
    result:
      'Same reports, under 30 minutes. Platform performance up about 30%; infra cost down about 35% (~$100K/year).',
    technologies: ['PostgreSQL', 'PHP', 'Redis', 'AWS'],
  },
  {
    title: 'Nedaj payments',
    subtitle: 'Eaglelion Systems Technology',
    kind: 'Shipped product',
    problem:
      'A fuel-purchase app had to talk to Mastercard, Visa, Telebirr, and commercial banks, with incomplete provider docs and a SOAP past.',
    description:
      'I built the payment workflows on the client: states, callbacks, failures, retries, verification, and REST in place of SOAP, on a product used by 100K+ downloads.',
    result: 'Payment rails that hold up in production. Live on Google Play.',
    url: 'https://play.google.com/store/apps/details?id=com.eaglelionsystems.nedaj',
    urlLabel: 'Google Play',
    image: porfolioImage4,
    technologies: ['React', 'Next.js', 'REST', 'Payment APIs'],
  },
  {
    title: 'Email records that took minutes',
    subtitle: 'Autobridge Systems · contract',
    kind: 'Contract case study · private government system',
    problem: 'Incoming email records on a constituent platform took minutes to load. Staff sat on the screen.',
    description:
      'I traced the delay to missing indexes on a PostgreSQL path, then added the indexes and tightened the query. Sensitive constituent data stayed behind access control and encryption.',
    result: 'Those operations improved by more than 10x.',
    technologies: ['PostgreSQL', 'Node.js', 'Encryption'],
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'Capstone: distributed system for real-time data processing',
    company: 'Addis Ababa University',
    location: 'Addis Ababa, Ethiopia',
    title: 'BSc in Software Engineering',
    content: (
      <p>
        Undergraduate work in data structures, software lifecycle and architecture, web and mobile development, and
        internet security.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'December 2025 – Present',
    company: 'TPK Synergy Limited',
    location: 'Remote',
    title: 'Senior Full Stack Engineer',
    technologies: ['Node.js', 'PostgreSQL', 'BullMQ', 'Redis', 'React', 'Amazon SP-API'],
    content: (
      <ul>
        <li>Amazon seller analytics covering marketplace analytics, FBA, finance, PPC, and inventory.</li>
        <li>
          Diagnosed a production failure where recurring sync jobs silently stopped after each deploy; traced it through
          BullMQ job state, ioredis connections, Node.js process lifecycle, and Railway scheduler behavior, then added
          explicit shutdown handling across 17 cron processes.
        </li>
        <li>
          Integrated Amazon SP-API and Amazon Ads authentication end to end: OAuth, LWA token exchange, credential
          management, onboarding state, and encrypted credential storage.
        </li>
        <li>
          Extended the platform to UK and EU marketplaces by threading marketplace and currency context through every
          service, including VAT-aware margin calculations.
        </li>
        <li>
          Cut dashboard load times by moving expensive aggregations from application code into SQL and removing
          duplicate database queries.
        </li>
        <li>
          Replaced a drifting migration history with an idempotent, additive migration process after finding the
          production schema out of sync with the repository.
        </li>
        <li>
          Corrected financial and inventory figures by sourcing fees and costs from authoritative Amazon endpoints
          instead of incomplete downstream records.
        </li>
      </ul>
    ),
  },
  {
    date: 'April 2022 – November 2025',
    company: 'Mereb Technologies',
    location: 'Addis Ababa, Ethiopia',
    title: 'Senior Software Engineer',
    technologies: ['PostgreSQL', 'gRPC', 'PHP', 'React', 'AWS', 'Datadog'],
    content: (
      <ul>
        <li>Owned a production real-money gaming platform end to end: loyalty, payouts, fraud, and reporting.</li>
        <li>
          Improved platform performance ~30% through database indexing, read/write separation, system-wide caching,
          pagination, transactional operations, and a redesign of the status-checking system.
        </li>
        <li>
          Reduced infrastructure costs ~35%, an estimated $100K per year, through database, caching, and resource
          optimization.
        </li>
        <li>
          Cut report generation on ~1 million record datasets from 2 hours to under 30 minutes by reworking data access
          and report processing.
        </li>
        <li>
          Designed a gRPC and Protocol Buffers service architecture for new gaming features, including PHP and React
          clients, shared abstractions, and PHAR packaging for production.
        </li>
        <li>
          Built fraud monitoring that scored gameplay activity, balances, wins and losses, active days, and transaction
          behavior to flag suspicious deposit and withdrawal patterns.
        </li>
        <li>Mentored 3 junior engineers on API development, debugging, code quality, and system design.</li>
      </ul>
    ),
  },
  {
    date: 'February 2023 – August 2023',
    company: 'Affiliate.com',
    location: 'Remote',
    title: 'Full Stack Developer (Contract)',
    note: 'Contract alongside Mereb Technologies',
    technologies: ['Node.js', 'tRPC', 'Prisma', 'React', 'Zod', 'GCS'],
    content: (
      <ul>
        <li>
          Migrated a legacy PHP API to Node.js and tRPC across campaigns, creatives, line items, P&L, affiliates, and
          dashboard functionality.
        </li>
        <li>
          Reimplemented complex legacy SQL behavior in Prisma while keeping business rules and data consistent between
          the legacy and new platforms running in parallel.
        </li>
        <li>
          Reduced report generation time ~40% by moving generation off the backend and into a Google Cloud Storage
          workflow.
        </li>
        <li>
          Rebuilt API validation in Zod without changing existing application behavior, and wrote unit and integration
          tests reaching ~85% coverage on migrated code.
        </li>
      </ul>
    ),
  },
  {
    date: 'Contract',
    company: 'Autobridge Systems',
    location: 'Addis Ababa, Ethiopia',
    title: 'Backend Engineer (Contract)',
    note: 'Government constituent platform',
    technologies: ['PostgreSQL', 'Node.js', 'Encryption'],
    content: (
      <ul>
        <li>
          Backend for complaints, document approvals, and internal communication, with access control and encryption
          around sensitive constituent data.
        </li>
        <li>
          Traced multi-minute slowdowns on incoming email records to missing indexes and improved those operations by
          more than 10x.
        </li>
        <li>Integrated AI services for threat detection and message classification in communication workflows.</li>
      </ul>
    ),
  },
  {
    date: 'February 2021 – April 2022',
    company: 'Eaglelion Systems Technology',
    location: 'Addis Ababa, Ethiopia',
    title: 'Frontend Developer',
    href: 'https://play.google.com/store/apps/details?id=com.eaglelionsystems.nedaj',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Payment APIs'],
    content: (
      <ul>
        <li>
          Integrated Mastercard, Visa, Telebirr, and commercial bank payment APIs on the client of products that have
          handled more than 3 billion ETB and 100K+ downloads.
        </li>
        <li>
          Implemented payment workflows covering transaction states, callbacks, failures, retries, verification, and
          reconciliation across external providers.
        </li>
        <li>
          Replaced legacy SOAP integrations with REST APIs while keeping communication reliable against incomplete and
          inconsistent provider documentation.
        </li>
        <li>
          Raised the GTmetrix score from 45 to 97 and reduced page load times ~25% through code splitting, lazy loading,
          and asset optimization.
        </li>
      </ul>
    ),
  },
  {
    date: 'Side project',
    company: 'Upplai',
    location: 'Remote',
    title: 'Full Stack Engineer',
    note: 'AI resume platform · personal product',
    technologies: ['React', 'Node.js', 'OpenAI', 'Gemini'],
    content: (
      <ul>
        <li>Resume generation, cover letters, and ATS feedback using OpenAI and Gemini.</li>
        <li>Supported 500+ user profiles across generation and feedback workflows.</li>
        <li>Tracked model usage and spend per generation so AI cost did not disappear into a shared bill.</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  testimonials: [
    {
      name: 'Mekidem Getaneh',
      role: 'Engineering colleague · ~1 year working together',
      text: 'I have worked with Yonas for almost a year. He is a very good ReactJS developer with a diligent and patient personality. He goes above and beyond for solving a problem and to find optimal solutions and is well acquainted with different libraries.',
    },
    {
      name: 'Kalvin',
      role: 'Client · data analytics frontend',
      text: 'Working with Yonas on the front-end development of our data analytics website was an outstanding experience. He demonstrated exceptional expertise and creativity, with attention to detail, responsiveness to feedback, and proactive communication. I highly recommend Yonas to anyone looking for a skilled and reliable engineer.',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Let’s work together.',
  description:
    'Open to remote senior full-stack roles. I work from Addis Ababa, Ethiopia (EAT, UTC+3). Email is the fastest way to reach me. Production work is private; I can walk through it on a screening call.',
  items: [
    {
      type: ContactType.Email,
      text: 'yonalem21@gmail.com',
      href: 'mailto:yonalem21@gmail.com',
    },
    {
      type: ContactType.Phone,
      text: '+251 936 972 697',
      href: 'tel:+251936972697',
    },
    {
      type: ContactType.Location,
      text: 'Addis Ababa, Ethiopia',
      href: 'https://www.google.com/maps/place/Addis+Ababa',
    },
    {
      type: ContactType.Github,
      text: 'github.com/Yonas21',
      href: 'https://github.com/Yonas21',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/yonasalem21',
      href: 'https://www.linkedin.com/in/yonasalem21/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Yonas21'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/yonasalem21/'},
];
