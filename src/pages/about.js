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
          <h2 id="film">Film and Other</h2>
          <p>{data.allMarkdownRemark.edges[3].node.rawMarkdownBody}</p>
          <h2 id="ymusic">yMusic</h2>
          <p>{data.allMarkdownRemark.edges[4].node.rawMarkdownBody}</p>
        </div>
      </Fragment>
    </Layout>
  )
}

export default AboutPage
