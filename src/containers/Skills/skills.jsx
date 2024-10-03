import './skills.scss'
import { tech } from '../../utils/content'
import { sectionLang } from '../../utils/data'
import { useSelector } from 'react-redux'

const Skills = () => {
  const lang = useSelector((state) => state.switchLang.lang)
  return (
    <section className="course padding" id="skills">
      <div className="course_container margin">
        <h2 className="underline">
          {!lang ? sectionLang.skillsFr : sectionLang.skillsEn}
        </h2>
        <div className="wrapper">
          <div className="skills">
            {tech.map((item, index) => (
              <div className="skills_container" key={index}>
                <div className="skills_container_tech">
                  <item.icon
                    key={index}
                    className={`skills_container_tech_icon ${
                      item.animate && item.animate
                    }`}
                  />
                  <h3 className="skills_container_tech_name">{item.name}</h3>
                </div>
                <div className="skills_container_info">
                  <span
                    className={`skills_container_info_category ${item.color}`}
                  >
                    {!lang ? item.categoryFr : item.categoryEn}
                  </span>
                  <div>
                    {Array.isArray(item.favorite) &&
                      item.favorite.map((Stars, index) => (
                        <Stars key={index} className="skills_container_stars" />
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
