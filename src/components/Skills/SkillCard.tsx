import React from 'react';
import type { Skill } from '../../types/skills';
import SkillTechnologies from './SkillTechnologies';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="relative group">
      <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-xl blur-xl animate-pulse-glow`} />
      
      <div className="relative bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-card">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.5s' }}>
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ backgroundColor: skill.color }}
          >
            <skill.icon className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="font-semibold mb-2 text-white">{skill.name}</h3>
          <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden mb-4">
            <div
              className="h-2.5 rounded-full transition-all duration-1000 animate-shimmer"
              style={{
                width: `${skill.percentage}%`,
                backgroundColor: skill.color
              }}
            />
          </div>
          <SkillTechnologies technologies={skill.technologies} />
        </div>
      </div>
    </div>
  );
}