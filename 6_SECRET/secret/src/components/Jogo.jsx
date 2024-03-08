import "./Jogo.css";

const Jogo = ({ verificarLetra }) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verificarLetra}>Finalizar Jogo</button>
    </div>
  );
};

export default Jogo;
