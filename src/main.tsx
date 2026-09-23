// Detta är startmotorn för REACT här ska inga kompontenter, layout eller style ligg Den ska bara: importera global CSS, importera <App /> och mounta appen i #root
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
