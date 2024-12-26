import React from 'react';
import PressPlayLogo from '../Logo';

export default function Title() {
  return (
    <div className="relative mb-8">
      <PressPlayLogo className="animate-subtle-float" />
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-light/0 via-primary-light/30 to-primary-light/0 blur-sm animate-shimmer" />
    </div>
  );
}