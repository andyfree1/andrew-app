import React from 'react';

export default function Description() {
  return (
    <div className="text-xl lg:text-2xl text-[#A5D7E8] font-light max-w-2xl mx-auto leading-relaxed">
      <span>
        Pioneering the intersection of Sales, Technology, and Entertainment through{' '}
        <span className="relative inline-block px-2 group">
          <span>AI Innovation</span>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#A5D7E8]/50 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
        </span>
      </span>
    </div>
  );
}