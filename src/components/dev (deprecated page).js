// /* eslint-disable arrow-body-style */
// /* eslint-disable camelcase */
// import React, { Fragment } from "react"
// import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

// import faviconDev from "../image/faviconDev.ico"
// import {
//   devPage,
//   container,
//   nav,
//   intro,
//   skills,
//   projects,
//   card_container,
//   card,
//   contact,
//   container___header,
//   nav_li___2,
//   intro_text,
//   container___projects,
//   card___rob,
//   card___steve,
//   card___hideaki,
//   header,
//   nav_ul,
//   nav_li,
//   nav_li___1,
//   nav_link,
//   nav_link___1,
//   nav_link___2,
//   intro_header_1,
//   intro_description,
//   intro_img,
//   skills_header_2,
//   skills_list,
//   skills_item,
//   skills_figure,
//   skills_icon,
//   skills_caption,
//   skills_icon___css,
//   skills_icon___git,
//   projects_header_2,
//   card_icon,
//   card_description,
//   card_link,
//   card_svg,
//   container___contact,
//   contact_header_2,
//   contact_ul,
//   contact_li,
//   contact_a,
//   contact_svg,
//   contact_line,
//   footer,
//   container___footer,
//   footer_a,
//   footer_copyright,
//   footer_author,
// } from "../styles/dev.module.scss"

// import Html from "../svg/html5.svg"
// import Css from "../svg/css3.svg"
// import Sass from "../svg/sass.svg"
// import Javascript from "../svg/javascript.svg"
// import ReactIcon from "../svg/reactIcon.svg"
// import GraphqlIcon from "../svg/graphql.svg"
// import GatsbyIcon from "../svg/gatsby.svg"
// import Git from "../svg/git.svg"
// import Figma from "../svg/figma.svg"

// import Code from "../svg/code.svg"
// import Email from "../svg/email.svg"
// import Github from "../svg/github.svg"
// import Linkedin from "../svg/linkedin.svg"
// import Website from "../svg/website.svg"

// const Dev = () => {
//   const currentYear = new Date().getFullYear()
//   const data = useStaticQuery(graphql`
//     query {
//       h_headshot: file(relativePath: { eq: "headshot.JPG" }) {
//         childImageSharp {
//           fluid(maxWidth: 80) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       h_fav: file(relativePath: { eq: "h_fav.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       steve_fav: file(relativePath: { eq: "steve_fav.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       rob_fav: file(relativePath: { eq: "rob_fav.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)
//   return (
//     <Fragment>
//       <Helmet>
//         <title>Webdev & Design</title>
//         <meta
//           charSet="utf-8"
//           name="description"
//           content="Hideaki Aomori - Web devloper and designer"
//         />
//         <link rel="shortcut icon" type="image/ico" href={faviconDev} />
//       </Helmet>
//       <div className={devPage} id="top">
//         <header className={header}>
//           <div className={`${container} ${container___header}`}>
//             <nav className={nav}>
//               <ul className={nav_ul}>
//                 <li className={`${nav_li} ${nav_li___1}`}>
//                   <a className={`${nav_link} ${nav_link___1}`} href="#projects">
//                     projects
//                   </a>
//                 </li>
//                 <li className={`${nav_li} ${nav_li___2}`}>
//                   <a className={`${nav_link} ${nav_link___2}`} href="#contact">
//                     contact
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//             <div className={intro}>
//               <div className={intro_text}>
//                 <h1 className={intro_header_1}>Hideaki Aomori</h1>
//                 <p className={intro_description}>web developer and designer</p>
//               </div>
//               <Img
//                 fluid={data.h_headshot.childImageSharp.fluid}
//                 className={intro_img}
//               />
//             </div>
//             <div className={`${skills} `}>
//               <h2 className={skills_header_2}>Skills:</h2>
//               <ul className={skills_list}>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <Html className={skills_icon} />
//                     <figcaption className={skills_caption}>html</figcaption>
//                   </figure>
//                 </li>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <Css className={`${skills_icon} ${skills_icon___css}`} />
//                     <figcaption className={skills_caption}>css</figcaption>
//                   </figure>
//                 </li>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <Sass className={skills_icon} />
//                     <figcaption className={skills_caption}>sass</figcaption>
//                   </figure>
//                 </li>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <Javascript className={skills_icon} />
//                     <figcaption className={skills_caption}>
//                       javascript
//                     </figcaption>
//                   </figure>
//                 </li>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <ReactIcon className={skills_icon} />
//                     <figcaption className={skills_caption}>react</figcaption>
//                   </figure>
//                 </li>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <GraphqlIcon className={skills_icon} />
//                     <figcaption className={skills_caption}>graphql</figcaption>
//                   </figure>
//                 </li>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <GatsbyIcon className={skills_icon} />
//                     <figcaption className={skills_caption}>gatsby</figcaption>
//                   </figure>
//                 </li>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <Git className={`${skills_icon} ${skills_icon___git}`} />
//                     <figcaption className={skills_caption}>git</figcaption>
//                   </figure>
//                 </li>
//                 <li className={skills_item}>
//                   <figure className={skills_figure}>
//                     <Figma className={skills_icon} />
//                     <figcaption className={skills_caption}>figma</figcaption>
//                   </figure>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </header>

//         <section className={projects} id="projects">
//           <div className={`${container} ${container___projects}`}>
//             <h2 className={projects_header_2}>Recent Projects</h2>
//             <div className={card_container}>
//               {/* ******************* ROB's SITE ****************** */}
//               <div className={`${card} ${card___rob}`}>
//                 <Img
//                   fluid={data.rob_fav.childImageSharp.fluid}
//                   className={card_icon}
//                 />
//                 <p className={card_description}>Small business site</p>
//                 <ul>
//                   <li>
//                     <a
//                       className={card_link}
//                       href="https://robmoose.com/"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Website className={card_svg} />
//                       Website
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className={card_link}
//                       href="https://github.com/h15200/rob_moose_site"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Code className={card_svg} />
//                       Code
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               {/* ******************* STEVE'S SITE ****************** */}

//               <div className={`${card} ${card___steve}`}>
//                 <Img
//                   fluid={data.steve_fav.childImageSharp.fluid}
//                   className={card_icon}
//                 />
//                 <p className={card_description}>
//                   Custom portfolio site built on Gatsby
//                 </p>
//                 <ul>
//                   <li>
//                     <a
//                       className={card_link}
//                       href="https://www.stevekenyon.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Website className={card_svg} />
//                       Website
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className={card_link}
//                       href="https://github.com/SteveKenyonMusic/SteveKenyon.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Code className={card_svg} />
//                       Code
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               {/* ******************* HIDEAKI'S MUSICIAN SITE ****************** */}
//               <div className={`${card} ${card___hideaki}`}>
//                 <Img
//                   fluid={data.h_fav.childImageSharp.fluid}
//                   className={card_icon}
//                 />
//                 <p className={card_description}>
//                   My musician site. Progressive web app
//                 </p>
//                 <ul>
//                   <li>
//                     <a
//                       className={card_link}
//                       href="https://www.hideakiaomori.com"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Website className={card_svg} />
//                       Website
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className={card_link}
//                       href="https://github.com/h15200/aomori-newSite-112719"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Code className={card_svg} />
//                       Code
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className={contact} id="contact">
//           <div className={`${container} ${container___contact}`}>
//             <h2 className={contact_header_2}>Contact me:</h2>
//             <ul className={contact_ul}>
//               <li className={contact_li}>
//                 <a
//                   className={contact_a}
//                   href="mailto:hideaki.aomori.webdev@gmail.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Email className={contact_svg} />
//                   Email
//                 </a>
//               </li>
//               <li className={contact_li}>
//                 <a
//                   className={contact_a}
//                   href="https://www.linkedin.com/in/hideaki-aomori-7465a81a2/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin className={contact_svg} />
//                   Linkedin
//                 </a>
//               </li>
//               <li className={contact_li}>
//                 <a
//                   className={contact_a}
//                   href="https://github.com/h15200"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github className={contact_svg} />
//                   Github
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className={contact_line}></div>
//         </section>
//         <footer className={footer}>
//           <div className={`${container} ${container___footer}`}>
//             <a className={footer_a} href="#top">
//               Top
//             </a>
//             <p className={footer_copyright}>Copyright &copy; {currentYear}</p>
//             <p className={footer_author}>Made by Hideaki Aomori</p>
//           </div>
//         </footer>
//       </div>
//     </Fragment>
//   )
// }

// export default Dev
