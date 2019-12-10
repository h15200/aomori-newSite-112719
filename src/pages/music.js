import React, { Fragment } from "react"
import Layout from "../components/layout"
import Head from '../components/head'
import musicStyles from "../styles/music.module.scss"

const MusicPage = () => (
  <Layout>
    <Fragment>
      <Head title='Music'/>
      <h2 className={musicStyles.header}> LISTEN / WATCH</h2>

      <div className={musicStyles.container}>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Performance of Eleven by yMusic"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/zssRyKHDduQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Audio of NY Jazz Expressway Live at Tokyo 2014"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/PoUEhH6rm_g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Audio of John Legend and yMusic"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/7R7kPZF8wRA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Live Recording of Steven's Last Night in Town with Ben Folds"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/uG0LqKNTohk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className={musicStyles.videoContainer}>
          <iframe
            title="Audio of Can't Run But with Paul Simon"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/34DL0Ai4OZ8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Music video of Dream State by Son Lux"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/AjjlABP5t1Q"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Fragment>
  </Layout>
)

export default MusicPage
