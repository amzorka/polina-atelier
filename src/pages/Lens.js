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
  );
}

export default Lens;