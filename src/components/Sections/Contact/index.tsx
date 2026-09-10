import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';
import SectionHeading from '../../SectionHeading';
import ContactForm from './ContactForm';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;

  return (
    <Section className="scroll-mt-28" sectionId={SectionId.Contact}>
      <SectionHeading index="05" title={headerText ?? 'Get in touch'} />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm leading-relaxed text-fg-muted">{description}</p>
          <dl className="mt-6 flex flex-col gap-3">
            {items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              return (
                <div key={srLabel}>
                  <dt className="sr-only">{srLabel}</dt>
                  <dd>
                    <a
                      className={classNames(
                        'inline-flex items-center rounded-md text-sm text-fg-muted transition-colors hover:text-accent-hover',
                        {'pointer-events-none': !href},
                      )}
                      href={href}
                      rel="noreferrer"
                      target={href?.startsWith('http') ? '_blank' : undefined}>
                      <Icon aria-hidden="true" className="h-4 w-4 text-accent" />
                      <span className="ml-3">{text}</span>
                    </a>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
