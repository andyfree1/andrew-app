import { useState, useEffect } from 'react';

export function useTypingEffect(text: string, speed: number = 50) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setIsComplete(false);
    setDisplayedText('');

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text[i]);
        i++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayedText, isComplete };
}