import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faLinkedinIn,
  faGithub,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

export const socialMedia = [
  {
    link: 'https://www.linkedin.com/',
    icon: <FontAwesomeIcon icon={faLinkedinIn} className="icons" />,
  },
  {
    link: 'https://github.com/Stev44',
    icon: <FontAwesomeIcon icon={faGithub} className="icons" />,
  },
  {
    link: 'https://www.instagram.com/',
    icon: <FontAwesomeIcon icon={faInstagram} className="icons" />,
  },
  {
    link: 'https://x.com/',
    icon: <FontAwesomeIcon icon={faXTwitter} className="icons" />,
  },
]
