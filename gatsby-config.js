module.exports = {
  siteMetadata: {
    title: 'Hideaki Aomori',
    author: 'Hideaki Aomori',
    emailContact: 'LeadingToneRecords@gmail.com',
    description: 'About Hideaki Aomori, a world class musician who plays clarinets, saxophones, and flutes'
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Proza Libre`,
            variants: [`400`, `500`, '600'],
          },
          {
            family: `Ubuntu`,
            variants: [`400`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/Markdown/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-favicon',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Hideaki Aomori",
        short_name: "H",
        start_url: "/",
        background_color: "#ff8864",
        theme_color: "#ff8864",
        display: "standalone",
        icon: "src/favicon.png",
        crossOrigin: `use-credentials`
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-154635982-1'
      }
    }
  ],
}
