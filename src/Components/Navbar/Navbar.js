import React, { useState } from 'react'
import './navbar.css'
import logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBriefcase, faHome, faMobile, faPhone, faScrewdriverWrench, faUserTie } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [scroll, setScroll] = useState(false)
    window.onscroll = function () { Scroll() };
    const [active, setActive] = useState("")

    function Scroll() {
        if (document.documentElement.scrollTop > 200) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }



    return (<>
        <nav className={`navbar navbar-expand-lg d-flex  ${scroll ? "bg-dark  border-body" : " bg-body-outline"} position-fixed w-100 z-1 px-0  `} data-bs-theme={`${scroll && "dark"}`}>
            <div className='position-absolute' style={{left:"10px"}}>
                <img src={logo} height={'65px'} />
                <span className='mx-3' style={{color:"#F5DD61"}}>Goals Engineering Services </span>
            </div>
            <div className="d-flex ">
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse navbar-container " id="navbarTogglerDemo01">
                    <div >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "home" && "active"}`} onClick={() => setActive("home")} to='/' id='home'><span className='nav-icon'><FontAwesomeIcon icon={faHome} /></span><span className='nav-name'>Home</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "about" && "active"}`} onClick={() => setActive("about")} to='/about' id='about'><span className='nav-icon'><FontAwesomeIcon icon={faAddressCard} /></span><span className='nav-name'>ABOUT US</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "project" && "active"}`} onClick={() => setActive("project")} to='/projects' id='project'><span className='nav-icon'><FontAwesomeIcon icon={faBriefcase} /></span><span className='nav-name'>PROJECTS</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "blog" && "active"}`} onClick={() => setActive("blog")} to='/blog' id='blog'><span className='nav-icon'><FontAwesomeIcon icon={faMobile} /></span><span className='nav-name'>BLOG</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "career" && "active"}`} onClick={() => setActive("career")} to='/career' id='career'><span className='nav-icon'><FontAwesomeIcon icon={faUserTie} /></span><span className='nav-name'>CAREER</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "contact" && "active"}`} onClick={() => setActive("contact")} to='/contact' id='contact'><span className='nav-icon'><FontAwesomeIcon icon={faPhone} /></span><span className='nav-name'>CONTACT</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${active === "services" && "active"}`} onClick={() => setActive("services")} to='/services' id='services'><span className='nav-icon'><FontAwesomeIcon icon={faScrewdriverWrench} /></span><span className='nav-name'>SERVICES</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar
