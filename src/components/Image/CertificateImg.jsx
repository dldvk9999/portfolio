import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const CertificateImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fluid;
      return (
        <Img
          style={{ maxHeight: '72vh' }}
          imgStyle={{ objectFit: 'contain' }}
          className="rounded shadow-lg"
          alt={alt}
          fluid={imageFixed}
        />
      );
    }}
  />
);

CertificateImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default CertificateImg;
