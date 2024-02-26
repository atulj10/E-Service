import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
    return (
        <div className='d-flex flex-column flex-1 '>
            <Navbar />
            <main style={{ minHeight: "89.3vh" }}>
                {children}
            </main>
            <Footer className="align-self-end" />
        </div>
    )
}

export default Layout
