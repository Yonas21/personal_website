import classNames from 'classnames';
import {FC, memo, useCallback, useMemo, useState} from 'react';

import {heroData, SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';
import Socials from '../Socials';
import ThemeToggle from '../ThemeToggle';

const navItems = [
  {id: SectionId.About, label: 'About'},
  {id: SectionId.Resume, label: 'Experience'},
  {id: SectionId.Portfolio, label: 'Work'},
  {id: SectionId.Contact, label: 'Contact'},
] as const;

const Hero: FC = memo(() => {
  const {name, title, description, actions} = heroData;
  const [currentSection, setCurrentSection] = useState<SectionId | null>(SectionId.About);
  const navSections = useMemo(() => navItems.map(item => item.id), []);

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <aside
      className="flex flex-col justify-between pt-28 lg:sticky lg:top-0 lg:max-h-screen lg:w-[42%] lg:py-24"
      id={SectionId.Hero}>
      <div>
        <p className="font-mono text-xs tracking-[0.28em] text-accent">BACKEND & FULL STACK SYSTEMS</p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-fg sm:text-6xl">{name}</h1>
        <p className="mt-3 text-lg text-fg-muted">{title}</p>
        <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {actions.map(({href, text, primary, download, Icon}) => (
            <a
              className={classNames(
                'inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                primary
                  ? 'bg-accent text-accent-fg hover:bg-accent-hover'
                  : 'bg-elevated text-fg ring-1 ring-inset ring-line/25 hover:text-accent hover:ring-accent/40',
              )}
              download={download}
              href={href}
              key={text}>
              {text}
              {Icon && <Icon className="h-4 w-4" />}
            </a>
          ))}
        </div>
        <nav aria-label="Primary" className="mt-14 hidden lg:block">
          <ul className="flex flex-col gap-4">
            {navItems.map(item => {
              const current = item.id === currentSection;
              return (
                <li key={item.id}>
                  <a
                    className={classNames(
                      'group flex items-center gap-4 font-mono text-xs tracking-[0.22em]',
                      current ? 'text-fg' : 'text-fg-subtle hover:text-fg',
                    )}
                    href={`/#${item.id}`}>
                    <span
                      className={classNames(
                        'h-px bg-current transition-all duration-300',
                        current ? 'w-12' : 'w-6 group-hover:w-10',
                      )}
                    />
                    {item.label.toUpperCase()}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="mt-12 flex items-center justify-between gap-4 pb-8 text-fg-muted lg:mt-0 lg:pb-0">
        <div className="flex items-center gap-1">
          <Socials />
        </div>
        <ThemeToggle className="hidden lg:inline-flex" />
      </div>
    </aside>
  );
});

Hero.displayName = 'Hero';
export default Hero;
