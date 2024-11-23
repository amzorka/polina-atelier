import React from 'react';
import { useTranslation } from 'react-i18next';
import './../styles/About.scss';
import MenuDark from '../components/MenuDark';


function About() {
  const { t } = useTranslation();

  return (
    <div className="about">    
        <MenuDark />
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