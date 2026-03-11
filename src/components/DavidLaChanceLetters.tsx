import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './ScrabbleLetters.css';

interface LetterProps {
  char: string;
  x: number;
  y: number;
  delay: number;
  size: number;
}

const DavidLaChanceLetter = ({ char, x, y, delay, size }: LetterProps) => {
  return (
    <motion.div
      className="scrabble-letter"
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 1,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        rotate: {
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }
      }}
      whileHover={{ 
        scale: 1.5,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.4 }
      }}
    >
      <div className="letter-front">
        <div className="letter-main" style={{ 
          fontSize: `${size * 0.5}px`,
          color: char === ' ' ? 'transparent' : '#2c3e50'
        }}>
          {char === ' ' ? '·' : char}
        </div>
      </div>
      <div className="letter-shadow" />
    </motion.div>
  );
};

const DavidLaChanceLetters = () => {
  const [letters, setLetters] = useState<Array<{
    char: string;
    x: number;
    y: number;
    delay: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const text = "David La Chance";
      const chars = text.split('');
      const newLetters = chars.map((char, _index) => ({
        char,
        x: Math.random() * 80 + 10, // 10% to 90%
        y: Math.random() * 80 + 10,
        delay: Math.random() * 2,
        size: 30 + Math.random() * 40, // 30px to 70px
      }));
      setLetters(newLetters);
    }, 0);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scrabble-letters-container">
      {letters.map((letter, _index) => (
        <DavidLaChanceLetter
          key={_index}
          char={letter.char}
          x={letter.x}
          y={letter.y}
          delay={letter.delay}
          size={letter.size}
        />
      ))}
    </div>
  );
};

export default DavidLaChanceLetters;