import React from 'react';
import { useTranslation } from 'react-i18next';
import Menu from '../components/Menu';
import '../styles/Ecology.scss';

function Ecology() {
  const { t } = useTranslation();

  return (
    <div className="ecology">
      <Menu />
      <main className="ecology-content">
        <p>{t('ecology.content')}</p>
      </main>
      <footer className="ecology-footer">
        <p>{t('ecology.footer')}</p>
      </footer>
    </div>
  );
}

export default Ecology;