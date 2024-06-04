import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Navigation Component
const Navigation = () => {
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
            <li className="nav-item">
              <button className="btn btn-success ml-lg-2">
                <span className="resume-icon">📄</span>
                <span>Resume</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Home Component
const Home = () => {
  return (
    <div id="home" className="section full-height-section hero-banner">
      <h1 className="welcome-header">Welcome to My Portfolio</h1>
      <div className="developer-info">
        <h2 className="developer-name">Software Developer: Ramgopal</h2>
        <p className="info-text">Passionate about creating innovative software solutions.</p>
        <p className="info-text">Experienced in front-end and back-end development.</p>
        <p className="info-text">Proficient in <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, <span className="highlight">Node.js</span>, HTML, CSS, and more.</p>
        <p className="info-text">Skilled in database management using <span className="highlight">MongoDB</span>, <span className="highlight">MySQL</span>, and <span className="highlight">PostgreSQL</span>.</p>
        <p className="info-text">Familiar with cloud platforms such as <span className="highlight">AWS</span> and <span className="highlight">Azure</span>.</p>
        <p className="info-text">Ready to collaborate on exciting projects and contribute to success.</p>
      </div>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div id="about" className="section full-height-section">
      <h2 className="about-header">About Me</h2>
      <div className="about-content">
        <p className="about-text">I am a passionate and dedicated software developer with a strong interest in creating innovative solutions to complex problems.</p>
        <p className="about-text">My journey in software development started with my curiosity for technology and my desire to build things that make a difference.</p>
        <p className="about-text">I have experience in both front-end and back-end development, with proficiency in <span className="highlight">JavaScript</span>, <span className="highlight">React</span>, <span className="highlight">Node.js</span>, HTML, CSS, and more.</p>
        <p className="about-text">I enjoy learning new technologies and keeping up with industry trends to continually improve my skills and stay ahead in this rapidly evolving field.</p>
        <p className="about-text">Outside of coding, I love exploring the outdoors, reading books, and spending time with friends and family.</p>
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const projectData = [
    { id: 1, title: "Project One", description: "Description of project one." },
    { id: 2, title: "Project Two", description: "Description of project two." },
    { id: 3, title: "Project Three", description: "Description of project three." },
    { id: 4, title: "Project Four", description: "Description of project four." },
    { id: 5, title: "Project Five", description: "Description of project five." },
    { id: 6, title: "Project Six", description: "Description of project six." },
  ];

  return (
    <div id="projects" className="section full-height-section">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-container">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div id="contact" className="section full-height-section">
      <h2 className="contact-header">Contact Me</h2>
      <div className="contact-info">
        <p className="contact-text">Feel free to reach out to me for any inquiries or collaborations.</p>
        <ul className="contact-list">
          <li><span className="contact-label">Email:</span> example@example.com</li>
          <li><span className="contact-label">Phone:</span> +1234567890</li>
          <li><span className="contact-label">Social Media:</span></li>
          <ul>
            <li>
              <span className="social-label">Twitter:</span>
              <a href="https://twitter.com/example">
                <i class="fab fa-twitter"></i> @example
              </a>
            </li>
            <li>
              <span className="social-label">LinkedIn:</span>
              <a href="https://linkedin.com/in/example">
                <i class="fab fa-linkedin"></i> Example Profile
              </a>
            </li>
          </ul>
        </ul>
      </div>
      <div className="contact-form">
        <h3 className="form-header">Send me a message:</h3>
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
