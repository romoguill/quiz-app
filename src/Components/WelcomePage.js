function WelcomePage(props) {
  return (
    <main className="WelcomePage">
      <h1>Quizzical</h1>
      <h2>Welcome to the game, press start to begin</h2>
      <button className="btn btn--primary" onClick={props.startGame}>
        Start quiz
      </button>
    </main>
  );
}

export default WelcomePage;
