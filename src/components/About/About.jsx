import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const {
    img,
    name,
    birth,
    degree,
    career,
    career1,
    career2,
    career3,
    career4,
    career5,
    career6,
    tel,
    email,
    resume,
  } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{name || 'The data does not exist.'}</p>
                <p className="about-wrapper__info-text">{birth || 'The data does not exist.'}</p>
                <p className="about-wrapper__info-text">{degree || 'The data does not exist.'}</p>
                <p className="about-wrapper__info-text-grid">
                  <p className="about-wrapper__info-text-grid-item">{career}</p>
                  <p className="about-wrapper__info-text-grid-item">
                    {career1 || 'The data does not exist.'}
                  </p>
                  <p className="about-wrapper__info-text-grid-item" />
                  <p className="about-wrapper__info-text-grid-item">
                    {career2 || 'The data does not exist.'}
                  </p>
                  <p className="about-wrapper__info-text-grid-item" />
                  <p className="about-wrapper__info-text-grid-item">
                    {career3 || 'The data does not exist.'}
                  </p>
                  <p className="about-wrapper__info-text-grid-item" />
                  <p className="about-wrapper__info-text-grid-item">
                    {career4 || 'The data does not exist.'}
                  </p>
                  <p className="about-wrapper__info-text-grid-item" />
                  <p className="about-wrapper__info-text-grid-item">
                    {career5 || 'The data does not exist.'}
                  </p>
                  <p className="about-wrapper__info-text-grid-item" />
                  <p className="about-wrapper__info-text-grid-item">
                    {career6 || 'The data does not exist.'}
                  </p>
                </p>
                <p className="about-wrapper__info-text">{tel || 'The data does not exist.'}</p>
                <p className="about-wrapper__info-text">{email || 'The data does not exist.'}</p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
