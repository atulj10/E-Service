import React from 'react'
import Layout from '../Layout'
import label from '../../Assets/project-label.png'
import './Project.css'
import company1 from '../../Assets/client-1.png'
import company2 from '../../Assets/client-2.png'
import company3 from '../../Assets/client-3.png'
import company4 from '../../Assets/client-4.png'

const Projects = () => {
  return (
    <Layout>
      <div className='label-container position-relative'>
        <div className='label'>
          <img className='label-image' src={label} />
          <div className='project-slogan'>
            <h1>Slogan</h1>
          </div>
        </div>
        <div className='companies d-flex flex-column my-5'>
          <h4 style={{ textShadow: "10px 10px 5px grey" }}>Partnered &nbsp; Firms</h4>
          <div className='companies'>
            <img className='company-image' src={company1} alt='client-img' />
            <img className='company-image' src={company2} alt='client-img' />
            <img className='company-image' src={company3} alt='client-img' />
            <img className='company-image' src={company4} alt='client-img' />
          </div>
        </div>
        <div className='company-detail'>
          <div className='company-flex company-up'>
            <img style={{filter: "drop-shadow(10px 10px 4px rgb(59, 59, 59))"}} src={company1} alt='client-image' />
            <h1 className="m-5" style={{textShadow:"10px 10px 10px black"}}>Company name</h1>
            <p className='text-center mx-4'>This is dummy text that is to be used inorder to describe about the project </p>
          </div>
          <div className='company-flex company-down'>
            <img style={{filter: "drop-shadow(10px 10px 4px rgb(59, 59, 59))"}} src={company2} alt='client-image' />
            <h1 className="m-5" style={{textShadow:"10px 10px 10px black"}}>Company name</h1>
            <p className='text-center mx-4'>This is dummy text that is to be used inorder to describe about the project </p>
          </div>
          <div className='company-flex company-up'>
            <img style={{filter: "drop-shadow(10px 10px 4px rgb(59, 59, 59))"}} src={company3} alt='client-image' />
            <h1 className="m-5" style={{textShadow:"10px 10px 10px black"}}>Company name</h1>
            <p className='text-center mx-4'>This is dummy text that is to be used inorder to describe about the project </p>
          </div>
          <div className='company-flex company-down'>
            <img style={{filter: "drop-shadow(10px 10px 4px rgb(59, 59, 59))"}} src={company4} alt='client-image' />
            <h1 className="m-5" style={{textShadow:"10px 10px 10px black"}}>Company name</h1>
            <p className='text-center mx-4'>This is dummy text that is to be used inorder to describe about the project </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Projects
