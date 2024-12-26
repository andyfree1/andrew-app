import React from 'react';
import ParticleCanvas from './ParticleCanvas';
import GradientBackground from './GradientBackground';
import MeshOverlay from './MeshOverlay';

export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <GradientBackground />
      <MeshOverlay />
      <ParticleCanvas />
    </div>
  );
}