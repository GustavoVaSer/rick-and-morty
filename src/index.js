import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
)
