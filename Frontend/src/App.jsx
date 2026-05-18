import React from 'react'
import Navbar from './components/Navbar'
import Features from './Pages/Features'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Calculator from './Pages/Calculator'
import Stations from './Pages/Stations'
import Register from './Pages/Register'
import Login from './Pages/Login'

const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/features' element={<Features/>}/>
    <Route path='/calculator' element={<Calculator/>}/>
    <Route path='/stations' element={<Stations/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App