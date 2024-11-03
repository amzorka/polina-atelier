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
          {t("about.footer.tg")}
          <span> </span>
          {t("about.footer.email")}
        </p>
      </footer>
    </div>
  );
}

export default About;