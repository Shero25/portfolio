import React from 'react';
// import for icons
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaYoutube, FaInstagram,FaLinkedin } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa';
// css file for the contact component
import './contact.css'; 

function Contact() {
  return (
    <section id="contact" className="contact-section">
    <h2 className="contact-heading">  CONTACT <span className="highlight">ME</span></h2>
    <div className="contact-container">
      <div className="contact-info">
        <ul className="info-list">
          <li>
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <strong>ADDRESS POINT</strong><br />
             270 Marshall,Johannesburg 2000.
            </div>
          </li>
          <li>
            <FaEnvelope className="info-icon" />
            <div>
              <strong>MAIL ME</strong><br />
              Sherolinenthabiseng@gmail.com
            </div>
          </li>
          <li>
            <FaLinkedin className="info-icon" />
            <div>
  <strong>LINKEDIN</strong><br />
  <a href="https://www.linkedin.com/in/sheroline-malatjie-370b631b4" target="_blank">
    https://www.linkedin.com/in/sheroline-malatjie-370b631b4
  </a>
</div>
          </li>
          <li>
            <FaPhoneAlt className="info-icon" />
            <div>
              <strong>CALL ME</strong><br />
             +27 71 361 3360
            </div>
          </li>
        </ul>
      </div>
      <div className="contact-form">
  <form action="https://api.web3forms.com/submit" method="POST">
    <div className="form-group">
      <input type="hidden" name="access_key" value="77fdb016-6be0-4399-b89d-fb3f002565ef" />
      <input type="text" name="name" placeholder="YOUR NAME" className="form-control" />
      <input type="email" name="email" placeholder="YOUR EMAIL" className="form-control" />
    </div>
    <div className="form-group">
      <input type="text" name="subject" placeholder="YOUR SUBJECT" className="form-control full-width" />
    </div>
    <div className="form-group">
      <textarea name="message" placeholder="YOUR MESSAGE" className="form-control full-width" rows="5"></textarea>
    </div>
    <button type="submit" className="btn-submit">
      SEND MESSAGE
      <span className="btn-icon">
        <FaPaperPlane />
      </span>
    </button>
  </form>
</div>

    </div>
  </section>
  );
}

export default Contact;