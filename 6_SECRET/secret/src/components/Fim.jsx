import "./Fim.css";

const Fim = ({ tenteDenovo }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={tenteDenovo}>JOGAR DENOVO</button>
    </div>
  );
};

export default Fim;
