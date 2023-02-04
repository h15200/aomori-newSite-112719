/* eslint-disable arrow-body-style */
/* eslint-disable camelcase */
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import {
  META_CONTENT,
  CONTACT_BUTTON_TEXT,
  LESSON_HEADER,
  LESSON_SECTION_DESC_Q,
  LESSON_SECTION_DESC_A,
  LESSON_SECTION_HOW_Q,
  LESSON_SECTION_HOW_A,
  LESSON_SECTION_PROBLEMS_FEATURE_1,
  LESSON_SECTION_PROBLEMS_FEATURE_2,
  LESSON_SECTION_PROBLEMS_FEATURE_3,
  LESSON_SECTION_PROBLEMS_FEATURE_4,
  LESSON_SECTION_PROBLEMS_FEATURE_5,
  LESSON_SECTION_PROBLEMS_Q,
  LESSON_SECTION_PROBLEMS_A,
  LESSON_SECTION_PROBLEMS_LIST_1,
  LESSON_SECTION_PROBLEMS_LIST_2,
  LESSON_SECTION_PROBLEMS_LIST_3,
  LESSON_SECTION_PROBLEMS_LIST_4,
  LESSON_SECTION_PROBLEMS_LIST_5,
  LESSON_SECTION_TOO_GOOD_Q,
  LESSON_SECTION_TOO_GOOD_A,
  LESSON_SECTION_CONTACT_Q,
  LESSON_SECTION_CONTACT_A,
  WEEKLY_CODING_LESSONS_GMAIL,
  HREF_GITHUB,
  HREF_LINKEDIN,
  CONTACT_US,
  EMAIL,
  GITHUB,
  LINKEDIN,
  COPYRIGHT,
  AUTHOR,
  LESSON_SECTION_SAME_Q,
  LESSON_SECTION_SAME_A,
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
  lesson,
  lesson_header_3,
  lesson_description,
  lesson_ul,
  lesson_li,
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
              <h1 className={intro_header_1}>{LESSON_HEADER}</h1>
            </div>
          </div>
        </header>
        <div className={contact_line} />
        <section className={lesson}>
          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_DESC_Q}</h3>
            <p className={lesson_description}>{LESSON_SECTION_DESC_A}</p>
          </div>
          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_HOW_Q}</h3>
            <p className={lesson_description}>{LESSON_SECTION_HOW_A}</p>
            <ul className={lesson_ul}>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_FEATURE_1}</li>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_FEATURE_2}</li>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_FEATURE_3}</li>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_FEATURE_4}</li>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_FEATURE_5}</li>
            </ul>
          </div>
          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_SAME_Q}</h3>
            <p className={lesson_description}>{LESSON_SECTION_SAME_A}</p>
          </div>
          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_PROBLEMS_Q}</h3>
            <p className={lesson_description}>{LESSON_SECTION_PROBLEMS_A}</p>
            <ul className={lesson_ul}>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_LIST_1}</li>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_LIST_2}</li>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_LIST_3}</li>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_LIST_4}</li>
              <li className={lesson_li}>{LESSON_SECTION_PROBLEMS_LIST_5}</li>
            </ul>
          </div>

          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_TOO_GOOD_Q}</h3>
            <p className={lesson_description}>{LESSON_SECTION_TOO_GOOD_A}</p>
          </div>
          <div className={subsection}>
            <h3 className={lesson_header_3}>{LESSON_SECTION_CONTACT_Q}</h3>
            <p className={lesson_description}>{LESSON_SECTION_CONTACT_A}</p>
          </div>
        </section>

        <section>
          <div className={`${container} `}>
            <h3 className={contact_header_3}>{CONTACT_US}</h3>
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
