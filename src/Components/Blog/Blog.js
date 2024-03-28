import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import './Blog.css';
import label from '../../Assets/blog-page.jpg';
import InstagramFeedWidget from './InstagramWidget';
import UpdateCard from './UpdateCard';
import test1 from '../../Assets/photo.jpg';
import test2 from '../../Assets/output.jpg';
import test3 from '../../Assets/photo2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep, faChevronLeft, faChevronRight, faForwardStep } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [updates, setUpdates] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  const data = [
    { title: "TITLE1", image: test1, description: "Something is about to go up and down" },
    { title: "TITLE2", image: test2, description: "Something is about to go up and down" },
    { title: "TITLE3", image: test3, description: "Something is about to go up and down" },
    { title: "TITLE4", image: test2, description: "Something is about to go up and down" },
    { title: "TITLE5", image: test3, description: "Something is about to go up and down" }
  ];

  useEffect(() => {
    showSlide();
  }, []);

  function showSlide() {
    const newUpdates = [];
    for (let i = start; i <= end; i++) {
      newUpdates.push({ title: data[i].title, image: data[i].image, description: data[i].description });
    }
    setUpdates(newUpdates);
  }

  function handleBackward() {
    if(start == 0)
    {
      setEnd(data.length-1)
      setStart(data.length-3)
    }
    
    if (start > 0) {
      setStart(start - 1);
      setEnd(end - 1);
    }
    showSlide()
  }

  function handleForward() {
    if (end < data.length - 1) {
      setStart(start + 1);
      setEnd(end + 1);
    }

    if(end == data.length-1)
    {
      setStart(0)
      setEnd(2)
    }
    showSlide()
  }

  return (
    <Layout>
      <div className='d-flex flex-column'>
        <div className='blog-label-container position-relative'>
          <img className='blog-label-img' src={label} alt='blog-label' />
          <div className='blog-motto'>
            <h1 style={{ fontSize: "4rem" }}>The motto</h1>
          </div>
        </div>
        <div className='instaFeed'>
          <h1 className='text-center' style={{ textShadow: "7px 7px 7px", fontSize: "3rem", margin: "50px" }}>INSTAFEED</h1>
          <InstagramFeedWidget />
        </div>
        <div className='line mb-5'></div>
        <div className='updates'>
          <h1 className='text-center' style={{ textShadow: "7px 7px 7px", fontSize: "3rem", margin: "50px" }}>UPDATES</h1>
          <div className='d-flex' style={{backgroundColor: "whitesmoke",margin:"10% 0"}}>
            <button className='control-btn' onClick={handleBackward}><FontAwesomeIcon className='fa-3x' icon={faChevronLeft}/></button>
            <div style={{transition:"all 1s"}} className='row text-center px-5'>
              {
                updates.map((item, index) => (
                  <div key={index} className='col-lg-4'>
                    <UpdateCard title={item.title} image={item.image} description={item.description} />
                  </div>
                ))
              }
            </div>
            <button className='control-btn' onClick={handleForward}><FontAwesomeIcon className='fa-3x' icon={faChevronRight}/></button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
