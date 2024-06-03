import React, { useEffect, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Modal from 'react-modal';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Layout.css'
import { faFacebookMessenger, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Spinner from './spinner/spinner';

const Layout = ({ children }) => {

    const [open, setOpen] = useState(false)

    const customStyles = {
        content: {
            top: '82%',
            left: '12%',
            right: 'auto',
            bottom: 'auto',
            padding: "5%",
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "20px"
        },
    };



    Modal.setAppElement(document.getElementById('root'));

    return (
        <div className='d-flex flex-column flex-1 position-relative'>
            {/* <Spinner/> */}
            <Navbar />
            <div className='position-fixed z-3 d-flex flex-column' style={{ top: "45%" }}>
                <a href={`https://wa.me/${process.env.REACT_APP_NUMBER}`} style={{ textDecoration: "none" }}><button onClick={() => { console.log(process.env.REACT_APP_NUMBER) }} className='whatsapp'><FontAwesomeIcon icon={faWhatsapp} className='fa-3x text-white' /><span><h5 className='mx-4 text-white'>WHATSAPP US!</h5></span></button></a>
                <button className='messenger'><FontAwesomeIcon icon={faFacebookMessenger} className='fa-3x text-white' /><h5 className='mx-4 text-white'>CHAT&nbsp;&nbsp;WITH  US!</h5></button>
            </div>
            <main className='main' >
                {children}
                <Footer />
            </main>
            <ReactModal
                isOpen={open}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>CONTACT US !</h2>
                <button style={{ position: "absolute", top: "0", right: "0", margin: "2%", border: "none", backgroundColor: "transparent" }} onClick={() => setOpen(false)}><FontAwesomeIcon icon={faXmark} /></button>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLScNQ_E4woBylqP8wi-I5VqxqhLwoc441DZVRom4pDSrrK5xFg/viewform'> <button className='btn btn-success' >CLICK NOW <b>!</b></button></a>
            </ReactModal>
        </div>
    )
}

export default Layout
