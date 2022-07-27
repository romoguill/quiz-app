import WelcomePage from './Components/WelcomePage';
import Quiz from './Components/Quiz';
import parseCorrectly from './util';

import './styles.css';

import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const API_URL = 'https://opentdb.com/api.php?amount=5';

  const [isPlaying, setIsPlaying] = useState(false);
  const [quizzes, setQuizzes] = useState([]);

  function startGame() {
    setIsPlaying(true);
  }

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuizzes(
          data.results.map((quizz) => ({
            id: nanoid(),
            question: parseCorrectly(quizz.question),
            correctAnswer: parseCorrectly(quizz.correct_answer),
            incorrectAnswers: quizz.incorrect_answers.map((answer) =>
              parseCorrectly(answer)
            ),
          }))
        );
      });
  }, [isPlaying]);

  console.log(quizzes);
  const quizzesElements = quizzes.map((quiz) => (
    <Quiz id={quiz.id} key={quiz.id} quiz={quiz} />
  ));

  return (
    <div className="App">
      {isPlaying ? quizzesElements : <WelcomePage startGame={startGame} />}
    </div>
  );
}

export default App;
