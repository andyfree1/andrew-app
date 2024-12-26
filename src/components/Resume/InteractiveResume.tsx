import React from 'react';
import Background from './Background';
import ResumeHeader from './ResumeHeader';
import RoleSelector from './RoleSelector';
import ResumeContent from './ResumeContent';
import AIChat from './AIChat';
import { useRoleState } from '../../hooks/useRoleState';

export default function InteractiveResume() {
  const { activeRole, switchRole } = useRoleState();

  return (
    <section className="relative min-h-screen py-20">
      <Background />
      <div className="container relative z-10 mx-auto px-6 space-y-12">
        <ResumeHeader />
        <RoleSelector activeRole={activeRole} onRoleChange={switchRole} />
        <ResumeContent role={activeRole} />
      </div>
      <AIChat />
    </section>
  );
}