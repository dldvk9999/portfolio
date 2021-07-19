import React, { useState, useEffect } from 'react';
import { signIn } from '../context/auth';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Login from './login/login';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  const login = ({ password }) => setUser(signIn({ password }));

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  if (!authenticated) {
    return (
      <PortfolioProvider value={{ login }}>
        <Login />
      </PortfolioProvider>
    );
  }
  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
