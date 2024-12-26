import React from 'react';
import { useState, useEffect } from 'react';
import { useTranslation} from 'react-i18next';
import './../styles/About.scss';
import MenuDark from '../components/MenuDark';


function About() {
  const { t } = useTranslation();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для меню
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
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
        <div className="about">
          <MenuDark
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            isModalOpen={isModalOpen}
          />
          <main className="about-content">
            <p>{t("about.content")}</p>
          </main>
          <footer className="about-footer">
            <p>
              <a href="https://t.me/polina_atelier">{t("about.footer.tg")}</a>
              <span> </span>
              <a href="mailto:info@polina-atelier.com?subject=question">
                {t("about.footer.email")}
              </a>
            </p>
          </footer>
        </div>
      )}
    </div>
  );
}

export default About;