import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/music"><li>Music</li></Link>
        <Link to="/services"><li>Services</li></Link>
        <a><li>Instagram</li></a>
        <a><li>Spotify</li></a>
      </ul>
    </footer>
  )
}

export default Footer
