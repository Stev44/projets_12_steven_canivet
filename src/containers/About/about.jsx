import './about.scss'
import { ReactComponent as Pro } from '../../assets/icons/bag.svg'
import { ReactComponent as Gear } from '../../assets/icons/gear.svg'
import { ReactComponent as Hand } from '../../assets/icons/hand.svg'
import { ReactComponent as Book } from '../../assets/icons/book.svg'
import { aboutDataEn, aboutDataFr } from '../../utils/data'
import { useSelector } from 'react-redux'

const About = () => {
  const lang = useSelector((state) => state.switchLang.lang)
  console.log(lang)

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
              {lang === false ? aboutDataFr.text : aboutDataEn.text}
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default About
