import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './Context/LoginContext';

ReactDOM.createRoot(document.getElementById('root')).render(

  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </UserProvider>
)
