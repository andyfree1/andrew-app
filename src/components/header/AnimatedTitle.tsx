import React from 'react';

export default function AnimatedTitle() {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
      <span className="relative inline-block">
        Andrew Freeman
        <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/0 via-primary-light/30 to-primary-light/0 blur-sm animate-shimmer" />
      </span>
    </h1>
  );
}