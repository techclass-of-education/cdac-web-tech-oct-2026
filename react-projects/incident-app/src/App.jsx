import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./layout/Navbar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { AddIncident } from "./pages/AddIncident";
import { IncidentsList } from "./pages/IncidentsList";
import { IncidentDetails } from "./pages/IncidentDetails";
import { UserAuthForms } from "./pages/UserAuthForms";
import { Home } from "./pages/Home";
import { useState } from "react";

import { createContext } from "react";
import { CalculatorReducer } from "./pages/reducer/CalculatorReducer";

export const TitleContext=createContext()
export function App()
{
    const [title,setTitle]=useState("Home")
    return( 
      <TitleContext.Provider value={{setTitle,title}}>
           
            <BrowserRouter>
            <title>{title}</title>
            <Navbar/>
              <Routes>
                  <Route path='/' element={<Home/>}/>

                  <Route path="/about" element={<About/>}/>

                  <Route path="/contact" element={<Contact />}/>
                  
                  {/* <Route path="/login" element={<Login/>}/>

                  <Route path="/register" element={<Register />}/> */}

                  <Route path="/add" element={<AddIncident />}/>

                  <Route path="/list" element={<IncidentsList/>}/>

                  <Route path="/details" element={<IncidentDetails />}/>

                  <Route path="/user-forms" element={<UserAuthForms />}/>

                  <Route path="/reducer-calc" element={<CalculatorReducer />}/>
              </Routes>
            </BrowserRouter>
     
      </TitleContext.Provider>
  )
}