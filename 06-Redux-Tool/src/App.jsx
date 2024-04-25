import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByTwo } from './store/slices/counter'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Counter by ReduxToolKit</h1>
      <h2>count is {counter}</h2>
      <div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch(incrementByTwo(2))}>
          Increment by 2
        </button>
      </div>
      </div>
    </>
  )
}

export default App
