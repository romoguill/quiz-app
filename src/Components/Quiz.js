import Answer from './Answer';

function Quiz(props) {
  const { question, correctAnswer, incorrectAnswers } = props.quiz;

  const posibleAnswers = [correctAnswer, ...incorrectAnswers].sort();

  const answersElements = posibleAnswers.map((answer) => (
    <Answer value={answer} />
  ));
  return (
    <section className="Quiz">
      <h3 className="question">{question}</h3>
      <div className="posible_answers">{answersElements}</div>
      <hr />
    </section>
  );
}

export default Quiz;
