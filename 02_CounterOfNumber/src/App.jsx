import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addCount = () => {
    if (counter >= 20) {
      alert("Limlit exceed");
    } else {
      counter = counter + 1;
      setCounter(counter);
    }
    console.log("Value added ", counter);
  };

  function removeCount() {
    if (counter <= 0) {
      alert("Value can not be negative");
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter of clicks: {counter}</h2>
      <button onClick={addCount}>Add Count {counter}</button>
      <button onClick={removeCount}>Remove Count {counter}</button>
    </>
  );
}

export default App;
