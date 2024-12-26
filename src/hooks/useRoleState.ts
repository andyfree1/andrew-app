import { useState } from 'react';
import type { Role } from '../types/resume';

export function useRoleState(initialRole: Role = 'tech') {
  const [activeRole, setActiveRole] = useState<Role>(initialRole);
  
  const switchRole = (role: Role) => {
    setActiveRole(role);
  };

  return {
    activeRole,
    switchRole
  };
}