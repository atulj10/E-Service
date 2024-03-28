import React from 'react'
import "./Blog.css"

function UpdateCard({ title, image, description }) {
    return (
        <div className='update-container'>
            <h1>{title}</h1>
            <div>
                <img className='update-image' src={image} alt='alt-img' />
                <h5>{description}</h5>
            </div>
        </div>
    )
}

export default UpdateCard
