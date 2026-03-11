import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CROUSLogos from './CROUSLogos';
import DavidLaChanceLetters from './DavidLaChanceLetters';

import './GameUnlocked.css';

interface ScrabbleWordProps {
  word: string;
  delay?: number;
}

const ScrabbleWord = ({ word, delay = 0 }: ScrabbleWordProps) => {
  const letters = word.split('');

  return (
    <motion.div 
      className="scrabble-word"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
    >
      {letters.map((letter, index) => (
        <motion.div
          key={index}
          className="scrabble-tile"
          initial={{ opacity: 0, y: -50, rotate: -180 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{
            delay: delay + index * 0.1,
            duration: 0.6,
            type: "spring",
            damping: 15,
            stiffness: 100,
          }}
          whileHover={{ 
            scale: 1.2,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
        >
          <div className="tile-front">
            <div className="tile-letter">{letter}</div>
            <div className="tile-value">{Math.floor(Math.random() * 5) + 1}</div>
          </div>
          <div className="tile-shadow" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const GameUnlocked = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 1000);
    
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <div className="game-unlocked-container">
      <CROUSLogos />
      <DavidLaChanceLetters />
      
      <div className="game-content-wrapper">
        {/* Titre explosif */}
        <motion.div
          className="explosive-title"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            damping: 15,
            stiffness: 200,
            duration: 0.8
          }}
        >
          <h1>🎊 GAME DÉBLOQUÉE! 🎊</h1>
        </motion.div>

        {/* Sous-titre animé */}
        <motion.div
          className="subtitle-animated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="congrats-text">
              TROP COOL FRÉROT/FRÉROTTE! 🚀
          </p>
          <p className="message-text">
            Tu viens d'entrer dans la zone VIP du Scrabble CROUSSEUX
          </p>
        </motion.div>

        {/* Mots en lettres Scrabble */}
        <div className="scrabble-words-container">
          <ScrabbleWord word="MÉGA" delay={0.8} />
          <ScrabbleWord word="COOL" delay={1.2} />
        </div>

        {/* Message apparaissant */}
        {showMessage && (
          <motion.div
            className="unlocked-message"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="message-bubble">
               <p className="bubble-text">
                  GO DM David la chance sur WhatsApp 👆📱
              </p>
            </div>
          </motion.div>
        )}



        {/* Effets décoratifs */}
        <motion.div
          className="confetti-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="confetti"
              initial={{ 
                y: -100,
                x: Math.random() * 100 - 50,
                rotate: 0,
                opacity: 0 
              }}
              animate={{ 
                y: 800,
                rotate: 360,
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                delay: 2 + i * 0.1,
                duration: 3,
                opacity: { times: [0, 0.1, 0.9, 1], duration: 3 }
              }}
              style={{
                left: `${Math.random() * 100}%`,
                background: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96e6a1', '#feca57'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </motion.div>

        {/* Bouton retour */}
        <motion.div
          className="back-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <p className="back-text">
             💫 Prépare tes meilleurs words!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GameUnlocked;