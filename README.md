## upgrade schedule

- upgrade to new major release after 3 - 6 months

- https://github.com/gatsbyjs/gatsby/releases

## set up

- make sure you are on the branch "development"
- npm i
- npm start

To change CTA, src/Markdown/cta and read the template for instructions

## to v4

- make sure node is upgraded first via nvm
- upgrade gatsby in npm, run `npm outdate` for list
- upgrade rest to the correct version which is not necessarily the latest version
- if you get a gatsby-config error, most likely need to refactor all items in the plugin[] to objects with a 'resolve' key even if you don't need options
- if you get a postcss error, install postcss-loader and postcss as additional dependencies
  - additionally, you have to import all css modules with this syntax `import * as ctaStyles from "../styles/cta.module.scss"`
