import React from 'react';
import AnimatedTitle from './AnimatedTitle';
import AnimatedRole from './AnimatedRole';

export default function AnimatedHeader() {
  return (
    <div className="text-center mb-12">
      <AnimatedTitle />
      <AnimatedRole />
    </div>
  );
}