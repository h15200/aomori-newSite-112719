import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons"

import headerStyles from "../styles/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.container}>
      <h1 className={headerStyles.title}>{data.site.siteMetadata.title}</h1>
      <div className={headerStyles.socialFlex}>
        <a
          title="Spotify"
          href="https://open.spotify.com/artist/5oPv8Zdj5jxwxGXlzacP7d"
          target="_blank"
          rel="noopener noreferrer"
          className={headerStyles.spotify}
        >
          <FontAwesomeIcon icon={faSpotify} size="3x" />
        </a>
        <a
          title="Instagram"
          href="https://www.instagram.com/h.aomori/"
          target="_blank"
          rel="noopener noreferrer"
          className={headerStyles.instagram}
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
      </div>

      <nav>
        <ul className={headerStyles.navFlex}>
          <li className={headerStyles.pageGroup}>
            <Link
              to="/"
              className={headerStyles.navPages}
              activeClassName={headerStyles.active}
            >
              home
            </Link>
          </li>
          <li
            className={`${headerStyles.pageGroup} ${headerStyles.dropdownPageGroup}`}
          >
            <Link
              to="/about"
              className={headerStyles.navPages}
              activeClassName={headerStyles.active}
            >
              about
            </Link>
            <div className={`${headerStyles.dropdownItemFlex} ${headerStyles.aboutDrop}`}>
              <Link to="/about#classical">Classical</Link>
              <Link to="/about#jazz">Jazz</Link>
              <Link to="/about#commercial">Commercial Music</Link>
            </div>
          </li>
          <li className={headerStyles.pageGroup}>
            <Link
              to="/music"
              className={headerStyles.navPages}
              activeClassName={headerStyles.active}
            >
              music
            </Link>
          </li>
          <li
            className={`${headerStyles.pageGroup} ${headerStyles.dropdownPageGroup}`}
          >
            <Link
              to="/contact"
              className={headerStyles.navPages}
              activeClassName={headerStyles.active}
            >
              contact
            </Link>
            <div className={`${headerStyles.dropdownItemFlex} ${headerStyles.contactDrop}`}>
              <Link to="/contact#studio">Studio Work</Link>
              <Link to="/contact#teaching">Teaching</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
