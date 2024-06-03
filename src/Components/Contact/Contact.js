import React from 'react'
import Layout from '../Layout'
import './Contact.css'
import label from '../../Assets/contact-label.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {

  return (
    <Layout>
      <div className='d-flex flex-column contact-container' >
        <div className='position-absolute label-container'>
          <img className='contact-label ' style={{ width:"100vw",filter: "brightness(60%)", transform: "rotate(180deg)" }} src={label} alt='label-img' />
          <div className='contact-motto'>
            <h1>" Connecting You to Innovation "</h1>
          </div>
        </div>
        <div className='map '>
          <h1 className='' style={{ textShadow: "5px 5px 10px grey", margin: "5% 0% 5% 0%", fontSize: "3rem" }}>WHY DON'T VISIT US !?</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d14776.469629663527!2d78.756409!3d22.197644!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDExJzQyLjMiTiA3OMKwNDUnMzYuOCJF!5e0!3m2!1sen!2sus!4v1717413472792!5m2!1sen!2sus" width={"70%"} height={"400px"} style={{ border: "0", zIndex: "1000" }}></iframe>
        </div>
        <div className='line my-5'></div>
        <div className='d-flex flex-column'>
          <h1 className='text-center m-5  contact-title' style={{ textShadow: "5px 5px 10px grey", fontSize: "3rem" }}>GIVE US A VISIT!</h1>
          <div className='address row m-5'>
            <div className='col-lg-4 my-4'>
              <h2 className='text-center my-4 fs-1 contact-title' >Registered Office:</h2>
              <p style={{ fontSize: "1.5rem", textAlign: "start", lineHeight: "180%" }}>Ward No. 05, Behind of Aradhana Convent Nursery School Parasia<br />
                <b>Town :</b>&nbsp; Parasia<br />
                <b>District :</b>&nbsp; Chhindwara<br />
                <b>State :</b>&nbsp; Madhya Pradesh<br />
                <b>Pincode :</b>&nbsp; 480441</p>
            </div>
            <div className='col-lg-4 my-4'>
              <h2 className='text-center my-4 fs-1 contact-title' >Registered Office:</h2>
              <p style={{ fontSize: "1.5rem", textAlign: "start", lineHeight: "180%" }}>Panchvally College Road New Parasia Nager Khirsadow <br />
                <b>Town :</b>&nbsp; Parasia<br />
                <b>District :</b>&nbsp; Chhindwara<br />
                <b>State :</b>&nbsp; Madhya Pradesh<br />
                <b>Pincode :</b>&nbsp; 480441</p>
            </div>
          </div>
          <h1 className='text-center m-5  contact-title' style={{ textShadow: "5px 5px 10px grey", fontSize: "3.5rem" }}>OR MAYBE!</h1>
          <div className='row mb-5'>
            <div className='col-lg-6 px-0 text-center'>
              <h1 className='text-center my-5 d-flex flex-column contact-title' style={{ textShadow: "5px 5px 10px grey", fontSize: "3rem" }}><FontAwesomeIcon icon={faPhone} className='my-3' />CALL US! </h1>
              <div className='d-flex justify-content-center'>
                <h3 className='mx-4 numbers  mb-0 align-self-center'>+918770757305 &nbsp; &nbsp; +917999354633</h3>
              </div>
            </div>
            <div className='col-lg-6  px-0'>
              <h1 className='text-center my-5 d-flex flex-column contact-title' style={{ textShadow: "5px 5px 10px grey", fontSize: "3rem" }}><FontAwesomeIcon icon={faEnvelope} className='my-3' /> WRITE TO US!</h1>
              <div className='d-flex email ' style={{}}>
                <h3 className='my-2  d-flex flex-column text-center'>
                  <b className='my-3'>For Enquiry</b>
                  shashvat@goals4es.com
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLScNQ_E4woBylqP8wi-I5VqxqhLwoc441DZVRom4pDSrrK5xFg/viewform'>
                    <button className='btn btn-success my-5 '>CLICK FOR MORE <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </a>
                </h3>
                <h3 className='my-2  d-flex flex-column text-center'>
                  <b className='my-3'>For Career</b>
                  hr@goals4es.com
                  <a href='https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform'>
                    <button className='btn btn-success my-5'>CLICK FOR MORE <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
