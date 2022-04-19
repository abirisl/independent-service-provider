import React from 'react';
import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div style={{height:400}} className='bg-primary text-light'>
            <div className=' d-flex p-4'>
            <div className='me-3'>
            <h3>Information</h3>
            <br />
            <h6>About My Service</h6>
            <h6>More Search</h6>
            <h6>Blog</h6>
            <h6>Testimonial</h6>
            </div>
            <div className='me-3'>
                <h3>Helpful Links</h3>
                <br />
                <h6>Services</h6>
                <h6>Supports</h6>
                <h6>Terms And Condition</h6>
                <h6>Privacy</h6>
            </div>
            <div>
                <h3>My Services</h3>
                <br />
                <h6>Travel Guide</h6>
                <h6>Tour Plan</h6>
                <h6>Guide</h6>
                <h6>Support 24/7</h6>
            </div>
            </div>
            <div className='text-center'>
                <div className=' d-flex'>
                <div className='mx-auto'>
                <span><Facebook></Facebook></span>
                <span className='p-2'><Instagram></Instagram></span>
                <span><Linkedin></Linkedin></span>
                </div>
                </div>
                <p>mohammadmehedihasan84@gmail.com</p>
                <p><small> MH Abir copyright @ {year}</small></p>
            </div>
        </div>
    );   
};

export default Footer;