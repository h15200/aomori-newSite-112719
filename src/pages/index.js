import React, { Fragment } from "react"

import Layout from "../components/layout"
import CTA from "../components/cta"
import Head from "../components/head"

import { container, videoContainer } from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout>
    <Fragment>
      <Head title="Home" />
      <CTA />
      <div className={container}>
        <div className={videoContainer}>
          <iframe
            title="Saturday Night Live performance"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/hGDdX-yV3dQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={videoContainer}>
          <iframe
            title="Live recording with the funk band, Scary Pockets"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/BtVT7dtWomM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Fragment>
  </Layout>
)

export default IndexPage
