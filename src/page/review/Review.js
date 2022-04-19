import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({ card }) => {
    const { name, img, rating, discription } = card;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <h3 className='text-center'>{name}</h3>
                        <h6 className='text-center'>Rating: {rating}</h6>
                        <Card.Text>
                            {discription}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};
export default Review;