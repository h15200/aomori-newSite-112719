import React from 'react'

import Layout from '../components/layout'
import contactStyles from '../styles/contact.module.scss'

const ContactPage = () => (
  <Layout>
    <div className={contactStyles.header}>
      <h2>Contact me at</h2>
      <p>leadingToneRecords@gmail.com</p>
    </div>
    <div className={contactStyles.container}>
      <div id="studio" className={contactStyles.studioContainer}>
        <h2>Studio Work</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima
          iste architecto dolorem eos hic qui ipsa, sapiente ipsam, sunt nulla,
          eaque blanditiis. Provident numquam hic, earum atque quae quis!
        </p>
      </div>
      <div id="education" className={contactStyles.educationContainer}>
        <h2>education</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          repudiandae ullam odit molestiae nemo id, inventore eligendi nulla
          minus? Architecto, maiores assumenda? Tempora ad commodi obcaecati,
          nobis ex excepturi quis.
        </p>
      </div>
    </div>
  </Layout>
)

export default ContactPage
