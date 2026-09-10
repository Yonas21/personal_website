import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-mono text-xs tracking-[0.24em] text-fg-subtle">{title.toUpperCase()}</h3>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
