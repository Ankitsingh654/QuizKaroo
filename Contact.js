import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Please fill out the form or reach us using the details below.</p>
      </section>

      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="6" required />
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="contact-details">
          <h2>Our Contact Information</h2>
          <p><strong>📞 Phone:</strong> <a href="tel:+917903682921">+91 7903682921</a></p>
          <p><strong>📧 Email:</strong> <a href="mailto:support@Quizkaroo.com">support@saddibazar.com</a></p>
          <p><strong>🏢 Address:</strong> Tower A, Sector 24, Noida, Uttar Pradesh, India</p>
          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a> | 
            <a href="https://instagram.com" target="_blank" rel="noreferrer"> Instagram</a> | 
            <a href="https://twitter.com" target="_blank" rel="noreferrer"> Twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
