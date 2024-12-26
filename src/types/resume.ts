export type Role = 'tech' | 'sales';

export interface Metric {
  label: string;
  value: string;
  description: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  category: string;
  url?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}