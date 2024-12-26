import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import ThemeIcon from './ThemeIcon';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-200 
        bg-white/10 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-800/70
        text-gray-800 dark:text-white"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <ThemeIcon darkMode={darkMode} />
    </button>
  );
}