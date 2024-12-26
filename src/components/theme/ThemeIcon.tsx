import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeIconProps {
  darkMode: boolean;
}

export default function ThemeIcon({ darkMode }: ThemeIconProps) {
  return darkMode ? (
    <Moon className="w-5 h-5" />
  ) : (
    <Sun className="w-5 h-5" />
  );
}