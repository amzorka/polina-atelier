import React from 'react';
import Slider from 'react-slick';
import '../styles/ProductionSlider.scss'
import slide1 from '../images/ProductionSlider/1.png'
import slide2 from '../images/ProductionSlider/2.png'
import slide3 from '../images/ProductionSlider/3.png'
import slide4 from '../images/ProductionSlider/4.png'
import slide5 from '../images/ProductionSlider/5.png'
import slide6 from '../images/ProductionSlider/6.png'
import slide7 from '../images/ProductionSlider/7.png'
import slide8 from '../images/ProductionSlider/8.png'

function ProductionSlider() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      fade: true,
    };
  
    const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

    return (

      <Slider {...settings} className="slider-section">
        {slides.map((slide, index) => (
          <div key={index} className="slick-slide">
            <div
              className="slick-slide img"
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          </div>
        ))}
      </Slider>
    );
  };

export default ProductionSlider;