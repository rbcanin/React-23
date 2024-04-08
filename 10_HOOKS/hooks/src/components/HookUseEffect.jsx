import { useEffect, useState } from "react";

//hook que controla quantas vezes algo acontece

const HookUseEffect = () => {
  //1- sem array de dependências
  useEffect(() => {
    console.log("Estou sendo executado");
  });

  const [number, setNumber] = useState(1);
  const changeSomething = () => {
    setNumber(number + 1);
  };

  //2- array de dependências vazio
  useEffect(() => {
    console.log("Serei executado apenas 1 vez");
  }, []);
  //3- item no array de dependencias
  const [anotherNumber, setAnotherNumber] = useState(0);
  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("sou executado quando anotherNumber muda");
    }
  }, [anotherNumber]);

  //4- CleanUp
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello world");
    }, 2000);
    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>HookUseEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar</button>
      <p>Another number: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
        Mudar AnotherNumber
      </button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
