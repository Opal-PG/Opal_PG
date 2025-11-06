import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Contact.css";

const ContactSection = () => {
  return (
    <div>
      <div id="Contact" className="contact-section">
        <Container>
          <Row className="align-items-center">
            {/* Left: Contact Info */}
            <Col md={6} className="contact-info">
              <h2 className="fw-bold text-black">Contact Us</h2>
              <p className="text-black">
                We'd love to hear from you! <br></br>Reach out using the information below.
              </p>

              <div>
                <h5 className="fw-bold text-black">Address</h5>
                <p className="text-black">Sairung sumruddhi,<br></br>opposite to prathamshree wines, <br></br>shinde wasti Marunji,411057</p>
              </div>


              <div>
                <h5 className="text-black fw-bold">Phone</h5>
                <p className="fw-bold "><a href="tel:9762576917" className="link-dark" >+91 9762576917</a></p>
              </div>
            </Col>

            {/* Right: Google Map */}
            <Col md={6}>
              <div className="map-container">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.1934036117805!2d73.72103417496507!3d18.606093482504136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbce0dbdb9b1%3A0x602fb4e5985aa626!2sShubhashree%20PG!5e1!3m2!1sen!2sin!4v1761843371734!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-dark py-2">
        <p className="text-center fw-bold text-white m-0">Copyright @2025 Opal-PG </p>
      </div>
    </div>
 
  );
};

export default ContactSection;
