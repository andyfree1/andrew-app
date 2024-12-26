export interface Technology {
  name: string;
  url: string;
  color?: string;
  textColor?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon: any; // LucideIcon type
  color: string;
  gradient: string;
  technologies: Technology[];
}