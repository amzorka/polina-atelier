import React from 'react';
import '../styles/ProductionScroll.scss';
import { useTranslation } from 'react-i18next';
import scroll1 from '../images/ProductionScroll/1.png';
import scroll2 from '../images/ProductionScroll/2.png';
import scroll3 from '../images/ProductionScroll/3.png';
import scroll4 from '../images/ProductionScroll/4.png';
import scroll5 from '../images/ProductionScroll/5.png';
import scroll6 from '../images/ProductionScroll/6.png';
import scroll7 from '../images/ProductionScroll/7.png';
import scroll8 from '../images/ProductionScroll/8.png';
import scroll9 from '../images/ProductionScroll/9.png';
import scroll10 from '../images/ProductionScroll/10.png';
import scroll11 from '../images/ProductionScroll/11.png';
import scroll12 from '../images/ProductionScroll/12.png';
import scroll13 from '../images/ProductionScroll/13.png';
import scroll14 from '../images/ProductionScroll/14.png';
import scroll15 from '../images/ProductionScroll/15.png';
import scroll16 from '../images/ProductionScroll/16.png';
import scroll17 from '../images/ProductionScroll/17.png';
import scroll18 from '../images/ProductionScroll/18.png';
import scroll19 from '../images/ProductionScroll/19.png';
import scroll20 from '../images/ProductionScroll/20.png';
import scroll21 from '../images/ProductionScroll/21.png';
import scroll22 from '../images/ProductionScroll/22.png';
import scroll23 from '../images/ProductionScroll/23.png';
import scroll24 from '../images/ProductionScroll/24.png';

const HoverImage = ({ imageSrc, text }) => {
    return (
      <div className="hover-container">
        <img src={imageSrc} alt="Hover Effect"></img>
        <div className="hover-text">{text}</div>
      </div>
    );
};

function ProductionScroll() {
    const { t } = useTranslation();

    return (
      <div className="image-scroll">
          <img src={scroll1} alt='scroll' />
          <img src={scroll2} alt='scroll' />
          <HoverImage imageSrc={scroll3} text={t('productionScroll.text1')} />
          <HoverImage imageSrc={scroll4} text={t('productionScroll.text2')} />
          <img src={scroll5} alt='scroll' />
          <HoverImage imageSrc={scroll6} text={t('productionScroll.text3')} />
          <img src={scroll7} alt='scroll' />
          <img src={scroll8} alt='scroll' />
          <img src={scroll9} alt='scroll' />
          <HoverImage imageSrc={scroll10} text={t('productionScroll.text4')} />
          <img src={scroll11} alt='scroll' />
          <img src={scroll12} alt='scroll' />
          <img src={scroll13} alt='scroll' />
          <img src={scroll14} alt='scroll' />
          <img src={scroll15} alt='scroll' />
          <HoverImage imageSrc={scroll16} text={t('productionScroll.text5')} />
          <img src={scroll17} alt='scroll' />
          <img src={scroll18} alt='scroll' />
          <HoverImage imageSrc={scroll19} text={t('productionScroll.text6')} />
          <img src={scroll20} alt='scroll' />
          <img src={scroll21} alt='scroll' />
          <HoverImage imageSrc={scroll22} text={t('productionScroll.text7')} />
          <img src={scroll23} alt='scroll' />
          <HoverImage imageSrc={scroll24} text={t('productionScroll.text8')} />
      </div>
    );
}

export default ProductionScroll;