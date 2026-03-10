import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import CROUSLogos from './CROUSLogos';
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
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowMessage(true), 1000);
    const timer2 = setTimeout(() => setShowWhatsApp(true), 2500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const whatsappMessage = encodeURIComponent("Salut David! 👋 Ça roule? J'ai débloqué la game Scrabblr CROUSSEUX et je suis chaud pour une partie légendaire! 🎮✨ Quand tu dis? #TeamCROUS #ScrabbleCrousseux");
  const whatsappLink = `https://wa.me/33600000000?text=${whatsappMessage}`;

  return (
    <div className="game-unlocked-container">
      <CROUSLogos />
      
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
            TROP COOL FRÉROT! 🚀
          </p>
          <p className="message-text">
            Tu viens d'entrer dans la zone VIP du Scrabble CROUSSEUX
          </p>
        </motion.div>

        {/* Mots en lettres Scrabble */}
        <div className="scrabble-words-container">
          <ScrabbleWord word="TROP" delay={0.8} />
          <ScrabbleWord word="COOL" delay={1.2} />
          <ScrabbleWord word="BRO" delay={1.6} />
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
                🎯 <strong>Mission accomplie!</strong> T'es maintenant officiellement un joueur CROUSSEUX certifié!
              </p>
              <p className="bubble-subtext">
                Prêt à défoncer le game avec tes meilleurs mots? 🔥
              </p>
            </div>
          </motion.div>
        )}

        {/* Section WhatsApp */}
        {showWhatsApp && (
          <motion.div
            className="whatsapp-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="whatsapp-card">
              <div className="whatsapp-header">
                <span className="whatsapp-icon">📱</span>
                <h2 className="whatsapp-title">GO DM DAVID LA CHANCE</h2>
              </div>
              
              <div className="whatsapp-content">
                <div className="finger-pointer">
                  <motion.div
                    className="finger-emoji"
                    animate={{ x: [0, 10, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      repeatDelay: 1
                    }}
                  >
                    👉
                  </motion.div>
                  <span className="phone-emoji">📱</span>
                </div>
                
                <p className="whatsapp-instruction">
                  Clique le bouton et envoie le message pré-rempli à David!
                </p>
                
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  <span className="button-icon">💬</span>
                  <span className="button-text">📲 DM SUR WHATSAPP</span>
                  <span className="button-subtext">(David t'attend frérot!)</span>
                </a>
                
                <div className="whatsapp-tips">
                  <p className="tip">
                    💡 <strong>Pro tip:</strong> Ajoute un petit "WESH!" au début pour flex ton style CROUSSEUX
                  </p>
                  <p className="tip">
                    ⏰ <strong>Best timing:</strong> Entre deux cours ou pendant la pause dej'
                  </p>
                </div>
              </div>
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
            💫 La game continue... Prépare tes meilleurs mots!
          </p>
          <motion.button
            className="back-button"
            onClick={() => window.location.reload()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🎮 Rejouer l'animation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default GameUnlocked;