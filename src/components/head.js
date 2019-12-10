import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta charSet="utf-8" />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
