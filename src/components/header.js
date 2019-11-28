import React from "react"
import { Link } from "gatsby"

import headerStyles from "../styles/header.module.scss"

const Header = () => (
  <header className={headerStyles.container}>
    <h1 className={headerStyles.title}>Hideaki Aomori</h1>
    <div className={headerStyles.socialFlex}>
      <a href="#">
        <img src="../../static/instagramIcon.png" alt="Instagram icon" />
      </a>
      <a href="#">
        <img src="" alt="Spotify icon" />
      </a>
    </div>

    <nav className={headerStyles.navFlex}>
    <div className={headerStyles.dropdown}>
      <Link to="/" className={headerStyles.navPages}>HOME</Link>
    </div>
      <div className={headerStyles.dropdown}>
        <Link to="/about" className={headerStyles.navPages}>ABOUT</Link>
        <div className={headerStyles.dropdownItemFlex}>
          <Link to="/about">Classical</Link>
          <Link to="/about">Jazz</Link>
          <Link to="/about">Film</Link>
          <Link to="/about">yMusic</Link>
        </div>
      </div>
      <div className={headerStyles.dropdown}>
        <Link to="/music" className={headerStyles.navPages}>MUSIC</Link>
        <div className={headerStyles.dropdownItemFlex}>
          <Link to="/music">Videos</Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://open.spotify.com/artist/5oPv8Zdj5jxwxGXlzacP7d"
          >
            Spotify
          </a>
        </div>
      </div>
      <div className={headerStyles.dropdown}>
        <Link to="/services" className={headerStyles.navPages}>SERVICES</Link>
        <div className={headerStyles.dropdownItemFlex}>
          <Link to="/services">Studio Work</Link>
          <Link to="/services">Education</Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
