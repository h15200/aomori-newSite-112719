module.exports = {
  siteMetadata: {
    title: 'Hideaki Aomori',
    menuLinks: [
      {
        name: 'HOME',
        link: '/'
      },
      {
        name: 'ABOUT',
        link: '/about'
      },
      {
        name: 'MUSIC',
        link: '/music'
      },
      {
        name: 'SERVICES',
        link: '/services'
      }
    ]

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
  ],
}
