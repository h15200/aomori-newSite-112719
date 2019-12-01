import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'

import headerStyles from "../styles/header.module.scss"

const Header = () => (
  <header className={headerStyles.container}>
    <h1 className={headerStyles.title}>Hideaki Aomori</h1>
    <div className={headerStyles.socialFlex}>
      <a href="https://open.spotify.com/artist/5oPv8Zdj5jxwxGXlzacP7d" target="_blank"
      rel="noopener noreferrer" className={headerStyles.spotify} >
        <FontAwesomeIcon icon={faSpotify} size="3x" />
      </a>
      <a href="https://www.instagram.com/h.aomori/" target="_blank"
      rel="noopener noreferrer" className={headerStyles.instagram}>
        <FontAwesomeIcon icon={faInstagram} size="3x"/>
      </a>
    </div>

    <nav >
      <ul className={headerStyles.navFlex}>
        <li className={headerStyles.pageGroup}>
          <Link to="/" className={headerStyles.navPages} activeClassName={headerStyles.active}>HOME</Link>
        </li>
        <li className={headerStyles.pageGroup}>
          <Link to="/about" className={headerStyles.navPages} activeClassName={headerStyles.active}>ABOUT</Link>
          <div className={headerStyles.dropdownItemFlex}>
            <Link to="/about">Classical</Link>
            <Link to="/about">Jazz</Link>
            <Link to="/about">Film</Link>
            <Link to="/about">yMusic</Link>
          </div>
        </li>
        <li className={headerStyles.pageGroup}>
          <Link to="/music" className={headerStyles.navPages} activeClassName={headerStyles.active}>MUSIC</Link>
        </li>
        <li className={headerStyles.pageGroup}>
          <Link to="/services" className={headerStyles.navPages} activeClassName={headerStyles.active}>SERVICES</Link>
          <div className={headerStyles.dropdownItemFlex}>
            <Link to="/services">Studio Work</Link>
            <Link to="/services">Education</Link>
          </div>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
