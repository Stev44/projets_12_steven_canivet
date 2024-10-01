import './projects.scss'
import { projects } from '../../utils/content'
import { useSelector } from 'react-redux'
import { sectionLang } from '../../utils/data'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const navRef = useRef(null)
  const lang = useSelector((state) => state.switchLang.lang)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [images, setImages] = useState([]) // État pour les images
  const [touchStart, setTouchStart] = useState(0) // Pour stocker la position de départ du swipe
  const [touchEnd, setTouchEnd] = useState(0)

  const handlePreview = (imgArray, index) => {
    setImages(imgArray) // Définit le tableau d'images à afficher
    setCurrentIndex(index) // Définit l'index courant pour le slider
    setIsModalOpened(true) // Ouvre la modal
  }

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsModalOpened(false)
      setCurrentIndex(0) // Reset l'index à 0 quand la modal se ferme
      setImages([]) // Réinitialise le tableau d'images
    }
  }

  useEffect(() => {
    if (isModalOpened) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isModalOpened])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe vers la gauche -> Next slide
      nextSlide()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe vers la droite -> Previous slide
      prevSlide()
    }
  }

  const handleRadioChange = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="projects padding" id="projects">
      <div className="projects_wrapper margin">
        <h2 className="underline">
          {!lang ? sectionLang.projectsFr : sectionLang.projectsEn}
        </h2>
        <div className="wrapper">
          {projects.map((item, index) => (
            <div className="map" key={index}>
              <div className="card">
                <div className="card_img">
                  <div className="img">
                    <img src={item.img} alt={item.title} />
                    <span className="img_title">{item.title}</span>
                  </div>
                  <div className="container">
                    <div className="card_img_technologies">
                      {item.technologies.map((TechIcon, idx) => (
                        <TechIcon key={idx} className="icon" />
                      ))}
                    </div>
                    <div className="card_img_description">
                      <p>{!lang ? item.descriptionFr : item.descriptionEn}</p>
                    </div>
                    <div className="card_img_button">
                      {item.code && (
                        <button>
                          <p>
                            <a
                              href={item.code}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {!lang ? item.codeTextFr : item.codeTextEn}
                            </a>
                          </p>
                        </button>
                      )}
                      {item.site && (
                        <button>
                          <p>
                            <a
                              href={item.site}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {!lang ? item.siteTextFr : item.siteTextEn}
                            </a>
                          </p>
                        </button>
                      )}
                      {item.images && (
                        <button onClick={() => handlePreview(item.images, 0)}>
                          <p className="preview">
                            {!lang ? item.previewFr : item.previewEn}
                          </p>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpened && (
        <div className="modal">
          <div
            className="modal_preview"
            ref={navRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="modal_preview_container">
              {images.length != 1 && (
                <button
                  className="modal_preview_container_button left"
                  onClick={prevSlide}
                >
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="modal_preview_container_button_icon"
                  />
                </button>
              )}

              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="modal_preview_container_image"
              />
              {images.length != 1 && (
                <button
                  className="modal_preview_container_button right"
                  onClick={nextSlide}
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="modal_preview_container_button_icon"
                  />
                </button>
              )}
            </div>
            <div className="radio_buttons">
              {images.map((_, index) => (
                <label key={index}>
                  <input
                    type="radio"
                    name="slide"
                    value={index}
                    checked={currentIndex === index}
                    onChange={() => handleRadioChange(index)}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
