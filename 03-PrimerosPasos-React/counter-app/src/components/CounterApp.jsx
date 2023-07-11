import { useState } from "react"


const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);
  
  return (
    <>
      <h1>Conter App</h1>
      <h2>{counter}</h2>
    </>
  )
}

export default CounterApp
