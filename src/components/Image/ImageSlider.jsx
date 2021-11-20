import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const App = ({ img1, img2, img3, img4, img5, img6, img7, img8 }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const images2 = images.filter((x) => x !== null);

  if (images2.length === 1) {
    return (
      <div className="App">
        <div>
          <img src={images2[0]} className="sliderimg" width="auto" height="300" alt="" />;
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div>
        <AliceCarousel autoPlayInterval="4000" infinite keyboardNavigation>
          {images2.map((img) => {
            return (
              <StaticQuery
                query={graphql`
                  query {
                    images: allFile {
                      edges {
                        node {
                          relativePath
                          name
                          childImageSharp {
                            fluid(maxWidth: 400, quality: 100) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
                `}
                render={(data) => {
                  const image = data.images.edges.find((n) => n.node.relativePath.includes(img));

                  if (!image) return null;

                  let imageFixed = null;
                  try {
                    imageFixed = image.node.childImageSharp.fluid;
                  } catch {
                    imageFixed = null;
                  }
                  return (
                    <Img
                      style={{ maxWidth: '73.2rem', maxHeight: '30rem' }}
                      imgStyle={{ objectFit: 'contain' }}
                      className="sliderimg"
                      alt=""
                      fluid={imageFixed}
                    />
                  );
                }}
              />
            );
          })}
        </AliceCarousel>
      </div>
    </div>
  );
};

App.propTypes = {
  img1: PropTypes.string,
  img2: PropTypes.string,
  img3: PropTypes.string,
  img4: PropTypes.string,
  img5: PropTypes.string,
  img6: PropTypes.string,
  img7: PropTypes.string,
  img8: PropTypes.string,
};

export default App;
