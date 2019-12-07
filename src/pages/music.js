import React, { Fragment } from "react"
import Layout from "../components/layout"
import musicStyles from "../styles/music.module.scss"

const MusicPage = () => (
  <Layout>
    <Fragment>
      <h2 className={musicStyles.header}> LISTEN / WATCH</h2>

      <div className={musicStyles.container}>
        <div className={musicStyles.videoContainer}>
          <iframe
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
