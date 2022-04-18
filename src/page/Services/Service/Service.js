import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ card }) => {
    const { id, name, img, price, discription } = card;
    const navigate = useNavigate()

    const navigateToChackout = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className=''>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h3 className='text-center'>{name}</h3>
                        <h6 className='text-center'>Coast:${price}</h6>
                        <Card.Text>
                            {discription}
                        </Card.Text>
                    </Card.Body>
                    <button onClick={() => navigateToChackout(id)} className='w-50 mx-auto mb-3'>Add To Cart</button>
                </Card>
            </Col>

        </div>
    );
};

export default Service;