const Contact = () => {
    return (
      <section id="contact" className="py-5 bg-dark text-light text-center">
        <div className="container">
          <h2>📩 Contact Me</h2>
          <form className="mt-4 w-50 mx-auto">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-warning w-100">Send Message</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  