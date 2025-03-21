import { useEffect, useState } from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode ? "enabled" : "disabled");
    document.body.classList.toggle("dark-mode");
  };

  return (
    <BootstrapNavbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      className={scrolling ? "navbar-scroll" : ""}
    >
      <Container>
        <BootstrapNavbar.Brand href="#">Ahsan's Portfolio</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <button className="btn btn-warning ms-3" onClick={toggleDarkMode}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
