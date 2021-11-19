import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

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
        <AliceCarousel autoPlayInterval="4000" infinite autoPlay keyboardNavigation>
          {images2.map((img) => {
            const name = img.split('/');
            if (
              name[0] === 'peacekeeper' ||
              (name[0] === 'hanium' && name[1] === 'slide_6.jpg') ||
              (name[0] === 'hanium' && name[1] === 'slide_7.jpg') ||
              (name[0] === 'hanium' && name[1] === 'slide_8.gif')
            ) {
              return (
                <img
                  src={img}
                  className="sliderimg"
                  alt=""
                  style={{ width: 'inherit', maxWidth: '30%', height: 'auto' }}
                  key={nanoid}
                />
              );
            }
            if (name[0] === 'kshield' && name[1] === 'slide_1.png') {
              return (
                <img
                  src={img}
                  className="sliderimg"
                  alt=""
                  style={{ width: 'inherit', maxWidth: '70%', height: 'auto' }}
                  key={nanoid}
                />
              );
            }
            return (
              <img
                src={img}
                className="sliderimg"
                alt=""
                style={{ width: 'inherit', height: 'auto' }}
                key={nanoid}
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
