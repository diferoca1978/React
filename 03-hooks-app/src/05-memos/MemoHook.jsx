import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"


const heavyStuff = (iterations) => {
  
  for ( let i = 0; i < iterations; i++) {
    console.log(`Let's iterating...`);
  }
  return `${iterations} Iterations number`
}

export const MemoHook = () => {

  
  const {counter, increment} = useCounter(1000)
  const [show, setShow] = useState(true)
  
  const isolateStuff = useMemo(() => heavyStuff(counter), [counter])
  
  return (
    <>

    <h1>counter: <small>{ counter }</small> </h1>
    <hr />

    {/* {console.time('isolateStuff')}
    <h3>{heavyStuff(counter)}</h3>
    {console.timeEnd('isolateStuff')} */}
    

    {console.time('isolateStuff')}
    <h4> {isolateStuff} </h4>
    {console.timeEnd('isolateStuff')}

      <button 
        className="btn btn-primary mt-3"
        onClick={() =>  increment()}> +1 </button>

      <button
      className="btn btn-outline-primary ml-3 mt-3"
      onClick={() =>  setShow (!show)}
      >Show/Hide {JSON.stringify(show)}</button>
      {/* we use JSON.stringify because the initial value of setState Hook is a boolean type therefore remember that react not print the values like booleans,null or undefined    */}

    </>
  )
}
