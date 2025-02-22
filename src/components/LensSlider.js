import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../styles/LensSlider.scss';

import slide1 from '../images/LensSlider/1.jpg';
import slide2 from '../images/LensSlider/2.jpg';
import slide3 from '../images/LensSlider/3.jpg';
import slide4 from '../images/LensSlider/4.jpg';
import slide5 from '../images/LensSlider/5.jpg';
import slide6 from '../images/LensSlider/6.jpg';
import slide7 from '../images/LensSlider/7.jpg';
import slide8 from '../images/LensSlider/8.jpg';

import mSlide1 from '../images/MobileLensSlider/1.png';
import mSlide2 from '../images/MobileLensSlider/2.png';
import mSlide3 from '../images/MobileLensSlider/3.png';
import mSlide4 from '../images/MobileLensSlider/4.png';
import mSlide5 from '../images/MobileLensSlider/5.png';
import mSlide6 from '../images/MobileLensSlider/6.png';
import mSlide7 from '../images/MobileLensSlider/7.png';
import mSlide8 from '../images/MobileLensSlider/8.png';

import tSlide1 from '../images/TabletLensSlider/1.jpg';
import tSlide2 from '../images/TabletLensSlider/2.jpg';
import tSlide3 from '../images/TabletLensSlider/3.jpg';
import tSlide4 from '../images/TabletLensSlider/4.jpg';
import tSlide5 from '../images/TabletLensSlider/5.jpg';
import tSlide6 from '../images/TabletLensSlider/6.jpg';
import tSlide7 from '../images/TabletLensSlider/7.jpg';
import tSlide8 from '../images/TabletLensSlider/8.jpg';

import lSlide1 from '../images/LaptopLensSlider/1.jpg';
import lSlide2 from '../images/LaptopLensSlider/2.jpg';
import lSlide3 from '../images/LaptopLensSlider/3.jpg';
import lSlide4 from '../images/LaptopLensSlider/4.jpg';
import lSlide5 from '../images/LaptopLensSlider/5.jpg';
import lSlide6 from '../images/LaptopLensSlider/6.jpg';
import lSlide7 from '../images/LaptopLensSlider/7.jpg';
import lSlide8 from '../images/LaptopLensSlider/8.jpg';

function LensSlider() {
  const [currentSlides, setCurrentSlides] = useState([]);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;

      if (width <= 767) {
        // Мобильные устройства
        setCurrentSlides([mSlide1, mSlide2, mSlide3, mSlide4, mSlide5, mSlide6, mSlide7, mSlide8 ]);
      } else if (width >= 768 && width <= 1279) {
        // Планшеты
        if (isLandscape) {
          // Горизонтальная ориентация (показываем адаптив для ноутбука)
          setCurrentSlides([lSlide1, lSlide2, lSlide3, lSlide4, lSlide5, lSlide6, lSlide7, lSlide8]);
        } else {
          // Вертикальная ориентация (планшетный адаптив)
          setCurrentSlides([tSlide1, tSlide2, tSlide3, tSlide4, tSlide5, tSlide6, tSlide7, tSlide8]);
        }
      } else if (width >= 1280 && width <= 1919) {
        // Ноутбуки
        setCurrentSlides([lSlide1, lSlide2, lSlide3, lSlide4, lSlide5, lSlide6, lSlide7, lSlide8]);
      } else {
        // Десктопы
        setCurrentSlides([slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8]);
      }
    };

    updateSlides(); 
    window.addEventListener('resize', updateSlides); 

    return () => window.removeEventListener('resize', updateSlides); 
  }, []);

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

  return (
    <Slider {...settings} className="lens-slider-section">
      {currentSlides.map((slide, index) => (
        <div key={index} className="lens-slick-slide">
          <div
            className="lens-slick-slide img"
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        </div>
      ))}
    </Slider>
  );
}

export default LensSlider;