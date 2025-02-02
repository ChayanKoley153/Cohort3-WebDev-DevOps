import './App.css'; 
import { RecoilRoot, useRecoilState } from 'recoil';
import { todosAtomFamily } from './store/atom'; 

function App() {
  return (
    <RecoilRoot> 
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

function Todo({id}) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}

export default App; 