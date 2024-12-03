import React from 'react';
import Header from '../Components/Header/Header';
import './Homepage.css';
import Navigation from '../Components/Navigation/Navigation';
import Socials from '../Components/Socials/Socials';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const Homepage = () => {
  // Debugging log to ensure the function is called with the correct ID
  const scrollToSection = (id) => {
    console.log(`scrollToSection called with id: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`No section found with id: ${id}`);
    }
  };

  return (
    <div className="homepage">
      <div className="left-side">
        <Header />
        <Navigation scrollToSection={scrollToSection} />
        <Socials />
      </div>
      <div className="right-side">
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
