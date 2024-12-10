import React, { useState, useEffect } from 'react';
import './../styles/MenuHome.scss';
import { NavLink } from 'react-router-dom';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import i18n from '../locales/i18n';

function MenuHome() {
  const [menuHeight, setMenuHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentLanguage = i18n.language;

  const { t } = useTranslation();

  const getLocalizedPath = (path) => {
    return currentLanguage === 'ru' ? `/ru${path}` : path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Расчет расстояния между ссылками на основе высоты окна
  useEffect(() => {
    const updateMenuHeight = () => {
      const viewportHeight = window.innerHeight;
      const calculatedGap = Math.max(20, viewportHeight * 0.02); // Минимальный gap 20px или 2% от высоты
      const topOffset = viewportHeight * 0.15; // Отступ сверху (15%)
      const bottomOffset = viewportHeight * 0.1; // Отступ снизу (10%)

      // Обновление CSS custom properties
      document.documentElement.style.setProperty('--menu-gap', `${calculatedGap}px`);
      document.documentElement.style.setProperty('--menu-top-offset', `${topOffset}px`);
      document.documentElement.style.setProperty('--menu-bottom-offset', `${bottomOffset}px`);

      setMenuHeight(viewportHeight - topOffset - bottomOffset);
    };

    updateMenuHeight();
    window.addEventListener('resize', updateMenuHeight);

    return () => window.removeEventListener('resize', updateMenuHeight);
  }, []);

  return (
    <header className="menuhome-header">
      <div className="contacts-link">
        <NavLink to="/about" activeclassname="active-link">
          {t('menuHome.contacts')}
        </NavLink>
      </div>

      <div className={`menu-icon-home ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <LanguageSwitcher className='language-switcher-home'/>

      <nav className={`menu-home ${isMenuOpen ? 'open' : ''}`}>
        <ul style={{ height: `${menuHeight}px` }}>
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