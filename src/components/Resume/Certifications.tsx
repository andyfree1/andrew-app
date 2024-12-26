import React from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Apple Certified T3 Trainer',
    issuer: 'Apple Inc.',
    year: '2023'
  },
  {
    title: 'Advanced AI Implementation',
    issuer: 'NVIDIA',
    year: '2023'
  },
  {
    title: 'Sales Leadership Excellence',
    issuer: 'Hilton Grand Vacations',
    year: '2022'
  }
];

export default function Certifications() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white text-center mb-8">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert) => (
          <div key={cert.title} className="glass p-6 rounded-xl hover-card">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-white" />
              <h4 className="text-lg font-semibold text-white">{cert.title}</h4>
            </div>
            <div className="text-white/80">
              <p>{cert.issuer}</p>
              <p className="text-sm text-white/60">{cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}