import {FC, memo} from 'react';

const SectionHeading: FC<{index: string; title: string}> = memo(({index, title}) => {
  return (
    <div className="mb-10 flex items-baseline gap-x-3">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="font-serif text-3xl text-fg sm:text-4xl">{title}</h2>
    </div>
  );
});

SectionHeading.displayName = 'SectionHeading';
export default SectionHeading;
