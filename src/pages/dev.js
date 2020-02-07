/* eslint-disable arrow-body-style */
import React from "react"
import devStyles from "../styles/dev.module.scss"

const Dev = () => {
  return (
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
  )
}

export default Dev
