import React, { useState, useEffect } from 'react';
import './../styles/Menu.scss';
import LanguageSwitcher from '../components/LanguageSwitcher';
import mobileLogo from '../images/MenuLogos/mobileLightLogo.png';
import tabletLogo from '../images/MenuLogos/tabletLightLogo.png';
import laptopLogo from '../images/MenuLogos/laptopLightLogo.png';
import desktopLogo from '../images/MenuLogos/desktopLightLogo.png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const currentLanguage = i18n.language;
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobileOrTablet(width <= 1279);
      if (width <= 768) {
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


  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return currentLanguage === 'ru' ? `/ru${path}` : path;
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
  
      setIsMenuOpen(false);
      setTimeout(() => setIsMenuOpen(false), 500); 
    } else { 
      setIsMenuOpen(true);
    }
  };

  return (
    <header
      className={`menu-header ${
        isMenuOpen && isMobileOrTablet ? 'dark-menu' : ''
      }`}
    >
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <Link to="/">
        <div className="logo">
          <img src={logo} alt="LOGO" />
        </div>
      </Link>

      <LanguageSwitcher />

      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink  to={getLocalizedPath('/about')} activeclassname="active-link">{t('menu.mission')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/gallery')} activeclassname="active-link">{t('menu.gallery')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/production')} activeclassname="active-link">{t('menu.production')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/lens')} activeclassname="active-link">{t('menu.lens')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/ecology')} activeclassname="active-link">{t('menu.ecology')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/education')} activeclassname="active-link">{t('menu.education')}</NavLink>
          </li>
        </ul>
      </nav>
      <div
        className={`menu-overlay ${isMenuOpen ? 'visible' : ''}`}
        onClick={toggleMenu}
      />
    </header>
  );
}

export default Menu;