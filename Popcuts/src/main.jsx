import React from 'react'
import ReactDOM from 'react-dom/client'

import { MainApp } from './MainApp';
import './index.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/Header.css'
import './styles/Cart.css'
import './styles/Footer.css'
import './styles/body.css'
import './styles/itemcard.css'
import { BrowserRouter } from 'react-router-dom';


import {firebaseApp} from './firebase/config'

firebaseApp


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  
    <MainApp />

  

  </BrowserRouter>
  
  
)
