import Quiz from './Quiz';
import parseCorrectly from '../util';

import { nanoid } from 'nanoid';
import { useState, useEffect, CSSProperties } from 'react';
import MoonLoader from 'react-spinners/MoonLoader';

function QuizPage() {
  const API_URL = 'https://opentdb.com/api.php?amount=5';

  const [quizzes, setQuizzes] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [isLoadingQuizzes, setIsLoadingQuizzes] = useState(true);

  //  Set the selectedAnswer property to the quiz answer value that was selected
  function selectAnswer(quizId, answerId) {
    setQuizzes((prevQuizes) =>
      prevQuizes.map((quiz) => {
        if (quiz.id === quizId) {
          return {
            ...quiz,
            selectedAnswer: quiz.allAnswers[answerId],
          };
        } else {
          return { ...quiz };
        }
      })
    );
  }

  // All quizes must be guessed
  function areAllQuizesAnswered() {
    return quizzes.every((quiz) => quiz.selectedAnswer !== null);
  }

  // Sum 1 point for every correct answer
  function getGameScore() {
    if (areAllQuizesAnswered()) {
      let sum = 0;
      quizzes.forEach((quiz) => {
        if (quiz.correctAnswer === quiz.selectedAnswer) {
          sum++;
        }
      });
      return sum;
    }
  }

  function displayScore() {
    areAllQuizesAnswered() && setShowScore(true);
  }

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setQuizzes(
          data.results.map((quiz) => ({
            id: nanoid(),
            question: parseCorrectly(quiz.question),
            correctAnswer: parseCorrectly(quiz.correct_answer),
            // Join the correct answer with the incorrect answers and sort them so that the correct answer ends up in a random spot
            allAnswers: [
              ...quiz.incorrect_answers.map((answer) => parseCorrectly(answer)),
              parseCorrectly(quiz.correct_answer),
            ].sort(),
            selectedAnswer: null,
          }))
        );
        setIsLoadingQuizzes(false);
      });
  }, []);

  const quizzesElements = quizzes.map((quiz) => (
    <Quiz
      id={quiz.id}
      key={quiz.id}
      quiz={quiz}
      selectAnswer={selectAnswer}
      selectedAnswer={quiz.selectedAnswer}
    />
  ));

  return (
    <main className="QuizPage">
      {
        isLoadingQuizzes ? <MoonLoader color="#293264" /> : quizzesElements
        // <div className="quiz--control">
        //   <button className="btn btn-secondary" onClick={displayScore}>
        //     Check answers
        //   </button>
        //   {showScore && (
        //     <p className="score">{`You scored ${getGameScore()}/5 correct answers`}</p>
        //   )}
        // </div>
      }
    </main>
  );
}

export default QuizPage;
