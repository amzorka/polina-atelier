import React, { useState } from 'react';
import './../styles/Menu.scss';
import LanguageSwitcher from '../components/LanguageSwitcher';
import logo from '../images/LightLogo.png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLanguage = i18n.language;

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
    <header className="menu-header">
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
            <NavLink exact to={getLocalizedPath('/about')} activeClassName="active-link">{t('menu.mission')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/gallery')} activeClassName="active-link">{t('menu.gallery')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/production')} activeClassName="active-link">{t('menu.production')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/lens')} activeClassName="active-link">{t('menu.lens')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/ecology')} activeClassName="active-link">{t('menu.ecology')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/education')} activeClassName="active-link">{t('menu.education')}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;