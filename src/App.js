import React from 'react'
import './app.css'


import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Components/Login/login'
import Home from './Components/Homepage/home'
import Navbar from './Components/Navbar/navbar'
import FillReport from './Components/Report/fillReport'
import Report from './Components/Report/report'
const App = () => {
  return (
    <>
    
    <Navbar/>
    <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/> 
          <Route path='/fillReport' element={<FillReport/>} />
          <Route path='/viewReport' element={<Report/>} />       
        </Routes>
        
    </BrowserRouter> 
    </>   
  )
}

export default App