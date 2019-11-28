import React, { Fragment } from "react"
import PropTypes from "prop-types"

import "../styles/index.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = props => (
  <Fragment>
    <Header />
    {props.children}
    <Footer />
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}
export default Layout
