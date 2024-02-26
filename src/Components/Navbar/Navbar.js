import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [scroll,setScroll]=useState(false)
    window.onscroll = function () { Scroll() };

    function Scroll() {
        if (document.documentElement.scrollTop > 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg ${scroll? "bg-dark border-bottom border-body" :"border-bottom bg-body-outline"} position-fixed w-100 z-1  `} data-bs-theme={`${scroll && "dark"}`}>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="#">Hidden brand</a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
