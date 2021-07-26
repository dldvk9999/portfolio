import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const Title = ({ title, subtitle }) => (
  <Fade bottom duration={1000} delay={300} distance="0px">
    {subtitle ? (
      <div>
        <h2 className="section-title-nomargin">{title}</h2>
        <div className="section-title-sub">{subtitle}</div>
      </div>
    ) : (
      <h2 className="section-title">{title}</h2>
    )}
  </Fade>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default Title;
