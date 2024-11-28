import React from 'react';
import { useState } from 'react';
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

  return (
    <div className="about">    
        <MenuDark  
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          isModalOpen={isModalOpen}
        />
      <main className="about-content">
        <p>
        {t("about.content")}
        </p>
      </main>

   
      <footer className="about-footer">
        <p>
          <a href='https://t.me/polina_atelier'>{t("about.footer.tg")}</a>
          <span> </span>
          <a href='mailto:info@polina-atelier.com?subject=question'>{t("about.footer.email")}</a>
        </p>
      </footer>
    </div>
  );
}

export default About;