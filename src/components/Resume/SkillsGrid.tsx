import React from 'react';
import { ExternalLink } from 'lucide-react';
import { skills } from '../../data/skills-data';
import { cn } from '../../utils/classNames';

export default function SkillsGrid() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-white text-center mb-8">Core Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="glass p-6 rounded-xl hover-card">
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center" 
                style={{ backgroundColor: skill.color }}
              >
                <skill.icon className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <TechnologyButton
                  key={tech.name}
                  name={tech.name}
                  url={tech.url}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface TechnologyButtonProps {
  name: string;
  url: string;
}

function TechnologyButton({ name, url }: TechnologyButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-between",
        "px-3 py-1.5 rounded-lg",
        "bg-white/10 text-white/80",
        "hover:bg-white/20 hover:text-white",
        "transition-all duration-200"
      )}
    >
      <span>{name}</span>
      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
    </a>
  );
}