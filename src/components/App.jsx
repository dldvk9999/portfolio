import React, { useState, useEffect } from 'react';
import { signIn, authPass } from '../context/auth';
import Floating from './Floating/Floating';
import Hero from './Hero/Hero';
import About from './About/About';
import Certificates from './Certificates/Certificates';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Login from './login/login';

import { PortfolioProvider } from '../context/context';

import {
  loginData,
  heroData,
  aboutData,
  certificatesData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [login, setLogin] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const loginAuth = ({ password }) => setUser(signIn({ password }));

  useEffect(() => {
    setLogin({ ...loginData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setCertificates([...certificatesData]);
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  if (window.location.href.match('/?')) {
    const params = window.location.href.split('/?')[1];

    // URL로 암호 입력해서 인증 되었을 때
    if (params && authPass({ params })) {
      return (
        <PortfolioProvider value={{ hero, about, certificates, projects, contact, footer }}>
          <Floating />
          <Hero />
          <About />
          <Certificates />
          <Projects />
          <Contact />
          <Footer />
        </PortfolioProvider>
      );
    }

    // Login 페이지에서 암호를 입력할 때
    if (!authenticated) {
      return (
        <PortfolioProvider value={{ login, loginAuth }}>
          <Login />
        </PortfolioProvider>
      );
    }

    // Login 페이지의 암호로 인증되었을 때
    return (
      <PortfolioProvider value={{ hero, about, certificates, projects, contact, footer }}>
        <Floating />
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </PortfolioProvider>
    );
  }
}

export default App;
