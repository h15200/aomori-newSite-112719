/* eslint-disable arrow-body-style */
import React, { Fragment } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import faviconDev from "../image/faviconDev.ico"
import devStyles from "../styles/dev.module.scss"

import Html from '../svg/html5.svg'
import Css from '../svg/css3.svg'
import Sass from '../svg/sass.svg'
import Javascript from '../svg/javascript.svg'
import ReactIcon from '../svg/reactIcon.svg'
import GraphqlIcon from '../svg/graphql.svg'
import GatsbyIcon from '../svg/gatsby.svg'
import Git from '../svg/git.svg'
import Figma from '../svg/figma.svg'

import Code from '../svg/code.svg'
import Email from '../svg/email.svg'
import Github from '../svg/github.svg'
import Linkedin from '../svg/linkedin.svg'
import Website from '../svg/website.svg'

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
      h_fav: file(relativePath: { eq: "h_fav.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      steve_fav: file(relativePath: { eq: "steve_fav.png" }) {
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
              <div className={devStyles.intro_text}>
                <h1 className={devStyles.intro_header_1}>Hideaki Aomori</h1>
                <p className={devStyles.intro_description}>
                  web developer and designer
                </p>
              </div>

              <Img
                fluid={data.headshot.childImageSharp.fluid}
                className={devStyles.intro_img}
              />
            </div>
            <div className={`${devStyles.skills} `}>
              <div className={devStyles.skills_header_2}>Skills:</div>
              <ul className={devStyles.skills_list}>
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><Html className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>html</figcaption></figure></li>
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><Css className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>css</figcaption></figure></li>
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><Sass className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>sass</figcaption></figure></li>
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><Javascript className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>javascript</figcaption></figure></li>
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><ReactIcon className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>react</figcaption></figure></li>
               
               
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><GraphqlIcon className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>graphql</figcaption></figure></li>
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><GatsbyIcon className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>gatsby</figcaption></figure></li>
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><Git className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>Git</figcaption></figure></li>
                <li className={devStyles.skills_item}><figure className={devStyles.skills_figure}><Figma className={devStyles.skills_icon}/><figcaption className={devStyles.skills_caption}>Figma</figcaption></figure></li>

              </ul>
            </div>
          </div>
        </header>

        <section className={devStyles.projects} id="projects">
          <div
            className={`${devStyles.container} ${devStyles.container___projects}`}
          >
            <h2 className={devStyles.projects_header_2}>Recent Projects</h2>
            <div className={`${devStyles.card}`}>
            <Img fluid={data.steve_fav.childImageSharp.fluid} className={devStyles.card_icon} />
            <Code />
            </div>

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
