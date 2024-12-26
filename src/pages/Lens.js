import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Lens.scss';
import LensSlider from '../components/LensSlider';
import LensScroll from '../components/LensScroll';
import Menu from '../components/Menu';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Lens() {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [showOrientationMessage, setShowOrientationMessage] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      // Проверяем, является ли устройство мобильным (ширина <= 767px)
      if (window.innerWidth <= 1130) {
        const isLandscape = window.matchMedia('(orientation: landscape)').matches;
        setShowOrientationMessage(isLandscape); // Показываем сообщение в горизонтальной ориентации
      } else {
        setShowOrientationMessage(false); // Скрываем сообщение для других устройств
      }
    };

    handleOrientationChange(); // Проверяем ориентацию при загрузке страницы
    window.addEventListener('resize', handleOrientationChange); // Обработчик на изменение ориентации

    return () => window.removeEventListener('resize', handleOrientationChange); // Удаляем обработчик при размонтировании
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {showOrientationMessage ? (
        <div className="orientation-warning">
          {t('orientationWarning')}
        </div>
      ) : (
    <div className="lens-page">
      <section className="first-section-lens">
        <Menu />
        <LensSlider /> 
      </section>
      <section className="second-section-lens">
        <LensScroll /> 
        <footer className="lens-footer">
          <p>{t('lens.photos')}</p>
        </footer>
      </section>
    </div>
      )}
      </div>
  );
}

export default Lens;