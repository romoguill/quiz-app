import Answer from './Answer';

function Quiz() {
  return (
    <section className="Quiz">
      <h3 className="question">How would one say goodbye in Spanish?</h3>
      <div className="posible_answers">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
      <hr />
    </section>
  );
}

export default Quiz;
