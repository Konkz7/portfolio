import React , {useState,useEffect} from "react";
import { 
  FaGithub, FaLinkedin, 
  FaAngleRight,FaAngleLeft 
} from "react-icons/fa";
import { projects} from "./Constants";
import TechIcon from "./Components/TechIcon";
import { VerticalTimeline, TimelineItem } from './Components/Timeline';
import { motion } from 'framer-motion';


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
        <li><a href="#">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
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
            <h1 className="heading center" id = "about">About Me</h1>

            <div className="social-button-row">
              <a href="https://github.com/Konkz7" target="_blank" rel="noopener noreferrer" className="social-button">
                <FaGithub size = {48} />
              </a>
              <a href= {process.env.PUBLIC_URL +"/MAIN_CV.pdf"} target="_blank" className="social-button text">
                CV
              </a>
              <a href="https://www.linkedin.com/in/amara-okonkwo-19249435b/" target="_blank" rel="noopener noreferrer" className="social-button">
                <FaLinkedin size={48} />
              </a>
            </div>
  

          </div>
          <p id="about-text">
          {">>"}Passionate junior developer with a solid foundation in creating and maintaining
          software applications (especially in mobile). Experienced in coding with multiple
          programming languages, collaborating with teams, and debugging problems to ensure smooth
          functionality. Despite having a preference to Java, I'm enthusiastic about learning new skills and making an impact in the world of tech.
          </p>
        </div>
      </div>  

    </div>


    <div className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className="projects-container"
      >
    

        <div className="projects-header">
          <h2 className="heading" id = "projects"> My Projects</h2>
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
                muted={true}
                autoPlay={true}
                src={process.env.PUBLIC_URL + projects[projectIndex].src} 
                type="video/mp4"
              >
              </video>
              :
              <img 
                key={projectIndex} // <- forces re-render
                src = {process.env.PUBLIC_URL + projects[projectIndex].src} 
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

          <div className="project-tech-section">
            <h3 className="small-heading" id="project-title">Technologies: </h3>

            <div id = "icon-container">
              {projects[projectIndex].technologies.map(tech =>(
                <div className="tech-icon">
                  <TechIcon name = {tech} color={"white"} />
                </div>
              ))}
            </div>

          </div>

        
          <div className="project-summary-section" >
            <h2 className="small-heading" id = "summary" >Summary:</h2>
            <p className = {`project-summary-text  ${slide != null ? "dropDown" : "" }`}> 
            {projects[projectIndex].description} </p>
          </div>

        </div>

      </motion.div>
    </div> 

    <div className="experience-section">
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
        className=""
      >
      <h2 className="heading black center" id = "experience">Experience</h2>
      <VerticalTimeline>
        <TimelineItem
          header="Software Developer Intern"
          logo={process.env.PUBLIC_URL + "/images/kpmg-icon.png"}
          workplaceName="KPMG"
          description="Worked on developing scalable web solutions while collaborating closely with the design and development teams."
        >
          <ul>
            <li>End to end tested multiple codebases and contributed to them</li>
            <li>Added VOIP functionality to whistleblower application</li>
            <li>Made several pieces of detailed documentation i.e release notes and product documents</li>
            <li>Also solely restored and updated outdated legacy systems.</li>
          </ul>
        </TimelineItem>

        <TimelineItem
          header="Student Developer"
          logo={process.env.PUBLIC_URL + "/images/ibm-icon.png"}
          workplaceName="IBM"
          description= {`A group university project in which we developed a quiz-based city-building game for IBM so
          learners could be more engaged.`}>
          <ul>
            <li>Worked closely with IBM staff in order to make sure we adhered to their requirements</li>
            <li>Had lots of experience with their powerful AI known as IBM Watson.</li>
            <li>Collaborated in cross-functional teams.</li>
            <li>Improved code coverage through unit testing.</li>
          </ul>
        </TimelineItem>
      </VerticalTimeline>
      </motion.div>
    </div>

  <footer className="footer" id="contact">
    <div className="footer-links">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#experience">Experience</a>
    </div>
    <h3 className="footer-heading">Contact me:</h3>
    <div className="contact-info">
      <p><strong>Email:</strong> <a href="mailto:your.email@example.com">amara03@live.co.uk</a></p>
      <p><strong>Phone:</strong> +44 7412092464</p>
    </div>
  </footer>

   
    
     
  </div>
  );
};

export default App;

