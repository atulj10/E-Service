import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Card = ({ image, designation, name, email, description }) => {
    return (
        <div className='card-container text-center'>
            <div className='card-img-container' style={{ backgroundColor: "whitesmoke", borderRadius: "40px 40px 0 0" }}>
                <img className='card-img' src={image} height={"50%"} width={"20%"} />
            </div>
            <div className='card-detail'>
                <h4>{name}</h4>
                <h5>{designation}</h5>
                <p>{description.substring(0,250)}...</p>
                <hr />
                <Link style={{textDecoration:"none",color:"black"}}><FontAwesomeIcon icon={faEnvelope}/> &nbsp;{email}</Link>
            </div>
        </div>
    )
}

export default Card
