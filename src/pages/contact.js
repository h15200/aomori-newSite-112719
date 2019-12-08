import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import contactStyles from "../styles/contact.module.scss"

const ContactPage = () => {
  // fetching both metadata => email address,
  // and Markdown that starts with "contact" in frontmatter title in order of id
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          emailContact
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/^contact/" } } }
        sort: { fields: [frontmatter___id] }
      ) {
        edges {
          node {
            rawMarkdownBody
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Fragment>
        <div className={contactStyles.header}>
          <h2>write me at</h2>
          <a
            href="mailto:leadingtoneRecords@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.site.siteMetadata.emailContact}
          </a>
        </div>
        <div className={contactStyles.container}>
          <h2 id="studio">Studio Work</h2>
          <p>{data.allMarkdownRemark.edges[0].node.rawMarkdownBody}</p>

          <h2 id="teaching">teaching</h2>
          <p>{data.allMarkdownRemark.edges[1].node.rawMarkdownBody}</p>
        </div>
      </Fragment>
    </Layout>
  )
}

export default ContactPage
