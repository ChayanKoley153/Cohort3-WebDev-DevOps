import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/counter";
import './App.css';

function App() {
  return (
    <>
      <RecoilRoot>
        <Buttons />  
        <Counter />  
        <IsEven /> 
      </RecoilRoot>
    </>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 3);  
  }

  function decrease() {
    setCount(c => c - 1);
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom);  
  return (
    <>
      <h1>{count}</h1>  
    </>
  )
}

function IsEven() {
  const even = useRecoilValue(evenSelector);  
  return (
    <>
      {even ? "Counter is now EVEN number" : "Counter is now ODD number"} 
    </>
  )
}

export default App;
