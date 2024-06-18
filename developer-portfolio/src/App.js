import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './App.css';
import profileImage from './assets/pic.jpeg';
import TwitterIcon from './assets/twitter.png'; // Import Twitter icon
import LinkedInIcon from './assets/linkedin.png'; // Import LinkedIn icon
import InstagramIcon from './assets/instagram.png'; // Import LinkedIn icon
import YoutubeIcon from './assets/youtube.png'; // Import LinkedIn icon
import EmailIcon from './assets/social.png'; // Import LinkedIn icon
import PhoneIcon from './assets/PhoneIcon.png'; // Import LinkedIn icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ResumeImage from './assets/resume.jpg'; // Import the resume image
import projectImage1 from './assets/project3.jpg'; // Import your project images
import projectImage2 from './assets/project2.jpg';
import projectImage3 from './assets/project3.jpg';



// Navigation Component
const Navigation = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container justify-content-center">
        <a className="navbar-brand" href="#">Ram Gopal</a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="fixed-bottom mr-4 mb-4">
        <button className="btn btn-outline-light mx-2" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
        <button className="btn btn-outline-light mx-2" onClick={scrollToBottom}>
          <FontAwesomeIcon icon={faArrowDown} />
        </button>
      </div>
    </nav>
  );
};

// Home Component
const Home = () => {
  return (
    <div id="home" className="section full-height-section hero-banner">
      <h1 className="welcome-header">Welcome to My Portfolio</h1>
      <h1 className="welcome-header">Hii,I'am Ram</h1>
      <div className="developer-info">
        <div>
          <h2 className="developer-name">Software Developer: Ramgopal</h2>
          <p className="info-text">Passionate about creating innovative software solutions.</p>
          <p className="info-text">Experienced in front-end and back-end development.</p>
          <p className="info-text">Proficient in <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, <span className="highlight">Node.js</span>, HTML, CSS, and more.</p>
          <p className="info-text">Skilled in database management using <span className="highlight">MongoDB</span>, <span className="highlight">MySQL</span>, and <span className="highlight">PostgreSQL</span>.</p>
          <p className="info-text">Familiar with cloud platforms such as <span className="highlight">AWS</span> and <span className="highlight">Azure</span>.</p>
          <p className="info-text">Ready to collaborate on exciting projects and contribute to success.</p>
        </div>
      </div>
      <img src={profileImage} alt="Profile" className="profile-image" />
      {/* Proficient in Section */}
      {/* <div className="proficient-in-section">
        <h3 className="section-header">Proficient in:</h3>
        <div className="programming-buttons">
          <button className="btn btn-outline-light btn-lg mx-2 my-2">JavaScript</button>
          <button className="btn btn-outline-light btn-lg mx-2 my-2">React</button>
          <br />
          <button className="btn btn-outline-light btn-lg mx-2 my-2">Node.js</button>
          <button className="btn btn-outline-light btn-lg mx-2 my-2">HTML</button>
          <br />
          <button className="btn btn-outline-light btn-lg mx-2 my-2">CSS</button>
          <button className="btn btn-outline-light btn-lg mx-2 my-2">MongoDB</button>
          <br />
          <button className="btn btn-outline-light btn-lg mx-2 my-2">MySQL</button>
          <button className="btn btn-outline-light btn-lg mx-2 my-2">PostgreSQL</button>
          <br />
          <button className="btn btn-outline-light btn-lg mx-2 my-2">AWS</button>
          <button className="btn btn-outline-light btn-lg mx-2 my-2">Azure</button>
        </div>
      </div> */}
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div id="about" className="section full-height-section">
      <h2 className="about-header">About Me</h2>

      {/* Technical Skills Section */}
      <section className="about-section">
        <h3 className="section-subheader">Technical Skills</h3>
        <div className="about-content">
          <p className="about-text">I have experience in both front-end and back-end development, with proficiency in <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, <span className="highlight">Node.js</span>, HTML, CSS, and more.</p>
          <p className="about-text">I enjoy learning new technologies and keeping up with industry trends to continually improve my skills and stay ahead in this rapidly evolving field.</p>
          <div className="programming-buttons">
            <button className="btn btn-outline-light btn-lg mx-2">JavaScript</button>
            <button className="btn btn-outline-light btn-lg mx-2">React</button>
            <button className="btn btn-outline-light btn-lg mx-2">Node.js</button>
            <button className="btn btn-outline-light btn-lg mx-2">HTML</button>
            <button className="btn btn-outline-light btn-lg mx-2">CSS</button>
            <button className="btn btn-outline-light btn-lg mx-2">MongoDB</button>
            <button className="btn btn-outline-light btn-lg mx-2">MySQL</button>
            <button className="btn btn-outline-light btn-lg mx-2">PostgreSQL</button>
            <button className="btn btn-outline-light btn-lg mx-2">AWS</button>
            <button className="btn btn-outline-light btn-lg mx-2">Azure</button>
          </div>
        </div>
      </section>

      {/* Additional Skills Section */}
      <section className="about-section">
        <h3 className="section-subheader">Additional Skills</h3>
        <div className="about-content">
          <p className="about-text">Apart from technical skills, I possess proficiency in areas such as project management, problem-solving, and effective communication.</p>
          <div className="additional-skills-buttons">
            <button className="btn btn-outline-light btn-lg mx-2">Project Management</button>
            <button className="btn btn-outline-light btn-lg mx-2">Problem-Solving</button>
            <button className="btn btn-outline-light btn-lg mx-2">Effective Communication</button>
            <button className="btn btn-outline-light btn-lg mx-2">Team Collaboration</button>
            <button className="btn btn-outline-light btn-lg mx-2">Agile Methodologies</button>
          </div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section className="about-section">
        <h3 className="section-subheader">Personal Interests</h3>
        <div className="about-content">
          <p className="about-text">Outside of coding, I love exploring the outdoors, reading books, and spending time with friends and family.</p>
          <div className="personal-interests-buttons">
            <button className="btn btn-outline-light btn-lg mx-2">Hiking</button>
            <button className="btn btn-outline-light btn-lg mx-2">Reading</button>
            <button className="btn btn-outline-light btn-lg mx-2">Traveling</button>
            <button className="btn btn-outline-light btn-lg mx-2">Photography</button>
            <button className="btn btn-outline-light btn-lg mx-2">Music</button>
            <button className="btn btn-outline-light btn-lg mx-2">Cooking</button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const projectData = [
    { id: 1, title: "Project One", description: "Description of project one.", image: projectImage1 },
    { id: 2, title: "Project Two", description: "Description of project two.", image: projectImage2 },
    { id: 3, title: "Project Three", description: "Description of project three.", image: projectImage3 },
  ];

  return (
    <div id="projects" className="section full-height-section">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card bg-light">
              <img src={project.image} className="card-img-top" alt={`Project ${project.id}`} />
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-text">{project.description}</p>
                <a href="#" className="btn btn-primary stretched-link">View Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="section full-height-section">
      <div className="container">
        <h2 className="contact-header text-center mb-4">Contact Me</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="contact-info text-center mb-4">
              <p className="contact-text">Feel free to reach out to me for any inquiries or collaborations.</p>
              <ul className="contact-list list-unstyled d-flex justify-content-center flex-wrap">
                <li className="mx-3">
                  <a href="mailto:example@example.com" className="btn btn-outline-light social-button">
                    <img src={EmailIcon} alt="EmailIcon" className="social-icon" /> Email
                  </a>
                </li>
                <li className="mx-3">
                  <a href="tel:+1234567890" className="btn btn-outline-light social-button">
                    <img src={PhoneIcon} alt="PhoneIcon" className="social-icon" /> Phone
                  </a>
                </li>
                <li className="mx-3">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light social-button">
                    <img src={TwitterIcon} alt="Twitter" className="social-icon" /> Twitter
                  </a>
                </li>
                <li className="mx-3">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light social-button">
                    <img src={LinkedInIcon} alt="LinkedInIcon" className="social-icon" /> LinkedIn
                  </a>
                </li>
                <li className="mx-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light social-button">
                    <img src={InstagramIcon} alt="InstagramIcon" className="social-icon" /> Instagram
                  </a>
                </li>
                <li className="mx-3">
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light social-button">
                    <img src={YoutubeIcon} alt="YoutubeIcon" className="social-icon" /> Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="contact-form text-center">
              <h3 className="form-header mb-4">Send me a message:</h3>
              <button className="btn btn-success btn-lg">Send Message</button>
              {/* Add your contact form or further form elements here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// App Component
function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="sections-container">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
