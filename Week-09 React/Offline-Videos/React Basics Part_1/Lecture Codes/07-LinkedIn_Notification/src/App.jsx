import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function increaseCount() {
    setCount(count + 1);
  }

  // setInterval(increaseCount, 1000);

  return (
    <div>
      <div style={{
        background: "red", borderRadius: 20,
        width: 20, height: 25, paddingTop: 5, paddingLeft: 10
      }}>
        {count}
      </div>
      <img style={{ cursor: "pointer" }}
        src="https://cdn-icons-png.flaticon.com/512/472/472371.png"
        width={40}
      />
      <button onClick={increaseCount}>Increase the Count</button>
    </div>
  );
}

export default App;
