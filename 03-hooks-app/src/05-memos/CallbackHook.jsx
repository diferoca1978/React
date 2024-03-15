import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {


  const [counter, setCounter] = useState(10);

  // const increment = useCallback(() => { // This code not run correctly because even if put counter into dependencies array, the component continues rendering. 
  //   setCounter( counter +1 )
  // }, [counter])


  const increment = useCallback(() => { // This is the best way to do this.
    setCounter( (value) => value + 1 ) // Remember that if we need to get the actual value of setState we can use into it a callback wich bring us the actual value and return this value updated with something we want.
  }, [])


  return (
    <>
      <h1>CallbackHook: {counter} </h1>
      <hr />

      <ShowIncrement increment={increment} />

    </>
  )
}
