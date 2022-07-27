import WelcomePage from './Components/WelcomePage';
import Quiz from './Components/Quiz';

import './styles.css';

import { useState, useEffect } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  function startGame() {
    setIsPlaying(true);
  }

  return (
    <div className="App">
      {isPlaying ? (
        <>
          <Quiz />
          <Quiz />
          <Quiz />
          <Quiz />
        </>
      ) : (
        <WelcomePage startGame={startGame} />
      )}
    </div>
  );
}

export default App;
