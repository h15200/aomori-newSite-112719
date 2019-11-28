import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header>
      <h1>Hideaki Aomori</h1>
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
            <ul>
              <Link><li>Classical</li></Link>
              <Link><li>Jazz</li></Link>
              <Link><li>Film</li></Link>
              <Link><li>yMusic</li></Link>
            </ul>
          <Link to="/music"><li>Music</li></Link>
            <ul>
              <Link><li>Videos</li></Link>
              <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/5oPv8Zdj5jxwxGXlzacP7d"><li>Spotify</li></a>
            </ul>
          <Link to="/services"><li>Services</li></Link>
        </ul>
        <ul>
          <a href="#"><li><img src="../../static/instagramIcon.png" alt="Instragram icon"/></li></a>
          <a href="#"><li><img src="" alt="Spotify icon"/></li></a>
        </ul>
      </nav>
    </header>
  )
}

export default Header
