import "./Jogo.css";

const Jogo = ({ verificarLetra }) => {
  return (
    <div className="jogo">
      <p className="pontos">
        <span>Pontuação : 000</span>
      </p>
      <h1>Adivinhe a Palavra: </h1>
      <h3>
        Dica sobre a palavra: <span>dica</span>
      </h3>
      <div className="container">
        <span className="letra">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra: </p>
      </div>
      <form>
        <input type="text" name="letras" maxLength={1} required />
        <button>JOGAR!</button>
      </form>
      <div className="palavrasErradas">
        <p>Letras já utilizadas: </p>
      </div>
    </div>
  );
};

export default Jogo;
