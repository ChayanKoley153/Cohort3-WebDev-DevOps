import { useState } from "react";

// customm hook
function useCounter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return {
    count,
    increaseCount,
  };
}

function App() {
  const { count, increaseCount } = useCounter();

  return (
    <>
      <button onClick={increaseCount}>Increase: {count}</button>
    </>
  );
}

export default App;
