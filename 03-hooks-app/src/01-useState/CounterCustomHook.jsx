import { useCounter } from "../hooks/useCounter"


export const CounterCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter()

  return (
    <>
      <h1>counterCustomHook: {counter} </h1>

      <button className="btn btn-primary" onClick={increment}>+ 1</button>
      <button className="btn btn-primary" onClick={decrement}>- 1</button>
      <button className="btn btn-secondary" onClick={reset}>Reset</button>

    </>
  )
}
