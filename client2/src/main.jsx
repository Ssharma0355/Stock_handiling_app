import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {toast} from "react-hot-toast"
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>,
)
