import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/styles.css'
import './assets/styles/theme.css'
import './assets/styles/animation.css'
import { BrowserRouter } from 'react-router-dom'

function Root() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
