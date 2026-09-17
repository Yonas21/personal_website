import {FC, memo} from 'react';

import {SectionId, testimonial} from '../../data/data';
import {Testimonial} from '../../data/dataDef';
import QuoteIcon from '../Icon/QuoteIcon';
import Section from '../Layout/Section';
import SectionHeading from '../SectionHeading';

const Testimonials: FC = memo(() => {
  const {testimonials} = testimonial;

  if (!testimonials.length) {
    return null;
  }

  return (
    <Section className="scroll-mt-28" sectionId={SectionId.Testimonials}>
      <SectionHeading index="04" title="References" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {testimonials.map((item, index) => (
          <TestimonialCard key={`${item.name}-${index}`} testimonial={item} />
        ))}
      </div>
    </Section>
  );
});

const TestimonialCard: FC<{testimonial: Testimonial}> = memo(({testimonial: {text, name, role}}) => (
  <figure className="flex h-full flex-col rounded-2xl border border-line/10 bg-elevated/90 p-5">
    <QuoteIcon className="h-5 w-5 text-accent" />
    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">“{text}”</blockquote>
    <figcaption className="mt-5">
      <p className="text-sm font-medium text-fg">{name}</p>
      {role && <p className="text-xs text-fg-subtle">{role}</p>}
    </figcaption>
  </figure>
));

Testimonials.displayName = 'Testimonials';
export default Testimonials;
