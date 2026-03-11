import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CROUSLogos from "./CROUSLogos";
import DavidLaChanceLetters from "./DavidLaChanceLetters";

import "./GameUnlocked.css";

interface ScrabbleWordProps {
  word: string;
  delay?: number;
}

const normalizeLetter = (letter: string): string => {
  return letter
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
};

const getScrabbleValue = (letter: string): number => {
  const values: Record<string, number> = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 10,
    L: 1,
    M: 2,
    N: 1,
    O: 1,
    P: 3,
    Q: 8,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 10,
    X: 10,
    Y: 10,
    Z: 10,
  };
  const normalized = normalizeLetter(letter);
  return values[normalized] || 1;
};

const ScrabbleWord = ({ word, delay = 0 }: ScrabbleWordProps) => {
  const letters = word.split("");

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
            transition: { duration: 0.3 },
          }}
        >
          <div className="tile-front">
            <div className="tile-letter">{letter}</div>
            <div className="tile-value">{getScrabbleValue(letter)}</div>
          </div>
          <div className="tile-shadow" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

const getRainConfig = (width: number) => {
  const minWidth = 320;
  const maxWidth = 1920;

  // Clamp width between min and max
  const clampedWidth = Math.max(minWidth, Math.min(width, maxWidth));

  // Calculate proportion (0 to 1)
  const proportion = (clampedWidth - minWidth) / (maxWidth - minWidth);

  // Letter counts (proportional)
  const maxLetters = Math.floor(20 + proportion * 60); // 20-80
  const initialLetters = Math.floor(maxLetters * 0.5); // 50% of max
  const addPerInterval = Math.max(1, Math.floor(maxLetters / 40)); // 1-2

  // Sizes (proportional)
  const minSize = Math.floor(25 + proportion * 15); // 25-40px
  const sizeRange = Math.floor(25 + proportion * 5); // 25-30px

  // Animation
  const xOffsetRange = 25 + proportion * 15; // 25-40
  const intervalTime = 300 - proportion * 100; // 300-200ms

  return {
    maxLetters,
    initialLetters,
    addPerInterval,
    minSize,
    sizeRange,
    xOffsetRange,
    intervalTime,
  };
};

const RainLetters = () => {
  const { width: windowWidth } = useWindowSize();
  const config = getRainConfig(windowWidth);

  const [letters, setLetters] = useState<
    Array<{
      id: number;
      letter: string;
      x: number;
      speed: number;
      size: number;
      xOffset: number;
    }>
  >(() => {
    const scrabbleLetters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "★",
    ];
    return Array.from({ length: config.initialLetters }, (_, i) => ({
      id: i,
      letter:
        scrabbleLetters[Math.floor(Math.random() * scrabbleLetters.length)],
      x: Math.random() * 100,
      speed: 1 + Math.random() * 2,
      size: config.minSize + Math.random() * config.sizeRange,
      xOffset: (Math.random() - 0.5) * config.xOffsetRange,
    }));
  });

  const [nextId, setNextId] = useState(config.initialLetters);

  useEffect(() => {
    const currentConfig = getRainConfig(windowWidth);
    const scrabbleLetters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "★",
    ];

    const interval = setInterval(() => {
      setLetters((prev) => {
        const newLetters = [...prev];
        if (newLetters.length > currentConfig.maxLetters) {
          const toRemove = Math.max(
            1,
            Math.floor(currentConfig.maxLetters / 10),
          );
          newLetters.splice(0, toRemove);
        }

        for (let i = 0; i < currentConfig.addPerInterval; i++) {
          newLetters.push({
            id: nextId + i,
            letter:
              scrabbleLetters[
                Math.floor(Math.random() * scrabbleLetters.length)
              ],
            x: Math.random() * 100,
            speed: 0.7 + Math.random() * 1.8,
            size:
              currentConfig.minSize + Math.random() * currentConfig.sizeRange,
            xOffset: (Math.random() - 0.5) * currentConfig.xOffsetRange,
          });
        }
        return newLetters;
      });
      setNextId((prev) => prev + currentConfig.addPerInterval);
    }, currentConfig.intervalTime);

    return () => clearInterval(interval);
  }, [nextId, windowWidth]);

  return (
    <div
      className="rain-letters-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {letters.map((l) => (
        <motion.div
          key={l.id}
          className="scrabble-tile"
          style={{
            position: "absolute",
            left: `${l.x}%`,
            top: "-100px",
            width: `${l.size}px`,
            height: `${l.size}px`,
          }}
          initial={{ opacity: 0, y: -100, rotate: -180, x: 0 }}
          animate={{
            y: "100vh",
            x: `${l.xOffset}vw`,
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: l.speed * 3,
            ease: "linear",
            opacity: { times: [0, 0.1, 0.9, 1], duration: l.speed * 3 },
          }}
          onAnimationComplete={() => {
            setLetters((prev) => prev.filter((letter) => letter.id !== l.id));
          }}
          whileHover={{
            scale: 1.3,
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.3 },
          }}
        >
          <div className="tile-front">
            <div className="tile-letter">{l.letter}</div>
            <div className="tile-value">{getScrabbleValue(l.letter)}</div>
          </div>
          <div className="tile-shadow" />
        </motion.div>
      ))}
    </div>
  );
};

const GameUnlocked = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [confettiItems] = useState<
    Array<{ id: number; x: number; left: number; colorIndex: number }>
  >(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      left: Math.random() * 100,
      colorIndex: Math.floor(Math.random() * 5),
    })),
  );

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
      <RainLetters />

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
            duration: 0.8,
          }}
        >
          <h1>GAME DÉBLOQUÉE</h1>
        </motion.div>

        {/* Sous-titre animé */}
        <motion.div
          className="subtitle-animated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="congrats-text">TROP COOL FRÉROT/FRÉROTTE! 🚀</p>
          <p className="message-text">
            Tu viens d'entrer dans la zone VIP du Scrabble CROUSSEUX
          </p>
        </motion.div>

        {/* Mots en lettres Scrabble */}
        <div className="scrabble-words-container">
          <ScrabbleWord word="MEGA" delay={0.8} />
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

        {/* Section WhatsApp */}
        <motion.div
          className="whatsapp-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="whatsapp-card">
            <div className="whatsapp-header">
              <div className="whatsapp-icon">📱</div>
              <h2 className="whatsapp-title">CONTACTE DAVID LA CHANCE</h2>
            </div>

            <div className="finger-pointer">
              <span>👇</span>
              <div className="phone-emoji">📞</div>
              <span>👇</span>
            </div>

            <p className="whatsapp-instruction">
              Clique sur le bouton ci‑dessous pour ouvrir WhatsApp et envoyer un
              message direct à David
            </p>

            <a
              href="https://wa.me/33612345678?text=Salut%20David%20!%20Je%20viens%20de%20débloquer%20la%20game%20Scrabble%20CROUSSEUX%20🔥"
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="button-icon">💬</div>
              <div className="button-text">Envoyer un message WhatsApp</div>
              <div className="button-subtext">
                (C'est gratuit et ça déchire)
              </div>
            </a>

            <div className="whatsapp-tips">
              <div className="tip">
                💡 <strong>Pro tip :</strong> Envoie un emoji Scrabble pour
                briser la glace
              </div>
              <div className="tip">
                🎯 <strong>Objectif :</strong> Fixe une date pour la game
                légendaire
              </div>
              <div className="tip">
                🏆 <strong>Bonus :</strong> Mentionne ton mot Scrabble préféré
              </div>
            </div>
          </div>
        </motion.div>

        {/* Effets décoratifs */}
        <motion.div
          className="confetti-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          {confettiItems.map((item) => (
            <motion.div
              key={item.id}
              className="confetti"
              initial={{
                y: -100,
                x: item.x,
                rotate: 0,
                opacity: 0,
              }}
              animate={{
                y: 800,
                rotate: 360,
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                delay: 2 + item.id * 0.1,
                duration: 3,
                opacity: { times: [0, 0.1, 0.9, 1], duration: 3 },
              }}
              style={{
                left: `${item.left}%`,
                background: [
                  "#ff6b6b",
                  "#4ecdc4",
                  "#45b7d1",
                  "#96e6a1",
                  "#feca57",
                ][item.colorIndex],
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
          <p className="back-text">💫 Prépare tes meilleurs words!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default GameUnlocked;
