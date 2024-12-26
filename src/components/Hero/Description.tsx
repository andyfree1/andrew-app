import React from 'react';

export default function Description() {
  return (
    <div className="mb-12">
      <div className="text-xl lg:text-2xl text-[#A5D7E8] font-light max-w-2xl mx-auto leading-relaxed">
        Pioneering the intersection of Sales, Technology, and Entertainment through{' '}
        <span className="relative inline-block group">
          <span className="px-2">AI Innovation</span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A5D7E8]/50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </div>
    </div>
  );
}