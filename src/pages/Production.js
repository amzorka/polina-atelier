import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Production.scss';
import ProductionSlider from '../components/ProductionSlider';
import ProductionScroll from '../components/ProductionScroll';
import MenuDark from '../components/MenuDark';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Production() {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для меню
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
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
    <div className="production-page">
      <section className="first-section-production">
        <MenuDark 
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        isModalOpen={isModalOpen}
        />
        <ProductionScroll /> 
        <div className="centered-text">
          {t('production.people')}
        </div>
      </section>
      <section className="second-section-production">
        <ProductionSlider /> 
        <footer className="production-footer">
          <p>{t('production.footer')}</p>
        </footer>
      </section>
    </div>
      )}
      </div>
  );
}

export default Production;