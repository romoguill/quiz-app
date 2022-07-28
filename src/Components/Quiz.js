import Answer from './Answer';

function Quiz(props) {
  const { question, allAnswers, id, selectedAnswer } = props.quiz;

  const answersElements = allAnswers.map((answer, index) => (
    <Answer
      id={index}
      key={index}
      value={answer}
      quizId={id}
      selectAnswer={props.selectAnswer}
      selectedAnswer={selectedAnswer}
    />
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
