import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.png';
import porfolioImage4 from '../images/portfolio/portfolio-4.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
  title: 'Yonas Alem',
  description: 'Experienced Software Developer please Various experience Developing Web and Mobile Applications',
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
  imageSrc: heroImage,
  name: `I'm Yonas Alem.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m Yonas, a passionate <strong>Software Developer</strong> with expertise in crafting dynamic, scalable, and
        user-friendly applications. With a strong foundation in <em>React</em>, <em> Next.js</em>, <em>Angular</em>,
        <em>Node.js</em>, <em>PHP</em>, <em>Python</em>, and <em>AWS</em>, I specialize in building impactful solutions
        that merge innovation with functionality. From developing robust management dashboards to enhancing mobile
        applications with seamless API integrations, I excel at transforming complex challenges into simple, elegant
        solutions.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, i use my time to learn more about <strong className="text-stone-100">Cooking</strong>,
        <strong>Driving Simulators</strong> or Exploring Beautiful Gardens Around The City.{' '}
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
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
  description: `I’m a Software Developer with a passion for building dynamic, user-friendly, and scalable web applications. From sleek frontends to powerful backends, I bring ideas to life with modern tools and technologies.`,
  aboutItems: [
    {label: 'Work Preference', text: 'Remote, Open to Relocation', Icon: MapIcon},
    {label: 'Location', text: 'Addis Ababa, Ethiopia', Icon: MapIcon},
    {label: 'Nationality', text: 'Ethiopian', Icon: FlagIcon},
    {label: 'Interests', text: 'Driving, Playing Football, Hicking', Icon: SparklesIcon},
    {label: 'Study', text: 'Addis Ababa University', Icon: AcademicCapIcon},
    {label: 'Current Employment', text: 'Mereb Technologies PLC.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Amharic',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 10,
      },
      {
        name: 'GraphQL',
        level: 10,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'PHP',
        level: 10,
      },
      {
        name: 'Golang',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 10,
      },
      {
        name: 'Flutter',
        level: 8,
      },
      {
        name: 'Swift',
        level: 8,
      },
    ],
  },
  {
    name: 'Version Control and Deployment',
    skills: [
      {
        name: 'Git',
        level: 10,
      },
      {
        name: 'Bash Scripting',
        level: 10,
      },
      {
        name: 'Docker',
        level: 10,
      },
      {
        name: 'AWS',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'GetRooms.com',
    description:
      'Online Hotel Booking Systems that aims to transform end-end booking experience from booking, Payment and Stays',
    url: 'https://www.getroomsonline.com',
    image: porfolioImage1,
  },
  {
    title: 'Eaglelion Systems Technology Company Website',
    description: 'Gives a Glance about the company and what solutions provided',
    url: 'https://eaglelionsystems.com',
    image: porfolioImage2,
  },
  {
    title: 'GetRooms & Getfee Regstrations',
    description: 'Registration Website for Hotels and Resorts to Automate Booking.',
    url: 'https://getrooms.me',
    image: porfolioImage3,
  },
  {
    title: 'Nedaj',
    description:
      'Nedaj is a cutting-edge electronic payment system to make fuel purchase and payment quick, easy, and joyful. It is a futuristic mobile application for Android and iOS smartphones developed to give a seamless experience for both the drivers and the pumpstations.',
    url: 'https://play.google.com/store/apps/details?id=com.eaglelionsystems.nedaj',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2018',
    location: 'Addis Ababa University',
    title: 'Bachelors in Software Engineering',
    content: (
      <p>
        After Finishing Secondary School in 2013 I have Joined Addis Ababa University Technology Campus and Chose
        Software Engineering as Major because I had very Attracted to Technology when I was a kid in Africa, so I have
        Joined to Fullfil my Dream and it was a Pinpoint Match. After I joined I Learned Data Structure and Algorithms,
        Software Development Lifecycles and Paradigms, Web and Mobile Application Development and Internet Security,
        last but no least I have connected with very Talented Colleages, Friends and Instructors That have helped me
        Progress after I graduated.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2021 - Present',
    location: 'Mereb Technologies',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Working on Game Backend Api, Tuning the performance of Database Queries, writing testing and automation scripts,
        Design and Implement Game Dashboard UI, also Integrate with API.
      </p>
    ),
  },
  {
    date: 'February 2023 - August 2023',
    location: 'affiliate.com(Remote)',
    title: 'Fullstack Developer',
    content: (
      <p>
        Changed PHP and Joomla based web system into Node.js, tRPC, React and Prisma new, improved and fast system with
        very responsive design.
      </p>
    ),
  },
  {
    date: 'February 2019 - April 2021',
    location: 'EagleLion Systems Technology',
    title: 'FrontEnd Developer',
    content: (
      <p>
        Design and Implement Payment Dashboards, Promotional Websites, Company Websites, Integrate Systems to Api,
        Change Html And Javascript Templates to React Templates, Writing Testcase for Acceptance Testers.
      </p>
    ),
  },
  {
    date: 'January 2019 - June 2019',
    location: 'Ethiopian Orthodox Church,ICT Center',
    title: 'Junior Fullstack Developer',
    content: (
      <p>
        Convert Figma Designs to Ui and Integrate to Backend using ReactQL and GraphQL Mutation. Working on Elearning
        websites using moodle and add performance the Existing websites.
      </p>
    ),
  },
  {
    date: 'February 2018 - July 2019',
    location: 'Ethernet',
    title: 'Backend Developer',
    content: (
      <p>
        I have been Testing Existing Systems as end User and List out Major Bugs for Rework, Developing Apis for
        Different Volunteer Systems.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Muly Oved',
      text: 'Excellent freelancer, dedicated, hard worker, was joy to work with, and will love to work with him again',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
    {
      name: 'Mekidem Getaneh',
      text: 'I have worked with Yonas for almost a year. He is a very good ReactJS developer with a diligent and patient personality. He goes above and beyond for solving a problem and to find optimal solutions and is well aquatinted with different libraries. I am sure anybody would find him very helpful and a delight to work with.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'yonalem21@gmail.com',
      href: 'mailto:yonalem21@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Addis Ababa, Ethiopia',
      href: 'https://goo.gl/maps/4g8LnHQBKiywgAEd6?coh=178573&entry=tt',
    },
    {
      type: ContactType.Instagram,
      text: '@its_yon_21',
      href: 'https://www.instagram.com/its_yon_21/',
    },
    {
      type: ContactType.Github,
      text: 'Yonas21',
      href: 'https://github.com/Yonas21',
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
