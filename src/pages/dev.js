/* eslint-disable arrow-body-style */
import React, { Fragment } from "react"
import { Helmet } from 'react-helmet'
import faviconDev from '../image/faviconDev.ico'
import devStyles from "../styles/dev.module.scss"



const Dev = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Webdev & Design</title>
      <meta charSet="utf-8" name="description" content="Hideaki Aomori - Web devloper and designer"/>
      <link rel="shortcut icon" type="image/ico" href={faviconDev} />
      </Helmet>
      <div className={devStyles.devPage}>

        <header className={devStyles.header}>
          <div className={`${devStyles.container} ${devStyles.container___header}`}>
            Header
          </div>
        </header>

        <section className={devStyles.skills}>
          <div
            className={`${devStyles.container} ${devStyles.container___skills}`}
          >
            Skills
          </div>
        </section>

        <section className={devStyles.projects}>
          <div
            className={`${devStyles.container} ${devStyles.container___projects}`}
          >
            Projects
          </div>
        </section>
        <footer className={devStyles.contact}>
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
