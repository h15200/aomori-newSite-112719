import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import ctaStyles from "../styles/cta.module.scss"

const CTA = () => {
  const data = useStaticQuery(graphql`
query {
  markdownRemark(frontmatter: { date: { eq: "01-09-20" } }){
    frontmatter{
      date
      title
      footer
      button
    }
  }
}
  `)
  return (
    <div className={ctaStyles.container}>
      <h2 className={ctaStyles.header}>The Latest!!</h2>
      <p className={ctaStyles.news}>
        {data.markdownRemark.frontmatter.title}
      </p>
      <p className={ctaStyles.news}>{data.markdownRemark.frontmatter.footer}</p>
      <a
        className={ctaStyles.button}
        href="http://www.brucehornsby.com/news-2/2019/10/11/bruce-hornsby-and-ymusic-announce"
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.markdownRemark.frontmatter.button}
      </a>
    </div>
  )
}

export default CTA
