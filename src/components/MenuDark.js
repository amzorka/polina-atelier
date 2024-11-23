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


function MenuDark() {

  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
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

  const currentLanguage = i18n.language;

  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return currentLanguage === 'ru' ? `/ru${path}` : path;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
 
      setIsClosing(true);

      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 0); 
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <header className="menu-header-dark">
      <div className={`menu-icon-dark ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line-dark"></div>
        <div className="line-dark"></div>
        <div className="line-dark"></div>
      </div>

      <Link to="/">
        <div className="logo-dark">
          <img src={logo} alt="LOGO" />
        </div>
      </Link>

      <LanguageSwitcherDark />

      <nav className={`menu-dark ${isMenuOpen ? (isClosing ? 'closing' : 'open') : ''}`}>
        <ul>
          <li>
            <NavLink  to={getLocalizedPath('/about')} activeclassname="active-link">{t('menuDark.mission')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/gallery')} activeclassname="active-link">{t('menuDark.gallery')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/production')} activeclassname="active-link">{t('menuDark.production')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/lens')} activeclassname="active-link">{t('menuDark.lens')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/ecology')} activeclassname="active-link">{t('menuDark.ecology')}</NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/education')} activeclassname="active-link">{t('menuDark.education')}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuDark;