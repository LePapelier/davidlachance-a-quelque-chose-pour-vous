import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { scrabbleLetters } from './scrabbleData';
import './ScrabbleLetters.css';

interface LetterProps {
  letter: string;
  value: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  duration: number;
}

const ScrabbleLetter = ({ letter, value, x, y, delay, size, duration }: LetterProps) => {
  const [isHovered, setIsHovered] = useState(false);

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
      initial={{ opacity: 0, y: -100, rotate: -180 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotate: 0,
        scale: isHovered ? 1.3 : 1,
      }}
      transition={{
        delay,
        duration,
        type: "spring",
        damping: 15,
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.3,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="letter-front">
        <div className="letter-main">{letter}</div>
        <div className="letter-value">{value}</div>
      </div>
      <div className="letter-shadow" />
    </motion.div>
  );
};

interface ScrabbleLettersProps {
  count?: number;
}

const ScrabbleLetters = ({ count = 10 }: ScrabbleLettersProps) => {
  const [letters, setLetters] = useState<Array<{
    letter: string;
    value: number;
    x: number;
    y: number;
    delay: number;
    size: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newLetters = [];
      for (let i = 0; i < count; i++) {
        const letterData = scrabbleLetters[Math.floor(Math.random() * scrabbleLetters.length)];
        newLetters.push({
          ...letterData,
          x: Math.random() * 90 + 5, // 5% to 95%
          y: Math.random() * 90 + 5,
          delay: Math.random() * 1.5,
          size: 40 + Math.random() * 30, // 40px to 70px
          duration: 0.8 + Math.random() * 0.5,
        });
      }
      setLetters(newLetters);
    }, 0);
    
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="scrabble-letters-container">
      {letters.map((letter, index) => (
        <ScrabbleLetter
          key={index}
          letter={letter.letter}
          value={letter.value}
          x={letter.x}
          y={letter.y}
          delay={letter.delay}
          size={letter.size}
          duration={letter.duration}
        />
      ))}
      
      {/* Background floating letters */}
      <motion.div
        className="floating-letters-bg"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 40, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        <div className="bg-letter">S</div>
        <div className="bg-letter">C</div>
        <div className="bg-letter">R</div>
        <div className="bg-letter">A</div>
        <div className="bg-letter">B</div>
        <div className="bg-letter">B</div>
        <div className="bg-letter">L</div>
        <div className="bg-letter">E</div>
      </motion.div>
    </div>
  );
};

export default ScrabbleLetters;