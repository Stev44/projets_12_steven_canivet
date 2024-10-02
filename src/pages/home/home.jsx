import React, { Suspense, lazy } from 'react'
import Hero from '../../containers/Hero/hero' // Chargement normal
import './home.scss'

// Chargement paresseux des autres composants
const Projects = lazy(() => import('../../containers/Projects/projects'))
const About = lazy(() => import('../../containers/About/about'))
const Skills = lazy(() => import('../../containers/Skills/skills'))
const Contact = lazy(() => import('../../containers/Contact/contact'))

const Home = () => {
  return (
    <main>
      <Hero /> {/* Chargé immédiatement */}
      <Suspense fallback={<div>Loading...</div>}>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </Suspense>
    </main>
  )
}

export default Home
