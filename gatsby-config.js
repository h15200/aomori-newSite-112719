module.exports = {
  siteMetadata: {
    title: 'Hideaki Aomori',
    author: 'Hideaki Aomori',
    emailContact: 'LeadingToneRecords@gmail.com'
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
    'gatsby-transformer-remark'
  ],
}
