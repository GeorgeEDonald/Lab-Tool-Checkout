import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const isUserLogin = localStorage.getItem("isLoggedIn")
    return (
        <>
            {
                isUserLogin ? <Outlet /> : <Navigate to="/" />
            }
        </>
    )
}

export default PrivateRoutes