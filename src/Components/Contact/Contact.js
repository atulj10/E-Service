import React from 'react'
import Layout from '../Layout'
import './Contact.css'
import label from '../../Assets/contact-label.png'

const Contact = () => {
  return (
    <Layout>
      <div className='d-flex flex-column'> 
        <div className='position-absolute'>
          <img className='contact-label w-100' style={{ filter: "brightness(60%)", transform: "rotate(180deg)" }} src={label} alt='label-img' />
          <div className='contact-motto'>
            <h1>This is the motto to be displayed</h1>
          </div>
        </div>
          <iframe className='map position-relative' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18298.40233947787!2d78.75444132350714!3d22.19014481257282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd57da852063d1b%3A0x283d6feb6a74c0e!2sParasia%2C%20Madhya%20Pradesh%2C%20India!5e1!3m2!1sen!2sus!4v1709554431005!5m2!1sen!2sus" width={"50%"} height={"400px"} style={{border:"0",zIndex:"1000"}} ></iframe>
      </div>
    </Layout>
  )
}

export default Contact
