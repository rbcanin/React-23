import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header />
        <div>
          <h2>O que você vai fazer?</h2>
          <h3>Título</h3>
          <input type="text" />
          <h3>Dificuldade</h3>
          <div>
            <input type="number" />
          </div>
          <div>
            <button type="submit">Cadastrar</button>
          </div>
          <h2>Suas tarefas:</h2>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
