import { useReducer } from "react";

const HookUseReducer = () => {
  const [numero, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  //avançando

  return (
    <div>
      {/*useReducer executa a função na hora da alteração, manipular valores em casos mais complexos */}
      <h2>useReducer</h2>
      <p>numero: {numero}</p>
      <button onClick={dispatch}>Alterar número</button>
      <hr />
    </div>
  );
};

export default HookUseReducer;
