import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
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
  title: 'Yonas Alem | Senior Software Engineer',
  description:
    'Official website of Yonas Alem, senior software engineer in Addis Ababa, Ethiopia. Backend and full stack systems across payments, gaming, ecommerce, advertising, and AWS. Open to remote roles.',
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
  title: 'Senior Software Engineer',
  description: (
    <>
      I build and fix production systems across payments, gaming, ecommerce, advertising, and government services — from
      PostgreSQL and backend services through React, AWS, and the last mile of production debugging.
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
        I am Yonas Alem, a senior software engineer in Addis Ababa with 5+ years shipping production software where
        reliability, cost, and correctness actually matter. I have cut infrastructure spend by about 35% (roughly $100K
        a year), improved platform performance around 30%, and integrated payment rails that have handled more than 3
        billion ETB in transaction volume.
      </p>
      <p>
        Day to day I work across the stack: schema design, APIs, React frontends, AWS infrastructure, and the kind of
        production debugging that starts with a silent failure and ends with a safer system. I am based in Addis Ababa
        and open to remote roles.
      </p>
    </>
  ),
  stats: [
    {value: '5+', label: 'Years in production'},
    {value: '35%', label: 'Infra cost reduced'},
    {value: '~30%', label: 'Performance gain'},
    {value: '3B+', label: 'ETB payment volume'},
  ],
  aboutItems: [
    {label: 'Location', text: 'Addis Ababa, Ethiopia', Icon: MapIcon},
    {label: 'Availability', text: 'Open to remote', Icon: BuildingOffice2Icon},
    {label: 'Currently', text: 'TPK Synergy Limited', Icon: SparklesIcon},
    {label: 'Study', text: 'Addis Ababa University', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Go', 'Python', 'PHP', 'SQL'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'FastAPI', 'Prisma', 'gRPC', 'tRPC', 'REST', 'BullMQ'],
  },
  {
    name: 'Data',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Material UI'],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      'AWS (EC2, S3, Lambda)',
      'Docker',
      'Kubernetes',
      'Nginx',
      'GitHub Actions',
      'CI/CD',
      'Datadog',
      'CloudWatch',
    ],
  },
  {
    name: 'Integrations',
    skills: ['Amazon SP-API', 'Amazon Ads API', 'Mastercard', 'Visa', 'Telebirr', 'OAuth 2.0', 'OpenAI', 'Gemini'],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Amazon seller analytics platform',
    subtitle: 'TPK Synergy Limited',
    description:
      'Marketplace analytics covering FBA, finance, PPC, and inventory. I own production reliability, Amazon integrations, and the data path behind the dashboard.',
    highlights: [
      'Traced recurring sync jobs that silently died after every deploy, then added explicit shutdown handling across 17 cron processes.',
      'Integrated Amazon SP-API and Ads authentication end to end, including OAuth, LWA token exchange, and encrypted credential storage.',
      'Extended the platform to UK and EU marketplaces with VAT-aware margins and region-specific marketplace logic.',
    ],
    technologies: ['Node.js', 'PostgreSQL', 'BullMQ', 'Redis', 'Amazon SP-API', 'Railway'],
  },
  {
    title: 'Real-money gaming platform',
    subtitle: 'Mereb Technologies',
    description:
      'End-to-end ownership of a production gaming platform: loyalty, payouts, fraud, reporting, and the infrastructure underneath it.',
    highlights: [
      'Improved platform performance about 30% through indexing, read/write separation, caching, pagination, and a redesigned status-checking system.',
      'Reduced infrastructure costs about 35%, an estimated $100K per year.',
      'Cut report generation on ~1 million record datasets from 2 hours to under 30 minutes.',
    ],
    technologies: ['PHP', 'gRPC', 'PostgreSQL', 'Redis', 'AWS', 'Datadog', 'React'],
  },
  {
    title: 'Government constituent platform',
    subtitle: 'Autobridge Systems',
    description:
      'Backend for complaints, document approvals, and internal communication, with access control and encryption around sensitive constituent data.',
    highlights: [
      'Traced multi-minute slowdowns on incoming email records to missing indexes and improved those operations by more than 10x.',
      'Integrated AI services for threat detection and message classification in communication workflows.',
    ],
    technologies: ['PostgreSQL', 'Node.js', 'Encryption', 'AI classification'],
  },
  {
    title: 'Upplai',
    subtitle: 'AI-powered resume platform',
    description:
      'Resume generation, cover letters, and ATS feedback using OpenAI and Gemini, with scoring, document preview, and per-resume cost tracking.',
    highlights: [
      'Supported 500+ user profiles across generation and feedback workflows.',
      'Made model usage and spend visible per generation so cost did not disappear into a shared bill.',
    ],
    technologies: ['React', 'Node.js', 'OpenAI', 'Gemini'],
  },
  {
    title: 'Nedaj payments',
    subtitle: 'Eaglelion Systems Technology',
    description:
      'Payment workflows for a fuel-purchase product used by 100K+ downloads, integrating Mastercard, Visa, Telebirr, and commercial bank APIs.',
    url: 'https://play.google.com/store/apps/details?id=com.eaglelionsystems.nedaj',
    image: porfolioImage4,
    technologies: ['React', 'Next.js', 'REST', 'Payment APIs'],
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
        internet security. AWS Certified Cloud Practitioner.
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
    date: 'February 2021 – April 2022',
    company: 'Eaglelion Systems Technology',
    location: 'Addis Ababa, Ethiopia',
    title: 'Frontend Developer',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Payment APIs'],
    content: (
      <ul>
        <li>
          Integrated Mastercard, Visa, Telebirr, and commercial bank payment APIs into products with 100K+ downloads and
          more than 3 billion ETB in transaction volume.
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
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  testimonials: [
    {
      name: 'Dan Warner',
      role: 'AppLand Inc',
      text: 'Yonas did a great job! I would work with him again on a larger project.',
    },
    {
      name: 'Muly Oved',
      text: 'Excellent freelancer, dedicated, hard worker, was joy to work with, and will love to work with him again.',
    },
    {
      name: 'Mekidem Getaneh',
      text: 'I have worked with Yonas for almost a year. He is a very good ReactJS developer with a diligent and patient personality. He goes above and beyond for solving a problem and to find optimal solutions and is well acquainted with different libraries.',
    },
    {
      name: 'Kalvin',
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
    'I am currently open to remote senior engineering roles and selected contract work. The fastest way to reach me is email.',
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
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/its_yon_21/'},
];
