import React from "react";
import { useTranslation } from 'react-i18next';
import '../styles/ProductionScroll.scss';
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

  const ProductionScrollDesktop = () => {
    const { t } = useTranslation();
    return (
      <div className="image-scroll">
           <img src={scroll1} alt='scroll' />
           <img src={scroll2} alt='scroll' />
           <HoverImage imageSrc={scroll3} name={t('productionScroll.name1')} age={t('productionScroll.age1')} post={t('productionScroll.post1')}/>
           <HoverImage imageSrc={scroll4} name={t('productionScroll.name2')} age={t('productionScroll.age2')} post={t('productionScroll.post2')} slogan={t('productionScroll.slogan2')}/>
           <img src={scroll5} alt='scroll' />
          <HoverImage imageSrc={scroll6} name={t('productionScroll.name3')} age={t('productionScroll.age3')} post={t('productionScroll.post3')}/>
          <img src={scroll7} alt='scroll' />
           <img src={scroll8} alt='scroll' />
           <img src={scroll9} alt='scroll' />
           <HoverImage imageSrc={scroll10} name={t('productionScroll.name4')} age={t('productionScroll.age4')} post={t('productionScroll.post4')} slogan={t('productionScroll.slogan4')}/>
           <img src={scroll11} alt='scroll' />
           <img src={scroll12} alt='scroll' />
           <img src={scroll13} alt='scroll' />
           <img src={scroll14} alt='scroll' />
           <img src={scroll15} alt='scroll' />
           <HoverImage imageSrc={scroll16} name={t('productionScroll.name5')} age={t('productionScroll.age5')} post={t('productionScroll.post5')} slogan={t('productionScroll.slogan5')}/>
           <img src={scroll17} alt='scroll' />
           <img src={scroll18} alt='scroll' />
           <HoverImage imageSrc={scroll19} name={t('productionScroll.name6')} age={t('productionScroll.age6')} post={t('productionScroll.post6')}/>
           <img src={scroll20} alt='scroll' />
           <img src={scroll21} alt='scroll' />
           <HoverImage imageSrc={scroll22} name={t('productionScroll.name7')} age={t('productionScroll.age7')} post={t('productionScroll.post7')} />
           <img src={scroll23} alt='scroll' />
           <HoverImage imageSrc={scroll24} name={t('productionScroll.name8')} age={t('productionScroll.age8')} post={t('productionScroll.post8')} />
       </div>
    );
  };
  
  export default ProductionScrollDesktop;