import { socialMedia } from '../../features/features'
import './socials.scss'

const Socials = () => {
  return (
    <div className="socials">
      {socialMedia.map((item, index) => (
        <a key={index} href={item.link}>
          <span className="socials_icon">{item.icon}</span>
          <span class="sr-only">Social button</span>
        </a>
      ))}
    </div>
  )
}

export default Socials
