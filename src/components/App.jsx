import React, { useState, useEffect } from 'react';
import Floating from './Floating/Floating';
import Hero from './Hero/Hero';
import About from './About/About';
import Certificates from './Certificates/Certificates';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  certificatesData,
  projectsData,
  contactData,
  footerData,
} from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHero({ ...heroData });
      setAbout({ ...aboutData });
      setCertificates([...certificatesData]);
      setProjects([...projectsData]);
      setContact({ ...contactData });
      setFooter({ ...footerData });
    }
  }, []);

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

export default App;
