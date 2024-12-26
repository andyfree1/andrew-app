import React from 'react';
import SkillButton from './SkillButton';
import { Technology } from '../../types/skills';

interface SkillTechnologiesProps {
  technologies: Technology[];
}

export default function SkillTechnologies({ technologies }: SkillTechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {technologies.map((tech) => (
        <SkillButton
          key={tech.name}
          name={tech.name}
          url={tech.url}
        />
      ))}
    </div>
  );
}