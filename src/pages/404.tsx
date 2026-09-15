import Link from 'next/link';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';

const NotFound: FC = memo(() => {
  return (
    <Page description="This page does not exist on Yonas Alem's site." noIndex title="Page not found | Yonas Alem">
      <main className="flex min-h-screen flex-col items-center justify-center bg-page px-6 text-center text-fg">
        <p className="font-mono text-xs tracking-[0.28em] text-accent">404</p>
        <h1 className="mt-4 font-serif text-4xl">Page not found</h1>
        <p className="mt-3 max-w-md text-fg-muted">The page you requested is not part of Yonas Alem's site.</p>
        <Link
          className="mt-8 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg hover:bg-accent-hover"
          href="/">
          Back to Yonas Alem
        </Link>
      </main>
    </Page>
  );
});

NotFound.displayName = 'NotFound';
export default NotFound;
