import { motion } from "framer-motion";
import "./CROUSLogos.css";

const CROUSLogos = () => {
  const baseUrl = import.meta.env.BASE_URL;
  // Noms des fichiers d'images à placer dans le dossier public/images/
  const logos = [
    {
      id: 1,
      name: "crous_logo_top_left.png",
      position: "top-left",
      alt: "Logo CROUS Bretagne haut gauche",
    },
    {
      id: 2,
      name: "crous_logo_top_right.png",
      position: "top-right",
      alt: "Logo CROUS Bretagne haut droit",
    },
    {
      id: 3,
      name: "crous_logo_bottom_left.png",
      position: "bottom-left",
      alt: "Logo CROUS Bretagne bas gauche",
    },
    {
      id: 4,
      name: "crous_logo_bottom_right.png",
      position: "bottom-right",
      alt: "Logo CROUS Bretagne bas droit",
    },
  ];

  const positions = {
    "top-left": { top: "0px", left: "0px" },
    "top-right": { top: "0px", right: "0px" },
    "bottom-left": { bottom: "0px", left: "0px" },
    "bottom-right": { bottom: "0px", right: "0px" },
  };

  return (
    <div className="crous-logos-container">
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className={`crous-logo ${logo.position}`}
          style={positions[logo.position as keyof typeof positions]}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: logo.id * 0.2,
            duration: 0.6,
            type: "spring",
            damping: 15,
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.15,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.4 },
          }}
          whileTap={{
            scale: [1, 1.2, 1],
            rotate: [0, -15, 15, -15, 0],
            transition: { duration: 0.4 },
          }}
        >
          {/* Logo CROUS réel */}
          <div className="logo-placeholder">
            <img
              src={`${baseUrl}images/${logo.name}`}
              alt={logo.alt}
              className="logo-image"
              loading="lazy"
            />
            <div className="logo-glow" />
          </div>

          {/* Légende humoristique gen Z */}
          <motion.div
            className="logo-caption"
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {logo.position === "top-left" && "🏛️ CROUSSEUX mode activé"}
            {logo.position === "top-right" && "🍽️ Cantoche > resto 5 étoiles"}
            {logo.position === "bottom-left" && "💰 Bourse? On en parle?"}
            {logo.position === "bottom-right" && "🎓 Étudiant mais stylé"}
          </motion.div>
        </motion.div>
      ))}

      {/* Élément décoratif central CROUS */}
      <motion.div
        className="crous-center-badge"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, repeatType: "reverse" },
        }}
      >
        <div className="badge-content">
          <span className="badge-emoji">👨‍🎓</span>
          <span className="badge-text">#TeamCROUS</span>
          <span className="badge-hashtag">#ScrabbleCrousseux</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CROUSLogos;
