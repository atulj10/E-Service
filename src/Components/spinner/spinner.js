import React from 'react'
import './spinner.css'
import image1 from '../../Assets/inner.png'
import image2 from '../../Assets/outer.png'

const Spinner = () => {
    return (
        <div className='parent'>
            <img src={image1} className='inner' />
            <img src={image2} className='outer' />
            <h1 className='loading'>Loading</h1>
        </div>
    )
}

export default Spinner
