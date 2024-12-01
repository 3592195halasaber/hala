import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'

export default function LayOut() {
    return (
        <div>



            <NavBar />
            <div className=""><Outlet /> </div>
            <Footer />
        </div>
    )
}
