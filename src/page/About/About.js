import React from 'react';
import img from '../../images/mehedi.jpg'

const About = () => {
    return (
        <div className='d-flex border border-4 p-3 mt-3 me-3 ms-3 mb-3'>
           <div className='w-75'>
           <img className='w-50 ms-5 mt-5' src={img} alt="" />
           </div>
           <div className='border border-1 w-50 ms-4 p-5'>
                <h3>About Me</h3>
                <p>Name: Mohammad Mehedi Hasan</p>
                <p>City: Chittagong</p>
                <p>Study: Computer Scince Engineering</p>
                <br />
                <h3>My Goals?</h3>
                <p>Assalamu Alaikum, Iam currently studying in Computer Scince Engineering... My dream is to become a skilled stack web developer. Although Iam very interested in Working as an app developer in the future ... But Iam very new in this field, so I want to improve myself efficiently...</p>
           </div>
        </div>
    );
};

export default About;