import React from 'react';

interface LogoProps {
  className?: string;
}

export default function PressPlayLogo({ className = '' }: LogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-2">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            rx="6"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M20.5 16L13.5 20.3301L13.5 11.6699L20.5 16Z"
            fill="currentColor"
          />
        </svg>
        <h1 className="text-4xl font-bold text-white tracking-tight">
          PRESS PLAY
        </h1>
      </div>
      <div className="text-lg text-[#A5D7E8] tracking-widest mt-2">
        JUST. PRESS. PLAY.
      </div>
    </div>
  );
}