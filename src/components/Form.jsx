import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div className="container center" style={{ marginTop: "75px", marginBottom: "75px" }} id="contact">
      <div className="row">
        {/* First Column */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <h2>Let's Talk</h2>
            <p className="pform">
              Have some big idea or brand to develop and need help? Then reach out we'd love to hear
              about your project and provide help.
            </p>
            <h4>Email</h4>
            <p>salarmrd98@gmail.com</p>
            <h4>Socials</h4>
            <ul className="list-unstyled">
              <li>Instagram</li>
              <li>Github</li>
              <li>Discord</li>
            </ul>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-12 col-md-6">
          <form action="">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" placeholder="Your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">What service are you interested in</label>
              <select className="form-select" aria-label="Default select example">
                <option selected>select project type</option>
                <option value="Frontend">Frontend website development</option>
                <option value="ui">User Interface design</option>
                <option value="ux">User experience design</option>
                <option value="wordpress">Website design with Wordpress</option>
              </select>
              <div className="mt-3">
                <label htmlFor="message" className="form-label">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-outline-light">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
