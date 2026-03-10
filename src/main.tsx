import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UIKit from './pages/UIKit.tsx'

function Router() {
  const hash = window.location.hash

  if (hash === '#/uikit') {
    return <UIKit />
  }

  return <App />
}

// Re-render on hash change
window.addEventListener('hashchange', () => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Router />
    </StrictMode>,
  )
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
