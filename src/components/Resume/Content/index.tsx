import React from 'react';
import RoleSelector from './RoleSelector';
import TypingContent from './TypingContent';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import { useRoleState } from '../../../hooks/useRoleState';

export default function ResumeContent() {
  const { activeRole, switchRole } = useRoleState();

  return (
    <div className="space-y-20">
      <RoleSelector activeRole={activeRole} onRoleChange={switchRole} />
      <TypingContent role={activeRole} />
      <Experience role={activeRole} />
      <Skills role={activeRole} />
      <Projects role={activeRole} />
    </div>
  );
}