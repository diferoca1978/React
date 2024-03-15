import React from 'react';
import ReactDOM from 'react-dom/client';
//import { App } from './app';
//import { FirstApp } from './firstApp';

import './styles.css';
import { CounterApp } from './hooks/useState-counterApp';

//* This is our father component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp  />     */}
    <CounterApp value= {0} />    
  </React.StrictMode>
)