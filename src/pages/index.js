import React from "react"

import Layout from "../components/layout"
import CTA from "../components/cta"

import indexStyles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <CTA />
    <div className={indexStyles.container}>
      <div className={indexStyles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/hGDdX-yV3dQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={indexStyles.videoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/BtVT7dtWomM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </Layout>
)

export default IndexPage
