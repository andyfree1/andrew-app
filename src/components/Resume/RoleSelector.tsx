import React from 'react';
import { Role } from '../../types/resume';

interface RoleSelectorProps {
  activeRole: Role;
  onRoleChange: (role: Role) => void;
}

export default function RoleSelector({ activeRole, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="flex justify-center gap-4 mb-12">
      <button
        onClick={() => onRoleChange('tech')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeRole === 'tech' 
            ? 'bg-white text-primary-dark' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Creative Tech
      </button>
      <button
        onClick={() => onRoleChange('sales')}
        className={`px-6 py-2 rounded-full transition-all ${
          activeRole === 'sales' 
            ? 'bg-white text-primary-dark' 
            : 'bg-white/10 text-white hover:bg-white/20'
        }`}
      >
        Sales Excellence
      </button>
    </div>
  );
}