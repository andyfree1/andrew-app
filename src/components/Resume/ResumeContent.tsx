import React from 'react';
import MetricsGrid from './MetricsGrid';
import SkillsGrid from './SkillsGrid';
import ExperienceTimeline from './ExperienceTimeline';
import ProjectsGrid from './ProjectsGrid';
import { Role } from '../../types/resume';

interface ResumeContentProps {
  role: Role;
}

export default function ResumeContent({ role }: ResumeContentProps) {
  return (
    <div className="space-y-20">
      <MetricsGrid role={role} />
      <SkillsGrid role={role} />
      <ExperienceTimeline role={role} />
      <ProjectsGrid role={role} />
    </div>
  );
}