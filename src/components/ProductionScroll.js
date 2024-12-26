import React, { useState, useEffect, useRef} from 'react';
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



const GAP_SIZE = 15

const getDefaultImageWidth = () => {
	const width = window.innerWidth

	if (width <= 768) {
		return 173
	}

	if (width >= 768 && width <= 1279) {
		return 246
	}

	if (width >= 1280 && width <= 1919) {
		return 243
	}

	return 262
}

/**
 * Вычисляет итоговый размер списка изображений с учетом гэпа из GAP_SIZE
 * 
 * @param {number} count Количество картинок
 * @param {number} width Ширина картинок
 */
const getImagesSizeWithGap = (count, width) => count * width + (count - 1) * GAP_SIZE

/**
 * Вычисляет максимальное количество картинок, которые влезут на экран, при дефолтном размере, при учете гэпа
 */
const getMaxFullVisibleImagesCount = () => {
  const imageWidth = getDefaultImageWidth()
  const screenWidth = window.innerWidth
  
  let imagesCount = 1

  while (getImagesSizeWithGap(imagesCount, imageWidth) <= screenWidth) {
    imagesCount++
  }

  // Для телефонов (ширина экрана <= 767px) возвращаем imagesCount - 1
  if (screenWidth <= 767) {
    return imagesCount - 1;
  }

  // Для всех остальных размеров экрана возвращаем imagesCount
  return imagesCount;
};

const HoverImage = ({ imageSrc, name, age, post, slogan, imageStyle }) => {

  return (
    <div className="hover-container">
      <img src={imageSrc} alt="Hover Effect" style={{...imageStyle, backgroundSize: 'contain'}}/>
      <div className="hover-text-container">
        {name && <div className="hover-text">{name}</div>}
        {age && <div className="hover-text">{age}</div>}
        {post && <div className="hover-text">{post}</div>}
        {slogan && <div className="hover-text">{slogan}</div>}
      </div>
    </div>
  );
};

const ProductionScroll = () => {


  const scrollRef = useRef(null);
  let isDragging = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging = false;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Ускорение скролла
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };




  const { t } = useTranslation();
  const [currentImages, setCurrentImages] = useState([]);
  const [imageWidth, setImageWidth] = useState(getDefaultImageWidth())
  

  useEffect(() => {
    const updateImages = () => {
      const width = window.innerWidth;
      const isLandscape = window.matchMedia('(orientation: landscape)').matches;

      if (width <= 767) {
        setCurrentImages([mScroll1, mScroll2, mScroll3, mScroll4, mScroll5, mScroll6, mScroll7, mScroll8, mScroll9, mScroll10, mScroll11, mScroll12, mScroll13, mScroll14, mScroll15, mScroll16, mScroll17, mScroll18, mScroll19, mScroll20, mScroll21, mScroll22, mScroll23, mScroll24]);
      } else if (width >= 768 && width <= 1279) {
        // Планшеты
        if (isLandscape) {
          // Горизонтальная ориентация (показываем адаптив для ноутбука)
          setCurrentImages([lScroll1, lScroll2, lScroll3, lScroll4, lScroll5, lScroll6, lScroll7, lScroll8, lScroll9, lScroll10, lScroll11, lScroll12, lScroll13, lScroll14, lScroll15, lScroll16, lScroll17, lScroll18, lScroll19, lScroll20, lScroll21, lScroll22, lScroll23, lScroll24]);
        } else {
          // Вертикальная ориентация (планшетный адаптив)
          setCurrentImages([tScroll1, tScroll2, tScroll3, tScroll4, tScroll5, tScroll6, tScroll7, tScroll8, tScroll9, tScroll10, tScroll11, tScroll12, tScroll13, tScroll14, tScroll15, tScroll16, tScroll17, tScroll18, tScroll19, tScroll20, tScroll21, tScroll22, tScroll23, tScroll24]);
        }
       } else if (width >= 1280 && width <= 1919) {
        setCurrentImages([lScroll1, lScroll2, lScroll3, lScroll4, lScroll5, lScroll6, lScroll7, lScroll8, lScroll9, lScroll10, lScroll11, lScroll12, lScroll13, lScroll14, lScroll15, lScroll16, lScroll17, lScroll18, lScroll19, lScroll20, lScroll21, lScroll22, lScroll23, lScroll24]);
      } else {
        setCurrentImages([scroll1, scroll2, scroll3, scroll4, scroll5, scroll5, scroll6, scroll7, scroll8, scroll9, scroll10, scroll11, scroll12, scroll13, scroll14, scroll15, scroll16, scroll17, scroll18, scroll19, scroll20, scroll21, scroll22, scroll23, scroll24]);
      }
    };

    updateImages();
    window.addEventListener('resize', updateImages);

    return () => 
      window.removeEventListener('resize', updateImages);
  }, []);

  useEffect(() => {
    const updateImagesWidth = () => {
      const defaultWidth = getDefaultImageWidth()
      const fullVisibleImagesCount = getMaxFullVisibleImagesCount()

      const freeWidth = window.innerWidth - getImagesSizeWithGap(fullVisibleImagesCount, defaultWidth)

      setImageWidth(defaultWidth + (freeWidth / fullVisibleImagesCount))
    }

    updateImagesWidth()

    window.addEventListener('resize', updateImagesWidth)

    return () => window.removeEventListener('resize', updateImagesWidth)
  }, [])


  

  return (


    <div className="image-scroll"
    
    ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      
      >
  {currentImages.map((imageSrc, index) => {

const name = t(`productionScroll.name${index + 1}`);
const age = t(`productionScroll.age${index + 1}`);
const post = t(`productionScroll.post${index + 1}`);
const slogan = t(`productionScroll.slogan${index + 1}`);



  return (
      <HoverImage
        key={index}
        imageSrc={imageSrc}
        name={name}
        age={age}
        post={post}
        slogan={slogan}
        imageStyle={{ width: imageWidth, height: imageWidth * 1.5 }}
        
      />
    );
  })}
</div>
  )



};

export default ProductionScroll;
