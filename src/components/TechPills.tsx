import {FC, memo} from 'react';

const TechPills: FC<{items: string[]}> = memo(({items}) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map(item => (
        <li
          className="rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 font-mono text-[11px] text-accent"
          key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
});

TechPills.displayName = 'TechPills';
export default TechPills;
