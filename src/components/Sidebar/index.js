import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LogoS from '../../assets/images/logo-s.png'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="history-link" to="/history">
          <FontAwesomeIcon icon={faClockRotateLeft} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <div className="github">
        <a
          href="https://github.com/ibusi"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar
