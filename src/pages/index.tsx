import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import Testimonials from '../components/Sections/Testimonials';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;

  return (
    <Page description={description} title={title}>
      <div className="relative min-h-screen overflow-hidden bg-page">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[22rem] w-[22rem] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgb(var(--color-fg)_/_0.04),_transparent_55%)]" />
        </div>
        <Header />
        <main className="relative mx-auto min-h-screen max-w-content px-6 lg:flex lg:justify-between lg:gap-16 lg:px-12">
          <Hero />
          <div className="lg:w-[54%]">
            <About />
            <Resume />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </main>
      </div>
    </Page>
  );
});

export default Home;
