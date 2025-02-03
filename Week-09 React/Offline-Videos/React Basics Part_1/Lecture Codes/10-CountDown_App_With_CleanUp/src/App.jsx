import { useState, useEffect } from "react";

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setShowTimer((currentValue) => !currentValue);
    }, 5000);
  }, []);

  return (
    <div>
      {showTimer && <Timer/>}
    </div>
  );
}


const Timer = function() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const clock = setInterval(function() {
      console.log("from inside clock");
      setSeconds(prev => prev + 1);
    }, 1000);
    // cleanup function

    return function () {
      clearInterval(clock);
    };
  }, []);

  return <div>{seconds} seconds elapsed</div>;
}

export default App;
