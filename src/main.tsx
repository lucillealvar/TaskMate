import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './components/App.tsx'
import TasksContextProvider from './context/TasksContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TasksContextProvider>
    <App />
    </TasksContextProvider>
  </StrictMode>,
)
