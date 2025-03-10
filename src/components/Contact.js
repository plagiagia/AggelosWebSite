import React from 'react';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Interested in collaborations, commissions, or just want to say hello? Reach out!</p>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>hello@aggelos-artist.com</p>
          </div>
          
          <div className="contact-item">
            <h3>Location</h3>
            <p>City, Country</p>
          </div>
          
          <div className="contact-item">
            <h3>Follow</h3>
            <div className="social-links">
              <a href="https://instagram.com" aria-label="Instagram">Ig</a>
              <a href="https://twitter.com" aria-label="Twitter">Tw</a>
              <a href="https://behance.net" aria-label="Behance">Be</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;