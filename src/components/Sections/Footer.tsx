import {FC, memo} from 'react';

import Socials from '../Socials';

const Footer: FC = memo(() => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/10 pb-16 pt-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-lg text-fg">Yonas Alem</p>
          <p className="mt-1 text-sm text-fg-subtle">Built with care in Addis Ababa.</p>
        </div>
        <div className="flex items-center gap-1 text-fg-subtle">
          <Socials />
        </div>
      </div>
      <p className="mt-8 text-xs text-fg-subtle">© {year} Yonas Alem. All rights reserved.</p>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;
