import React from "react"
import ctaStyles from "../styles/cta.module.scss"

const CTA = () => {
  return (
    <div className={ctaStyles.container}>
      <h2 className={ctaStyles.header}>The Latest!!</h2>
      <p className={ctaStyles.news}>
        I will be playing at the Bowery Ballroom in NYC with yMusic on JANUARY 9th!
      </p>
      <p className={ctaStyles.news}>Click below to get tickets!</p>
      <a
        className={ctaStyles.button}
        href="https://www.eventbrite.com/e/mark-guiliana-beat-music-ymusic-with-special-guests-tickets-78425732477"
        target="_blank"
        rel="noopener noreferrer"
      >
        Buy Tickets!
      </a>
    </div>
  )
}

export default CTA
