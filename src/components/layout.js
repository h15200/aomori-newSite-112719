import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import * as layoutStyles from '../styles/layout.module.scss'

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
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
