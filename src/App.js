import React , {useState,useEffect} from "react";
import { 
  FaGithub, FaLinkedin, 
  FaAngleRight,FaAngleLeft 
} from "react-icons/fa";
import { projects} from "./Constants";
import TechIcon from "./Constants";


import './App.css';



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [slide,setSlide] = useState(null);

  const noProjects = projects.length;

  const toggleMenu = () => setIsOpen(!isOpen);

  const triggerSlide = (isRight) => {

    setSlide(isRight);

    setTimeout(() => setSlide(null), 1500);
  }

  const adjustScreen = (value) => {

    triggerSlide(value>0?true:false);
    setProjectIndex(prevIndex => {
      const newIndex = (prevIndex + value + noProjects) % noProjects;
      console.log(newIndex);
      return newIndex;
    });
  }

  const getSlideClass = () => 
    slide != null ? (slide ? "slideRight" : "slideLeft") : "";

  

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
      <div className="overlay"/> 
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
            <h1 className="heading center">About Me</h1>

            <div className="social-button-row">
              <a href="https://github.com/Konkz7" target="_blank" rel="noopener noreferrer" className="social-button">
                <FaGithub size={48} />
              </a>
              <a href="/MAIN_CV.pdf" target="_blank" className="social-button text">
                CV
              </a>
              <a href="https://www.linkedin.com/in/amara-okonkwo-19249435b/" target="_blank" rel="noopener noreferrer" className="social-button">
                <FaLinkedin size={48} />
              </a>
            </div>
  

          </div>
          <p id="about-text">
            I am a passioinate junior software developer who knows theres no task too small or too big. I am a fast learner and I am always looking for new challenges to tackle. 
            I am a team player and I love to work with others to hit goals. I am always looking for new opportunities to learn and grow as a person. 
            I also love an environment where creative solutions are encouraged. 
            With that ... welcome to my portfolio!
          </p>
        </div>
      </div>  

    </div>

    <div className="projects-section">
      <div className="projects-container">

        <div className="projects-header">
          <h2 className="heading"> My Projects</h2>
          <h2 className="heading"> 
            <span className={`heading ${slide != null ? "dropDown" : "" }`}>{projectIndex+1}</span> 
            {`/${noProjects}`}
          </h2>
        </div>
        
        <a href= {projects[projectIndex].projectLink}>
          <h3 className={`small-heading ${getSlideClass()}`} id="project-title" 
          key={projectIndex}>
            {projects[projectIndex].title} 
          </h3>
        </a>

        <div className="screen-content">

          <div className="project-nav-arrow" onClick={() => adjustScreen(-1)}>
            <FaAngleLeft size={84} color="white"></FaAngleLeft>
          </div>

          <div className = {`project-card ${getSlideClass()}`}>

            {projects[projectIndex].hasVideo ?
              <video
                key={projectIndex} // <- forces re-render
                width="95%"
                height="95%"
                controls
              >
              <source src={process.env.PUBLIC_URL + projects[projectIndex].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              :
              <img 
                key={projectIndex} // <- forces re-render
                src = {projects[projectIndex].src} 
                width="90%" 
                height="100%"
              />     
            }
            
          </div>

          <div className="project-nav-arrow" onClick={() => adjustScreen(1)}>
            <FaAngleRight size={84} color="white"></FaAngleRight>
          </div>


        </div>


        <div className="project-info-container">

          <div className="project-info-section">
            <h3 className="small-heading" id="project-title">Technologies: </h3>

            <div id = "icon-container">
              {projects[projectIndex].technologies.map(tech =>(
                <div className="tech-icon">
                  <TechIcon name = {tech} color={"white"} />
                </div>
              ))}
            </div>

          </div>

        
          <div className="project-info-section" >
            <h2 className="small-heading" >Summary:</h2>
            <p className = {`project-summary-text  ${slide != null ? "dropDown" : "" }`}> 
            {projects[projectIndex].description} </p>
          </div>

        </div>
        

      </div>
    </div>  
  </div>
  );
};

export default App;

