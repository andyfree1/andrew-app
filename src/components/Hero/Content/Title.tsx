import React from 'react';

export default function Title() {
  return (
    <h1 className="text-7xl lg:text-8xl font-bold text-white relative">
      <span className="relative inline-block">
        Andrew Freeman
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/0 via-primary-light/30 to-primary-light/0 blur-sm animate-shimmer" />
      </span>
    </h1>
  );
}