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
