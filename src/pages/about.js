import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import aboutStyles from "../styles/about.module.scss"

const AboutPage = () => {
  // fetching all MD files that has a frontmatter title that starts with "about" in order of id
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/^about/" } } }
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
        <h2 className={aboutStyles.header}>About</h2>
        <div className={aboutStyles.container}>
          <p>{data.allMarkdownRemark.edges[0].node.rawMarkdownBody}</p>
          <h2 id="classical">Classical</h2>
          <p>{data.allMarkdownRemark.edges[1].node.rawMarkdownBody}</p>
          <h2 id="jazz">Jazz</h2>
          <p>{data.allMarkdownRemark.edges[2].node.rawMarkdownBody}</p>
          <h2 id="commercial">Commercial Music</h2>
          <p>{data.allMarkdownRemark.edges[3].node.rawMarkdownBody}</p>
          <h2>Related links</h2>
          <ul>
            <li id="glue">
              <a
                href="https://hideakiaomori.bandcamp.com/releases"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jazz Record
              </a>
            </li>
            <li id="brahms">
              <a href="http://www.msrcd.com/catalog/cd/MS1322" target="_blank" rel="noopener noreferrer">
                Brahms Album
              </a>
            </li>
            <li id="draeseke">
              <a href="http://www.msrcd.com/catalog/cd/MS1382" target="_blank" rel="noopener noreferrer">
                Draeseke, Mendelssohn, Burgmüller, and Beethoven
              </a>
            </li>
            <li>
              <a href="https://www.imdb.com/name/nm4843708/" target="_blank" rel="noopener noreferrer">
                Film
              </a>
            </li>
            <li>
              <a href="https://www.ibdb.com/broadway-cast-staff/hideaki-aomori-492190#Credits" target="_blank" rel="noopener noreferrer">
                Broadway
              </a>
            </li>
          </ul>
        </div>
      </Fragment>
    </Layout>
  )
}

export default AboutPage
