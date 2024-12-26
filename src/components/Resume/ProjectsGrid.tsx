import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../../data/resume-data';
import type { Role } from '../../types/resume';

interface ProjectsGridProps {
  role: Role;
}

export default function ProjectsGrid({ role }: ProjectsGridProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white text-center mb-8">Notable Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects[role].map((project) => (
          <div key={project.title} className="glass p-6 rounded-xl hover-card">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-white">{project.title}</h4>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
            <p className="text-white/80 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/10 text-white/70 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}