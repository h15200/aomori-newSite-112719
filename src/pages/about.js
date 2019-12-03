import React from "react"

import Layout from "../components/layout"
import aboutStyles from "../styles/about.module.scss"

const AboutPage = () => (
  <Layout>
    <h2 className={aboutStyles.header}>About</h2>
    <div className={aboutStyles.container}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
        illum, dicta repudiandae qui a sunt corrupti esse quas nisi eius,
        sapiente maxime animi quasi voluptatibus deleniti sit unde quia? Aliquam
        perferendis eos aliquid id molestias cupiditate! Sequi, delectus
        distinctio tempore maiores perferendis numquam laudantium sed doloribus
        recusandae expedita. Qui, esse?
      </p>
      <h2 id="classical">Classical</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni in eos
        qui omnis aut voluptatem aspernatur sapiente. Exercitationem dolore unde
        minus laborum doloremque! Repudiandae alias, nulla voluptatem
        voluptatibus ullam sequi ut praesentium ratione, aperiam ab expedita
        dolorem consequatur eveniet temporibus.
      </p>
      <h2 id="jazz">Jazz</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad repellendus
        iste molestiae dolore amet quo aspernatur nam ea illum expedita ratione
        magni assumenda voluptatibus, necessitatibus blanditiis dolores labore
        obcaecati harum veniam tempore praesentium suscipit! Totam quo obcaecati
        accusamus aliquam eos.
      </p>
      <h2 id="film">Film and Other</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
        repudiandae porro dolorem voluptas, modi iusto pariatur laboriosam unde
        totam eos sapiente nisi? Architecto vel provident error. Distinctio
        mollitia commodi voluptates laudantium reprehenderit impedit praesentium
        quibusdam? Eos, exercitationem. Tenetur, autem modi?
      </p>
      <h2 id="ymusc">yMusic</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore fugit
        hic ut esse. Odit doloremque ea unde a labore laudantium, libero fugit,
        repudiandae error quam velit debitis molestias earum! Optio, sint porro.
        Quasi quod consequuntur repellat nam inventore, sequi sed?
      </p>
    </div>
  </Layout>
)

export default AboutPage
