import WelcomePage from './Components/WelcomePage';
import QuizPage from './Components/QuizPage';

import './styles.css';

import { useState } from 'react';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  function startGame() {
    setIsPlaying(true);
  }

  function endGame() {
    setIsPlaying(false);
  }

  return (
    <div className="App">
      {isPlaying ? (
        <QuizPage endGame={endGame} />
      ) : (
        <WelcomePage startGame={startGame} />
      )}
    </div>
  );
}

export default App;
