import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

export const Subscription = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for subscribing!');
  };

  return (
    <div className="subscribe-section py-5">
      <Container className="text-white">
        <h2 className="text-center mb-4 text-uppercase " style={{color : "var(--Text_color_hover)"}}>Subscribe Now</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center g-3">
            <Col xs={12} md={4} lg={4}>
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="custom-input rounded-0 fw-bold"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={4} lg={4}>
              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="custom-input rounded-0 fw-bold"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={2} lg={2} className="text-center">
              <Button type="submit"  className="rounded-0 px-4 fw-bold border-0 custom-submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>

      </Container>
    </div>
  );
};
