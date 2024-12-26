import React from 'react';
import { Role } from '../../../types/resume';

interface RoleSelectorProps {
  activeRole: Role;
  onRoleChange: (role: Role) => void;
}

export default function RoleSelector({ activeRole, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="flex justify-center gap-4">
      <RoleButton 
        role="tech"
        active={activeRole === 'tech'}
        onClick={() => onRoleChange('tech')}
      >
        Creative Tech
      </RoleButton>
      <RoleButton 
        role="sales"
        active={activeRole === 'sales'}
        onClick={() => onRoleChange('sales')}
      >
        Sales Excellence
      </RoleButton>
    </div>
  );
}

interface RoleButtonProps {
  role: Role;
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

function RoleButton({ active, onClick, children }: RoleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full transition-all ${
        active 
          ? 'bg-white text-primary-dark' 
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      {children}
    </button>
  );
}