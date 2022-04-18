import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Chackout from '../../ChackOut/Chackout';
import Service from '../Service/Service';


const Services = () => {
    const [cards, setCard] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCard(data))
    }, [])
    return (

        <div>
            <h2 className='mt-5 text-center text-primary '>Our Services</h2>
            <hr className='w-25 mx-auto text-danger'/>
           <div className='p-5'>
           <Row xs={1} md={3} className="g-4">
           {
               cards.map(card => <Service key={card.id} card={card}></Service>)
           }
        </Row>
           </div>
        </div>

    );
};

export default Services;