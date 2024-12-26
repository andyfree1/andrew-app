import React from 'react';
import { metrics } from '../../data/resume-data';
import type { Role } from '../../types/resume';

interface MetricsGridProps {
  role: Role;
}

export default function MetricsGrid({ role }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics[role].map((metric) => (
        <div key={metric.label} className="glass p-6 rounded-xl hover-card">
          <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
          <div className="text-lg font-semibold text-white/90 mb-1">{metric.label}</div>
          <div className="text-sm text-white/70">{metric.description}</div>
        </div>
      ))}
    </div>
  );
}