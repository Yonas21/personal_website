import {ArrowUpRightIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo} from 'react';

import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import Section from '../Layout/Section';
import SectionHeading from '../SectionHeading';
import TechPills from '../TechPills';

const Portfolio: FC = memo(() => {
  return (
    <Section className="scroll-mt-28" sectionId={SectionId.Portfolio}>
      <SectionHeading
        description="Most of the systems I ship live in private employer repos. These writeups are the public record. I will walk a hiring team through architecture, tradeoffs, and code on a call."
        index="03"
        title="Case studies"
      />
      <div className="flex flex-col gap-6">
        {portfolioItems.map((item, index) => (
          <ProjectCard item={item} key={`${item.title}-${index}`} />
        ))}
      </div>
    </Section>
  );
});

const ProjectCard: FC<{item: PortfolioItem}> = memo(({item}) => {
  const {title, subtitle, kind, problem, description, result, url, urlLabel, image, technologies} = item;

  const body = (
    <>
      {image && (
        <div className="mb-5 overflow-hidden rounded-xl">
          <Image alt={title} className="h-40 w-full object-cover" placeholder="blur" src={image} />
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <div>
          {kind && <p className="font-mono text-[11px] tracking-wide text-fg-subtle">{kind}</p>}
          <p className="mt-1 font-mono text-[11px] tracking-wide text-accent">{subtitle}</p>
          <h3 className="mt-1 font-serif text-2xl text-fg group-hover:text-accent-hover">{title}</h3>
        </div>
        {url && <ArrowUpRightIcon className="mt-1 h-4 w-4 shrink-0 text-fg-subtle group-hover:text-accent-hover" />}
      </div>
      {problem && (
        <p className="mt-4 text-sm leading-relaxed text-fg-muted">
          <span className="font-medium text-fg">Problem. </span>
          {problem}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-fg-muted">
        {problem && <span className="font-medium text-fg">What I did. </span>}
        {description}
      </p>
      {result && (
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">
          <span className="font-medium text-fg">Result. </span>
          {result}
        </p>
      )}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <TechPills items={technologies} />
        {url ? (
          <span className="font-mono text-[11px] text-accent">{urlLabel ?? 'View'}</span>
        ) : (
          <span className="font-mono text-[11px] text-fg-subtle">Private employer repo</span>
        )}
      </div>
    </>
  );

  const cardClassName =
    'group block rounded-2xl border border-line/10 bg-elevated/90 p-6 transition-colors hover:border-accent/20 hover:bg-surface/80';

  if (url) {
    return (
      <a className={cardClassName} href={url} rel="noreferrer" target="_blank">
        {body}
      </a>
    );
  }

  return <article className={cardClassName}>{body}</article>;
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;
