import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Form.scss";

const Form = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to EmailJS
    emailjs
      .sendForm("service_88rprrq", "template_y7uduhh", event.target, "d3Ffb2Y1-q67agNIR")
      .then(
        (result) => {
          setMessage('Thank you for your message! We appreciate your trust and will get back to you shortly.');
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
          setMessage('Sorry, something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div className="container center" style={{ marginTop: "75px", marginBottom: "75px" }} id="contact">
      <div className="row">
        <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center mb-4">
          <div>
            <h2>Let's Talk</h2>
            <p className="pform">
              Have some big idea or brand to develop and need help? Then reach out, we'd love to hear
              about your project and provide help.
            </p>
            <h4>Email</h4>
            <p><a href="mailto:salarmrd@gmail.com" style={{color:"white"}}>salarmrd98@gmail.com</a> </p>
            <h4>Socials</h4>
            <ul className="list-unstyled">
              <li><a href="https://instagram.com/salarmehrdad" target="_blank">Instagram</a></li>
              <li><a href="https://github.com/Salarmrd" target="_blank">Github</a></li>
              <li><a href="https://discord.com/channels/@salarmrd" target="_blank">Discord</a> </li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          {!submitted ? (
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" name="from_name" placeholder="Your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" name="from_email" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label">What service are you interested in</label>
              <select className="form-select" name="service" aria-label="Default select example" required>
                <option value="" disabled>Select project type</option>
                <option value="Frontend">Frontend website development</option>
                <option value="ui">User Interface design</option>
                <option value="ux">User experience design</option>
                <option value="wordpress">Website design with Wordpress</option>
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="message" className="form-label">
                Your message
              </label>
              <textarea className="form-control" id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>
            </div>
            <div>
              <button type="submit" className="btn btn-outline-light mt-2">
                Submit
              </button>
            </div>
          </form>
          ) : (
            <div className="alert alert-success mt-3">
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
