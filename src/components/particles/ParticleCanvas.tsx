import React, { useRef } from 'react';
import { useParticleAnimation } from '../../hooks/useParticleAnimation';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleAnimation(canvasRef);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}