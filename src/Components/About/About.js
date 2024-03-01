import React, { useState } from 'react'
import Layout from '../Layout'
import './About.css'
import label from "../../Assets/about-us-label.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Card from '../Card/Card'
import image1 from '../../Assets/team-1.png'
import image2 from '../../Assets/team-2.png'
import image3 from '../../Assets/team-3.png'
import image4 from '../../Assets/team-4.png'
import image5 from '../../Assets/team-5.png'

const About = () => {
  const [box1, setbox1] = useState(false)
  const [box2, setbox2] = useState(false)
  const [box3, setbox3] = useState(false)
  const [box4, setbox4] = useState(false)

  return (
    <Layout>
      <div className='about-container'>
        <div className='position-relative'>
          <img className='about-label' src={label} alt='label-img' width={"100%"} />
          <div className='about-testimonial d-flex flex-column justify-content-center'>
            <div className='d-flex flex-column p-3' style={{ backdropFilter: "blur(100px)" }}>
              <h3 className='text-center fs-2'>”Every day, they strive to improve their service to the clients by developing the right blend of technology and creativity to make sure every job done is done as efficiently as possible.”</h3>
              <p className='align-self-end fs-4'>-Clarice Turner</p>
            </div>
          </div>
        </div>
        <div className='line mb-5'></div>
        <div className='details-section'>
          <h1 className='text-center p-5' style={{textShadow:"5px 5px 5px grey"}}>WHO ARE WE !?</h1>
          <div className='detail-main-section '>
            <div className='d-flex align-items-baseline'>
              <div className='box-comment arrow-right' style={{ height: `${box1 ? "" : "100px"}` }}>
                <h2 style={{ paddingBottom: "20px" }}>Overview</h2>
                <p>dummt textGoals Engineering Services is a well-known non-destructive research organization with a long tradition and vast experience in delivering high-quality services leveraging cutting-edge technologies. We are committed to providing Non-Destructive Testing (NDT) services in Dist: Chhindwara Madhya Pradesh  and kutch Dist: Gujarat to our customers in a cost-effective, dependable, durable, efficient, and intelligent manner while adhering to statutory and regulatory requirements.</p>
              </div>
              <button className=' btn btn-dark rounded-5 p-2 px-4' style={{ border: "2px solid black" }} onClick={() => setbox1(prev => !prev)}><FontAwesomeIcon icon={box1 ? faAngleUp : faAngleDown} /></button>
            </div>
            <div className='d-flex align-items-baseline'>
              <button className=' btn btn-dark rounded-5 p-2 px-4' style={{ border: "2px solid black" }} onClick={() => setbox2(prev => !prev)}><FontAwesomeIcon icon={box2 ? faAngleUp : faAngleDown} /></button>
              <div className='box-comment arrow-left' style={{ height: `${box2 ? "" : "100px"}` }}>
                <h2 style={{ paddingBottom: "20px" }}>History</h2>
                <p>Goals Engineering Services In Chhindwara Madhya Pradesh Our Skilled Trainers, NDT Technicians, And Consultants Have Over 10 Years Of Industrial Experience In Precision, Heavy Engineering, Piping, Boilers, Pressure Vessels, Casting, Forging, Defense, And Aerospace Components.</p>
              </div>
            </div>
            <div className='d-flex align-items-baseline'>
              <div className='box-comment arrow-right' style={{ height: `${box3 ? "" : "100px"}` }}>
                <h2 style={{ paddingBottom: "20px" }}>Vision</h2>
                <p>Goals Engineering Services Chhindwara (Mp) Is The Best NDT Provider And Training Centre In India, We Are Expanding Our Fields. Giving Product And Technical Service To Businesses By Concentrating On Customer Engagement, Enhancing Client Retention By Offering Top-Tier Management, And Becoming A Leader In The Industry By Providing Excellence In Planning Diploma, Therapy, And Each NDT Solution.</p>
              </div>
              <button className=' btn btn-dark rounded-5 p-2 px-4 ' style={{ border: "2px solid black" }} onClick={() => setbox3(prev => !prev)}><FontAwesomeIcon icon={box3 ? faAngleUp : faAngleDown} /></button>
            </div>
            <div className='d-flex align-items-baseline'>
              <button className=' btn btn-dark rounded-5 p-2 px-4 ' style={{ border: "2px solid black" }} onClick={() => setbox4(prev => !prev)}><FontAwesomeIcon icon={box4 ? faAngleUp : faAngleDown} /></button>
              <div className='box-comment arrow-left' style={{ height: `${box4 ? "" : "100px"}` }}>
                <h2 style={{ paddingBottom: "20px" }}>Mission</h2>
                <p>To Provide High-Quality NDT Administration Madhya Pradesh Dist :Chhindwara  Solutions, And Preparation While Retaining Professional Competence And Adaptability Through The Use Of Advanced Tools. </p>
              </div>
            </div>
          </div>
        </div>
        <div className='line mb-5'></div>
        <div>
          <h1 className='text-center' style={{textShadow:"5px 5px 5px grey"}}>WHO WE ARE !?</h1>
          <div className='row about-card-container'>
            <div className='col-lg-6'>
              <Card image={image1} name="Mr. Ravindra Niwariya" designation="Co-founder" email="niwariya.ravindra@goals4es.com" description="A knowledgeable, dynamic engineer, professional and expert in materials engineering at NDT Level II UT MT PT RT VT ET. He has more than 12 years of professional experience in NDT inspection, welding inspection, mechanical testing, metallography, NDT Level II responsibilities, consulting, NDT technique establishing, effective NDT procedure preparation, validation and approval, ASME NDT process audits, Aerospace NDT, ASNT &PCN Training and Certification.
                                                                                                                  He having experience in National with professionals within Project Management, Welding & Inspection, Quality Control & Assurance (RTFI, UT & PAUT, TOFD, AUT of Plate & piping Welding Joints), Visual Testing, etc.
                                                                                                                  The Exposure gained through working across Refinery, Petrochemical, LNG, CNG, Hydro & Thermal Power Projects in the field of Fabrication, Erection, Modules, Barge, Rig & Land Rig, etc.
                                                                                                                  Coordination with third-party inspection agencies, NDT agencies e.g. (Superintend , BVIP, ITI International, D&V, DCPL, TUV, etc.).
                                                                                                                  Head Operation on Behalf Of Esser Project India Ltd IOCL Ratlam (Terminal)
                                                                                                                  Superintendence Company of India (P) Ltd. Work Field Quality Assurance Engineer 0 On Behalf of BHEL Chandrapur Site 2*500 MV Mahagenco Project.
                                                                                                                  Deft in preparing WPS & establishing PQR as per code/specification requirements, in line with project requirements.
                                                                                                                  Adept with welding procedures & welders performance qualifications as per International /National Codes& Standards
                                                                                                                  Meticulously performed material & NDT Inspection, before welding (Cutting, Weld joint Preparation & Fit up Pre-heat. Check, during welding (welding parameter, inter pass temp, process), after final (weld visual, final inspection, NDT inspection, PWHT, weld profile, etc.),
                                                                                                                  Demonstrated abilities in managing various operations as per the set parameters & standards, steered efforts towards visual inspection/ failure pattern all types of refinery equipment necessary NDT for evaluation , and provided short term and long term solutions
                                                                                                                  Possess excellent analytical and planning skills with abilities in leading team members and institutionalizing, developing & inculcating the quality culture through core technical expertise in national and international Standards."/>
            </div>
            <div className='col-lg-6'>
              <Card image={image2} name="Mr. Shashvat Kumar Malviya" designation="Co-founder" email="shashvat@goals4es.com" description="A result oriented professional with 10 years of experience in Quality & Project. and HSE department. Seeking assignment in medium or big scale organization preferably in Power Plant a industry . To obtain a challenging and responsible position in an organization where my knowledge, experience, achievements and personal skills will be utilized to be a successful professional while being flexible, creative and resourceful."/>
            </div>
            <div className='col-lg-6'>
              <Card image={image3} name="Mr. Rajesh Kumar Shukla" designation="Welding Specialist" email="rajeshshukla@goals4es.com" description="Proactive, result focused Welding engineer/Welding Inspector with 25 years of working experience within the Manufacturing Industry / Pipe manufacturing for use of OIL & GAS PIPE LINE/OIL & GAS Refineries, holding Bachelor of Mechanical Engineering & CSWIP 3.1 Level II having Excellence in welding/quality management, Team management, Client relationship & communications, root Cause analysis, preparation of progress reports.  Successfully completed CSWIP 3.1- Welding Inspector-Level 2 course from TWI, UK (Certificate no-80499/2, Valid till 10/10/2023). Successfully completed Non-Destructive Testing Level-II course in Ultrasonic testing, Radiographic testing, Visual Testing and Magnetic particle testing (UT, RT, DPT, and MPT) as per ASNT recommended practice SNT-TC-1A."/>
            </div>
            <div className='col-lg-6'>
              <Card image={image4} name="Mr. Anand Kumar Singh" designation="Manager Testing operational" email="anandsingh@goals4es.com" description="More than 19 years experience in Oil & Gas Industries. Expertise in handling Nondestructive Testing level (NDT Level-II and level III )activities and safety procedures. Well conversant with International Codes & Standards like ASME Sec. V, VIII Div. I, IX, B31.1, 31.3, AWS D1.1 & API . NDT Inspector & Radiation Safety Officer in INDIA and abroad works in many companies in petrol & petrochemical company for industrial support services , alpha inspection and engineering services ,m/s tanmia for oil and construction limited, total e&p yemen kharir block-10 and yemen lng balhaf, welspun gujarat stahl rohren ltd. and reliance industries ltd. jamnagar-gujarat ."/>
            </div>
            <div className='col-lg-6'>
              <Card image={image5} name="Mr. SACHIN SONI" designation=" (Sr. Inspection Engineer) / (Welding Trainer)" email="sachinsoni@goals4es.com" description=""/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
