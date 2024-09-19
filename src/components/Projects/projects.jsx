import './projects.scss'
import content from '../../features/contentProject'

const Projects = () => {
  return (
    <section className="projects padding" id="projects">
      <div className="projects_wrapper margin">
        <h2 className="underline">MES PROJETS</h2>
        <div className="wrapper">
          {content.map((item, index) => (
            <div className="map" key={index}>
              <h3>{item.title}</h3>
              <div className="card">
                <div className="card_img">
                  <div className="img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="container">
                    <div className="card_img_technologies">
                      {item.technologies.map((TechIcon, idx) => (
                        <TechIcon key={idx} className="icon" />
                      ))}
                    </div>
                    <div className="card_img_description">
                      <p>{item.description}</p>
                    </div>
                    <div className="card_img_button">
                      {item.code && (
                        <button>
                          <p>
                            <a
                              href={item.code}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Voir le code
                            </a>
                          </p>
                        </button>
                      )}
                      {item.site && (
                        <button>
                          <p>
                            <a
                              href={item.site}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Voir le site
                            </a>
                          </p>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
