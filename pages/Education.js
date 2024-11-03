import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Education.scss';
import Menu from '../components/Menu';
import logo from '../images/EduFrame.png';

function Education() {
  const { t } = useTranslation();

  return (
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
            {t('education.email')}
          </p>
        </div>
        <footer className="education-footer">
          <img src={logo} alt="Education Frame" />
        </footer>
      </section>
    </div>
  );
}

export default Education;