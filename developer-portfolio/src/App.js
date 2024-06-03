import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Navigation Component
const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/projects">Projects</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

// Home Component
const Home = () => {
  return (
    <div>
      <h2>Welcome to My Portfolio</h2>
      <p>This is the home page of my portfolio.</p>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div>
      <h2>About Me</h2>
      <p>This is where you can learn more about me.</p>
    </div>
  );
};

// Projects Component
const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <p>Here are some of my projects.</p>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <p>You can contact me using the information below.</p>
    </div>
  );
};

// App Component
function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
