import React from 'react'
import Layout from '../Layout'
import './Services.css'
import label from '../../Assets/service-label.png'
import ServiceCard from './ServiceCard'
import { faGlobe, faHelmetSafety, faPenRuler, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
  return (
    <Layout>
      <div className='service'>
        <div className='servce-label position-relative'>
          <img src={label} width={"100%"} style={{ filter: "brightness(90%)" }} />
          <div className='service-slogan'>
            <h1>Motto</h1>
          </div>
        </div>
      </div>
      <div className='service-details'>
        <h1 className='text-center my-5'>WE PROVIDE</h1>
        <div className='row service-blocks'>
          <div className='col-lg-6 text-center '>
            <ServiceCard title="NDT Services And Inspection Services " description="NDT Services Provides Non-Destructive Testing (NDT) Service Chhindwara Madhya pradesh  to Engineering Industries and presenting with the most elevated Precision and Quality. We are additionally giving NDT Consultation, Training, and Certification in the accompanying techniques:
                                                                                   NDT Services  Chhindwara Provides Non-Destructive Testing (NDT) Service to Engineering Industries and presenting with the most elevated Precision and Quality. We are additionally giving NDT Consultation, Training, and Certification in the accompanying techniques:
                                                                                   Ultrasonic Testing (UT) , Radio graphic Testing (RT) , Liquid Penetration Testing (LPT),Magnetic Particle Testing (MPT) , Leak Testing (LT)  , Liquid Penetrate Testing (LPT),Visual Testing V
                                                                                    :Applications :
                                                                                   Automotive Industries, Offshore Industries,
                                                                                   Marine Industries, Powergen Industries,
                                                                                   Manufacturing Industries, WasteManagement,
                                                                                   Petrochemical Industries." icon={faScrewdriverWrench} />
          </div>
          <div className='col-lg-6 text-center'>
            <ServiceCard title="HSE Services " description="Safety Officers are responsible for planning, implementing and overseeing company's employee safety at work. Their main duty is to ensure that the company is in complience and adheres to Occupational Health and Safety (OHS) guidelines."
              icon={faHelmetSafety} />
          </div>
          <div className='col-lg-6 text-center '>
            <ServiceCard title="Software Services " description="Our clients praise our full-scale project management and complete Software capabilities as our main strengths. We will look after your commercial project from conception to Services, Software work and everything else in-between."
              icon={faGlobe} />
          </div>
          <div className='col-lg-6 text-center '>
            <ServiceCard title="Civil Consulting" description=" Shuttering and centering are construction techniques used to provide support and framework during the pouring and setting of concrete. Shuttering refers to the process of creating temporary structures or formwork using wooden planks, metal panels, or plywood to contain the concrete and give it the desired shape and structure. It prevents the concrete from spilling or deforming before it sets. On the other hand, centering involves setting up a temporary support system, usually made of steel or wooden props, to hold the shuttering in place and bear the weight of the concrete. This ensures the stability and strength of the structure being built. Shuttering and centering are crucial steps in the construction process, ensuring the successful casting of concrete and the creation of durable, safe, and aesthetically pleasing structures.
                                                      Goals Engineering Services  residential design and architecture team makes us different from our competitors. We can look after your construction project from start to finish."
              icon={faPenRuler} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services
