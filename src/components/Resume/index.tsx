import React from 'react';
import ParticleBackground from '../particles';
import AnimatedHeader from '../header';
import ResumeContent from './Content';
import AIChat from './AIChat';

export default function Resume() {
  return (
    <section className="relative min-h-screen py-20">
      <ParticleBackground />
      <div className="container relative z-10 mx-auto px-6">
        <AnimatedHeader />
        <ResumeContent />
      </div>
      <AIChat />
    </section>
  );
}