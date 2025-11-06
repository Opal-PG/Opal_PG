import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import gallerydata from "../assets/images/gallerydata";
import "../style/Gallery.css";


export default function Gallery() {
  return (
    <section id="Gallery" className="gallery-section">
      <Container className="text-center">
        {/* Heading */}
        <h2 className="gallery-title mb-3">A Glimpse of Your Stay</h2>
        <p className="gallery-subtitle mb-5">
          Explore the cozy rooms, vibrant common areas,<br></br> and thoughtfully designed spaces that make every day<br></br> comfortable and enjoyable.
        </p>

        {/* Image Grid */}
        <Row className="g-4">
          {gallerydata.map((img, index) => (
            <Col key={index} xs={6} md={3}>
              <Card className="gallery-card shadow-sm border-0">
                <div className="gallery-img-wrapper">
                  <Card.Img
                    src={img}
                    alt={`Facility ${index + 1}`}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay">
                    <span>Facility {index + 1}</span>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
