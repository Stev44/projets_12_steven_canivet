import './footer.scss'
import { socialMedia } from '../../features/features'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        {socialMedia.map((item, index) => (
          <a key={index} href={item.link}>
            <span className="sr-only">Social button</span>
            <span className="footer_icon">{item.icon}</span>
          </a>
        ))}
      </div>

      <p>© Steven Canivet | Tous droits réservés</p>
    </footer>
  )
}

export default Footer
