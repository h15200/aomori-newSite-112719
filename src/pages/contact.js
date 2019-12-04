import React from "react"

import Layout from "../components/layout"
import contactStyles from "../styles/contact.module.scss"

const ContactPage = () => (
  <Layout>
    <div className={contactStyles.header}>
      <h2>write me at</h2>
      <a
        href="mailto:leadingtoneRecords@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        LeadingtoneRecords@gmail.com
      </a>
    </div>
    <div className={contactStyles.container}>
      <h2 id="studio">Studio Work</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima
        iste architecto dolorem eos hic qui ipsa, sapiente ipsam, sunt nulla,
        eaque blanditiis. Provident numquam hic, earum atque quae quis!
      </p>

      <h2 id="education">education</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        repudiandae ullam odit molestiae nemo id, inventore eligendi nulla
        minus? Architecto, maiores assumenda? Tempora ad commodi obcaecati,
        nobis ex excepturi quis.
      </p>
    </div>
  </Layout>
)

export default ContactPage
