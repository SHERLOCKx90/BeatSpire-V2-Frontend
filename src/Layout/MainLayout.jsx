import React, { Children } from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({ children }) => {
    return (
        <div className='bg-black overflow-hidden contrast-100'>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout