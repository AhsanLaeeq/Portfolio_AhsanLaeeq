import '../App.css'; // Make sure the path to your CSS file is correct

const About = () => {
  return (
    <section id="about" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4 text-primary">👨‍💻 About Me</h2>

        <p className="lead mb-4">
          I'm a <strong>web developer</strong> skilled in <strong>HTML5, CSS, Bootstrap, JavaScript, React, SQL, and Python</strong>.
          I focus on building <strong>responsive</strong> and <strong>interactive web applications</strong> that are optimized for both performance and user experience.
        </p>
        <p className="mb-4">
          With a passion for <strong>problem-solving</strong>, I strive to deliver clean, efficient, and maintainable code that contributes to successful projects. I enjoy working with both front-end and back-end technologies, making me a versatile developer capable of handling different aspects of web development.
        </p>
        <p className="mb-4">
          My approach to development is centered around understanding the needs of the user, collaborating with teams, and continuously learning new technologies to stay ahead in the ever-evolving field of web development. I believe in building applications that are not only functional but also delightful to use.
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-md-4">
            <div className="card shadow-lg">
              <div className="card-body">
                {/* Profile Image inside Card Body */}
                <div className="text-center mb-4">
                  <img
                    src="/assets/background.jpg" // Path to your image in the public/assets folder
                    alt="Background"
                    className="rounded-circle"
                    width="150"
                    height="150"
                  />
                </div>

                <h5 className="card-title">Contact Me</h5>
                <p className="card-text">
                  Feel free to reach out if you're interested in collaborating on projects or have any questions!
                </p>
                <a href="#contact" className="btn btn-dark">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
