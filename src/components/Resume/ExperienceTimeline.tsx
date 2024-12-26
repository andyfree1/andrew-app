import React from 'react';
import { Calendar } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Hilton Grand Vacations',
    role: 'Sales Executive',
    period: '2021-Present',
    highlights: [
      'Spearheaded AI integration initiatives',
      'Implemented cutting-edge CRM systems',
      'Leveraged machine learning for sales optimization',
      'Exceeded sales targets consistently'
    ]
  },
  {
    company: 'Wyndham Worldwide',
    role: 'Sales Executive',
    period: '2014-2021',
    highlights: [
      'President\'s Club and Elite Club member',
      'Certified sales trainer',
      'Integrated AI-driven CRM systems'
    ]
  },
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
];

export default function ExperienceTimeline() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20" />
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ experience, index }: { experience: any; index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div
      ref={ref}
      className={`relative mb-12 ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'} 
        transform transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
    >
      <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className="w-1/2 px-6">
          <div className="glass p-6 rounded-xl hover-card">
            <h3 className="text-xl font-bold text-white mb-2">{experience.company}</h3>
            <p className="text-white/80 mb-1">{experience.role}</p>
            <p className="text-white/60 mb-4">{experience.period}</p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              {experience.highlights.map((highlight: string, i: number) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}