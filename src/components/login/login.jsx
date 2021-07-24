/* eslint-disable react/button-has-type */
import React, { useContext, useState, useEffect } from 'react';
import { Col, Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';

// eslint-disable-next-line react/prop-types
function Login() {
  const { login, loginAuth } = useContext(PortfolioContext);
  const { title, placeholder, auth } = login;

  const [password, setPassword] = useState('');
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

  const handleClick = () => {
    try {
      loginAuth({ password });
    } catch (e) {
      // eslint-disable-next-line no-alert
      alert('Failed to login');
      setPassword('');
    }
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <section id="login">
      <Container>
        <Col md={12} sm={3} lg={12}>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={300} distance="30px">
            <h1 className="login-title">
              {title || 'Please enter the authentication key'}
              <br />
              <input
                className="login-input"
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                placeholder={placeholder || 'Auth Key'}
                onKeyPress={onKeyPress}
                style={{ width: '100%' }}
              />
              <button className="login-btn cta-btn--hero" onClick={handleClick}>
                {auth}
              </button>
            </h1>
          </Fade>
        </Col>
      </Container>
    </section>
  );
}

export default Login;
