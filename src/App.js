import React , {useState,useEffect} from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import './App.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  

  return (
  <div>

    <nav className="navbar">
      <div className="navbar-logo">Personal Portfolio</div>
      
      <button className="navbar-toggle" onClick = {toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </button>
      <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <div className="hero-section">
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-subtitle">
            Hey there, I'm
          </h1>
          <h1 className="hero-title">
            Amara Okonkwo
          </h1>
        </div>
        <div className="about-section">
          <div id="profile-picture"/>
          <div className="about-textbox">
            <div id = "about-header">
              <h1 id="about-title">
                About Me
              </h1>

              <div className="social-button-row">
                <a href="https://github.com/Konkz7" target="_blank" rel="noopener noreferrer" className="social-button">
                  <FaGithub size={48} />
                </a>
                <a href="/MAIN_CV.pdf" target="_blank" className="social-button">
                  CV
                </a>
                <a href="https://www.linkedin.com/in/amara-okonkwo-19249435b/" target="_blank" rel="noopener noreferrer" className="social-button">
                  <FaLinkedin size={48} />
                </a>
              </div>
    

            </div>
            <h2 id="about-text">
              I am a passioinate junior software developer who knows theres no task too small or too big. I am a fast learner and I am always looking for new challenges to tackle. 
              I am a team player and I love to work with others to hit goals. I am always looking for new opportunities to learn and grow as a person. 
              I also love an environment where creative solutions are encouraged. 
              With that ... welcome to my portfolio!
            </h2>
          </div>
        </div>
      </div>
      
    </div>

    
  </div>
  );
};

export default App;

