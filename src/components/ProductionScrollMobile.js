import React from 'react';
import '../styles/ProductionScroll.scss';
import { useTranslation } from 'react-i18next';
import '../styles/ProductionScroll.scss';
import mScroll1 from '../images/MobileProductionScroll/1.png';
import mScroll2 from '../images/MobileProductionScroll/2.png';
import mScroll3 from '../images/MobileProductionScroll/3.png';
import mScroll4 from '../images/MobileProductionScroll/4.png';
import mScroll5 from '../images/MobileProductionScroll/5.png';
import mScroll6 from '../images/MobileProductionScroll/6.png';
import mScroll7 from '../images/MobileProductionScroll/7.png';
import mScroll8 from '../images/MobileProductionScroll/8.png';
import mScroll9 from '../images/MobileProductionScroll/9.png';
import mScroll10 from '../images/MobileProductionScroll/10.png';
import mScroll11 from '../images/MobileProductionScroll/11.png';
import mScroll12 from '../images/MobileProductionScroll/12.png';
import mScroll13 from '../images/MobileProductionScroll/13.png';
import mScroll14 from '../images/MobileProductionScroll/14.png';
import mScroll15 from '../images/MobileProductionScroll/15.png';
import mScroll16 from '../images/MobileProductionScroll/16.png';
import mScroll17 from '../images/MobileProductionScroll/17.png';
import mScroll18 from '../images/MobileProductionScroll/18.png';
import mScroll19 from '../images/MobileProductionScroll/19.png';
import mScroll20 from '../images/MobileProductionScroll/20.png';
import mScroll21 from '../images/MobileProductionScroll/21.png';
import mScroll22 from '../images/MobileProductionScroll/22.png';
import mScroll23 from '../images/MobileProductionScroll/23.png';
import mScroll24 from '../images/MobileProductionScroll/24.png';

const HoverImage = ({ imageSrc, name, age, post, slogan }) => {
    return (
      <div className="hover-container">
        <img src={imageSrc} alt="Hover Effect" />
        <div className="hover-text-container">
          <div className="hover-text">{name}</div>
          <div className="hover-text">{age}</div>
          <div className="hover-text">{post}</div>
          {slogan && <div className="hover-text">{slogan}</div>}
        </div>
      </div>
    );
  };

const ProductionScrollMobile = () => {
  const { t } = useTranslation();
  return (
    <div className="image-scroll">
           <img src={mScroll1} alt='scroll' />
           <img src={mScroll2} alt='scroll' />
           <HoverImage imageSrc={mScroll3} name={t('productionScroll.name1')} age={t('productionScroll.age1')} post={t('productionScroll.post1')}/>
           <HoverImage imageSrc={mScroll4} name={t('productionScroll.name2')} age={t('productionScroll.age2')} post={t('productionScroll.post2')} slogan={t('productionScroll.slogan2')}/>
           <img src={mScroll5} alt='scroll' />
          <HoverImage imageSrc={mScroll6} name={t('productionScroll.name3')} age={t('productionScroll.age3')} post={t('productionScroll.post3')}/>
          <img src={mScroll7} alt='scroll' />
           <img src={mScroll8} alt='scroll' />
           <img src={mScroll9} alt='scroll' />
           <HoverImage imageSrc={mScroll10} name={t('productionScroll.name4')} age={t('productionScroll.age4')} post={t('productionScroll.post4')} slogan={t('productionScroll.slogan4')}/>
           <img src={mScroll11} alt='scroll' />
           <img src={mScroll12} alt='scroll' />
           <img src={mScroll13} alt='scroll' />
           <img src={mScroll14} alt='scroll' />
           <img src={mScroll15} alt='scroll' />
           <HoverImage imageSrc={mScroll16} name={t('productionScroll.name5')} age={t('productionScroll.age5')} post={t('productionScroll.post5')} slogan={t('productionScroll.slogan5')}/>
           <img src={mScroll17} alt='scroll' />
           <img src={mScroll18} alt='scroll' />
           <HoverImage imageSrc={mScroll19} name={t('productionScroll.name6')} age={t('productionScroll.age6')} post={t('productionScroll.post6')}/>
           <img src={mScroll20} alt='scroll' />
           <img src={mScroll21} alt='scroll' />
           <HoverImage imageSrc={mScroll22} name={t('productionScroll.name7')} age={t('productionScroll.age7')} post={t('productionScroll.post7')} />
           <img src={mScroll23} alt='scroll' />
           <HoverImage imageSrc={mScroll24} name={t('productionScroll.name8')} age={t('productionScroll.age8')} post={t('productionScroll.post8')} />
    </div>
  );
};

export default ProductionScrollMobile;