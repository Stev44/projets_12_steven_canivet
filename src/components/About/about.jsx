import './about.scss'
import { ReactComponent as Pro } from '../../assets/bag.svg'
import { ReactComponent as Gear } from '../../assets/gear.svg'
import { ReactComponent as Hand } from '../../assets/hand.svg'
import { ReactComponent as Book } from '../../assets/book.svg'

const About = () => {
  return (
    <section className="about padding" id="about">
      <h2 className="about_title underline">ABOUT ME</h2>
      <div className="about_content">
        <div className="about_wrapper">
          <div className="about_wrapper_qualities">
            <div className="quality">
              <div>
                <Book className="quality_icon" />
              </div>
              <p className="quality_text">Curiosity</p>
            </div>
            <div className="quality">
              <div>
                <Hand className="quality_icon" />
              </div>
              <p className="quality_text">Team spirit</p>
            </div>
            <div className="quality">
              <div>
                <Gear className="quality_icon" />
              </div>
              <p className="quality_text">Adaptation</p>
            </div>
            <div className="quality">
              <div>
                <Pro className="quality_icon" />
              </div>
              <p className="quality_text">Professionnal</p>
            </div>
          </div>
          <div className="about_wrapper_text">
            <p>
              Je suis Steven Canivet, développeur, designer & music producer
              situé en France.
            </p>
            <p>
              Ayant un parcours atypique, j’ai travaillé ces domaines de façon
              autodidacte pendant plusieurs années développant un amour
              particulier pour le développement, notamment pour la sécurité
              informatique et l’intelligence artificielle.
            </p>
            <p>
              Je suis également designer, ce qui me permet d’associer l’une de
              mes passions à mon travail actuel de développeur web &
              d’application fullstack et créer des interfaces sobres, épurées et
              modernes.
            </p>
            <p>
              En parallèle, je suis producteur de musique (dit “music producer”)
              étant tout particulièrement attiré professionnellement par le
              monde musical du jeu vidéo.
            </p>
          </div>
        </div>
        <div className="line"></div>
      </div>
    </section>
  )
}

export default About
