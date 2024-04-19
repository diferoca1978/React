import React from 'react'
import ReactDOM from 'react-dom/client'




import './index.css'
import { HeroesApp } from './HeroesApp'
import { AuthProvider } from './auth/context/AuthProvider'




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AuthProvider>
      <HeroesApp />
    </AuthProvider>     
  </React.StrictMode>
)
