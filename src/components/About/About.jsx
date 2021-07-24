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
    career1,
    career2,
    career3,
    career4,
    career5,
    career6,
    tel,
    email,
    blog,
    tistory,
    resume,
  } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [titleName] = useState('이름 : ');
  const [titleBirth] = useState('생년월일 : ');
  const [titleDegree] = useState('최종학력 : ');
  const [titleCareer] = useState('경력사항 : ');
  const [titleTel] = useState('Tel : ');
  const [titleEmail] = useState('Email : ');
  const [titleBlog] = useState('블로그 : ');
  const [titleTistory] = useState('티스토리 : ');

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
                <p className="about-wrapper__info-text">
                  {titleName}
                  {name || 'The data does not exist.'}
                </p>
                <p className="about-wrapper__info-text">
                  {titleBirth}
                  {birth || 'The data does not exist.'}
                </p>
                <p className="about-wrapper__info-text-grid">
                  <p className="about-wrapper__info-text-grid-item">{titleDegree}</p>
                  <p className="about-wrapper__info-text-grid-item">
                    {degree || 'The data does not exist.'}
                  </p>
                </p>
                <p className="about-wrapper__info-text-grid">
                  <p className="about-wrapper__info-text-grid-item">{titleCareer}</p>
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
                <p className="about-wrapper__info-text">
                  {titleTel}
                  {tel || 'The data does not exist.'}
                </p>
                <p className="about-wrapper__info-text-grid">
                  <p className="about-wrapper__info-text-grid-item">{titleEmail}</p>
                  <p className="about-wrapper__info-text-grid-item">
                    {email || 'The data does not exist.'}
                  </p>
                </p>
                {blog && (
                  <p className="about-wrapper__info-text-grid">
                    {titleBlog}
                    <a
                      href={blog}
                      target={blog}
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                      className="about-wrapper__info-text--important-link"
                    >
                      <p className="about-wrapper__info-text-grid-item">
                        {blog || 'The data does not exist.'}
                      </p>
                    </a>
                  </p>
                )}
                {tistory && (
                  <p className="about-wrapper__info-text-grid">
                    {titleTistory}
                    <a
                      href={tistory}
                      target={tistory}
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                      className="about-wrapper__info-text--important-link"
                    >
                      <p className="about-wrapper__info-text-grid-item">
                        {tistory || 'The data does not exist.'}
                      </p>
                    </a>
                  </p>
                )}
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
