import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import ScrabbleLetters from './ScrabbleLetters';
import CROUSLogos from './CROUSLogos';
import GameUnlocked from './GameUnlocked';
import './MainInvitation.css';

const MainInvitation = () => {
  const [gameUnlocked, setGameUnlocked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenClick = () => {
    setLoading(true);
    // Petite vibration pour l'effet tactile
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
    // Faux chargement de 5 secondes
    setTimeout(() => {
      setGameUnlocked(true);
      setLoading(false);
    }, 5000);
  };

  const LoadingScreen = () => {
    return (
      <div className="main-container">
        <CROUSLogos />
        <div className="content-wrapper">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 900,
              background: 'linear-gradient(90deg, #ff00cc, #3333ff, #00ccff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '2rem',
            }}
          >
            🚀 CHARGEMENT DE LA GAME...
          </motion.h1>
          <motion.div 
            style={{
              width: '100%',
              height: '20px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '10px',
              overflow: 'hidden',
              marginTop: '2rem',
            }}
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5, ease: 'linear' }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #ff00cc, #3333ff, #00ccff)',
                borderRadius: '10px',
              }}
            />
          </motion.div>
          <p style={{
            marginTop: '1rem',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '1rem',
            fontStyle: 'italic',
          }}>
            Spoiler: ça va être trop ouf frérot 🔥
          </p>
        </div>
      </div>
    );
  };
  if (loading) {
    return <LoadingScreen />;
  }

  if (gameUnlocked) {
    return <GameUnlocked />;
  }



  return (
    <div className="main-container">
      <CROUSLogos />
      <ScrabbleLetters count={30} />
      
      <div className="content-wrapper">
        <AnimatedTitle />
        
        <motion.div
          className="subtitle-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="subtitle">
            🎯 Une invitation 100% CROUSSEUSE pour une game de Scrabble légendaire
          </p>

        </motion.div>

        <motion.button
          className="open-button"
          onClick={handleOpenClick}
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="button-text">🔥 DÉBLOQUER LA GAME</span>
          <span className="button-hint">(Spoiler: c'est trop ouf frérot 🚀)</span>
        </motion.button>

        <motion.div
          className="extra-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <p className="instruction">
            🤯 <strong>Pro tip CROUSSEUX :</strong> Le mot "KA" vaut 11 points
          </p>
          <div className="fun-facts">
            <motion.div 
              className="fun-fact"
              whileHover={{ scale: 1.05 }}
            >
               🧠 <strong>Fun fact :</strong> Le Scrabble stimule les fonctions neuro cognitives
            </motion.div>
            <motion.div 
              className="fun-fact"
              whileHover={{ scale: 1.05 }}
            >
              📈 <strong>Record :</strong> 505 points - David La Chance t'invite au RU si tu le bats 🍽️
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="footer-note">
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          ⚡ David La Chance te kiffe pour une partie trop stylée fréro !
        </motion.p>
      </div>
    </div>
  );
};

export default MainInvitation;