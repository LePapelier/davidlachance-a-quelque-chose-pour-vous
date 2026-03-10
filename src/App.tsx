import { useState } from 'react';
import SimpleHomePage from './components/SimpleHomePage';
import MainInvitation from './components/MainInvitation';
import './App.css';

function App() {
  const [showMain, setShowMain] = useState(false);

  const handleDiscover = () => {
    setShowMain(true);
  };

  if (!showMain) {
    return <SimpleHomePage onDiscover={handleDiscover} />;
  }

  return <MainInvitation />;
}

export default App;