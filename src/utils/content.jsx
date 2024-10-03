import { ReactComponent as Redux } from '../assets/tech/redux.svg'
import { ReactComponent as ReactIcon } from '../assets/tech/react.svg'
import { ReactComponent as Sass } from '../assets/tech/sass.svg'
import { ReactComponent as Html } from '../assets/tech/html.svg'
import { ReactComponent as MongoDB } from '../assets/tech/mongoDB.svg'
import { ReactComponent as Figma } from '../assets/tech/figma.svg'
import { ReactComponent as Css } from '../assets/tech/css.svg'
import { ReactComponent as Js } from '../assets/tech/js.svg'
import { ReactComponent as Github } from '../assets/tech/github.svg'
import { ReactComponent as Stars } from '../assets/icons/stars.svg'

import project from '../assets/images/724.webp'
import ab from '../assets/images/argentbank.webp'
import portfolio from '../assets/images/portfolio.webp'
import kasa from '../assets/images/kasa.webp'
import leo from '../assets/images/planche.webp'
import nina from '../assets/images/nina.webp'
import previewCoach from '../assets/images/previewCoach.webp'
import previewBank from '../assets/images/previewBank.webp'
import previewBank2 from '../assets/images/previewBank2.webp'
import previewBank3 from '../assets/images/previewBank3.webp'
import previewEvent from '../assets/images/previewEvent.webp'
import previewEvent2 from '../assets/images/previewEvent2.webp'
import previewEvent3 from '../assets/images/previewEvent3.webp'
import previewEvent4 from '../assets/images/previewEvent4.webp'

export const projects = [
  {
    title: 'Léo Vautrin Coaching',
    img: leo,
    descriptionFr: `Réalisation d'un site vitrine, pour un coach sportif.`,
    descriptionEn: 'Creation of a showcase site for a sports coach.',
    technologies: [ReactIcon, Sass],
    images: [previewCoach],
    previewFr: 'Aperçu',
    previewEn: 'Preview',
  },
  {
    title: 'Portfolio',
    img: portfolio,
    descriptionFr: `Projet de fin d'étude réalisé "from scratch", en react et redux.`,
    descriptionEn:
      'End-of-study project created from scratch, in react and redux.',
    technologies: [ReactIcon, Redux, Sass, Figma],
    code: 'https://github.com/Stev44/projets_12_steven_canivet',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
  },
  {
    title: 'Argent Bank',
    img: ab,
    descriptionFr: `Réalisation d'un système d'authentification et des routes API pour les transactions.`,
    descriptionEn:
      'Creation of an authentication system and API routes for transactions.',
    technologies: [ReactIcon, Redux, MongoDB, Css],
    code: 'https://github.com/Stev44/projet_11_steven_canivet',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
    images: [previewBank, previewBank2, previewBank3],
    previewFr: 'Aperçu',
    previewEn: 'Preview',
  },
  {
    title: 'Kasa',
    img: kasa,
    descriptionFr: `Réalisation d'un site de location immobilière.`,
    descriptionEn: 'Development of a property rental website.',
    technologies: [ReactIcon, Sass],
    code: 'https://github.com/Stev44/projet_8_steven_canivet',
    site: 'https://stev44.github.io/projet_8_steven_canivet/',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
    siteTextEn: 'View site',
    siteTextFr: 'Voir le site',
  },
  {
    title: 'Nina Carducci',
    img: nina,
    descriptionFr: `Amélioration du référencement naturel (SEO) d'un site de photographe.`,
    descriptionEn: `Improving the natural referencing (SEO) of a photographer's website.`,
    technologies: [Js, Html, Css],
    code: 'https://github.com/Stev44/projet_9_steven_canivet',
    site: 'https://stev44.github.io/projet_9_steven_canivet/',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
    siteTextEn: 'View site',
    siteTextFr: 'Voir le site',
  },
  {
    title: '724 events',
    img: project,
    descriptionFr: `Analyse et débogage d'un site d'évènementiel.`,
    descriptionEn: 'Analysis and debugging of an events site',
    technologies: [ReactIcon],
    code: 'https://github.com/Stev44/projet_10_steven_canivet',
    codeTextEn: 'View code',
    codeTextFr: 'Voir le code',
    images: [previewEvent, previewEvent2, previewEvent3, previewEvent4],
    previewFr: 'Aperçu',
    previewEn: 'Preview',
  },
]

export const tech = [
  {
    icon: ReactIcon,
    name: 'React',
    category: 'Développement',
    color: 'blue',
    animate: 'reactAnimated',
    favorite: [Stars],
  },
  {
    icon: Redux,
    name: 'Redux',
    category: 'Développement',
    color: 'blue',
    animate: 'reduxAnimated',
    favorite: [Stars],
  },
  {
    icon: Js,
    name: 'Javascript',
    category: 'Développement',
    color: 'blue',
  },
  {
    icon: Sass,
    name: 'Sass',
    category: 'Intégration',
    color: 'green',
    favorite: [Stars],
    animate: 'sassAnimated',
  },
  {
    icon: Css,
    name: 'CSS',
    category: 'Intégration',
    color: 'green',
  },
  {
    icon: Html,
    name: 'HTML',
    category: 'Intégration',
    color: 'green',
  },
  {
    icon: Figma,
    name: 'Figma',
    category: 'Web design',
    color: 'purple',
  },
  {
    icon: Github,
    name: 'Github',
    category: 'Outil collaboratif',
    color: 'orange',
  },
]
