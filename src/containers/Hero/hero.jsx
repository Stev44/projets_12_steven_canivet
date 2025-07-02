import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Socials from '../../components/socials/socials'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg'
import ParticlesComponent from '../../components/Particles/particles'
import smallProfile from '../../assets/images/smallProfile.webp'
import largeProfile from '../../assets/images/largeProfile.webp'
import mediumProfile from '../../assets/images/mediumProfile.webp'
import { scrollToSection } from '../../utils/function'
import { heroLang } from '../../utils/data'
import './hero.scss'

const MemoizedSocials = React.memo(Socials)

const Hero = () => {
  const lang = useSelector((state) => state.switchLang.lang)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 575)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 575)
    }

    window.addEventListener('resize', handleResize)

    // Nettoyage de l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image()
      img.src = src
    }

    preloadImage(mediumProfile)
    preloadImage(largeProfile)
  }, [])

  const handleScrollToContact = () => scrollToSection('contact')

  return (
    <section className="hero" id="hero">
      {!isMobile && <ParticlesComponent />}
      <div className="hero_wrapper margin">
        <div className="container">
          <div className="wrapper">
            <h1 className="wrapper_title">Steven</h1>
            <h2 className="wrapper_job">
              <strong>{!lang ? heroLang.strongFr : heroLang.strongEn}</strong>
            </h2>
            <h3 className="wrapper_description lang">
              {!lang ? heroLang.descriptionFr : heroLang.descriptionEn}
            </h3>
            <div className="socials">
              <MemoizedSocials hero="socials_icon" />
            </div>
            <div className="wrapper_button">
              <button
                className="wrapper_button_contact"
                onClick={handleScrollToContact}
              >
                <span>
                  {!lang ? heroLang.contactButtonFr : heroLang.contactButtonEn}
                </span>
              </button>
              <a
                href={
                  !lang ? 'cv_steven_canivet1.pdf' : 'cv_steven_canivet1.pdf'
                }
                download={
                  !lang ? 'cv_steven_canivet1.pdf' : 'cv_steven_canivet1.pdf'
                }
                className="wrapper_button_cv"
              >
                {!lang ? heroLang.cvButtonFr : heroLang.cvButtonEn}
                <span className="sr-only">Télécharger le CV (PDF)</span>
              </a>
            </div>
          </div>
          <div className="profile">
            <img
              src={smallProfile}
              srcSet={`${mediumProfile} 600w, ${largeProfile} 1200w`}
              alt="Steven Canivet"
              className="profile_img"
              width="500"
              height="500"
            />
          </div>
        </div>
        <button className="button" onClick={() => scrollToSection('projects')}>
          <span className="sr-only">Nav button</span>
          <ArrowDown className="button_arrow" />
        </button>
      </div>
    </section>
  )
}

export default Hero
