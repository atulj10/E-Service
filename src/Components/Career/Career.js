import React from 'react'
import Layout from '../../Components/Layout'
import label from '../../Assets/career-label.jpg'
import './Career.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck, faCross, faDesktop, faLandmarkDome, faLaptopFile, faLocationCrosshairs, faLocationDot, faLocationPin, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

const Career = () => {
  const width=window.innerWidth

  const data_non_technical = [
    { title: "Fitter", location: "", education: "", exprience: "", posts: "10", enquiry: true, link: "https://docs.google.com/forms/d/e/1FAIpQLSc9B_nK3sUbsUV0lf4vM7bSw9ONjHJG59gfBAcxAuX0I-HjAg/viewform" },
    ]

  const data_technical = []
  return (
    <Layout>
      <div className='career-container'>
        <div className='career-label position-relative' style={{ marginBottom: "5%" }}>
          <img className='career-label-image' src={label} />
          <div className='career-motto'>
            <h1>
              " We Don't offer a job. We Offer a Career "</h1>
          </div>
        </div>
        <div className='jobs'>
          <h1 className='text-center mb-5'>WORK WITH US</h1>
          <h2 className='text-center'>NON-TECHNICAL JOBS</h2>
          <div className='non-technical row d-flex justify-content-center'>
            {data_non_technical.map((i) => (
              <div className=' non-technical-job text-center col-lg-3'>
                <h3 className='align-self-center mb-4'><b>{i.title.toUpperCase()}</b></h3>
                <h5><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;&nbsp;{i.location ? i.location:"--"}</h5>
                <h5><FontAwesomeIcon icon={faLandmarkDome} />&nbsp;&nbsp;&nbsp;{i.education?i.education:"--"}</h5>
                <h5><FontAwesomeIcon icon={faCalendarCheck} />&nbsp;&nbsp;&nbsp;{i.exprience ? i.exprience :"--"}</h5>
                <h5><b>POSTS</b> : {i.posts}</h5>
                <h5><b>ENQUIRY</b> : &nbsp;{(i.enquiry) ? <FontAwesomeIcon icon={faCheck} className='text-success' /> : <FontAwesomeIcon icon={faXmark} className='text-danger' />}</h5>
                {((i.enquiry) && (<button className='btn btn-success align-self-center my-3'>LINK<FontAwesomeIcon className='mx-3' icon={faArrowRight} /></button>))}
              </div>))}
          </div>
          <h2 className='text-center'>TECHNICAL JOBS</h2>
          <div className='technical  row d-flex justify-content-center'>
            {data_technical.map((i) => {
              return (
                <div className='technical-job text-center col-lg-3'>
                  <h3 className='align-self-center mb-4'><b>{i.title.toUpperCase()}</b></h3>
                  <h5><FontAwesomeIcon icon={faLaptopFile} />&nbsp;&nbsp;&nbsp;{i.skilled}</h5>
                  <h5><FontAwesomeIcon icon={faDesktop} />&nbsp;&nbsp;&nbsp;{i.desiredSkills}</h5>
                  <h5><b>POSTS</b> : {i.posts}</h5>
                  <h5><b>ENQUIRY</b> : &nbsp;{(i.enquiry) ? <FontAwesomeIcon icon={faCheck} className='text-success' /> : <FontAwesomeIcon icon={faXmark} className='text-danger' />}</h5>
                  {((i.enquiry) && (<button className='btn btn-success align-self-center my-3'>LINK<FontAwesomeIcon className='mx-3' icon={faArrowRight} /></button>))}
                </div>)
            })}
            {
              data_technical.length==0 && <h1 className='text-center my-5 mx-0 p-0'>We are sorry to say! No jobs for Techincal Positions  </h1>
            }
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Career
