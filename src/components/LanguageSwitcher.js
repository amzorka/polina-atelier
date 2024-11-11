import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <a
        onClick={() => changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : 'inactive'}
      >
        EN
      </a>
      <span>|</span>
      <a
        onClick={() => changeLanguage('ru')}
        className={i18n.language === 'ru' ? 'active' : 'inactive'}
      >
        RU
      </a>
    </div>
  );
}

export default LanguageSwitcher;