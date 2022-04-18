import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../images/mehedi.jpg'

const About = () => {
    return (
        <Row xs={1} md={2}>
              <div className='mx-auto'>
              <div className='d-flex border border-4 p-1 mt-3 me-1 ms-1 mb-3 text-center'>
                <Col>
                    <div className='w-75'>
                        <img className='w-100 ms-5 mt-5' src={img} alt="" />
                    </div>
                    <div className='border border-1 w-100 p-5 mt-4'>
                        <h3>About Me</h3>
                        <p>Name: Mohammad Mehedi Hasan</p>
                        <p>City: Chittagong</p>
                        <p>Study: Computer Scince Engineering</p>
                        <br />
                        <h3>My Goals?</h3>
                        <p>Assalamu Alaikum, Iam currently studying in Computer Scince Engineering... My dream is to become a skilled stack web developer. Although Iam very interested in Working as an app developer in the future ... But Iam very new in this field, so I want to improve myself efficiently...</p>
                    </div>
                    </Col>
                </div>
              </div>
        </Row>
    );
};

export default About;