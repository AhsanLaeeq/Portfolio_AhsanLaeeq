import { useState } from "react";
import '../App.css'; // Go up one directory from the 'components' folder


const Hero = ({ projectsRef }) => {  // Receive the reference as a prop
  const [hovered, setHovered] = useState(false);

  const handleScrollToProjects = () => {
    if (projectsRef && projectsRef.current) {  // Check if the ref is properly assigned
      // Smooth scroll to the projects section
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center text-center text-light bg-dark vh-100 position-relative"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="position-relative">
              {/* Profile Image with Hover Effect */}
              <img
                src="/profile.jpg" // Make sure this is in the 'public' folder
                alt="Ahsan Laeeq"
                className={`rounded-circle mb-4 profile-img img-fluid hero-image ${hovered ? "hovered" : ""}`}
                width="200"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              />
              {/* Name and Text */}
              <h2 className="display-4 mb-3 animated-text">Hi, I'm Ahsan Laeeq! 🚀</h2>
              <p className="lead mb-4 fade-in-text">
                A passionate <strong>Full-Stack Developer</strong> skilled in modern web technologies. I specialize in creating beautiful, functional, and scalable web applications.
              </p>
              {/* Button to Scroll to Projects */}
              <button
                onClick={handleScrollToProjects}
                className="btn btn-warning btn-lg mt-3 hero-btn animated-btn"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Overlay for better readability on background images */}
      <div className="overlay"></div>
    </section>
  );
};

export default Hero;
