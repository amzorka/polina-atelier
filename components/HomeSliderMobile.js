import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import slide1 from '../images/MobileHomeSlider/1.png'
import slide2 from '../images/MobileHomeSlider/2.png'
import slide3 from '../images/MobileHomeSlider/3.png'

function HomeSliderMobile() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Slider {...sliderSettings}>
      <div>
        <img src={slide1} alt="Mobile Slide 1" />
      </div>
      <div>
        <img src={slide2} alt="Mobile Slide 2" />
      </div>
      <div>
        <img src={slide3} alt="Mobile Slide 3" />
      </div>
    </Slider>
  );
}

export default HomeSliderMobile;