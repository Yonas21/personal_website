import {Head, Html, Main, NextScript} from 'next/document';

import {THEME_COLOR_DARK, themeBootScript} from '../hooks/theme';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <Head>
        <script dangerouslySetInnerHTML={{__html: themeBootScript}} />
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
        <meta content={THEME_COLOR_DARK} name="theme-color" />
      </Head>
      <body className="bg-page text-fg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
