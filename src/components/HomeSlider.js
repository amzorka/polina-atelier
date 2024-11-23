import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './../styles/HomeSlider.scss';

// Импорты изображений для десктопов
import slide1 from '../images/HomeSlider/1.png';
import slide2 from '../images/HomeSlider/2.png';
import slide3 from '../images/HomeSlider/3.png';

// Импорты изображений для мобильных устройств
import mSlide1 from '../images/MobileHomeSlider/1.png';
import mSlide2 from '../images/MobileHomeSlider/2.png';
import mSlide3 from '../images/MobileHomeSlider/3.png';

// Импорты изображений для планшетов
import tSlide1 from '../images/TabletHomeSlider/1.png';
import tSlide2 from '../images/TabletHomeSlider/2.png';
import tSlide3 from '../images/TabletHomeSlider/3.png';

// Импорты изображений для ноутбуков
import lSlide1 from '../images/LaptopHomeSlider/1.png';
import lSlide2 from '../images/LaptopHomeSlider/2.png';
import lSlide3 from '../images/LaptopHomeSlider/3.png';

function HomeSlider() {
  const [currentSlides, setCurrentSlides] = useState([]);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        // Мобильные устройства
        setCurrentSlides([mSlide1, mSlide2, mSlide3]);
      } else if (width >= 768 && width <= 1279) {
        // Планшеты
        setCurrentSlides([tSlide1, tSlide2, tSlide3]);
      } else if (width >= 1280 && width <= 1919) {
        // Ноутбуки
        setCurrentSlides([lSlide1, lSlide2, lSlide3]);
      } else {
        // Десктопы
        setCurrentSlides([slide1, slide2, slide3]);
      }
    };

    updateSlides(); // Устанавливаем начальные изображения
    window.addEventListener('resize', updateSlides); // Слушатель изменения размера окна

    return () => window.removeEventListener('resize', updateSlides); // Удаляем слушатель
  }, []);

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

  return (
    <Slider {...settings} className="slider-container">
      {currentSlides.map((slide, index) => (
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