import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';

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
        <AliceCarousel
          autoPlayInterval="4000"
          autoPlayControls
          autoHeight
          activeIndex
          infinite
          keyboardNavigation
        >
          {images2.map((img) => {
            return <img src={img} className="sliderimg" width="600" alt="" />;
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
