import React, { useEffect } from 'react';
import Modal from 'react-modal'; // Для модального окна
import Slider from 'react-slick'; // Для слайдера
import { useTranslation } from 'react-i18next';
import '../styles/ProjectModal.scss';
import closeButton from '../images/Gallery/CloseButton.png';

Modal.setAppElement('#root');

function ProjectModal({ isOpen, onRequestClose, project }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Modal"
      className="modal"
      overlayClassName="overlay-modal"
      closeTimeoutMS={300}
    >
      {project && (
        <div className="modal-content">
          <button className="close-button" onClick={onRequestClose}><img src={closeButton}/></button>
          <h2 className="project-title">{t(`gallery.projects.${project.index}.title`)}</h2>
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {project.images.map((image, index) => (
                <div key={index} className="pr-slider-image">
                  <img src={image} alt={`${t(`gallery.projects[${project.index}].title`)} img ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <p className="project-description">{t(`gallery.projects.${project.index}.description`)}</p>
        </div>
      )}
    </Modal>
  );
}

export default ProjectModal;