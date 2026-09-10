import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';
import ThemeToggle from '../ThemeToggle';

export const headerID = 'headerNav';

const navItems = [
  {id: SectionId.About, label: 'About'},
  {id: SectionId.Resume, label: 'Experience'},
  {id: SectionId.Portfolio, label: 'Work'},
  {id: SectionId.Contact, label: 'Contact'},
] as const;

const Header: FC = memo(() => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(() => navItems.map(item => item.id), []);

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <div className="pointer-events-none fixed top-0 z-50 h-px w-full" id={headerID} />
      <MobileNav currentSection={currentSection} />
    </>
  );
});

const MobileNav: FC<{currentSection: SectionId | null}> = memo(({currentSection}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(open => !open);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-line/10 bg-page/80 px-5 py-4 backdrop-blur-md lg:hidden">
        <a className="font-serif text-lg text-fg" href={`/#${SectionId.Hero}`}>
          YA
        </a>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            aria-label="Open menu"
            className="rounded-md p-2 text-fg hover:bg-fg/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={toggleOpen}>
            <Bars3BottomRightIcon className="h-6 w-6" />
          </button>
        </div>
      </header>
      <Transition.Root as={Fragment} show={isOpen}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-page/80" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-200 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full">
            <Dialog.Panel className="fixed inset-y-0 right-0 flex w-72 flex-col bg-elevated px-6 py-6 shadow-glow">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-serif text-xl text-fg">Menu</span>
                <button aria-label="Close menu" className="rounded-md p-2 text-fg-muted hover:text-fg" onClick={close}>
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-y-2">
                {navItems.map(item => (
                  <NavItem current={item.id === currentSection} item={item} key={item.id} onClick={close} />
                ))}
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
});

const NavItem: FC<{
  item: (typeof navItems)[number];
  current: boolean;
  onClick?: () => void;
}> = memo(({item, current, onClick}) => {
  return (
    <Link
      className={classNames(
        'rounded-md px-3 py-2 font-mono text-sm tracking-wide transition-colors',
        current ? 'bg-accent/10 text-accent' : 'text-fg-muted hover:text-fg',
      )}
      href={`/#${item.id}`}
      onClick={onClick}>
      {item.label}
    </Link>
  );
});

Header.displayName = 'Header';
export default Header;
