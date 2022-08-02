/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  META_CONTENT,
  CONTACT_BUTTON_TEXT,
  INTRO_HEADER,
  INTRO_DESCRIPTION,
  LESSON_HEADER,
  LESSON_DESCRIPTION,
  LESSON_SECTION_1_HEADER,
  LESSON_SECTION_1_DESC,
  LESSON_SECTION_2_HEADER,
  LESSON_SECTION_2_DESC,
  LESSON_SECTION_3_HEADER,
  LESSON_SECTION_3_DESC,
  WEEKLY_CODING_LESSONS_GMAIL,
  HREF_GITHUB,
  HREF_LINKEDIN,
  CONTACT,
  EMAIL,
  GITHUB,
  LINKEDIN,
  COPYRIGHT,
  AUTHOR,
} from "../constants";

import faviconDev from "../image/faviconDev.ico";
import {
  devPage,
  container,
  subsection,
  nav,
  intro,
  nav_ul,
  nav_li,
  nav_link,
  nav_link___yellow,
  intro_header_1,
  intro_description,
  lesson,
  lesson_header_2,
  lesson_header_3,
  lesson_description,
  contact_header_3,
  contact_ul,
  contact_li,
  contact_a,
  contact_svg,
  contact_line,
  container___footer,
  footer_copyright,
  footer_author,
} from "../styles/dev.module.scss";

import Email from "../svg/email.svg";
import Github from "../svg/github.svg";
import Linkedin from "../svg/linkedin.svg";

const Dev = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <Helmet>
        <title>Weekly Coding Lessons</title>
        <meta charSet="utf-8" name="description" content={META_CONTENT} />
        <link rel="shortcut icon" type="image/ico" href={faviconDev} />
      </Helmet>
      <div className={devPage}>
        <header>
          <div className={`${container} `}>
            <nav className={nav}>
              <ul className={nav_ul}>
                <li className={`${nav_li}`}>
                  <a
                    className={`${nav_link} ${nav_link___yellow}`}
                    href={`mailto:${WEEKLY_CODING_LESSONS_GMAIL}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT_BUTTON_TEXT}
                  </a>
                </li>
              </ul>
            </nav>
            <div className={intro}>
              <div>
                <h1 className={intro_header_1}>{INTRO_HEADER}</h1>
                <p className={intro_description}>{INTRO_DESCRIPTION}</p>
              </div>
            </div>
          </div>
        </header>
        <div className={contact_line} />
        <section className={lesson}>
          <div className={subsection}>
            <h2 className={lesson_header_2}>{LESSON_HEADER}</h2>
            <p className={lesson_description}>{LESSON_DESCRIPTION}</p>
          </div>
          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_1_HEADER}</h3>
            <p className={lesson_description}>{LESSON_SECTION_1_DESC}</p>
          </div>
          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_2_HEADER}</h3>
            <p className={lesson_description}>{LESSON_SECTION_2_DESC}</p>
          </div>
          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_3_HEADER}</h3>
            <p className={lesson_description}>{LESSON_SECTION_3_DESC}</p>
          </div>
        </section>

        <section>
          <div className={`${container} `}>
            <h3 className={contact_header_3}>{CONTACT}</h3>
            <ul className={contact_ul}>
              <li className={contact_li}>
                <a
                  className={contact_a}
                  href={`mailto:${WEEKLY_CODING_LESSONS_GMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Email className={contact_svg} />
                  {EMAIL}
                </a>
              </li>
              <li className={contact_li}>
                <a
                  className={contact_a}
                  href={HREF_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className={contact_svg} />
                  {LINKEDIN}
                </a>
              </li>
              <li className={contact_li}>
                <a
                  className={contact_a}
                  href={HREF_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className={contact_svg} />
                  {GITHUB}
                </a>
              </li>
            </ul>
          </div>
          <div className={contact_line} />
        </section>
        <footer>
          <div className={`${container} ${container___footer}`}>
            <p className={footer_copyright}>
              {COPYRIGHT} &copy; {currentYear}
            </p>
            <p className={footer_author}>{AUTHOR}</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

export default Dev;
