import React from 'react'
import Layout from '../../Components/Layout'
import label from '../../Assets/career-label.jpg'
import './Career.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCheck, faCross, faDesktop, faLandmarkDome, faLaptopFile, faLocationCrosshairs, faLocationDot, faLocationPin, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons'

const Career = () => {

  const data_non_technical = [
    { title: "CIVIL ENGINEER", location: "Betul and Hoshangabad", education: "BE/B.Tech", exprience: "0-1 year", posts: "5", enquiry: false,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"},
    { title: "Unskilled labor", location: "Betul and Hoshangabad", education: "", exprience: "", posts: "20", enquiry: true,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"},
    { title: "Skilled Inspection Engineer", location: "Anjar (Gujarat )", education: "BE/B.Tech/Diploma/graduate", exprience: "0-1 year", posts: "10", enquiry: false,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"},
    { title: "Mechanical inspection Engineer", location: " Gujarat / Maharashtra (Mumbai)", education: "B.Tech/BE (Mechanical), Nace level - I & II / B gas (for coating),CSWIP 3.1&3.2 ", exprience: "Fabrication field ,Inspection field (Line pipe and Coating, Pressure Vessels, Heat Exchanger, Column Structures ,Rotary parts, Beams.", posts: "10", enquiry: false,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"}
  ]

  const data_technical = [
    { title: "Development Trainee", skilled:"PHP (Laravel / CodeIgniter), JavaScript, MYSQL, LINUX OS",desiredSkills:" Angular, JAVA, Node JS", posts: "5", enquiry: false,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"},
    { title: "Development Trainee", skilled:"Full Stack JAVA Developer MYSQL, HTML, CSS, JavaScript",desiredSkills:" Angular, PHP, Node JS, REST", posts: "4", enquiry: false,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"},
    { title: "DB Admin", skilled:"MY SQL, Oracle / AWS / Azure / Google Cloud, LINUX OS, Windows OS",desiredSkills:" PostgreSQL / MongoDB, GitHub, JavaScript", posts: "2", enquiry: false,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"},
    { title: "Linux Admin", skilled:"MY SQL, LINUX OS, SVN, GitHub, SSH, SSL, Win SCP, DNS, HTTP",desiredSkills:" Oracle / AWS / Azure /Google Cloud", posts: "2", enquiry: true,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"},
    { title: "Testing", skilled:"FMY SQL, JAVA, JMeter, HTML, WebDriver",desiredSkills:" Oracle / AWS, Selenium", posts: "2", enquiry: false,link:"https://docs.google.com/forms/d/e/1FAIpQLSfkji8E44YK6ln6jtv14OkamE-yMqCOEGZMj2z_qON3wvUO1w/viewform"}
  ]
  return (
    <Layout>
      <div className='career-container'>
        <div className='career-label position-relative' style={{ marginBottom: "5%" }}>
          <img className='career-label-image' src={label} />
          <div className='career-motto'>
            <h1>Something</h1>
          </div>
        </div>
        <div>
          <h1 className='text-center mb-5'>WORK WITH US</h1>
          <h2 className='text-center'>NON-TECHNICAL JOBS</h2>
          <div className='non-technical row d-flex justify-content-center'>
            {data_non_technical.map((i) => (<div className=' non-technical-job text-center col-lg-3'>
                  <h3 className='align-self-center mb-4'><b>{i.title.toUpperCase()}</b></h3>
                  <h5><FontAwesomeIcon icon={faLocationDot} />&nbsp;&nbsp;&nbsp;{i.location}</h5>
                  <h5><FontAwesomeIcon icon={faLandmarkDome} />&nbsp;&nbsp;&nbsp;{i.education}</h5>
                  <h5><FontAwesomeIcon icon={faCalendarCheck} />&nbsp;&nbsp;&nbsp;{i.exprience}</h5>
                  <h5><b>POSTS</b> : {i.posts}</h5>
                  <h5><b>ENQUIRY</b> : &nbsp;{(i.enquiry) ? <FontAwesomeIcon icon={faCheck} className='text-success' /> : <FontAwesomeIcon icon={faXmark} className='text-danger' />}</h5>
                  {((i.enquiry) && (<button className='btn btn-success align-self-center my-3'>ENQUIRY<FontAwesomeIcon className='mx-3' icon={faArrowRight}/></button>) )}
                </div>))}
          </div>
          <h2 className='text-center'>TECHNICAL JOBS</h2>
          <div className='technical  row d-flex justify-content-center'>
          {data_technical.map((i) => {
                return (<div className='technical-job text-center col-lg-3'>
                  <h3 className='align-self-center mb-4'><b>{i.title.toUpperCase()}</b></h3>
                  <h5><FontAwesomeIcon icon={faLaptopFile} />&nbsp;&nbsp;&nbsp;{i.skilled}</h5>
                  <h5><FontAwesomeIcon icon={faDesktop} />&nbsp;&nbsp;&nbsp;{i.desiredSkills}</h5>
                  <h5><b>POSTS</b> : {i.posts}</h5>
                  <h5><b>ENQUIRY</b> : &nbsp;{(i.enquiry) ? <FontAwesomeIcon icon={faCheck} className='text-success' /> : <FontAwesomeIcon icon={faXmark} className='text-danger' />}</h5>
                  {((i.enquiry) && (<button className='btn btn-success align-self-center my-3'>ENQUIRY<FontAwesomeIcon className='mx-3' icon={faArrowRight}/></button>) )}
                </div>)
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Career
