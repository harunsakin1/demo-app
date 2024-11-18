import React, { useEffect, useState } from 'react'
import {
    BrowserRouter, Route, Routes
} from 'react-router-dom'
import Login from './pages/Login'
import ProductList from './pages/ProductList'
import UserList from './pages/UserList'
import Yarisma from './pages/Yarisma'
import UserPage from './pages/UserPage'
import Home from './pages/Home'

function RouterPage() {
    const [token,setToken]=useState<string | null>(null);
    useEffect(()=>{
        const getToken=sessionStorage.getItem('accessToken');
        setToken(getToken);
    },[])

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/> 
            <Route path='/product' element={token===null ? <Login/> : <ProductList/>}/> 
            <Route path='/user-list' element={<UserList/>}/> 
            <Route path='/yarisma' element={<Yarisma/>}/> 
            <Route path='/user' element={<UserPage/>}/> 
            <Route path='/' element={<Home/>}/> 
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPage