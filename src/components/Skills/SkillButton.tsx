import React from 'react';
import { ExternalLink } from 'lucide-react';

interface SkillButtonProps {
  name: string;
  url: string;
  color?: string;
  textColor?: string;
}

export default function SkillButton({ name, url, color = '#1E3D59', textColor = 'white' }: SkillButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (!url) {
      e.preventDefault();
      return;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      <span>{name}</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  );
}