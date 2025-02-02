import "./App.css";
import { RecoilRoot, useRecoilValueLoadable } from "recoil";
import { todosAtomFamily } from "./store/atom";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={5} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todo = useRecoilValueLoadable(todosAtomFamily(id));

  if (todo.state === "loading") {
    return <div>Loading...</div>;
  } else if (todo.state === "hasValue") {
    return (
      <div>
        {todo.contents.title}
        {todo.contents.description}
      </div>
    );
  }
}

export default App;
