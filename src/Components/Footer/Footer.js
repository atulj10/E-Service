import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import logo from '../../Assets/Logo.png'

const Footer = () => {
  return (
    <div className='row footer-container'>
      <div className='col-lg-4 col-md-6 col-sm-12 d-flex flex-column justify-content-center'>
        <img className='logo pb-2' src={logo} alt='logo-img'/>
        <h5>Goal E Services</h5>
      </div>

      <div className=' text-center col-lg-4 col-md-6 col-sm-12 d-flex flex-column '>
        <h3 className='mb-5'>Contact</h3>
        <div className='row pr-2'>
          <div className='col-6 '>
            <p>+91 6205769890</p>
            <p>+91 6205769890</p>
          </div>
          <div className='col-6 '>
            <p>Demo@email.com</p>
            <p>Demo@email.com</p>
            <p>Demo@email.com</p>
            <p>Demo@email.com</p>
          </div>
        </div>
      </div>
      <div className='text-center col-lg-4 col-md-6 col-sm-12 d-flex flex-column '>
        <h3 className='mb-5'>Follow Us</h3>
        <div>
          <FontAwesomeIcon icon={faInstagram} className='fa-2x icon' />
          <FontAwesomeIcon icon={faFacebook} className='fa-2x icon' />
          <FontAwesomeIcon icon={faTwitter} className='fa-2x icon' />
        </div>
      </div>
    </div>
  )
}

export default Footer
