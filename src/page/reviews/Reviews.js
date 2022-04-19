import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Review from '../review/Review';

const Reviews = () => {
    const [cards, setCard] = useState([]);

    useEffect(() =>{
        fetch('clientData.json')
        .then(res => res.json())
        .then(data => setCard(data))
    }, [])
    return (

        <div>
            <h2 className='mt-5 text-center text-danger '>My Client Review</h2>
            <hr className='w-25 mx-auto text-danger'/>
           <div className='p-5'>
           <Row xs={1} md={3} className="g-4">
           {
               cards.map(card => <Review key={card.id} card={card}></Review>)
           }
        </Row>
           </div>
        </div>

    );
};


export default Reviews;