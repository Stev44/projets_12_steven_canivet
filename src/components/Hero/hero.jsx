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
            <h1 className="wrapper_title">Steven</h1>
            <p className="wrapper_job">
              <strong>Développeur front-end</strong>
            </p>
            <p className="wrapper_description">Passionné par la création</p>
            <Socials />
            <button
              className="wrapper_button"
              onClick={() => scrollToSection('contact')}
            >
              Me contacter
            </button>
          </div>
          <div className="profile">
            <img src={profile} alt="Steven Canivet" className="profile_img" />
          </div>
        </div>
        <button className="button" onClick={() => scrollToSection('projects')}>
          <span className="sr-only">Nav button</span>
          <Arrow className="button_arrow" />
        </button>
      </div>
    </section>
  )
}

export default Hero
