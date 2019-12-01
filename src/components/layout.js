import React from "react"
import PropTypes from "prop-types"

import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = props => (
  <div className="container">
    <div className="main">
      <Header />
      {props.children}
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Layout
