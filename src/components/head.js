import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Helmet>
      <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
      <meta
        charSet="utf-8"
        name="description"
        content="Information about Hideaki Aomori, a world-class woodwind musician who plays clarinet, saxophone, and flute"
      />
      {/* pinterest account claming */}
      <meta name="p:domain_verify" content="e2ea63c5d376890df698cd03f50e02be" />
    </Helmet>
  );
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Head;
