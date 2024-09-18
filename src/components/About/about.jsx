import './about.scss'
import { ReactComponent as Pro } from '../../assets/bag.svg'
import { ReactComponent as Gear } from '../../assets/gear.svg'
import { ReactComponent as Hand } from '../../assets/hand.svg'
import { ReactComponent as Book } from '../../assets/book.svg'

const About = () => {
  return (
    <section className="aboutSection padding" id="about">
      <div className="about margin">
        <h2 className="about_title underline">À PROPOS DE MOI</h2>
        <div className="about_content">
          <div className="about_wrapper">
            <div className="about_wrapper_qualities">
              <div className="quality block">
                <div>
                  <Book className="quality_icon" />
                </div>
                <p className="quality_text">Curiosité</p>
              </div>
              <div className="quality block">
                <div>
                  <Hand className="quality_icon" />
                </div>
                <p className="quality_text">Esprit d'équipe</p>
              </div>
              <div className="quality block">
                <div>
                  <Gear className="quality_icon" />
                </div>
                <p className="quality_text">Adaptation</p>
              </div>
              <div className="quality block">
                <div>
                  <Pro className="quality_icon" />
                </div>
                <p className="quality_text">Professionnel</p>
              </div>
            </div>
            <div className="about_wrapper_text">
              <p>
                Je m'appelle Steven Canivet et je suis développeur front-end
                basé à Nantes.
              </p>
              <p>
                Mon parcours est atypique et témoigne de ma polyvalence. Après
                un BTS en commerce international et une licence en communication
                et marketing, j’ai occupé pendant un an le poste de brancardier
                à l’Hôpital Privé du Confluent, poussé par mon intérêt pour
                l’aide à la personne.
              </p>
              <p>
                Animé par une passion pour la création, j’ai décidé de me
                reconvertir dans le développement web. J'ai suivi une formation
                de 9 mois chez <strong>OpenClassrooms</strong>, sous la
                supervision d’un mentor expérimenté.
              </p>
              <p>
                Parallèlement, ma créativité me pousse à consacrer mon temps
                libre au développement de jeux et d’interactions pour des sites
                web, ce qui nourrit et renforce ma passion pour le métier de
                développeur web.
              </p>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default About
