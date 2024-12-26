import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ResumeHeader() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-white mb-6">Professional Experience</h2>
      <div className="flex justify-center gap-6 text-white/80">
        <a href="mailto:andrew@pressplaylv.com" className="flex items-center gap-2 hover:text-white">
          <Mail className="w-4 h-4" />
          andrew@pressplaylv.com
        </a>
        <a href="tel:+17023214885" className="flex items-center gap-2 hover:text-white">
          <Phone className="w-4 h-4" />
          (702) 321-4885
        </a>
        <span className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Las Vegas, Nevada
        </span>
      </div>
    </div>
  );
}