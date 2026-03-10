import { useState } from 'react';
import './SimpleHomePage.css';

interface SimpleHomePageProps {
  onDiscover: () => void;
}

const SimpleHomePage = ({ onDiscover }: SimpleHomePageProps) => {
  const [clicked, setClicked] = useState(false);
  const [refused, setRefused] = useState(false);
  const [insultMessage, setInsultMessage] = useState('');

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => onDiscover(), 300);
  };

  const handleRefuse = () => {
    setRefused(true);
    const insults = [
      'T\'es naze fréro 👎',
      'Grave raté le jeu 👎',
      'T\'as peur du Scrabble? 👎',
      'Ptdr t\'es trop nul 👎',
      'Même ta grand-mère joue mieux 👎'
    ];
    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    setInsultMessage(randomInsult);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setRefused(false);
      setInsultMessage('');
    }, 3000);
  };

  return (
    <div className="simple-home-container">
      <div className="simple-content">
        <h1 className="simple-title">
          David La Chance a quelque chose pour vous
        </h1>
        
        <div className="simple-spacer" />
        
        <div className="buttons-container">
          <button 
            className={`simple-button ${clicked ? 'clicked' : ''}`}
            onClick={handleClick}
            disabled={clicked || refused}
          >
            {clicked ? '🎯 Chargement...' : 'découvrir'}
          </button>
          
          <button 
            className="refuse-button"
            onClick={handleRefuse}
            disabled={clicked || refused}
          >
            refuser 👎
          </button>
        </div>
        
        {insultMessage && (
          <div className="refuse-message">
            {insultMessage}
          </div>
        )}
        
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