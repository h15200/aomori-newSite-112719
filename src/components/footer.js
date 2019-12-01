import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons"

import footerStyles from "../styles/footer.module.scss"

const Footer = () => (
  <footer className={footerStyles.container}>
    <ul className={footerStyles.flex}>
      <li>
        <Link to="/" activeClassName={footerStyles.active}>Home</Link>
      </li>
      <li>
        <Link to="/about" activeClassName={footerStyles.active}>About</Link>
      </li>
      <li>
        <Link to="/music" activeClassName={footerStyles.active}>Music</Link>
      </li>
      <li>
        <Link to="/services" activeClassName={footerStyles.active}>Services</Link>
      </li>
      <li>
        <a
          href="https://open.spotify.com/artist/5oPv8Zdj5jxwxGXlzacP7d"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.social}
        >
          <FontAwesomeIcon icon={faSpotify} size="1x" />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/h.aomori/"
          target="_blank"
          rel="noopener noreferrer"
          className={footerStyles.social}
        >
          <FontAwesomeIcon icon={faInstagram} size="1x" />
        </a>
      </li>
    </ul>
    <p className={footerStyles.credit}>Designed and developed by Hideaki Aomori</p>
  </footer>
)

export default Footer
