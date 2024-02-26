import React from 'react'
import './Home.css'
import Layout from '../Layout'
import label from "../../Assets/label(home).avif"
import image1 from '../../Assets/card1(home).webp'
import image2 from '../../Assets/card2(home).webp'
import image3 from '../../Assets/card4(home).webp'
import image4 from '../../Assets/card5(home).webp'


const Home = () => {
  return (
    <Layout >
      <div className='d-flex flex-column'>
        <div className='label-container position-relative'>
          <img className='label' src={label} alt='label-img'  />
          <div className='blackground'>
          </div>
        </div>
        <div className='features row m-5 d-flex justify-content-evenly'>
          <div className='col-lg-6 col-md-12'>
            <div className="card text-center" style={{ width: '80%',margin:"10px 0",objectFit:"contain" }}>
              <img src={image1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className="card text-center" style={{ width: '80%',margin:"10px 0",objectFit:"contain" }}>
              <img src={image4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className="card text-center " style={{ width: '80%',margin:"10px 0",objectFit:"contain" }}>
              <img src={image3} className="card-img-top" alt="..." />
              <div className="card-body top-90">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12'>
            <div className="card text-center" style={{ width: '80%',margin:"10px 0",objectFit:"contain" }}>
              <img src={image2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
