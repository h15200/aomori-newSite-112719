## upgrade schedule

- upgrade to new major release after 3 - 6 months

- https://github.com/gatsbyjs/gatsby/releases

## set up / testing

- make sure you are on the branch "development"
- npm i
- npm start

- to test prod, `gatsby build` then `gatsby serve`

To change CTA, src/Markdown/cta and read the template for instructions

## to v4

- make sure node is upgraded first via nvm
- upgrade gatsby in npm, run `npm outdate` for list
- upgrade rest to the correct version which is not necessarily the latest version
- if you get a gatsby-config error, most likely need to refactor all items in the plugin[] to objects with a 'resolve' key even if you don't need options
- if you get a postcss error, install postcss-loader and postcss as additional dependencies
  - additionally, you have to import all css modules with this syntax `import * as ctaStyles from "../styles/cta.module.scss"`
- don't forget to change netlify NODE_VERSION env to `14.18.2`

## add weekly-lessons

- modify /dev to have weekly lesson info
- add gatsby-plugin-image to use staticImages instead of graphql querying

## prod fail

- sometimes you may have to force refresh a served build
- just open it in an incognito window to bypass any cache related issues
