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
            src="https://www.youtube-nocookie.com/embed/zssRyKHDduQ?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/zssRyKHDduQ?rel=0><img src=https://img.youtube.com/vi/zssRyKHDduQ/hqdefault.jpg alt='Performance of Eleven by yMusic'><span>▶</span></a>"
          ></iframe>
        </div>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Audio of NY Jazz Expressway Live at Tokyo 2014"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/PoUEhH6rm_g?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/PoUEhH6rm_g?rel=0><img src=https://img.youtube.com/vi/PoUEhH6rm_g/hqdefault.jpg alt='Audio of NY Jazz Expressway Live at Tokyo 2014'><span>▶</span></a>"
          ></iframe>
        </div>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Audio of John Legend and yMusic"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/7R7kPZF8wRA?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/7R7kPZF8wRA?rel=0><img src=https://img.youtube.com/vi/7R7kPZF8wRA/hqdefault.jpg alt='Audio of John Legend and yMusic'><span>▶</span></a>"
          ></iframe>
        </div>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Live Recording of Steven's Last Night in Town with Ben Folds"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/uG0LqKNTohk?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/uG0LqKNTohk?rel=0><img src=https://img.youtube.com/vi/uG0LqKNTohk/hqdefault.jpg alt='Live Recording of Steven's Last Night in Town with Ben Folds'><span>▶</span></a>"
          ></iframe>
        </div>

        <div className={musicStyles.videoContainer}>
          <iframe
            title="Audio of Can't Run But with Paul Simon"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/34DL0Ai4OZ8?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/34DL0Ai4OZ8?rel=0><img src=https://img.youtube.com/vi/34DL0Ai4OZ8/hqdefault.jpg alt='Audio of Can't Run But with Paul Simon'><span>▶</span></a>"
          ></iframe>
        </div>
        <div className={musicStyles.videoContainer}>
          <iframe
            title="Music video of Dream State by Son Lux"
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/AjjlABP5t1Q?rel=0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube-nocookie.com/embed/AjjlABP5t1Q?rel=0><img src=https://img.youtube.com/vi/AjjlABP5t1Q/hqdefault.jpg alt='Music video of Dream State by Son Lux'><span>▶</span></a>"
          ></iframe>
        </div>
      </div>
    </Fragment>
  </Layout>
)

export default MusicPage
