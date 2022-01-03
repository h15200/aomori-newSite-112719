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
      resolve: "gatsby-plugin-sass",
    },
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
    {
      resolve: "gatsby-transformer-remark",
    },
    {
      resolve: "gatsby-plugin-react-helmet",
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-transformer-sharp",
    },
    {
      resolve: "gatsby-plugin-sharp",
    },
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
    {
      resolve: "gatsby-plugin-offline",
    },
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
