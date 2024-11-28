import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const currentLanguage = i18n.language;

  // Определяем, является ли текущая страница "Home"
  const isHomePage = location.pathname === '/ru/home';

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Определяем, является ли устройство мобильным или планшетом
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1279); // Телефон и планшет: ширина ≤ 1279px
    };

    handleResize(); // Проверяем ширину экрана при загрузке
    window.addEventListener('resize', handleResize); // Обновляем при изменении ширины

    return () => window.removeEventListener('resize', handleResize); // Очищаем слушатель
  }, []);

  const switchLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      {isMobileOrTablet ? (
        // На телефонах и планшетах отображается одна кнопка
        <a onClick={switchLanguage} className='active'>
          {currentLanguage === 'en' ? 'EN' : 'РУС'}
        </a>
      ) : (
        // На ноутбуках и десктопах отображаются две кнопки
        <>
          <a
            className={currentLanguage === 'en' ? 'active' : 'inactive'}
            onClick={() => i18n.changeLanguage('en')}
          >
            {t('languageSwitcher.english')}
          </a>
          <span>|</span>
          <a
            className={currentLanguage === 'ru' ? 'active' : 'inactive'}
            onClick={() => i18n.changeLanguage('ru')}
          >
            {t('languageSwitcher.russian')}
          </a>
        </>
      )}
    </div>
  );
}

export default LanguageSwitcher;