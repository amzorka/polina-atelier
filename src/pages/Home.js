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
import i18n from '../locales/i18n';
import { useTranslation } from 'react-i18next';

function Home() {

  const [deviceType, setDeviceType] = useState('desktop');
  const [showOrientationMessage, setShowOrientationMessage] = useState(false);

  useEffect(() => {
    const isLandscape = window.matchMedia('(orientation: landscape)').matches;
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setDeviceType('mobile');
      } else if (width >= 768 && width <= 1279) {
      if (isLandscape) {
        setDeviceType('laptop');
        } else
        setDeviceType('tablet');
      } else if (width >= 1280 && width <= 1919) {
        setDeviceType('laptop');
      } else {
        setDeviceType('desktop');
      }
    };

    const handleOrientationChange = () => {
      // Проверяем ориентацию только для мобильных устройств
      if (window.innerWidth <= 1130) {
        const isLandscape = window.matchMedia('(orientation: landscape)').matches;
        setShowOrientationMessage(isLandscape); // Показываем сообщение в горизонтальной ориентации
      } else {
        setShowOrientationMessage(false); // Скрываем сообщение для других устройств
      }
    };

    handleResize();
    handleOrientationChange();

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleOrientationChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleOrientationChange);
    };
  }, []);

  const logo =
    deviceType === 'mobile'
      ? mobileLogo
      : deviceType === 'tablet'
      ? tabletLogo
      : deviceType === 'laptop'
      ? laptopLogo
      : desktopLogo;

      const {t} = useTranslation();      

  return (
    <div>
            {showOrientationMessage ? (
        <div className="orientation-warning">
          {t('orientationWarning')}
        </div>
      ) : (
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
      )}
  </div>
  );
}

export default Home;