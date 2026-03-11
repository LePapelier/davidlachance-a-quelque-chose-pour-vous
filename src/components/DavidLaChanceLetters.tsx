import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './ScrabbleLetters.css';

const FRENCH_SCRABBLE_VALUES: Record<string, number> = {
  A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 10,
  L: 1, M: 2, N: 1, O: 1, P: 3, Q: 8, R: 1, S: 1, T: 1, U: 1, V: 4,
  W: 10, X: 10, Y: 10, Z: 10,
};

const MAX_DRIFT_X = 80;
const MAX_DRIFT_Y = 60;
const MIN_DRIFT_DURATION = 10;
const DRIFT_DURATION_RANGE = 8;

const normalizeChar = (char: string): string =>
  char
    .toUpperCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

interface LetterProps {
  char: string;
  value: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  driftX: number;
  driftY: number;
  driftDuration: number;
}

const DavidLaChanceLetter = ({ char, value, x, y, delay, size, driftX, driftY, driftDuration }: LetterProps) => {
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
        x: [0, driftX, 0, -driftX, 0],
        y: [0, driftY, 0, -driftY, 0],
        rotate: [0, 3, -3, 0],
      }}
      transition={{
        delay,
        opacity: { duration: 0.6 },
        scale: { duration: 0.6 },
        x: {
          duration: driftDuration,
          repeat: Infinity,
          ease: "easeInOut",
        },
        y: {
          duration: driftDuration * 1.3,
          repeat: Infinity,
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
        <div className="letter-main" style={{ fontSize: `${size * 0.5}px` }}>
          {char}
        </div>
        <div className="letter-value">{value}</div>
      </div>
      <div className="letter-shadow" />
    </motion.div>
  );
};

const DavidLaChanceLetters = () => {
  const [letters, setLetters] = useState<Array<{
    char: string;
    value: number;
    x: number;
    y: number;
    delay: number;
    size: number;
    driftX: number;
    driftY: number;
    driftDuration: number;
  }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const text = "DAVID LA CHANCE";
      const chars = text.split('').filter((c) => c !== ' ');
      const newLetters = chars.map((char) => {
        const normalized = normalizeChar(char);
        return {
          char: normalized,
          value: FRENCH_SCRABBLE_VALUES[normalized] ?? 0,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          delay: Math.random() * 2,
          size: 40 + Math.random() * 30,
          driftX: (Math.random() - 0.5) * MAX_DRIFT_X * 2,
          driftY: (Math.random() - 0.5) * MAX_DRIFT_Y * 2,
          driftDuration: MIN_DRIFT_DURATION + Math.random() * DRIFT_DURATION_RANGE,
        };
      });
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
          value={letter.value}
          x={letter.x}
          y={letter.y}
          delay={letter.delay}
          size={letter.size}
          driftX={letter.driftX}
          driftY={letter.driftY}
          driftDuration={letter.driftDuration}
        />
      ))}
    </div>
  );
};

export default DavidLaChanceLetters;