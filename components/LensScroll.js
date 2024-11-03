import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/LensScroll.scss'
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

const HoverImageLens = ({ imageSrc, text }) => {
    return (
      <div className="hover-container-lens">
        <img src={imageSrc} alt="Hover Effect"></img>
      <div className="hover-text-lens">{text}</div>
      </div>
    );
  };

  function LensScroll({ images = [] }) {

    const [visibleImages, setVisibleImages] = useState([]);

    useEffect(() => {
        // Функция для расчёта количества видимых изображений
        const calculateVisibleImages = () => {
            const containerWidth = window.innerWidth; // ширина окна браузера
            const imageWidth = 261.43; // замените на фактическую ширину изображения в пикселях
            const visibleCount = Math.floor(containerWidth / imageWidth); // только целое количество изображений
            
            // Устанавливаем массив видимых изображений
            setVisibleImages(images.slice(0, visibleCount));
        };

        // Рассчитываем видимые изображения при загрузке страницы
        calculateVisibleImages();

        // Пересчитываем при изменении размера окна
        window.addEventListener('resize', calculateVisibleImages);
        return () => window.removeEventListener('resize', calculateVisibleImages);
    }, [images]);


    return (
  <div className="image-scroll-lens">
          <HoverImageLens imageSrc={scroll1}  />
          <HoverImageLens imageSrc={scroll2}  />
          <HoverImageLens imageSrc={scroll3}  />
          <HoverImageLens imageSrc={scroll4}  />
          <HoverImageLens imageSrc={scroll5}  />
          <HoverImageLens imageSrc={scroll6}  />
          <HoverImageLens imageSrc={scroll7}  />
          <HoverImageLens imageSrc={scroll8}  />
          <HoverImageLens imageSrc={scroll9}  />
          <HoverImageLens imageSrc={scroll10}  />
          <HoverImageLens imageSrc={scroll11}  />
          <HoverImageLens imageSrc={scroll12}  />
          <HoverImageLens imageSrc={scroll13}  />
          <HoverImageLens imageSrc={scroll14}  />
          <HoverImageLens imageSrc={scroll15}  />
          <HoverImageLens imageSrc={scroll16}  />
          <HoverImageLens imageSrc={scroll17}  />
          <HoverImageLens imageSrc={scroll18}  />
          <HoverImageLens imageSrc={scroll19}  />
          <HoverImageLens imageSrc={scroll20}  />
        </div>
    );
}
        export default LensScroll;