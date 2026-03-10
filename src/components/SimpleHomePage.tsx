import { useState } from 'react';
import './SimpleHomePage.css';

interface SimpleHomePageProps {
  onDiscover: () => void;
}

const SimpleHomePage = ({ onDiscover }: SimpleHomePageProps) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => onDiscover(), 300);
  };

  return (
    <div className="simple-home-container">
      <div className="simple-content">
        <h1 className="simple-title">
          David La Chance a quelque chose pour vous
        </h1>
        
        <div className="simple-spacer" />
        
        <button 
          className={`simple-button ${clicked ? 'clicked' : ''}`}
          onClick={handleClick}
          disabled={clicked}
        >
          {clicked ? '🎯 Chargement...' : 'découvrir'}
        </button>
        
        <div className="simple-footer">
          <p className="simple-hint">
            (c'est un site éclaté au sol, désolé)
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleHomePage;