import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import { header, container, list } from "../styles/contact.module.scss"

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
        <Head title="Contact" />
        <div className={header}>
          <h2>write me at</h2>
          <a
            href="mailto:leadingtoneRecords@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.site.siteMetadata.emailContact}
          </a>
        </div>
        <div className={container}>
          <h2 id="studio">Studio Work</h2>
          <p>{data.allMarkdownRemark.edges[0].node.rawMarkdownBody}</p>
          <p> Previous projects by instrument:</p>
          <ol className={list}>
            <li>
              <a
                href="https://www.youtube.com/watch?v=-9prpAv6kvo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clarinet, Bass Cl., Sax, Flute
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=AjjlABP5t1Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clarinet, Bass Cl., Sax
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=jZ8_CxmCvOs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clarinet and Flute
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=HXjFmXKEYpA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tenor Sax
              </a>
            </li>
            <li>
              <a
                href="https://www.imdb.com/name/nm4843708/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Film Credits
              </a>
            </li>
          </ol>

          <h2 id="teaching">teaching</h2>
          <p>{data.allMarkdownRemark.edges[1].node.rawMarkdownBody}</p>
        </div>
      </Fragment>
    </Layout>
  )
}

export default ContactPage
