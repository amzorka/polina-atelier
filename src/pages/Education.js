import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Education.scss';
import Menu from '../components/Menu';

function Education() {
  const { t } = useTranslation();
  const [showOrientationMessage, setShowOrientationMessage] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      // Проверяем, является ли устройство мобильным (ширина <= 767px)
      if (window.innerWidth <= 1130) {
        const isLandscape = window.matchMedia('(orientation: landscape)').matches;
        setShowOrientationMessage(isLandscape); // Показываем сообщение в горизонтальной ориентации
      } else {
        setShowOrientationMessage(false); // Скрываем сообщение для других устройств
      }
    };

    handleOrientationChange(); // Проверяем ориентацию при загрузке страницы
    window.addEventListener('resize', handleOrientationChange); // Обработчик на изменение ориентации

    return () => window.removeEventListener('resize', handleOrientationChange); // Удаляем обработчик при размонтировании
  }, []);

  return (
    <div>
      {showOrientationMessage ? (
        <div className="orientation-warning">
          {t('orientationWarning')}
        </div>
      ) : (
    <div className="education">
      <section className="education-section first-section">       
        <Menu />    
        <div className="education-content">
          <p>{t('education.pupils')}</p>
        </div>
      </section>

      <section className="education-section second-section">
        <div className="education-text">
          <p className="justified">
            {t('education.text1')}
          </p>
          <p className="centroid">
            <a href='mailto:info@polina-atelier.com?subject=question'>{t('education.email')}</a>
          </p>
        </div>
        <div className="bird-logo-container">
          <img src={require('../images/birdLogo.png')} alt="Bird Logo" className="bird-logo" />
        </div>
      </section>
    </div>
      )}
      </div>
  );
}

export default Education;