import PropTypes from 'prop-types'
import { useState } from "react";

export const CounterApp = ({value}) => {

  const [counter, setCounter] = useState( value );

  const addButton = () => {
  setCounter( counter + 1 );
}
  const decreaseButton = () => {
    if (counter > 0 ) {
      setCounter( counter - 1 )
    }return;
}
  const resetButton = () => {
  setCounter( value );
}
  
  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={addButton}> Counter + 1 </button>
      <button onClick={decreaseButton}> Counter - 1 </button>
      <button onClick={resetButton}> Reset </button>
      <h3> You had clicked me {counter} times!!!  </h3>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}