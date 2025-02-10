import { useState, useRef } from "react";


// useRef
// reference to a value, such that when u chnage the value, the component DOES NOT RE=RENDER
function App() {
  const inputRef = useRef();
  // let value = 1;
  // const [value, setValue] = useState(1);
  const valueRef = useRef();


    function focusOnInput() {
        // document.getElementById("name").focus();  
        inputRef.current.focus();
    }

    return <div>
      Sign up 
      <input ref={inputRef} id="name" type="text"></input>
      <input type="text" />
      <button onClick={focusOnInput}>submit</button>
    </div>

}




export default App;



