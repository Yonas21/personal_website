import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren, useMemo} from 'react';

import {HomepageMeta} from '../../data/dataDef';
import {
  PERSON_IMAGE_PATH,
  PERSON_SAME_AS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  toAbsoluteUrl,
} from '../../data/site';
import JsonLd from '../JsonLd';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, description, noIndex = false, title}) => {
  const {asPath} = useRouter();
  const canonicalUrl = useMemo(() => toAbsoluteUrl(asPath), [asPath]);
  const imageUrl = useMemo(() => toAbsoluteUrl(PERSON_IMAGE_PATH), []);
  const pageTitle = title || SITE_TITLE;
  const pageDescription = description || SITE_DESCRIPTION;
  const robots = noIndex
    ? 'noindex, nofollow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta content={pageDescription} name="description" />
        <meta content={SITE_NAME} name="author" />
        <meta content={robots} name="robots" />
        <meta content={robots} name="googlebot" />
        <link href={canonicalUrl} key="canonical" rel="canonical" />
        <link href={canonicalUrl} hrefLang="en" rel="alternate" />
        <link href={canonicalUrl} hrefLang="x-default" rel="alternate" />
        {PERSON_SAME_AS.map(href => (
          <link href={href} key={href} rel="me" />
        ))}

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href={PERSON_IMAGE_PATH} rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content="profile" property="og:type" />
        <meta content={SITE_NAME} property="og:site_name" />
        <meta content="en_US" property="og:locale" />
        <meta content={imageUrl} property="og:image" />
        <meta content="413" property="og:image:width" />
        <meta content="531" property="og:image:height" />
        <meta content="image/jpeg" property="og:image:type" />
        <meta content={`${SITE_NAME}, ${SITE_TITLE}`} property="og:image:alt" />
        <meta content="Yonas" property="profile:first_name" />
        <meta content="Alem" property="profile:last_name" />

        <meta content={pageTitle} name="twitter:title" />
        <meta content={pageDescription} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={imageUrl} name="twitter:image" />
        <meta content={`${SITE_NAME}, senior software engineer`} name="twitter:image:alt" />
      </Head>
      {!noIndex && <JsonLd />}
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
