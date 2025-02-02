import { useState } from "react";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [state, setState] = useState(0);

  const prev = usePrev(state);
  return (
    <>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((current) => current + 1);
        }}
      >
        Click to Update Value
      </button>
      <p>The previous value was = {prev}</p>
    </>
  );
}

export default App;
