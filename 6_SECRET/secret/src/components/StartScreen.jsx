import "./StartScreen.css";

const StartScreen = ({ startJogo }) => {
  return (
    <div className="comecar">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startJogo}>COMEÇAR JOGO</button>
    </div>
  );
};

export default StartScreen;
