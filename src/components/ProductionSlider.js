import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../styles/ProductionSlider.scss';

// Импорты изображений для десктопа
import slide1 from '../images/ProductionSlider/1.png';
import slide2 from '../images/ProductionSlider/2.png';
import slide3 from '../images/ProductionSlider/3.png';
import slide4 from '../images/ProductionSlider/4.png';
import slide5 from '../images/ProductionSlider/5.png';
import slide6 from '../images/ProductionSlider/6.png';
import slide7 from '../images/ProductionSlider/7.png';
import slide8 from '../images/ProductionSlider/8.png';
// ... (остальные изображения для десктопа)

// Импорты изображений для мобильных устройств
import mSlide1 from '../images/MobileProductionSlider/1.png';
import mSlide2 from '../images/MobileProductionSlider/2.png';
import mSlide3 from '../images/MobileProductionSlider/3.png';
import mSlide4 from '../images/MobileProductionSlider/4.png';
import mSlide5 from '../images/MobileProductionSlider/5.png';
import mSlide6 from '../images/MobileProductionSlider/6.png';
import mSlide7 from '../images/MobileProductionSlider/7.png';
import mSlide8 from '../images/MobileProductionSlider/8.png';
// ... (остальные изображения для мобильных)

// Импорты изображений для планшетов
import tSlide1 from '../images/TabletProductionSlider/1.jpg';
import tSlide2 from '../images/TabletProductionSlider/2.jpg';
import tSlide3 from '../images/TabletProductionSlider/3.jpg';
import tSlide4 from '../images/TabletProductionSlider/4.jpg';
import tSlide5 from '../images/TabletProductionSlider/5.jpg';
import tSlide6 from '../images/TabletProductionSlider/6.jpg';
import tSlide7 from '../images/TabletProductionSlider/7.jpg';
import tSlide8 from '../images/TabletProductionSlider/8.jpg';
// ... (остальные изображения для планшетов)

// Импорты изображений для ноутбуков
import lSlide1 from '../images/LaptopProductionSlider/1.jpg';
import lSlide2 from '../images/LaptopProductionSlider/2.jpg';
import lSlide3 from '../images/LaptopProductionSlider/3.jpg';
import lSlide4 from '../images/LaptopProductionSlider/4.jpg';
import lSlide5 from '../images/LaptopProductionSlider/5.jpg';
import lSlide6 from '../images/LaptopProductionSlider/6.jpg';
import lSlide7 from '../images/LaptopProductionSlider/7.jpg';
import lSlide8 from '../images/LaptopProductionSlider/8.jpg';
// ... (остальные изображения для ноутбуков)

function ProductionSlider() {
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
        setCurrentSlides([slide1, slide2, slide3]);
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
    <Slider {...settings} className="slider-section">
      {currentSlides.map((slide, index) => (
        <div key={index} className="slick-slide">
          <div
            className="slick-slide img"
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        </div>
      ))}
    </Slider>
  );
}

export default ProductionSlider;