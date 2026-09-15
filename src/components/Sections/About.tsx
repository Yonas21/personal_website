import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import SectionHeading from '../SectionHeading';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems, stats} = aboutData;

  return (
    <Section className="scroll-mt-28" sectionId={SectionId.About}>
      <SectionHeading index="01" title="About Yonas Alem" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
          {!!profileImageSrc && (
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-accent/30 sm:h-32 sm:w-32">
              <Image
                alt="Yonas Alem, senior software engineer in Addis Ababa"
                className="h-full w-full object-cover object-top"
                src={profileImageSrc}
              />
            </div>
          )}
          <div className="space-y-4 text-base leading-relaxed text-fg-muted">{description}</div>
        </div>
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({value, label}) => (
            <div className="rounded-2xl border border-line/10 bg-elevated/90 px-4 py-5" key={label}>
              <dt className="font-serif text-2xl text-accent sm:text-3xl">{value}</dt>
              <dd className="mt-2 text-xs leading-snug text-fg-muted">{label}</dd>
            </div>
          ))}
        </dl>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {aboutItems.map(({label, text, Icon}) => (
            <li className="flex items-center gap-3 text-sm" key={label}>
              {Icon && <Icon className="h-4 w-4 text-accent" />}
              <span className="text-fg-subtle">{label}</span>
              <span className="text-fg">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
