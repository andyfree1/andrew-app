import React from 'react';
import { Role } from '../../../types/resume';
import { experiences } from '../../../data/resume-data';
import Section from '../shared/Section';
import Card from '../shared/Card';
import { Calendar } from 'lucide-react';

interface ExperienceProps {
  role: Role;
}

export default function Experience({ role }: ExperienceProps) {
  return (
    <Section title="Professional Experience">
      <div className="max-w-3xl mx-auto space-y-6">
        {experiences[role].map((exp, index) => (
          <Card key={index}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                <p className="text-white/80">{exp.role}</p>
                <p className="text-white/60 text-sm">{exp.period}</p>
              </div>
            </div>
            <ul className="space-y-2 text-white/70">
              {exp.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-white/40" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}