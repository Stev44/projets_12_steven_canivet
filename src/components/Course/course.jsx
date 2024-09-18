import './course.scss'
import tech from '../../features/tech/tech'

const Course = () => {
  return (
    <section className="course padding" id="course">
      <div className="course_container margin">
        <h2 className="underline">COMPÉTENCES</h2>
        <div className="wrapper">
          <div className="skills">
            {tech.map((item, index) => (
              <div className="skills_container" key={index}>
                <item.icon key={index} className="skills_container_icon" />
                <div className="skills_container_name">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Course
