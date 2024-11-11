import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Lens.scss';
import LensSlider from '../components/LensSlider';
import LensScroll from '../components/LensScroll';
import Menu from '../components/Menu';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Lens() {
  const { t } = useTranslation();

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