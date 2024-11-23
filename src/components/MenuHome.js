import React, { useState } from 'react';
import './../styles/MenuHome.scss';
import { NavLink } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

function MenuHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLanguage = i18n.language;

  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return currentLanguage === 'ru' ? `/ru${path}` : path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="menuhome-header">
      <div className="contacts-link">
        <NavLink to="/about" activeclassname="active-link">
          {t('menuHome.contacts')}
        </NavLink>
      </div>

      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <LanguageSwitcher />

      <nav className={`menu-home ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink  to={getLocalizedPath('/about')} activeclassname="active-link">
              {t('menuHome.mission')}
            </NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/gallery')} activeclassname="active-link">
              {t('menuHome.gallery')}
            </NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/production')} activeclassname="active-link">
              {t('menuHome.production')}
            </NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/lens')} activeclassname="active-link">
              {t('menuHome.lens')}
            </NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/ecology')} activeclassname="active-link">
              {t('menuHome.ecology')}
            </NavLink>
          </li>
          <li>
            <NavLink  to={getLocalizedPath('/education')} activeclassname="active-link">
              {t('menuHome.education')}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuHome;