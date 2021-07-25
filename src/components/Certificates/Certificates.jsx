import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Certificates = () => {
  const { certificates } = useContext(PortfolioContext);

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
    <section id="certificate">
      <Container>
        <div className="certificate-wrapper">
          <Title title="CERTIFICATES" />
          {certificates.map((certificate) => {
            const { title, info, info2, info3, info4, info5, url, img, id } = certificate;

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
                    <div className="certificate-wrapper__text">
                      <h3 className="certificate-wrapper__text-title">
                        {title || 'Certificate Title'}
                      </h3>
                      <div>
                        <p>{info || ''}</p>
                        <p className="mb-4">{info2 || ''}</p>
                        <p className="mb-4">{info3 || ''}</p>
                        <p className="mb-4">{info4 || ''}</p>
                        <p className="mb-4">{info5 || ''}</p>
                      </div>
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
                    <div className="certificate-wrapper__image">
                      <a
                        // eslint-disable-next-line no-script-url
                        href={url || 'javascript:void(0)'}
                        target={url}
                        aria-label="Certificate Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={img} />
                          </div>
                        </Tilt>
                      </a>
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

export default Certificates;
