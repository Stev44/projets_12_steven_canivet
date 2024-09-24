import { ReactComponent as Redux } from '../assets/tech/redux.svg'
import { ReactComponent as ReactIcon } from '../assets/tech/react.svg'
import { ReactComponent as Sass } from '../assets/tech/sass.svg'
import { ReactComponent as Html } from '../assets/tech/html.svg'
import { ReactComponent as MongoDB } from '../assets/tech/mongoDB.svg'
import { ReactComponent as Figma } from '../assets/tech/figma.svg'
import { ReactComponent as Css } from '../assets/tech/css.svg'
import { ReactComponent as Js } from '../assets/tech/js.svg'
import { ReactComponent as Github } from '../assets/tech/github.svg'

import project from '../assets/images/724.png'
import ab from '../assets/images/argentbank2.jpeg'
import portfolio from '../assets/images/portfolio.webp'
import kasa from '../assets/images/kasa2.jpg'
import leo from '../assets/images/planche.webp'
import nina from '../assets/images/nina2.jpg'

export const projects = [
  {
    title: 'Léo Vautrin Coaching',
    img: leo,
    description: `Réalisation d'un site vitrine "from scratch", pour un coach sportif.`,
    technologies: [ReactIcon, Sass],
    site: 'https://stev44.github.io/leo_vautrin_coaching/',
  },
  {
    title: 'Portfolio',
    img: portfolio,
    description: `Projet de fin d'étude réalisé "from scratch", en react.`,
    technologies: [ReactIcon, Sass, Figma],
    code: 'https://github.com/Stev44/projet_12_steven_canivet',
  },
  {
    title: 'Argent Bank',
    img: ab,
    description: `Réalisation d'un système d'authentification et des routes API pour les transactions.`,
    technologies: [ReactIcon, Redux, MongoDB, Css],
    code: 'https://github.com/Stev44/projet_11_steven_canivet',
  },
  {
    title: 'Kasa',
    img: kasa,
    description: `Réalisation d'un site de location immobilière.`,
    technologies: [ReactIcon, Sass],
    code: 'https://github.com/Stev44/projet_8_steven_canivet',
    site: 'https://stev44.github.io/projet_8_steven_canivet/',
  },
  {
    title: 'Nina Carducci',
    img: nina,
    description: `Amélioration du référencement naturel (SEO) d'un site de photographe.`,
    technologies: [Js, Html, Css],
    code: 'https://github.com/Stev44/projet_9_steven_canivet',
    site: 'https://stev44.github.io/projet_9_steven_canivet/',
  },
  {
    title: '724 events',
    img: project,
    description: `Analyse et débogage d'un site d'évènementiel.`,
    technologies: [ReactIcon],
    code: 'https://github.com/Stev44/projet_10_steven_canivet',
  },
]

export const tech = [
  {
    icon: ReactIcon,
    name: 'React',
  },
  {
    icon: Redux,
    name: 'Redux',
  },
  {
    icon: Js,
    name: 'Javascript',
  },
  {
    icon: Sass,
    name: 'Sass',
  },
  {
    icon: Css,
    name: 'CSS',
  },
  {
    icon: Html,
    name: 'HTML',
  },
  {
    icon: Figma,
    name: 'Figma',
  },
  {
    icon: Github,
    name: 'Github',
  },
]
