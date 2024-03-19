import React from 'react'
import ReactDOM from 'react-dom/client'
//import { HookApp } from './HookApp';
//import { CounterApp } from './01-useState/CounterApp';
//import { CounterCustomHook } from './01-useState/CounterCustomHook';
//import { SimpleForm } from './useEffect/SimpleForm';
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
//import { MultipleCustomHook } from './03-examples/MultipleCustomHook';
//import { FocusOnInput } from './04-useRef/FocusOnInput';
//import { MemorizeReactMethod } from './05-memos/MemoReactMethod';
//import { MemoHook } from './05-memos/MemoHook';
//import { CallbackHook } from './05-memos/CallbackHook';
//import { Padre } from './06-tarea-memo/Padre';
//import './07-UseReducer/intro-reducer'
import { TodoApp } from './07-UseReducer/TodoApp';

import './index.css';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
