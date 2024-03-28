import React, { useState } from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ServiceCard = ({title,description,icon}) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='service-main'>
            <div className='service-icon'  >
                <div className='service-blob'>
                    <FontAwesomeIcon icon={icon} className='fa-4x serv-icon' style={{color:"darkblue"}}/>
                </div>
            </div>
            <div className='serviceCard-details'>
                <h2 className='m-4'>{title}</h2>
                <p>{description.substring(0,`${visible && 250}`)}{(!visible) && <h1>.....</h1>}</p>
                <button className='btn btn-outline-success my-4 w-50 align-self-center' onClick={()=>setVisible(prev=>!prev)}>{visible? "READ LESS ..." : "READ MORE ..."}</button>
            </div>
        </div>
    )
}

export default ServiceCard
