import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { UsersContextProvider } from './context/UsersContext.tsx'
import {StyledEngineProvider} from '@mui/material/styles'
// import {CitasContextProvider} from './context/CitasContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    
    <StyledEngineProvider injectFirst>
    <AuthContextProvider>
      <UsersContextProvider>
        <App />
      </UsersContextProvider>
    </AuthContextProvider>
    </StyledEngineProvider>
    
  </React.StrictMode>,
)

