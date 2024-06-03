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
      <h2 className="welcome-header">Welcome to My Portfolio</h2>
      <div className="developer-info">
        <h3 className="developer-name">Software Developer: Ramgopal</h3>
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
  return (
    <div id="projects" className="section full-height-section">
      <h2 className="projects-header">Projects</h2>
      {/* Project Cards */}
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
            <li><span className="social-label">Twitter:</span> <a href="https://twitter.com/example">@example</a></li>
            <li><span className="social-label">LinkedIn:</span> <a href="https://linkedin.com/in/example">Example Profile</a></li>
          </ul>
        </ul>
      </div>
      <div className="contact-form">
        <h3 className="form-header">Send me a message:</h3>
        {/* Add a contact form here */}
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
