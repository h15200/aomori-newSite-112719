import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons"

import * as footerStyles from "../styles/footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          author
        }
      }
    }
    `)
  return (
    <footer className={footerStyles.container}>
      <ul className={footerStyles.flex}>
        <li>
          <Link to="/" activeClassName={footerStyles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName={footerStyles.active}>
            About
          </Link>
        </li>
        <li>
          <Link to="/music" activeClassName={footerStyles.active}>
            Music
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName={footerStyles.active}>
            contact
          </Link>
        </li>
        <li>
          <a
            title="Spotify"
            href="https://open.spotify.com/artist/5oPv8Zdj5jxwxGXlzacP7d"
            target="_blank"
            rel="noopener noreferrer"
            className={footerStyles.social}
          >
            <FontAwesomeIcon icon={faSpotify} size="1x" />
          </a>
        </li>
      </ul>
      <p className={footerStyles.credit}>
        Designed and developed by {data.site.siteMetadata.author}
      </p>
    </footer>
  )
}

export default Footer
