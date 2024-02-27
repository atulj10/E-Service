import React, { useState } from 'react'
import './Home.css'
import Layout from '../Layout'
import label from "../../Assets/label(home).avif"
import image1 from '../../Assets/card1(home).webp'
import image2 from '../../Assets/card2(home).webp'
import image3 from '../../Assets/card4(home).webp'
import image4 from '../../Assets/card5(home).webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFileCircleCheck, faHelmetSafety, faMicrochip, faUsersGear, faWifi } from '@fortawesome/free-solid-svg-icons'
import project1 from '../../Assets/project1.avif'
import project2 from '../../Assets/project2.avif'
import project3 from '../../Assets/project3.avif'
import project4 from '../../Assets/project4.avif'


const Home = () => {

  return (
    <Layout >
      <div className='d-flex flex-column'>
        <div className='label-container position-relative'>
          <img className='label' src={label} alt='label-img' />
          <div className='box text-center'>
            <h3 className='fs-1 mb-5 '>Something that is kinda like a motto</h3>
            <button className='btn btn-outline-success btn-lg m-3'>Click me</button>
          </div>
        </div>
        <h1 className='text-center' style={{ textShadow: "10px 10px 10px grey", margin: "10% 0 2% 0" }}>Goals' Engineering Services</h1>
        <div className='features row m-3 d-flex '>
          <div className=' image-container col-lg-3 col-md-12 position-relative'>
            <button className='readmore '>Go somehwere<FontAwesomeIcon className='arrow' icon={faArrowRight} /></button>
            <img className=" image" src={image1} alt='picture' />
          </div>
          <div className=' image-container col-lg-3 col-md-1 position-relative'>
            <button className='readmore '>Go somehwere<FontAwesomeIcon className='arrow' icon={faArrowRight} /></button>
            <img className="image " src={image4} alt='picture' />
          </div>
          <div className='image-container image-container col-lg-3 col-md-1 position-relative'>
            <button className='readmore '>Go somehwere<FontAwesomeIcon className='arrow' icon={faArrowRight} /></button>
            <img className="image " src={image3} alt='picture' />
          </div>
          <div className=' image-container col-lg-3 col-md-12 position-relative'>
            <button className='readmore '>Go somehwere<FontAwesomeIcon className='arrow' icon={faArrowRight} /></button>
            <img className="image " src={image2} alt='picture' />
          </div>
        </div>
        <div className='line'>

        </div>
        <div className='about-us text-center'>
          <div class="card">
            <div class="card-details">
              <p class="text-title">ABOUT US</p>
              <p class="text-body">Goals Engineering Services is a well-known non-destructive research (NDR) organization with a long tradition and vast experience in delivering high-quality services leveraging cutting-edge technologies. We are committed to providing Non-Destructive Testing (NDT) services to our customers in a cost-effective, dependable, durable, efficient, and intelligent manner while adhering to statutory and regulatory requirements.
                Goals engineering services</p>
            </div>
            <button class="card-button">More info &nbsp; <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <div className='line'>

        </div>
        <div className='project-container ' >
          <h1 className='project-title'>Projects</h1>
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item position-relative active">
                <img src={project1} className="carousal-image d-block w-100 h-100" alt="project-img" />
                <div className='carousal-content'>
                  <h1>Some  Title 1</h1>
                  <p> Some Contents 1</p>
                </div>
              </div>
              <div className="carousel-item position-relative">
                <img src={project2} className="carousal-image d-block w-100 h-100" alt="project-img" />
                <div className='carousal-content'>
                  <h1>Some  Title 2</h1>
                  <p> Some Contents 2</p>
                </div>
              </div>
              <div className="carousel-item position-relative">
                <img src={project3} className="carousal-image d-block w-100 h-100" alt="project-img" />
                <div className='carousal-content'>
                  <h1>Some  Title 3</h1>
                  <p> Some Contents 3</p>
                </div>
              </div>
              <div className="carousel-item position-relative">
                <img src={project4} className="carousal-image d-block w-100 h-100" alt="project-img" />
                <div className='carousal-content'>
                  <h1>Some  Title 4</h1>
                  <p> Some Contents 4</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <button className='btn btn-outline-success text-center m-5'>Read More  &nbsp;<FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
        <div className='line mb-5'>
        </div>
        <div className='services d-flex flex-column mt-5 pt-5'>
          <h1 className='text-center service-title'>SERVICES</h1>
          <div className='item-block d-flex justify-content-evenly m-5' >
            <div className='service-item text-center'>
              <FontAwesomeIcon className='fa-3x m-4 ' icon={faMicrochip} />
              <h3 className='text-shadow'>NDT Services</h3>
            </div>
            <div className='service-item text-center'>
              <FontAwesomeIcon className='fa-3x m-4 ' icon={faHelmetSafety} />
              <h3 className='text-shadow'>HSE Services</h3>
            </div>
            <div className='service-item text-center'>
              <FontAwesomeIcon className='fa-3x m-4 ' icon={faFileCircleCheck} />
              <h3 className='text-shadow'>Quality-Related Service</h3>
            </div>
            <div className='service-item text-center'>
              <FontAwesomeIcon className='fa-3x m-4 ' icon={faUsersGear} />
              <h3 className='text-shadow'>Skilled Manpower</h3>
            </div>
            <div className='service-item text-center'>
              <FontAwesomeIcon className='fa-3x m-4 ' icon={faWifi} />
              <h3 className='text-shadow'>Softwere Service</h3>
            </div>
          </div>
          <div className='services-content container text-center'>
            <p className='services-p m-4'>Goals Engineering Services  Specializes In Commercial Construction And NDT Services , But Over The Years We Have Undertaken A Number Of Projects In Industrial And Residential Property Construction. We Are A Flexible Team With Expertise In All Aspects Of Construction Work.</p>
            <button className='btn btn-success'>More Services &nbsp;<FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
        <div className='line mb-5'></div>
        <div className='career mt-5 pt-5 text-center'>
          <h1 className='career-title'>CAREER</h1>
          <p className='career-content'>Goals Engineering Services are always looking for skilled  professionals to join our team. If you think you’d make a good fit, have a look at our open positions, or leave an unsolicited application.</p>
          <button className='btn btn-success m-4'>See Positions &nbsp; <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
