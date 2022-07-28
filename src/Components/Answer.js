function Answer(props) {
  return (
    <div
      className={`Answer ${props.selectedAnswer === props.value && 'selected'}`}
      onClick={() => props.selectAnswer(props.quizId, props.id)}
    >
      <p>{props.value}</p>
    </div>
  );
}

export default Answer;
