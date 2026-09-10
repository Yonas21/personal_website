import {MoonIcon, SunIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {useTheme} from '../hooks/useTheme';

const ThemeToggle: FC<{className?: string}> = memo(({className}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={theme === 'dark'}
      className={classNames(
        'inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/80 text-fg-muted ring-1 ring-inset ring-line/20 transition-colors hover:text-accent hover:ring-accent/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        className,
      )}
      onClick={toggleTheme}
      suppressHydrationWarning
      type="button">
      <SunIcon aria-hidden="true" className="hidden h-5 w-5 dark:block" />
      <MoonIcon aria-hidden="true" className="h-5 w-5 dark:hidden" />
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';
export default ThemeToggle;
