import React, { useState } from 'react';
import './navbar.css';
import logo from '../../Assets/Logo.png';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faBriefcase, faHome, faMobile, faPhone, faScrewdriverWrench, faUserTie } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    window.onscroll = function () { Scroll() };
    const width=window.innerWidth
    const [active, setActive] = useState("");

    function Scroll() {
        if (document.documentElement.scrollTop > 200) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg d-flex  ${scroll  ? "bg-dark border-body" : "bg-body-outline"} position-fixed w-100 z-1 px-0`} data-bs-theme={`${(scroll &&  width) && "dark"}`}>
                <div className='position-absolute logo d-flex mt-5' style={{ left: "10px" }}>
                    <img src={logo} height={'65px'} alt="logo" />
                    <span className='mx-3' style={{ color: "#F5DD61" }}>Goals Engineering Services </span>
                </div>
                <div className="d-flex flex-column mx-5">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse navbar-container " id="navbarTogglerDemo01">
                        <div >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 z-3">
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/' id='home' activeClassName='active'><span className='nav-icon'><FontAwesomeIcon icon={faHome} /></span><span className='nav-name'>Home</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/about' id='about' activeClassName='active'><span className='nav-icon'><FontAwesomeIcon icon={faAddressCard} /></span><span className='nav-name'>ABOUT US</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/projects' id='project' activeClassName='active'><span className='nav-icon'><FontAwesomeIcon icon={faBriefcase} /></span><span className='nav-name'>PROJECTS</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/blog' id='blog' activeClassName='active'><span className='nav-icon'><FontAwesomeIcon icon={faMobile} /></span><span className='nav-name'>BLOG</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/career' id='career' activeClassName='active'><span className='nav-icon'><FontAwesomeIcon icon={faUserTie} /></span><span className='nav-name'>CAREER</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/contact' id='contact' activeClassName='active'><span className='nav-icon'><FontAwesomeIcon icon={faPhone} /></span><span className='nav-name'>CONTACT</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className='nav-link' to='/services' id='services' activeClassName='active' onClick={() => setActive("services")}><span className='nav-icon'><FontAwesomeIcon icon={faScrewdriverWrench} /></span><span className='nav-name'>SERVICES</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
