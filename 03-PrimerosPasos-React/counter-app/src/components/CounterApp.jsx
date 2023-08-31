<<<<<<< HEAD
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}> -1 </button>
      <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
    </>
  );
};


export default CounterApp;
=======
import { useState } from "react"


const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);
  const handleRest = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  
  return (
    <>
      <h1>Conter App</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleRest}>-1</button>
      <button onClick={handleReset}>Reset</button>

    </>
  )
}

export default CounterApp
>>>>>>> 7979ef35ce10924232c81123eb54382ea3c491d5
