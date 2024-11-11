import React, { useState } from 'react';
import './../styles/MenuDark.scss';
import LanguageSwitcherDark from '../components/LanguageSwitcherDark';
import logo from '../images/DarkLogo.png';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

function MenuDark() {

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
      }, 500); 
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
            <NavLink exact to={getLocalizedPath('/about')} activeClassName="active-link">{t('menuDark.mission')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/gallery')} activeClassName="active-link">{t('menuDark.gallery')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/production')} activeClassName="active-link">{t('menuDark.production')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/lens')} activeClassName="active-link">{t('menuDark.lens')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/ecology')} activeClassName="active-link">{t('menuDark.ecology')}</NavLink>
          </li>
          <li>
            <NavLink exact to={getLocalizedPath('/education')} activeClassName="active-link">{t('menuDark.education')}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuDark;