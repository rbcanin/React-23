import { useReducer } from "react";

const HookUseReducer = () => {
  const [numero, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  //avançando
  const initialTaks = [
    { id: 1, text: "Fazer uma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {};

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks);

  return (
    <div>
      {/*useReducer executa a função na hora da alteração, manipular valores em casos mais complexos */}
      <h2>useReducer</h2>
      <p>numero: {numero}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas</h3>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
