import React from "react";
import { Container, Row, Col, Form, Button, Image, Card } from "react-bootstrap";
import { Heading } from "../Components/heading";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-sec">
        <h2 className="hero-title">Contact Us</h2>
      </div>

      {/* Intro Section */}
      <div className="Sec_intro">
        <Container>
          <Row className="align-items-center py-5 g-4">
            {/* Contact Form */}
            <Col lg={6} md={8} sm={12} className="mx-auto">
              <Card
                className="border-0 shadow-lg p-4"
              >
                <Heading heading="Get in Touch" />

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4" controlId="formName">
                    <Form.Label className="fw-semibold">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formEmail">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label className="fw-semibold">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      className="rounded-4 shadow-sm"
                      placeholder="Write your message here..."
                      required
                      style={{
                        resize: "none", // user drag se size change na kare
                        fontSize: "1rem",
                        padding: "15px",
                      }}
                    />
                  </Form.Group>


                  <Button
                    type="submit"
                    className="w-100 fw-bold py-2 my-3 rounded-pill border-0 shadow-sm"
                    style={{
                      backgroundColor: "var(--Text_color_hover)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.02)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    🚀 Send Message
                  </Button>
                </Form>
              </Card>
            </Col>

            {/* Image Column */}
            <Col lg={5} md={8} sm={12} className="text-center mx-auto">
              <Image
                className="w-100 shadow-lg"
                src="/images/Social_img.jpg"
                alt="Contact"
                style={{
                  maxHeight: "600px",
                  objectFit: "cover",
                  animation: "fadeIn 1.5s ease-in-out",
                }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Map Section */}
      <Container fluid className="p-0 m-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.996789969252!2d68.33894497371804!3d25.375837277596396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7083c9aa9919%3A0xf9b86c1e1908a0c9!2sPixxel%20House!5e1!3m2!1sen!2s!4v1746797245857!5m2!1sen!2s"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Container>
    </>
  );
};

export default Contact;
