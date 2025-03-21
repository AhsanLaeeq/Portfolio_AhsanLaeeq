import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center text-center">
          <Col xs={12} md={6}>
            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/AhsanLaeeq"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github"
              >
                <FaGithub />
              </a>
              <a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon email"
              >
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
