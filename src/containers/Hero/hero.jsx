import './hero.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import Socials from '../../components/socials/socials'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg'
import ParticlesComponent from '../../components/Particles/particles'
import profile from '../../assets/images/profile.webp'
import { scrollToSection } from '../../utils/function'
import { heroLang } from '../../utils/data'

const MemoizedParticlesComponent = React.memo(ParticlesComponent)
const MemoizedSocials = React.memo(Socials)

const Hero = () => {
  const lang = useSelector((state) => state.switchLang.lang)

  const handleScrollToContact = () => scrollToSection('contact')

  return (
    <>
      <section className="hero" id="hero">
        <MemoizedParticlesComponent />
        <div className="hero_wrapper margin">
          <div className="container">
            <div className="wrapper">
              <h1 className="wrapper_title">Steven</h1>
              <p className="wrapper_job">
                <strong>{!lang ? heroLang.strongFr : heroLang.strongEn}</strong>
              </p>
              <p className="wrapper_description lang">
                {!lang ? heroLang.descriptionFr : heroLang.descriptionEn}
              </p>
              <div className="socials">
                <MemoizedSocials hero="socials_icon" />
              </div>
              <div className="wrapper_button">
                <button
                  className="wrapper_button_contact"
                  onClick={handleScrollToContact}
                >
                  <span>
                    {!lang
                      ? heroLang.contactButtonFr
                      : heroLang.contactButtonEn}
                  </span>
                </button>
                <a
                  href="cv.txt"
                  download="cv.txt"
                  className="wrapper_button_cv"
                >
                  {!lang ? heroLang.cvButtonFr : heroLang.cvButtonEn}
                </a>
              </div>
            </div>
            <div className="profile">
              <img src={profile} alt="Steven Canivet" className="profile_img" />
            </div>
          </div>
          <button
            className="button"
            onClick={() => scrollToSection('projects')}
          >
            <span className="sr-only">Nav button</span>
            <ArrowDown className="button_arrow" />
          </button>
        </div>
      </section>
    </>
  )
}

export default Hero
