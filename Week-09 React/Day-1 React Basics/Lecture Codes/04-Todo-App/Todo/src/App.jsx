import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Hit the gym regularly",
      done: true,
    },
  ]);

  function addTodo() {
  let newArray = [];
  setTodos([...newArray, {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    done: true,
  }]);
  }

  return (
    <div>
      <input id="title" type="text" placeholder="Title"></input>
      <br/>
      <input id="description" type="text" placeholder="Description"></input>
      <br />
      <button onClick={addTodo}>Add todo</button>
      <br />
      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          done={todo.done}
        />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
      <h1>{props.done ? "Task is done" : "Task is not done"}</h1>
    </div>
  );
}