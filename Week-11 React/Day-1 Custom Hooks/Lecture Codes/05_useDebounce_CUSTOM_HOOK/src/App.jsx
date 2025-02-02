import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 200);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("Exclusive Operation");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onChange={change}></input>
    </>
  );
}

export default App;
