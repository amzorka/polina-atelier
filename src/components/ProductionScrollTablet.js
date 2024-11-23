import React from "react";
import { useTranslation } from 'react-i18next';
import '../styles/ProductionScroll.scss';
import tScroll1 from '../images/TabletProductionScroll/1.png';
import tScroll2 from '../images/TabletProductionScroll/2.png';
import tScroll3 from '../images/TabletProductionScroll/3.png';
import tScroll4 from '../images/TabletProductionScroll/4.png';
import tScroll5 from '../images/TabletProductionScroll/5.png';
import tScroll6 from '../images/TabletProductionScroll/6.png';
import tScroll7 from '../images/TabletProductionScroll/7.png';
import tScroll8 from '../images/TabletProductionScroll/8.png';
import tScroll9 from '../images/TabletProductionScroll/9.png';
import tScroll10 from '../images/TabletProductionScroll/10.png';
import tScroll11 from '../images/TabletProductionScroll/11.png';
import tScroll12 from '../images/TabletProductionScroll/12.png';
import tScroll13 from '../images/TabletProductionScroll/13.png';
import tScroll14 from '../images/TabletProductionScroll/14.png';
import tScroll15 from '../images/TabletProductionScroll/15.png';
import tScroll16 from '../images/TabletProductionScroll/16.png';
import tScroll17 from '../images/TabletProductionScroll/17.png';
import tScroll18 from '../images/TabletProductionScroll/18.png';
import tScroll19 from '../images/TabletProductionScroll/19.png';
import tScroll20 from '../images/TabletProductionScroll/20.png';
import tScroll21 from '../images/TabletProductionScroll/21.png';
import tScroll22 from '../images/TabletProductionScroll/22.png';
import tScroll23 from '../images/TabletProductionScroll/23.png';
import tScroll24 from '../images/TabletProductionScroll/24.png';

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

const ProductionScrollTablet = () => {
  const { t } = useTranslation();
  return (
    <div className="image-scroll">
           <img src={tScroll1} alt='scroll' />
           <img src={tScroll2} alt='scroll' />
           <HoverImage imageSrc={tScroll3} name={t('productionScroll.name1')} age={t('productionScroll.age1')} post={t('productionScroll.post1')}/>
           <HoverImage imageSrc={tScroll4} name={t('productionScroll.name2')} age={t('productionScroll.age2')} post={t('productionScroll.post2')} slogan={t('productionScroll.slogan2')}/>
           <img src={tScroll5} alt='scroll' />
          <HoverImage imageSrc={tScroll6} name={t('productionScroll.name3')} age={t('productionScroll.age3')} post={t('productionScroll.post3')}/>
          <img src={tScroll7} alt='scroll' />
           <img src={tScroll8} alt='scroll' />
           <img src={tScroll9} alt='scroll' />
           <HoverImage imageSrc={tScroll10} name={t('productionScroll.name4')} age={t('productionScroll.age4')} post={t('productionScroll.post4')} slogan={t('productionScroll.slogan4')}/>
           <img src={tScroll11} alt='scroll' />
           <img src={tScroll12} alt='scroll' />
           <img src={tScroll13} alt='scroll' />
           <img src={tScroll14} alt='scroll' />
           <img src={tScroll15} alt='scroll' />
           <HoverImage imageSrc={tScroll16} name={t('productionScroll.name5')} age={t('productionScroll.age5')} post={t('productionScroll.post5')} slogan={t('productionScroll.slogan5')}/>
           <img src={tScroll17} alt='scroll' />
           <img src={tScroll18} alt='scroll' />
           <HoverImage imageSrc={tScroll19} name={t('productionScroll.name6')} age={t('productionScroll.age6')} post={t('productionScroll.post6')}/>
           <img src={tScroll20} alt='scroll' />
           <img src={tScroll21} alt='scroll' />
           <HoverImage imageSrc={tScroll22} name={t('productionScroll.name7')} age={t('productionScroll.age7')} post={t('productionScroll.post7')} />
           <img src={tScroll23} alt='scroll' />
           <HoverImage imageSrc={tScroll24} name={t('productionScroll.name8')} age={t('productionScroll.age8')} post={t('productionScroll.post8')} />
    </div>
  );
};

export default ProductionScrollTablet;