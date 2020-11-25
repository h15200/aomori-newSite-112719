/* eslint-disable no-useless-escape */
module.exports = {
  siteMetadata: {
    title: "Hideaki Aomori",
    author: "Hideaki Aomori",
    emailContact: "LeadingToneRecords@gmail.com",
    description:
      "About Hideaki Aomori, a world class musician who plays clarinets, saxophones, and flutes",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: `${__dirname}/src/image/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/Markdown/`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Proza Libre\:400,500,600`,
          `Ubuntu\:400,500,700`,
          `Roboto\:400,500,600,700`,
          `Righteous`,
        ],
      },
    },

    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-favicon",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hideaki Aomori",
        short_name: "H",
        start_url: "/",
        background_color: "#ff8864",
        theme_color: "#ff8864",
        display: "standalone",
        icon: "src/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-154635982-1",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}
