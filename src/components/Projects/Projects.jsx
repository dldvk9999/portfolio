import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ImageSlider from '../Image/ImageSlider';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const {
              title,
              info,
              info2,
              info3,
              url,
              urltitle,
              url2,
              url2title,
              url3,
              url3title,
              docu1,
              docu2,
              docu3,
              docu1title,
              docu2title,
              docu3title,
              img1,
              img2,
              img3,
              img4,
              img5,
              img6,
              img7,
              img8,
              id,
            } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>{info || ''}</p>
                        <p className="mb-4">{info2 || ''}</p>
                        <p className="mb-4">{info3 || ''}</p>
                      </div>
                      {url && (
                        <a
                          target={url}
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          // eslint-disable-next-line no-script-url
                          href={url || 'javascript:void(0);'}
                        >
                          Source Code
                          {(urltitle || ' You did not enter a url title.') && `${' '}${urltitle}`}
                        </a>
                      )}

                      {url2 && (
                        <div>
                          <br />
                          <a
                            target={url2}
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero"
                            // eslint-disable-next-line no-script-url
                            href={url2 || 'javascript:void(0);'}
                          >
                            Source Code
                            {(url2title || ' You did not enter a url title.') &&
                              `${' '}${url2title}`}
                          </a>
                        </div>
                      )}

                      {url3 && (
                        <div>
                          <br />
                          <a
                            target={url3}
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero"
                            // eslint-disable-next-line no-script-url
                            href={url3 || 'javascript:void(0);'}
                          >
                            Source Code
                            {(url3title || ' You did not enter a url title.') &&
                              `${' '}${url3title}`}
                          </a>
                        </div>
                      )}

                      {docu1 && (
                        <div>
                          <br />
                          <a
                            target={docu1}
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={docu1}
                          >
                            {docu1title || ' You did not enter a docu title.'}
                          </a>
                        </div>
                      )}

                      {docu2 && (
                        <div>
                          <br />
                          <a
                            target={docu2}
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={docu2}
                          >
                            {docu2title || ' You did not enter a docu title.'}
                          </a>
                        </div>
                      )}

                      {docu3 && (
                        <div>
                          <br />
                          <a
                            target={docu3}
                            rel="noopener noreferrer"
                            className="cta-btn text-color-main"
                            href={docu3}
                          >
                            {docu3title || ' You did not enter a docu title.'}
                          </a>
                        </div>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <div data-tilt className="thumbnail rounded">
                        <ImageSlider
                          img1={img1 || null}
                          img2={img2 || null}
                          img3={img3 || null}
                          img4={img4 || null}
                          img5={img5 || null}
                          img6={img6 || null}
                          img7={img7 || null}
                          img8={img8 || null}
                        />
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
