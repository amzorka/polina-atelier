import React from 'react';
import { useState, useEffect } from 'react';
import HomeSlider from '../components/HomeSlider';
import MenuHome from '../components/MenuHome'
import HomeSliderMobile from '../components/HomeSliderMobile';
import './../styles/Home.scss';
import logo from '../images/LightLogo.png';
import 'slick-carousel/slick/slick.css';   
import 'slick-carousel/slick/slick-theme.css';

function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 360 && window.innerHeight <= 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="home">
      {isMobile ? (
        <HomeSliderMobile /> // Отображение мобильной версии слайдера
      ) : (
        <HomeSlider /> // Отображение стандартной версии слайдера
      )}   
      <div className="overlay">
          <MenuHome />
        <main className="home-main">
        <div className="center-text">
          <img src={logo} alt='LOGO'></img>
        </div>
      </main>
    </div>
  </div> 
  );
}

export default Home;