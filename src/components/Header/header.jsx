import { Link } from 'react-router-dom'
import './header.scss'
import { ReactComponent as ArrowUp } from '../../assets/arrowUp.svg'
import React, { useEffect, useState } from 'react'
import { scrollToSection } from '../../features/function'

const Header = React.memo(() => {
  const [visible, setVisible] = useState(false)

  /* Permet d'afficher le bouton a 200px de scroll en dessous la section Hero et permet aussi d'attribuer le new mode de couleur au body a chaque changement de couleur */
  useEffect(() => {
    const handleScroll = () => {
      const scrollVisible = 200

      if (window.scrollY > scrollVisible) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header id="header">
      <nav className="nav">
        <Link to={'/'} onClick={() => scrollToSection('header')}>
          <h1 className="nav_title">
            Steven <strong className="nav_title_highlight">Canivet</strong>
          </h1>
        </Link>
        <div className="nav_links">
          <Link onClick={() => scrollToSection('projects')}>Projets</Link>
          <Link onClick={() => scrollToSection('about')}>À propos</Link>
          <Link onClick={() => scrollToSection('course')}>Compétences</Link>
          <Link onClick={() => scrollToSection('contact')}>Contact</Link>
        </div>
        <button
          onClick={() => scrollToSection('header')}
          className={`back ${visible ? 'visible' : ''}`}
        >
          <span className="sr-only">Nav button</span>
          <ArrowUp className="arrow" />
        </button>
      </nav>
    </header>
  )
})

export default Header
