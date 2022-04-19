import React from 'react';
import Reviews from '../../reviews/Reviews';
import Services from '../../Services/Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;