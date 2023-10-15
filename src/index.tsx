import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'

import './index.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
