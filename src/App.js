import WelcomePage from './Components/WelcomePage';
import Quiz from './Components/Quiz';
import QuizPage from './Components/QuizPage';
import parseCorrectly from './util';

import './styles.css';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  function startGame() {
    setIsPlaying(true);
  }

  return (
    <div className="App">
      {isPlaying ? <QuizPage /> : <WelcomePage startGame={startGame} />}
    </div>
  );
}

export default App;
