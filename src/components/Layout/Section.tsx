import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}>
> = memo(({children, sectionId, noPadding = false, className}) => {
  return (
    <section className={classNames(className, {'py-16 lg:py-24': !noPadding})} id={sectionId}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';
export default Section;
