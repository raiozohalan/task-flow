import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/'
import ReduxProvider from './redux/ReduxProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxProvider><RouterProvider router={router} /></ReduxProvider>
  </StrictMode>,
)
