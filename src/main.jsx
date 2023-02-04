import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import './login.css'
import './uchastnik.scss'
import './card.css'
import '../node_modules/boxicons/css/boxicons.min.css'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
