import React from "react";
import { useTranslation } from 'react-i18next';
import '../styles/ProductionScroll.scss';
import lScroll1 from '../images/LaptopProductionScroll/1.png';
import lScroll2 from '../images/LaptopProductionScroll/2.png';
import lScroll3 from '../images/LaptopProductionScroll/3.png';
import lScroll4 from '../images/LaptopProductionScroll/4.png';
import lScroll5 from '../images/LaptopProductionScroll/5.png';
import lScroll6 from '../images/LaptopProductionScroll/6.png';
import lScroll7 from '../images/LaptopProductionScroll/7.png';
import lScroll8 from '../images/LaptopProductionScroll/8.png';
import lScroll9 from '../images/LaptopProductionScroll/9.png';
import lScroll10 from '../images/LaptopProductionScroll/10.png';
import lScroll11 from '../images/LaptopProductionScroll/11.png';
import lScroll12 from '../images/LaptopProductionScroll/12.png';
import lScroll13 from '../images/LaptopProductionScroll/13.png';
import lScroll14 from '../images/LaptopProductionScroll/14.png';
import lScroll15 from '../images/LaptopProductionScroll/15.png';
import lScroll16 from '../images/LaptopProductionScroll/16.png';
import lScroll17 from '../images/LaptopProductionScroll/17.png';
import lScroll18 from '../images/LaptopProductionScroll/18.png';
import lScroll19 from '../images/LaptopProductionScroll/19.png';
import lScroll20 from '../images/LaptopProductionScroll/20.png';
import lScroll21 from '../images/LaptopProductionScroll/21.png';
import lScroll22 from '../images/LaptopProductionScroll/22.png';
import lScroll23 from '../images/LaptopProductionScroll/23.png';
import lScroll24 from '../images/LaptopProductionScroll/24.png';

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

const ProductionScrollLaptop = () => {
    const { t } = useTranslation();
  return (
    <div className="image-scroll">
           <img src={lScroll1} alt='scroll' />
           <img src={lScroll2} alt='scroll' />
           <HoverImage imageSrc={lScroll3} name={t('productionScroll.name1')} age={t('productionScroll.age1')} post={t('productionScroll.post1')}/>
           <HoverImage imageSrc={lScroll4} name={t('productionScroll.name2')} age={t('productionScroll.age2')} post={t('productionScroll.post2')} slogan={t('productionScroll.slogan2')}/>
           <img src={lScroll5} alt='scroll' />
          <HoverImage imageSrc={lScroll6} name={t('productionScroll.name3')} age={t('productionScroll.age3')} post={t('productionScroll.post3')}/>
          <img src={lScroll7} alt='scroll' />
           <img src={lScroll8} alt='scroll' />
           <img src={lScroll9} alt='scroll' />
           <HoverImage imageSrc={lScroll10} name={t('productionScroll.name4')} age={t('productionScroll.age4')} post={t('productionScroll.post4')} slogan={t('productionScroll.slogan4')}/>
           <img src={lScroll11} alt='scroll' />
           <img src={lScroll12} alt='scroll' />
           <img src={lScroll13} alt='scroll' />
           <img src={lScroll14} alt='scroll' />
           <img src={lScroll15} alt='scroll' />
           <HoverImage imageSrc={lScroll16} name={t('productionScroll.name5')} age={t('productionScroll.age5')} post={t('productionScroll.post5')} slogan={t('productionScroll.slogan5')}/>
           <img src={lScroll17} alt='scroll' />
           <img src={lScroll18} alt='scroll' />
           <HoverImage imageSrc={lScroll19} name={t('productionScroll.name6')} age={t('productionScroll.age6')} post={t('productionScroll.post6')}/>
           <img src={lScroll20} alt='scroll' />
           <img src={lScroll21} alt='scroll' />
           <HoverImage imageSrc={lScroll22} name={t('productionScroll.name7')} age={t('productionScroll.age7')} post={t('productionScroll.post7')} />
           <img src={lScroll23} alt='scroll' />
           <HoverImage imageSrc={lScroll24} name={t('productionScroll.name8')} age={t('productionScroll.age8')} post={t('productionScroll.post8')} />
    </div>
  );
};

export default ProductionScrollLaptop;