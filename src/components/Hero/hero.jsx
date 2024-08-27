import './hero.scss'
import Socials from '../socials/socials'
import { ReactComponent as Arrow } from '../../assets/arrow.svg'
import ParticlesComponent from '../Particles/particles'
import profile from '../../assets/profil.jpg'
import { scrollToSection } from '../../features/function'

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <ParticlesComponent />
      <div className="hero_wrapper margin">
        <div className="container">
          <div className="wrapper">
            <p className="wrapper_welcome">Hey there ! Im,</p>
            <h1 className="wrapper_title">Steven</h1>
            <p className="wrapper_job">
              <strong>Front-end junior developer.</strong>
            </p>
            <p className="wrapper_description">
              Passionate by creating and designs
            </p>
            <Socials />
            <button
              className="wrapper_button"
              onClick={() => scrollToSection('contact')}
            >
              Contact me
            </button>
          </div>
          <div className="profile">
            <img src={profile} alt="Steven Canivet" className="profile_img" />
          </div>
        </div>
        <button className="button" onClick={() => scrollToSection('projects')}>
          <span class="sr-only">Nav button</span>
          <Arrow className="button_arrow" />
        </button>
      </div>
    </section>
  )
}

export default Hero
