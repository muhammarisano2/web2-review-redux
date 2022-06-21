import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../../pages/Auth/Login'
import Register from '../../pages/Auth/Register'
import Home from '../../pages/home'
import DetailProduct from '../../pages/DetailProduct/DetailProduct'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/detail/:id" element={<DetailProduct/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers