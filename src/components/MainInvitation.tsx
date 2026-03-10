import { motion } from 'framer-motion';
import AnimatedTitle from './AnimatedTitle';
import ScrabbleLetters from './ScrabbleLetters';
import CROUSLogos from './CROUSLogos';
import './MainInvitation.css';

const MainInvitation = () => {
  const handleOpenClick = () => {
    alert('🎉 WESH! Bienvenue dans le game Scrabblr CROUSSEUX! 🚀\n\nPrépare ton cerveau, ta swag et tes meilleurs mots!\n\n#TeamCROUS #ScrabbleGang');
    // Ici on pourrait rediriger vers le jeu ou afficher plus de contenu
  };

  return (
    <div className="main-container">
      <CROUSLogos />
      <ScrabbleLetters count={15} />
      
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
          <p className="fun-text">
            👑 Prépare tes meilleurs mots, ton mindset de champion et ta vibe la plus décalée !
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
            🤯 <strong>Pro tip CROUSSEUX :</strong> Le mot "QI" vaut 11 points, parfait pour flex en amphi !
          </p>
          <div className="fun-facts">
            <motion.div 
              className="fun-fact"
              whileHover={{ scale: 1.05 }}
            >
              🎮 <strong>Fun fact :</strong> Le Scrabble &gt; Netflix pendant les TP
            </motion.div>
            <motion.div 
              className="fun-fact"
              whileHover={{ scale: 1.05 }}
            >
              📈 <strong>Record :</strong> 15 lettres = un kebab gratuit offert
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