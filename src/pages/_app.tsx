import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import {IBM_Plex_Mono, Instrument_Serif, Outfit} from 'next/font/google';
import {memo, useMemo} from 'react';

import {ThemeProvider} from '../hooks/useTheme';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const instrumentSerif = Instrument_Serif({
  adjustFontFallback: false,
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument',
  weight: '400',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex',
  weight: ['400', '500'],
});

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  const fontClassName = useMemo(
    () => `${outfit.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} font-sans antialiased`,
    [],
  );

  return (
    <ThemeProvider>
      <div className={fontClassName}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
});

export default MyApp;
