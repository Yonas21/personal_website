import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
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
        I'm <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working at{' '}
        <strong className="text-stone-100">Mereb Technologies</strong> helping build a modern, fast, international
        Pocker Games that aims to emulate and modernize Las Vegas Poker Game.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me learning about <strong className="text-stone-100">Cooking</strong>,
        <strong>Driving Simulators</strong>, plucking my <strong className="text-stone-100">banjo</strong>, or exploring
        beautiful <strong className="text-stone-100">Working around King Goerge Street with my friends.</strong>.
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
  description: `I am Young Fullstack Developer, I live in Addis Ababa, Ethiopia, I am Currently Working at Mereb Technologies as Senior Software Engineer, a company Based in Addis Working on Outsourcing Project from USA,Europe and Canada, I am working Fullstack with React, Golang also PHP, I am really Interested to Know deeper into Swift Programming language, I am Laugh loving and fun to work with.`,
  aboutItems: [
    {label: 'Location', text: 'Addis Ababa, Ethiopia', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Ethiopian', Icon: FlagIcon},
    {label: 'Interests', text: 'Driving, Playing Football, Hicking', Icon: SparklesIcon},
    {label: 'Study', text: 'Addis Ababa University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Mereb Technologies PLC.', Icon: BuildingOffice2Icon},
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
        level: 8,
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
        level: 8,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'GraphQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'PHP',
        level: 9,
      },
      {
        name: 'Golang',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 6,
      },
      {
        name: 'Swift',
        level: 6,
      },
    ],
  },
  {
    name: 'Version Control and Deployment',
    skills: [
      {
        name: 'Git',
        level: 9,
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
        name: 'aws',
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
    date: 'December 2020',
    location: 'Addis Ababa University',
    title: 'Bachelors in Software Engineering',
    content: (
      <p>
        After Finishing Secondary School in 2015 I have Joined Addis Ababa University Technology Campus and Chose
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
    date: 'April 2022 - Present',
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
    date: 'February 2021 - April 2022',
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
    date: 'January 2021 - June 2021',
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
    date: 'February 2019 - September 2019',
    location: 'Minister Of Science and Higher Education',
    title: 'Acceptance Tester and Junior Backend Developer',
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
