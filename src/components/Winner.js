const Winner =({winner, winningSquares, resetGame}) => (
    <>
    {winner ? (<section>
        <p>
          Congratulations {winner} with the {winningSquares} combination
        </p>
        <button type="button" onClick={resetGame}>
          New Game
        </button>
      </section>
      ) : null}
      </>
    );
    export default Winner;