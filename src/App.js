import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";  // Import the About component
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from './components/Footer';
import "./index.css";
import './App.css'; 

function App() {
  const projectsRef = useRef(null);  // Create a reference for the projects section

  return (
    <>
      <Navbar />
      <Hero projectsRef={projectsRef} /> {/* Pass the projectsRef to Hero */}
      <About />  {/* Keep About here */}
      <Projects projectsRef={projectsRef} />  {/* Pass the projectsRef to Projects */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
