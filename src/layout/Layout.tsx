import React from 'react'
import NavBar from '@/components/common/Navbar'
import Footer from '@/components/common/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout