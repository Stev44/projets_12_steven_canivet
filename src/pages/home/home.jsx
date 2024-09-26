import Hero from '../../containers/Hero/hero'
import Projects from '../../containers/Projects/projects'
import About from '../../containers/About/about'
import Skills from '../../containers/Skills/skills'
import Contact from '../../containers/Contact/contact'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFadeClass } from '../../store/slice'
import './home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const lang = useSelector((state) => state.switchLang.lang)

  const triggerAnimation = () => {
    dispatch(setFadeClass({ fadeClass: 'fade-out' }))

    setTimeout(() => {
      dispatch(setFadeClass({ fadeClass: 'fade-in' }))
    }, 500)
  }

  useEffect(() => {
    triggerAnimation()
  }, [lang])

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
