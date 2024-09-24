import './footer.scss'
import Socials from '../socials/socials'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Socials footer="footer_icon" />
      </div>

      <p>© Steven Canivet | Tous droits réservés</p>
    </footer>
  )
}

export default Footer
