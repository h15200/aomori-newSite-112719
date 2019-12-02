import React from "react"
import ctaStyles from "../styles/cta.module.scss"

const CTA = () => {
  return (
    <div className={ctaStyles.container}>
      <h2 className={ctaStyles.header}>The Latest!!</h2>
      <p className={ctaStyles.news}>
        Check out the latest bla bla bla. Bla and bla and bla bla bla
      </p>
      <a className={ctaStyles.link} href="">
        Click Here!
      </a>
    </div>
  )
}

export default CTA
