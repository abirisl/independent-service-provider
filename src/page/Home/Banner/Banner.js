import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../../../images/slider/slider1.jpg';
import slide2 from '../../../images/slider/slider2.jpg';
import slide3 from '../../../images/slider/slider3.jpg';

const Banner = () => {
    return (
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
        height={400}
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      height={400}
      className="d-block w-100"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      height={400}
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
};

export default Banner;