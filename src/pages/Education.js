import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Education.scss';
import Menu from '../components/Menu';

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
            <a href='mailto:info@polina-atelier.com?subject=question'>{t('education.email')}</a>
          </p>
        </div>
        <div className="bird-logo-container">
          <img src={require('../images/birdLogo.png')} alt="Bird Logo" className="bird-logo" />
        </div>
      </section>
    </div>
  );
}

export default Education;