import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CompanyButtonProps {
  name: string;
  url: string;
  color: string;
  textColor?: string;
}

export default function CompanyButton({ name, url, color, textColor = 'white' }: CompanyButtonProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 transition-transform hover:scale-105"
      style={{
        backgroundColor: color,
        color: textColor,
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontWeight: 500
      }}
    >
      {name}
      <ExternalLink className="w-4 h-4" />
    </a>
  );
}