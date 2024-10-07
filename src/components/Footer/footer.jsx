import './footer.scss'
import Socials from '../socials/socials'
import { useSelector } from 'react-redux'
import { footerLang } from '../../utils/data'

const Footer = () => {
  const lang = useSelector((state) => state.switchLang.lang)
  return (
    <footer>
      <div className="footer">
        <Socials footer="footer_icon" />
      </div>

      <p>
        © 2024 Steven Canivet |{' '}
        {!lang ? footerLang.rightsFr : footerLang.rightsEn}
      </p>
    </footer>
  )
}

export default Footer
