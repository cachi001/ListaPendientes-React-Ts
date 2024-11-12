import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToDoApp } from './componentes/ToDoApp'
import "./styles.css"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToDoApp></ToDoApp>
  </StrictMode>,
)
