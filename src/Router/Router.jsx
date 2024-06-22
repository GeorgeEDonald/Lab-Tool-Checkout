import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Home from '../Pages/Home'
import Lab1 from '../Pages/Lab1'
import Lab2 from '../Pages/Lab2'
import Lab3 from '../Pages/Lab3'
import Product from '../Pages/Product'
import Account from '../Pages/Account'
import PrivateRoutes from '../Components/PrivateRoutes'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<PrivateRoutes/>}>
                <Route path='/home' element={<Home />} />
                <Route path='/lab1' element={<Lab1 />} />
                <Route path='/lab2' element={<Lab2 />} />
                <Route path='/lab3' element={<Lab3 />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/account' element={<Account />} />
            </Route>
        </Routes>
    )
}

export default Router