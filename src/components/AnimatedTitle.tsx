import { motion } from 'framer-motion';

const AnimatedTitle = () => {
  const titleText = "David La Chance vous propose une partie de scrabble";
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -90 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      }
    },
  };

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const words = titleText.split(' ');

  return (
    <motion.div 
      className="title-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="title-text"
        whileHover={{ scale: 1.02 }}
      >
        {words.map((word, wordIndex) => (
          <motion.span 
            key={wordIndex} 
            className="word"
            variants={wordVariants}
            style={{ display: 'inline-block', marginRight: '0.3em' }}
          >
            {word.split('').map((letter, letterIndex) => (
              <motion.span
                key={`${wordIndex}-${letterIndex}`}
                className="letter"
                variants={letterVariants}
                whileHover={{ 
                  scale: 1.3, 
                  y: -5,
                  rotateZ: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  display: 'inline-block',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: '800',
                  color: '#2c3e50',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            <span style={{ marginRight: '0.3em' }}> </span>
          </motion.span>
        ))}
      </motion.div>
      
      <motion.div
        className="title-decoration"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
        }}
        style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '60px',
          height: '60px',
          background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
          borderRadius: '50%',
          filter: 'blur(10px)',
          opacity: 0.3,
          zIndex: -1,
        }}
      />
      
      <motion.div
        className="title-highlight"
        animate={{ 
          x: ['-100%', '200%'],
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '50%',
          height: '4px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
          transform: 'translateY(-50%)',
          zIndex: -1,
        }}
      />
    </motion.div>
  );
};

export default AnimatedTitle;