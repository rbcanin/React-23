import { useReducer, useState } from "react";

const HookUseReducer = () => {
  const [numero, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  //avançando
  const initialTasks = [
    { id: 1, text: "Fazer uma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText(" ");
        return [...state, newTask];
    }
  };

  const [taskText, setTaskText] = useState(" ");

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  return (
    <div>
      {/*useReducer executa a função na hora da alteração, manipular valores em casos mais complexos */}
      <h2>useReducer</h2>
      <p>numero: {numero}</p>
      <button onClick={dispatch}>Alterar número</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id}>{task.text}</li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
