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
  );
}

export default Production;