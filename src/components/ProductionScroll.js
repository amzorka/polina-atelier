import React, { useState, useEffect } from 'react';
import '../styles/ProductionScroll.scss';
import ProductionScrollMobile from './ProductionScrollMobile';
import ProductionScrollTablet from './ProductionScrollTablet';
import ProductionScrollLaptop from './ProductionScrollLaptop';
import ProductionScrollDesktop from './ProductionScrollDesktop';

const ProductionScroll = () => {
  const [deviceType, setDeviceType] = useState('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setDeviceType('mobile');
      } else if (width >= 768 && width <= 1280) {
        setDeviceType('tablet');
      } else if (width >= 1281 && width <= 1919) {
        setDeviceType('laptop');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (deviceType === 'mobile') return <ProductionScrollMobile />;
  if (deviceType === 'tablet') return <ProductionScrollTablet />;
  if (deviceType === 'laptop') return <ProductionScrollLaptop />;
  return <ProductionScrollDesktop />;

};

export default ProductionScroll;