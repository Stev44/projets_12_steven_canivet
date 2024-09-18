import './course.scss'
import tech from '../../features/tech/tech'
import { ReactComponent as Degree } from '../../assets/degree2.svg'

const Course = () => {
  return (
    <section className="course padding" id="course">
      <div className="course_container margin">
        <h2 className="underline">MY TECHNICAL SKILLS</h2>
        <div className="wrapper">
          <div className="skills">
            <div className="skills_container">
              <div className="skills_container_map">
                {tech.map((item, index) => (
                  <item.icon
                    key={index}
                    className="skills_container_map_icons"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course
