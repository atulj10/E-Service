import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import logo from '../../Assets/Logo.png'

const Footer = () => {
  const width=window.innerWidth;

  return (
    <div className='row footer-container mx-0'>
      <div className={` col-lg-4 col-md-6 col-sm-12  d-flex ${!(width<500) ? "flex-column justify-content-center":" justify-content-around my-4"}`}>
        <img className='logo pb-2' src={logo} alt='logo-img'/>
        <h5 className={`${(width<500) && "align-self-center fs-1"}`} style={{color:"#F5DD61"}}>Goal E Services</h5>
      </div>
      <div className=' text-center col-lg-4 col-md-6 col-sm-12 d-flex flex-column '>
        <h3 className='mb-5'>Contact</h3>
        <div className='row pr-2'>
          <div className='footer-contact col-lg-6 '>
            <p>+918770757305 </p>
            <p>+917999354633</p>
          </div>
          <div className='footer-contact col-lg-6 '>
            <a className='email-link' href='mailto:shashvat@goals4es.com'><p>shashvat@goals4es.com</p></a>
            <a className='email-link' href='mailto:niwariya.ravindra@goals4es.com'><p>niwariya.ravindra@goals4es.com</p></a>
            <a className='email-link' href='mailto:hr@goals4es.com'><p>hr@goals4es.com</p></a>
          </div>
        </div>
      </div>
      <div className='text-center col-lg-4 col-md-6 col-sm-12 d-flex flex-column '>
        <h3 className='mb-5'>Follow Us</h3>
        <div>
          <a  href='https://www.facebook.com/goals4es'><FontAwesomeIcon icon={faInstagram} className='fa-2x icon' /></a>
          <a href='https://www.instagram.com/goals4es/'><FontAwesomeIcon icon={faFacebook} className='fa-2x icon' /></a>
          <a><FontAwesomeIcon icon={faTwitter} className='fa-2x icon' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
