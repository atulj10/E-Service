import React, { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Card = ({ image, designation, name, email, description }) => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='card-container text-center'>
            <div className='card-img-container' style={{ backgroundColor: "whitesmoke", borderRadius: "40px 40px 0 0" }}>
                <img className='card-img' src={image} height={"50%"} width={"20%"} />
            </div>
            <div className='card-detail d-flex flex-column'>
                <h4>{name}</h4>
                <h5>{designation}</h5>
                <p>{description.substring(0, `${visible ? 1000 : 250}`)}...</p>
                <hr />
                <Link style={{ textDecoration: "none", color: "black" }}><FontAwesomeIcon icon={faEnvelope} /> &nbsp;{email}</Link>
                <button className='btn btn-outline-success my-4 w-50 align-self-center' onClick={()=>setVisible(prev=>!prev)}>{visible? "READ LESS ..." : "READ MORE ..."}</button>
            </div>
        </div>
    )
}

export default Card
