import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Application from '@core/Application'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Application />
        </BrowserRouter>
    </StrictMode>,
)
