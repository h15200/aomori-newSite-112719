/* eslint-disable arrow-body-style */
import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import faviconDev from "../image/faviconDev.ico"
import devStyles from "../styles/dev.module.scss"

const Dev = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <Helmet>
        <title>Webdev & Design</title>
        <meta
          charSet="utf-8"
          name="description"
          content="Hideaki Aomori - Web devloper and designer"
        />
        <link rel="shortcut icon" type="image/ico" href={faviconDev} />
      </Helmet>
      <div className={devStyles.devPage}>
        <header className={devStyles.header}>
          <div
            className={`${devStyles.container} ${devStyles.container___header}`}
          >
            <nav className={devStyles.nav}>
              <ul className={devStyles.nav_ul}>
                <li className={`${devStyles.nav_li} ${devStyles.nav_li___1}`}>
                  <a
                    className={`${devStyles.nav_link} ${devStyles.nav_link___1}`}
                    href="#projects"
                  >
                    projects
                  </a>
                </li>
                <li className={`${devStyles.nav_li} ${devStyles.nav_li___2}`}>
                  <a
                    className={`${devStyles.nav_link} ${devStyles.nav_link___2}`}
                    href="#contact"
                  >
                    contact
                  </a>
                </li>
              </ul>
            </nav>
            <div className={devStyles.intro}>
              <h1 className={devStyles.intro_header_1}>Hideaki Aomori</h1>
              <p className={devStyles.intro_description}>
                web developer and designer
              </p>
              <Img
                fluid={data.headshot.childImageSharp.fluid}
                className={devStyles.intro_img}
              />
            </div>
            <div className={`${devStyles.skills} `}>
              <div className={devStyles.skills_header_2}>Skills</div>
              <ul className={devStyles.skills_list}>
                <li className={devStyles.skills_item}>html</li>
                <li className={devStyles.skills_item}>css</li>
                <li className={devStyles.skills_item}>javascript</li>
                <li className={devStyles.skills_item}>reac</li>
                <li className={devStyles.skills_item}>graphql</li>
                <li className={devStyles.skills_item}>gatsby</li>
                <li className={devStyles.skills_item}>git</li>
              </ul>
            </div>
          </div>
        </header>


        
        <section className={devStyles.projects} id="projects">
          <div
            className={`${devStyles.container} ${devStyles.container___projects}`}
          >
            Projects
          </div>
        </section>
        <footer className={devStyles.contact} id="contact">
          <div
            className={`${devStyles.container} ${devStyles.container___footer}`}
          >
            Footer
          </div>
        </footer>
      </div>
    </Fragment>
  )
}

export default Dev
