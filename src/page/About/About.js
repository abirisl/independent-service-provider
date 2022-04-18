import React from 'react';
import img from '../../images/mehedi.jpg'

const About = () => {
    return (
        <div>
           <div>
           <img className='w-25 ms-5 mt-5' src={img} alt="" />
           </div>
           <div>
                <h3>About Me</h3>
                <p>Name: Mohammad Mehedi Hasan</p>
                <p></p>
           </div>
        </div>
    );
};

export default About;