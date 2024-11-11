import React from 'react';
import Slider from 'react-slick';
import './../styles/HomeSlider.scss';
import slide1 from '../images/HomeSlider/1.png';
import slide2 from '../images/HomeSlider/2.png';
import slide3 from '../images/HomeSlider/3.png';


function HomeSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const slides = [slide1, slide2, slide3];

  return (
    <Slider {...settings} className="slider-container">
      {slides.map((slide, index) => (
        <div key={index} className="slide">
          <div
            className="slide-background"
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        </div>
      ))}
    </Slider>
  );
}

export default HomeSlider;