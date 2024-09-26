import { Link } from 'react-router-dom'
import './header.scss'
import { ReactComponent as ArrowUp } from '../../assets/icons/arrowUp.svg'
import React, { useEffect, useState } from 'react'
import { scrollToSection } from '../../utils/function'
import { useDispatch, useSelector } from 'react-redux'
import { setLang } from '../../store/slice'
import { navEn, navFr } from '../../utils/data'

const Header = React.memo(() => {
  const dispatch = useDispatch()
  const lang = useSelector((state) => state.switchLang.lang)
  const fadeClass = useSelector((state) => state.animation.fadeClass)
  const [visible, setVisible] = useState(false)

  /* Permet d'afficher le bouton a 200px de scroll en dessous la section Hero et permet aussi d'attribuer */
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
          {lang === false
            ? navFr.map((item, index) => (
                <Link
                  onClick={() => scrollToSection(item.id)}
                  className={`${item.class} ${fadeClass}`}
                  key={index}
                >
                  {item.name}
                </Link>
              ))
            : navEn.map((item, index) => (
                <Link
                  onClick={() => scrollToSection(item.id)}
                  className={`${item.class} ${fadeClass}`}
                  key={index}
                >
                  {item.name}
                </Link>
              ))}

          {/* <button onClick={() => dispatch(setLang({ lang: !lang }))}>
            Lang
          </button> */}
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
