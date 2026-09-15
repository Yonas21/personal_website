import Head from 'next/head';
import {FC, memo, useMemo} from 'react';

import {skills} from '../data/data';
import {
  PERSON_EMAIL,
  PERSON_IMAGE_PATH,
  PERSON_JOB_TITLE,
  PERSON_PHONE,
  PERSON_SAME_AS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL,
  toAbsoluteUrl,
} from '../data/site';

const JsonLd: FC = memo(() => {
  const json = useMemo(() => {
    const image = toAbsoluteUrl(PERSON_IMAGE_PATH);
    const pageUrl = `${SITE_URL}/`;
    const knowsAbout = skills.flatMap(group => group.skills);

    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@id': `${SITE_URL}/#website`,
          '@type': 'WebSite',
          description: SITE_DESCRIPTION,
          inLanguage: 'en',
          name: SITE_NAME,
          publisher: {'@id': `${SITE_URL}/#person`},
          url: pageUrl,
        },
        {
          '@id': `${SITE_URL}/#person`,
          '@type': 'Person',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'ET',
            addressLocality: 'Addis Ababa',
          },
          alumniOf: {
            '@type': 'CollegeOrUniversity',
            name: 'Addis Ababa University',
          },
          email: `mailto:${PERSON_EMAIL}`,
          image,
          jobTitle: PERSON_JOB_TITLE,
          knowsAbout,
          name: SITE_NAME,
          nationality: 'Ethiopian',
          sameAs: [...PERSON_SAME_AS],
          telephone: PERSON_PHONE,
          url: pageUrl,
          worksFor: {
            '@type': 'Organization',
            name: 'TPK Synergy Limited',
          },
        },
        {
          '@id': `${SITE_URL}/#webpage`,
          '@type': 'ProfilePage',
          about: {'@id': `${SITE_URL}/#person`},
          description: SITE_DESCRIPTION,
          inLanguage: 'en',
          isPartOf: {'@id': `${SITE_URL}/#website`},
          mainEntity: {'@id': `${SITE_URL}/#person`},
          name: SITE_TITLE,
          url: pageUrl,
        },
      ],
    };
  }, []);

  return (
    <Head>
      <script dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} type="application/ld+json" />
    </Head>
  );
});

JsonLd.displayName = 'JsonLd';
export default JsonLd;
