import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../components/Menu';
import '../styles/Ecology.scss';

function Ecology() {
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
        <div className="ecology">
          <Menu />
          <main className="ecology-content">
            <p>{t('ecology.content')}</p>
          </main>
          <footer className="ecology-footer">
            <p>{t('ecology.footer')}</p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default Ecology;