import { Metric, Experience, Project, Skill } from '../types/resume';

export const metrics: Record<string, Metric[]> = {
  tech: [
    {
      label: 'Projects Completed',
      value: '500+',
      description: 'Successful video and tech projects delivered'
    },
    {
      label: 'AI Integrations',
      value: '50+',
      description: 'Custom AI solutions implemented'
    },
    {
      label: 'Years Experience',
      value: '25+',
      description: 'In creative technology and production'
    }
  ],
  sales: [
    {
      label: 'Sales Volume',
      value: '$50M+',
      description: 'Annual sales revenue generated'
    },
    {
      label: 'Team Size',
      value: '100+',
      description: 'Sales professionals trained and managed'
    },
    {
      label: 'Success Rate',
      value: '95%',
      description: 'Client satisfaction and retention'
    }
  ]
};

export const experiences: Record<string, Experience[]> = {
  tech: [
    {
      company: 'Press Play Films',
      role: 'Owner/Director',
      period: '1997-Present',
      highlights: [
        'Founded successful video production company',
        'Manages end-to-end production workflow',
        'Creates content for major brands'
      ]
    }
  ],
  sales: [
    {
      company: 'Hilton Grand Vacations',
      role: 'Sales Executive',
      period: '2021-Present',
      highlights: [
        'Spearheaded AI integration initiatives',
        'Implemented cutting-edge CRM systems',
        'Exceeded sales targets consistently'
      ]
    }
  ]
};

export const skills: Record<string, Skill[]> = {
  tech: [
    {
      name: 'Video Production',
      proficiency: 95,
      category: 'Creative',
      url: 'https://www.adobe.com/creativecloud.html'
    }
  ],
  sales: [
    {
      name: 'Sales Leadership',
      proficiency: 90,
      category: 'Management',
      url: 'https://www.hilton.com/en/corporate/'
    }
  ]
};

export const projects: Record<string, Project[]> = {
  tech: [
    {
      title: 'AI-Powered Video Editor',
      description: 'Automated video editing platform using AI',
      tags: ['AI', 'Video Production', 'Automation'],
      link: 'https://github.com/example/ai-video-editor'
    }
  ],
  sales: [
    {
      title: 'Sales Analytics Platform',
      description: 'Real-time sales performance tracking system',
      tags: ['Analytics', 'CRM', 'AI'],
      link: 'https://example.com/sales-analytics'
    }
  ]
};