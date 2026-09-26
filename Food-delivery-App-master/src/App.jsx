import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import  PlaceOrder  from './Pages/PlaceOrder/PlaceOrder'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const[showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup  setShowLogin ={setShowLogin}/>:<></>}
   <div className="app">
    
  <Navbar setShowLogin={setShowLogin}/>

 <Routes>
 <Route path='/' element={<Home/>}/>
 
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/order' element={<PlaceOrder/>}/>

 </Routes>
   </div>
   <Footer/>
   </>
  )
}

export default App