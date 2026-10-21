import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App} from "./App.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Login} from "./pages/Login.jsx"

import { Contact } from './pages/Contact.jsx'
import {Register} from "./pages/Register.jsx"
import { Navbar } from './layout/Navbar.jsx'
import { About } from './pages/About.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path='/' element={<App/>}/>

          <Route path="/about" element={<About/>}/>

          <Route path="/contact" element={<Contact/>}/>
          
          <Route path="/login" element={<Login/>}/>

          <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
