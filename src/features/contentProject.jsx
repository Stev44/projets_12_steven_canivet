import { ReactComponent as Redux } from '../assets/redux.svg'
import { ReactComponent as ReactIcon } from '../assets/react.svg'
import { ReactComponent as Sass } from '../assets/sass.svg'
import { ReactComponent as Html } from '../assets/html.svg'
import { ReactComponent as MongoDB } from '../assets/mongoDB.svg'
import { ReactComponent as Figma } from '../assets/figma.svg'
import { ReactComponent as Css } from '../assets/css.svg'
import { ReactComponent as Js } from '../assets/js.svg'

import project from '../assets/724.png'
import test from '../assets/argentbank2.jpeg'
import portfolio from '../assets/portfolio.webp'
import land from '../assets/kasa2.jpg'
import prog from '../assets/planche.webp'
import landing from '../assets/nina2.jpg'

const content = [
  {
    title: 'Léo Vautrin Coaching',
    img: prog,
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
    img: test,
    description: `Réalisation d'un système d'authentification et des routes API pour les transactions.`,
    technologies: [ReactIcon, Redux, MongoDB, Css],
    code: 'https://github.com/Stev44/projet_11_steven_canivet',
  },
  {
    title: 'Kasa',
    img: land,
    description: `Réalisation d'un site de location immobilière.`,
    technologies: [ReactIcon, Sass],
    code: 'https://github.com/Stev44/projet_8_steven_canivet',
    site: 'https://stev44.github.io/projet_8_steven_canivet/',
  },
  {
    title: 'Nina Carducci',
    img: landing,
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
export default content
