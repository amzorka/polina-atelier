import React from 'react';
import Slider from 'react-slick';
import '../styles/LensSlider.scss'
import slide1 from '../images/LensSlider/1.png'
import slide2 from '../images/LensSlider/2.png'
import slide3 from '../images/LensSlider/3.png'
import slide4 from '../images/LensSlider/4.png'
import slide5 from '../images/LensSlider/5.png'
import slide6 from '../images/LensSlider/6.png'
import slide7 from '../images/LensSlider/7.png'
import slide8 from '../images/LensSlider/8.png'

function LensSlider() {
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

      <Slider {...settings} className="lens-slider-section">
        {slides.map((slide, index) => (
          <div key={index} className="lens-slick-slide">
            <div
              className="lens-slick-slide img"
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          </div>
        ))}
      </Slider>
    );
  };

export default LensSlider;