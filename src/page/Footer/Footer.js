import React from 'react';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{height:260}} className='bg-primary text-light'>
            <div className=' d-flex p-4'>
            <div className='me-4 '>
            <h3>Information</h3>
            <br />
            <h6>About My Service</h6>
            <h6>More Search</h6>
            <h6>Blog</h6>
            <h6>Testimonial</h6>
            </div>
            <div className='me-5'>
                <h3>Helpful Links</h3>
                <br />
                <h6>Services</h6>
                <h6>Supports</h6>
                <h6>Terms And Condition</h6>
                <h6>Privacy</h6>
            </div>
            <div className=''>
                <h3>My Services</h3>
                <br />
                <h6>Travel Guide</h6>
                <h6>Tour Plan</h6>
                <h6>Guide</h6>
                <h6>Support 24/7</h6>
            </div>
            <div className='mx-auto mt-5'>
                <div className=' d-flex'>
                <div className='p-2'><Facebook></Facebook></div>
                <div className='p-2'><Instagram></Instagram></div>
                <div className='p-2'><Linkedin></Linkedin></div>
                </div>
                <p>mohammadmehedihasan84@gmail.com</p>
            </div>
            </div>
            <div className='text-center'>
               <p><small> MH Abir copyright @ {year}</small></p>
            </div>
        </div>
    );   
};

export default Footer;