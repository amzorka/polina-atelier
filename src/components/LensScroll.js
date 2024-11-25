import React, { useState, useEffect } from 'react';
import '../styles/LensScroll.scss';

import scroll1 from '../images/LensScroll/1.png';
import scroll2 from '../images/LensScroll/2.png';
import scroll3 from '../images/LensScroll/3.png';
import scroll4 from '../images/LensScroll/4.png';
import scroll5 from '../images/LensScroll/5.png';
import scroll6 from '../images/LensScroll/6.png';
import scroll7 from '../images/LensScroll/7.png';
import scroll8 from '../images/LensScroll/8.png';
import scroll9 from '../images/LensScroll/9.png';
import scroll10 from '../images/LensScroll/10.png';
import scroll11 from '../images/LensScroll/11.png';
import scroll12 from '../images/LensScroll/12.png';
import scroll13 from '../images/LensScroll/13.png';
import scroll14 from '../images/LensScroll/14.png';
import scroll15 from '../images/LensScroll/15.png';
import scroll16 from '../images/LensScroll/16.png';
import scroll17 from '../images/LensScroll/17.png';
import scroll18 from '../images/LensScroll/18.png';
import scroll19 from '../images/LensScroll/19.png';
import scroll20 from '../images/LensScroll/20.png';

import mScroll1 from '../images/MobileLensScroll/1.png';
import mScroll2 from '../images/MobileLensScroll/2.png';
import mScroll3 from '../images/MobileLensScroll/3.png';
import mScroll4 from '../images/MobileLensScroll/4.png';
import mScroll5 from '../images/MobileLensScroll/5.png';
import mScroll6 from '../images/MobileLensScroll/6.png';
import mScroll7 from '../images/MobileLensScroll/7.png';
import mScroll8 from '../images/MobileLensScroll/8.png';
import mScroll9 from '../images/MobileLensScroll/9.png';
import mScroll10 from '../images/MobileLensScroll/10.png';
import mScroll11 from '../images/MobileLensScroll/11.png';
import mScroll12 from '../images/MobileLensScroll/12.png';
import mScroll13 from '../images/MobileLensScroll/13.png';
import mScroll14 from '../images/MobileLensScroll/14.png';
import mScroll15 from '../images/MobileLensScroll/15.png';
import mScroll16 from '../images/MobileLensScroll/16.png';
import mScroll17 from '../images/MobileLensScroll/17.png';
import mScroll18 from '../images/MobileLensScroll/18.png';
import mScroll19 from '../images/MobileLensScroll/19.png';
import mScroll20 from '../images/MobileLensScroll/20.png';

import tScroll1 from '../images/TabletLensScroll/1.png';
import tScroll2 from '../images/TabletLensScroll/2.png';
import tScroll3 from '../images/TabletLensScroll/3.png';
import tScroll4 from '../images/TabletLensScroll/4.png';
import tScroll5 from '../images/TabletLensScroll/5.png';
import tScroll6 from '../images/TabletLensScroll/6.png';
import tScroll7 from '../images/TabletLensScroll/7.png';
import tScroll8 from '../images/TabletLensScroll/8.png';
import tScroll9 from '../images/TabletLensScroll/9.png';
import tScroll10 from '../images/TabletLensScroll/10.png';
import tScroll11 from '../images/TabletLensScroll/11.png';
import tScroll12 from '../images/TabletLensScroll/12.png';
import tScroll13 from '../images/TabletLensScroll/13.png';
import tScroll14 from '../images/TabletLensScroll/14.png';
import tScroll15 from '../images/TabletLensScroll/15.png';
import tScroll16 from '../images/TabletLensScroll/16.png';
import tScroll17 from '../images/TabletLensScroll/17.png';
import tScroll18 from '../images/TabletLensScroll/18.png';
import tScroll19 from '../images/TabletLensScroll/19.png';
import tScroll20 from '../images/TabletLensScroll/20.png';

import lScroll1 from '../images/LaptopLensScroll/1.jpg';
import lScroll2 from '../images/LaptopLensScroll/2.jpg';
import lScroll3 from '../images/LaptopLensScroll/3.jpg';
import lScroll4 from '../images/LaptopLensScroll/4.jpg';
import lScroll5 from '../images/LaptopLensScroll/5.jpg';
import lScroll6 from '../images/LaptopLensScroll/6.jpg';
import lScroll7 from '../images/LaptopLensScroll/7.jpg';
import lScroll8 from '../images/LaptopLensScroll/8.jpg';
import lScroll9 from '../images/LaptopLensScroll/9.jpg';
import lScroll10 from '../images/LaptopLensScroll/10.jpg';
import lScroll11 from '../images/LaptopLensScroll/11.jpg';
import lScroll12 from '../images/LaptopLensScroll/12.jpg';
import lScroll13 from '../images/LaptopLensScroll/13.jpg';
import lScroll14 from '../images/LaptopLensScroll/14.jpg';
import lScroll15 from '../images/LaptopLensScroll/15.jpg';
import lScroll16 from '../images/LaptopLensScroll/16.jpg';
import lScroll17 from '../images/LaptopLensScroll/17.jpg';
import lScroll18 from '../images/LaptopLensScroll/18.jpg';
import lScroll19 from '../images/LaptopLensScroll/19.jpg';
import lScroll20 from '../images/LaptopLensScroll/20.jpg';

const HoverImageLens = ({ imageSrc, text }) => {
  return (
    <div className="hover-container-lens">
      <img src={imageSrc} alt="Hover Effect" />
      <div className="hover-text-lens">{text}</div>
    </div>
  );
};

function LensScroll() {
  const [currentImages, setCurrentImages] = useState([]);

  useEffect(() => {
    const updateImages = () => {
      const width = window.innerWidth;

      if (width <= 767) {
        setCurrentImages([mScroll1, mScroll2, mScroll3, mScroll4, mScroll5, mScroll6, mScroll7, mScroll8, mScroll9, mScroll10, mScroll11, mScroll12, mScroll13, mScroll14, mScroll15, mScroll16, mScroll17, mScroll18, mScroll19, mScroll20]);
      } else if (width >= 768 && width <= 1280) {
        setCurrentImages([tScroll1, tScroll2, tScroll3, tScroll4, tScroll5, tScroll6, tScroll7, tScroll8, tScroll9, tScroll10, tScroll11, tScroll12, tScroll13, tScroll14, tScroll15, tScroll16, tScroll17, tScroll18, tScroll19, tScroll20]);
      } else if (width >= 1281 && width <= 1920) {
        setCurrentImages([lScroll1, lScroll2, lScroll3, lScroll4, lScroll5, lScroll6, lScroll7, lScroll8, lScroll9, lScroll10, lScroll11, lScroll12, lScroll13, lScroll14, lScroll15, lScroll16, lScroll17, lScroll18, lScroll19, lScroll20]);
      } else {
        setCurrentImages([scroll1, scroll2, scroll3, scroll4, scroll5, scroll5, scroll6, scroll7, scroll8, scroll9, scroll10, scroll11, scroll12, scroll13, scroll14, scroll15, scroll16, scroll17, scroll18, scroll19, scroll20]);
      }
    };

    updateImages(); 
    window.addEventListener('resize', updateImages); 

    return () => window.removeEventListener('resize', updateImages); 
  }, []);

  return (
    <div className="image-scroll-lens">
      {currentImages.map((imageSrc, index) => (
        <HoverImageLens key={index} imageSrc={imageSrc} />
      ))}
    </div>
  );
}

export default LensScroll;