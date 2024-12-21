import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataContextProvider from './Context/UserContext/DataContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider><App /></DataContextProvider>
  </StrictMode>,
)
