import {FC, memo} from 'react';

import {SkillGroup as SkillGroupType} from '../../../data/dataDef';
import TechPills from '../../TechPills';

export const SkillGroup: FC<{skillGroup: SkillGroupType}> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-sm font-medium text-fg">{name}</h4>
      <TechPills items={skills} />
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';
