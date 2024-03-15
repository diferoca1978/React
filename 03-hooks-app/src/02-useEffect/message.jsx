import { useEffect, useState } from "react"

/**
 * First: We're set with (useState() hook) the initial state of the event 'mousemove' through the destructuration to extract only the x an y coordinates.
 * Second: We're using a useEffect Hook to deal with the side effects:
 * Then we're update the state through the onMouseMove function,
 * Next we're creating the listener event and, pass a callback wich will be invoked when the event is dispatched. 
 * Finally into return function or clean up function we're unmount our listener. 
 * //! Warning: If we don't use the clean up function we'll have a memory leak and the most important we could geerating an error because we'll be try to update a component wich does not exixts.
 * @returns The component returns a message, and also show the current coordinates of mouse.
 */


export const Message = () => {

  const [coords, setCoords] = useState({x: 0, y: 0}) 


  useEffect(() => {

    const onMouseMove = ({ x, y }) => {
       setCoords({ x, y })
    }
    
    window.addEventListener('mousemove', onMouseMove);

  
    return () => {
    window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])
  

  
  return (
    <>

    <h3>User already exists</h3>
      {JSON.stringify( coords ) }

    </>
  )
}
