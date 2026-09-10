import {ArrowUpRightIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import TechPills from '../../TechPills';

const TimelineItemView: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, company, location, content, href, technologies} = item;

  return (
    <article className="group relative rounded-2xl border border-transparent p-5 transition-colors hover:border-line/10 hover:bg-surface/40">
      <p className="font-mono text-[11px] tracking-wide text-fg-subtle">{date}</p>
      <h3 className="mt-2 font-serif text-2xl text-fg">
        {href ? (
          <a
            className="inline-flex items-center gap-1 hover:text-accent-hover"
            href={href}
            rel="noreferrer"
            target="_blank">
            {title}
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        ) : (
          title
        )}
      </h3>
      <p className="mt-1 text-sm text-fg-muted">
        {company}
        <span className="text-fg-subtle"> · {location}</span>
      </p>
      <div className="prose prose-sm mt-4 max-w-none text-fg-muted prose-p:leading-relaxed prose-li:marker:text-accent">
        {content}
      </div>
      {technologies && technologies.length > 0 && (
        <div className="mt-4">
          <TechPills items={technologies} />
        </div>
      )}
    </article>
  );
});

TimelineItemView.displayName = 'TimelineItem';
export default TimelineItemView;
