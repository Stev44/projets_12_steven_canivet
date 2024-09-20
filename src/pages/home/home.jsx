import Hero from '../../components/Hero/hero'
import Projects from '../../components/Projects/projects'
import About from '../../components/About/about'
import Skills from '../../components/Skills/skills'
import Contact from '../../components/Contact/contact'
import './home.scss'

const Home = () => {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

export default Home
