import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";


export const MemorizeReactMethod = () => {

  const {counter, increment} = useCounter();
  const [show, setShow] = useState(true)


  return (
    <>
    
      <h1>counter: <Small value={counter} /> </h1>
      <button 
        className="btn btn-primary"
        onClick={() =>  increment()}> +1 </button>

      <button
      className="btn btn-outline-primary ml-3"
      onClick={() =>  setShow (!show)}
      >Show/Hide {JSON.stringify(show)}</button>
      {/* we use JSON.stringify because the initial value of setState Hook is a boolean type therefore remember that react not print the values like booleans,null or undefined    */}
    </>
  )
}
