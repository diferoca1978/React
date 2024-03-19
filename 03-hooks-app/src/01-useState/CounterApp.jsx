import { useState } from "react"


export const CounterApp = () => {

  const [state, setCounter] = useState({ //* For this example the state is an object. But the state can be anything.
    counter1: 10,
    counter2: 20,
    counter3: 30
  });

  const { counter1, counter2, counter3} = state; //* Here we're desctructing the state
  return (
    <>

      {/* Here we're showing the properties of the state */}
      <h1>Counter: {counter1} </h1> 
      <h1>Counter: {counter2} </h1>
      <h1>Counter: {counter3} </h1>

      <hr />
      
      {/* Here, into the button through the onClick event we're updating the state in their property counter 1 */}
      <button className="btn btn-outline-primary" 
      onClick={
        () => setCounter({

        ...state,
        counter1: counter1 + 1,

        })
      }>+ 1</button>
      
    </>
  )
}
