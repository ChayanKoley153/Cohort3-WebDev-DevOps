import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <CurrentCount count={count} />
      <Increase setCount={setCount} count={count} />
      <Decrease setCount={setCount} count={count} />
    </>
  );
}

function CurrentCount({ count }) {
  return <>{count}</>;
}

function Increase({ setCount, count }) {
  function IncreaseCount() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={IncreaseCount}>Increase</button>{" "}
    </>
  );
}

function Decrease({ setCount, count }) {
  function DecreaseCount() {
    setCount(count - 1);
  }
  return (
    <>
      <button onClick={DecreaseCount}>Decrease</button>{" "}
    </>
  );
}

export default App;
