import './hero.scss'
import Socials from '../../components/socials/socials'
import { ReactComponent as ArrowDown } from '../../assets/icons/arrowDown.svg'
import ParticlesComponent from '../../components/Particles/particles'
import profile from '../../assets/images/profil.jpg'
import { scrollToSection } from '../../utils/function'

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
            <div className="socials">
              <Socials hero="socials_icon" />
            </div>
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
          <ArrowDown className="button_arrow" />
        </button>
      </div>
    </section>
  )
}

export default Hero
