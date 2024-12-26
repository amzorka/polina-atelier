import React, { useState, useEffect } from 'react';
import './../styles/MenuDark.scss';
import LanguageSwitcherDark from '../components/LanguageSwitcherDark';
import mobileLogo from '../images/MenuLogos/mobileDarkLogo.png';
import tabletLogo from '../images/MenuLogos/tabletDarkLogo.png';
import laptopLogo from '../images/MenuLogos/laptopDarkLogo.png';
import desktopLogo from '../images/MenuLogos/desktopDarkLogo.png';

import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

function MenuDark({ isMenuOpen, toggleMenu, isModalOpen }) {
  const [deviceType, setDeviceType] = useState('desktop');

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

  const currentLanguage = i18n.language;
  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return currentLanguage === 'ru' ? `/ru${path}` : path;
  };

  return (
    <header className="menu-header-dark">
      {/* Кнопка меню */}
      {!isModalOpen && ( // Показывать кнопку, только если модальное окно закрыто
        <div
          className={`menu-icon-dark ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <div className="line-dark"></div>
          <div className="line-dark"></div>
          <div className="line-dark"></div>
        </div>
      )}

      <Link to="/">
        <div className="logo-dark">
          <img src={logo} alt="LOGO" />
        </div>
      </Link>

      <LanguageSwitcherDark />

      <nav className={`menu-dark ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to={getLocalizedPath('/about')} activeclassname="active-link">
              {t('menuDark.mission')}
            </NavLink>
          </li>
          <li>
            <NavLink to={getLocalizedPath('/gallery')} activeclassname="active-link">
              {t('menuDark.gallery')}
            </NavLink>
          </li>
          <li>
            <NavLink to={getLocalizedPath('/production')} activeclassname="active-link">
              {t('menuDark.production')}
            </NavLink>
          </li>
          <li>
            <NavLink to={getLocalizedPath('/lens')} activeclassname="active-link">
              {t('menuDark.lens')}
            </NavLink>
          </li>
          <li>
            <NavLink to={getLocalizedPath('/ecology')} activeclassname="active-link">
              {t('menuDark.ecology')}
            </NavLink>
          </li>
          <li>
            <NavLink to={getLocalizedPath('/education')} activeclassname="active-link">
              {t('menuDark.education')}
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* <div
        className={`menu-overlay ${isMenuOpen ? 'visible' : ''}`}
        onClick={toggleMenu}
      /> */}
    </header>
  );
}

export default MenuDark;
