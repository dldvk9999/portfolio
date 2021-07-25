import React, { useState, useEffect } from 'react';
import { signIn } from '../context/auth';
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
  const [user, setUser] = useState(true);
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

  if (!authenticated) {
    return (
      <PortfolioProvider value={{ login, loginAuth }}>
        <Login />
      </PortfolioProvider>
    );
  }
  return (
    <PortfolioProvider value={{ hero, about, certificates, projects, contact, footer }}>
      <Hero />
      <About />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
