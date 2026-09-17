import {FC, memo} from 'react';

const SectionHeading: FC<{index: string; title: string; description?: string}> = memo(
  ({index, title, description}) => {
    return (
      <div className="mb-10">
        <div className="flex items-baseline gap-x-3">
          <span className="font-mono text-xs text-accent">{index}</span>
          <h2 className="font-serif text-3xl text-fg sm:text-4xl">{title}</h2>
        </div>
        {description && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg-muted">{description}</p>}
      </div>
    );
  },
);

SectionHeading.displayName = 'SectionHeading';
export default SectionHeading;
