import React, { useState, useEffect } from 'react';
import HomeSlider from '../components/HomeSlider';
import MenuHome from '../components/MenuHome'
import './../styles/Home.scss';
import mobileLogo from '../images/Logos/mobileLogo.png';
import tabletLogo from '../images/Logos/tabletLogo.png';
import laptopLogo from '../images/MenuLogos/laptopLightLogo.png';
import desktopLogo from '../images/Logos/desktopLogo.png';
import 'slick-carousel/slick/slick.css';   
import 'slick-carousel/slick/slick-theme.css';

function Home() {

  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setDeviceType('mobile');
      } else if (width <= 1279) {
        setDeviceType('tablet');
      } else if (width <= 1919) {
        setDeviceType('laptop');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logo =
    deviceType === 'mobile'
      ? mobileLogo
      : deviceType === 'tablet'
      ? tabletLogo
      : deviceType === 'laptop'
      ? laptopLogo
      : desktopLogo;

  return (
    <div className="home">
        <HomeSlider />   
      <div className="overlay">
          <MenuHome />
        <main className="home-main">
        <div className="center-text">
          <img src={logo} alt='LOGO' />
        </div>
      </main>
    </div>
  </div> 
  );
}

export default Home;