import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const SITE_URL = 'https://yonasalem-1bec1.web.app';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        <link href={`${SITE_URL}${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/site.webmanifest" rel="manifest" />

        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`${SITE_URL}${pathname}`} property="og:url" />
        <meta content="website" property="og:type" />

        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="summary_large_image" name="twitter:card" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;
