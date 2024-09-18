import Hero from '../../components/Hero/hero'
import Projects from '../../components/Projects/projects'
import About from '../../components/About/about'
import Course from '../../components/Course/course'
import Contact from '../../components/Contact/contact'
import Thanks from '../../components/Thanks/thanks'
import './home.scss'
import content from '../../features/contentProject/contentProject'

const OPTIONS = { loop: true }

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects content={content} options={OPTIONS} />
      <About />
      <Course />
      <Contact />
    </main>
  )
}

export default Home
