import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import ctaStyles from "../styles/cta.module.scss"

const CTA = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark{
        edges{
          node{
            frontmatter{
              title
              footer
              button
            }
          }
        }
      }
    }
  `)
  return (
    <div className={ctaStyles.container}>
      <h2 className={ctaStyles.header}>The Latest!!</h2>
      <p className={ctaStyles.news}>
        {data.allMarkdownRemark.edges[0].node.frontmatter.title}
      </p>
      <p className={ctaStyles.news}>{data.allMarkdownRemark.edges[0].node.frontmatter.footer}</p>
      <a
        className={ctaStyles.button}
        href="https://www.eventbrite.com/e/mark-guiliana-beat-music-ymusic-with-special-guests-tickets-78425732477"
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.allMarkdownRemark.edges[0].node.frontmatter.button}
      </a>
    </div>
  )
}

export default CTA
