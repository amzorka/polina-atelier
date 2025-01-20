import React, { useEffect } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "../styles/ProjectModal.scss";

Modal.setAppElement("#root");

function ProjectModal({
  isOpen,
  onRequestClose,
  project,
  deviceType,
}) {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [isOpen]);

  // Обработчик клика по кнопке закрытия модального окна
  const handleModalClose = () => {
    if (isOpen) {
      onRequestClose(); // Закрыть модальное окно
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    fade: true,
  };

  const images =
    deviceType === "mobile"
      ? project?.mobileImages.slice(1)
      : deviceType === "tablet"
      ? project?.tabletImages.slice(1)
      : project?.desktopImages.slice(1);

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
          {/* Слайдер */}
          <div className="pr-slider-container">
            <Slider {...sliderSettings}>
              {images &&
                images.map((image, index) => (
                  <div key={index} className="pr-slider-image">
                    <img
                      className="responsive-image"
                      src={image}
                      alt={`${t(
                        `gallery.projects.${project.index}.title`
                      )} img ${index + 1}`}
                    />
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      )}
    </Modal>
  );
}

export default ProjectModal;
