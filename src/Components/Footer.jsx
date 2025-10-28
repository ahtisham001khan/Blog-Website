import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const Footer = () => {
    return (
        <div className="footer-section py-5">
            <Container>
                <Row className="gy-4">
                    <Col lg={3} md={12} sm={12} xs={12} className="col-12">
                        <h4 className='mb-5'>
                            Everyday<span className="highlight"> Insights .</span>
                        </h4>
                        <h5 className='Foot-H text-uppercase'>Newsletter</h5>
                        <p>
                            Subscribe to our newsletter for a weekly dose of news, updates,
                            helpful tips, and exclusive offers.
                        </p>
                            <Button variant="outline-light" className="rounded-pill mt-3 px-4">
                                Got Any Questions?
                            </Button>
                    </Col>
                    <Col lg={3} md={4} sm={4} xs={4} className="col-12">
                        <h5 className='Foot-H text-uppercase'>Info</h5>
                        <ul className="list-unstyled">
                            <li>Formats</li>
                            <li>Compression</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                            <li>Status</li>
                            <li>Policy</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4} sm={4} xs={4} className="col-12">
                        <h5 className='Foot-H text-uppercase'>Getting Started</h5>
                        <ul className="list-unstyled">
                            <li>Introduction</li>
                            <li>Themes</li>
                            <li>Documentation</li>
                            <li>Usages</li>
                            <li>Elements</li>
                            <li>Global</li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4} sm={4} xs={4} className="col-12">
                        <h5 className='Foot-H text-uppercase'>Resources</h5>
                        <ul className="list-unstyled">
                            <li>API</li>
                            <li>Form Validation</li>
                            <li>Accessibility</li>
                            <li>Marketplace</li>
                            <li>Visibility</li>
                            <li>Community</li>
                        </ul>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};
