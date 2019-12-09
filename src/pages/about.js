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
            html
          }
        }
      }
    }
  `)
// can't figure out italics as a rawString from md, so just writing it into html for now
  return (
    <Layout>
      <Fragment>
        <h2 className={aboutStyles.header}>About</h2>
        <div className={aboutStyles.container}>
          <p>{data.allMarkdownRemark.edges[0].node.rawMarkdownBody}</p>
          <h2 id="classical">Classical</h2>
          <p>{data.allMarkdownRemark.edges[1].node.rawMarkdownBody}</p>
          <h2 id="jazz">Jazz</h2>
          <p>
          In addition to his classical training, Hideaki has extensive experience as a jazz saxophonist. As a teenager, he was mentored by the late jazz pianist Sir Roland Hanna, who he toured and recorded with in the United States and Japan. He has also toured extensively in Japan with the New York Jazz Expressway with saxophonist Antonio Hart, trumpet player Michael Philip Mossman, and drummer Jean Jackson. Hideaki’s jazz record <em>Glue</em> features original compositions and arrangements on both saxophone and clarinet. Recent collaborators include Ambrose Akinmusire, and the funk band Scary Pockets.
          </p>
          <h2 id="commercial">Commercial Music</h2>
          <p>
          In addition to collaborating with many prominent singer-songwriters and popular artists, Hideaki played clarinets, flutes, and saxophones on several Broadway shows, including the Radio City Christmas Spectacular, <em>Ghost</em>, <em>Matilda</em>, and <em>Natasha, Pierre and the Great Comet of 1812</em>. Since moving to LA, he has shifted his focus to his home recording studio; he has contributed arrangements and improvised parts for award winning films, rock bands, animations, and commercial jingles. Most recently, he can be heard playing bass clarinet on Son Lux’s <em>Yesterday’s Wake</em> EP, and taking a tenor sax solo on the Oscar nominated film <em>If Beale Street Could Talk</em>.
          </p>
          <h2>more info</h2>
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
                Draeseke and Mendelssohn
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
