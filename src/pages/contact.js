import React, { Fragment } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../components/layout"
import contactStyles from "../styles/contact.module.scss"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          emailContact
        }
      }
    }
  `)
  return (
    <Layout>
      <Fragment>
        <div className={contactStyles.header}>
          <h2>write me at</h2>
          <a
            href="mailto:leadingtoneRecords@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.site.siteMetadata.emailContact}
          </a>
        </div>
        <div className={contactStyles.container}>
          <h2 id="studio">Studio Work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            minima iste architecto dolorem eos hic qui ipsa, sapiente ipsam,
            sunt nulla, eaque blanditiis. Provident numquam hic, earum atque
            quae quis! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Optio quibusdam vitae nesciunt distinctio voluptates, rerum sint
            quos exercitationem magnam fugiat? Ut, quas atque accusantium minima
            quisquam corporis eligendi nemo quibusdam quos? Voluptate dolor ex
            reprehenderit autem facere? Aperiam eaque, fugiat saepe voluptate
            commodi, harum quos quae asperiores est adipisci delectus.
          </p>

          <h2 id="teaching">teaching</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            repudiandae ullam odit molestiae nemo id, inventore eligendi nulla
            minus? Architecto, maiores assumenda? Tempora ad commodi obcaecati,
            nobis ex excepturi quis. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Laudantium sunt qui dolorem. Esse culpa maiores,
            vel similique quae excepturi vero aut, ratione hic impedit
            perferendis ad voluptates! Repellat debitis voluptate officia
            aperiam iusto quo porro laudantium dolore enim, vero blanditiis
            tempore, pariatur vel alias velit incidunt voluptas. Dolores
            repellat nulla accusantium quisquam minima expedita ipsum pariatur
            vel, aliquid cum quam?
          </p>
        </div>
      </Fragment>
    </Layout>
  )
}


export default ContactPage
