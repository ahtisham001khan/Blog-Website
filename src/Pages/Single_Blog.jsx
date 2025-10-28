import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { V_slider } from "../Components/V_slider";

const SingleBlogPost = () => {
  return (
    <>
      <Container>
        <Row>
          <h2 className="text-center pt-5 fw-bold">Top Tech Trends You Must Watch</h2>

          {/* Blog Image */}
          <Col lg={8} className="py-5">
            <img
              src="/images/Slide(1).jpg"
              alt="Post"
              className="w-100 "
            />

            {/* Meta Info */}
            <div className="text-muted my-3">
              <small className="me-3">
                <i className="fas fa-calendar-alt me-1"></i> May 28, 2025
              </small>
              <small className="me-3">
                <i className="fas fa-user me-1"></i> By Ahtisham Khan
              </small>
              <span className="badge bg-warning text-dark">Technology</span>
            </div>

            {/* Blog Content */}
            <p className="text-muted fs-5">
              As we move further into the digital age, emerging technologies continue
              to shape our future. From AI and robotics to quantum computing and 6G,
              staying ahead of tech trends is crucial for innovators.
            </p>

            <h4 className="mt-4 text-dark">Key Trends to Follow</h4>
            <ul className="text-muted fs-6">
              <li>Artificial Intelligence and Machine Learning</li>
              <li>Extended Reality (AR/VR/MR)</li>
              <li>Quantum Computing</li>
              <li>Blockchain Beyond Crypto</li>
              <li>6G and Advanced Connectivity</li>
            </ul>

            {/* Blockquote */}
            <blockquote
              style={{
                borderLeft: "4px solid var(--Text_color_hover)",
                paddingLeft: "15px",
                fontStyle: "italic",
                color: "#666",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <i className="fas fa-quote-left me-2"></i>
              "Tech is not just changing tools, it's transforming society. Embrace the
              shift or be left behind."
            </blockquote>

            {/* Share Section */}
            <div className="d-flex align-items-center gap-3 mt-4">
              <span className="fw-bold" style={{ color: "var(--Head-color)" }}>
                <i className="fas fa-share-alt me-1"></i> Share:
              </span>
              <Button variant="outline-primary" size="sm" aria-label="Share on Facebook">
                <i className="fab fa-facebook-f"></i>
              </Button>
              <Button variant="outline-info" size="sm" aria-label="Share on Twitter">
                <i className="fab fa-twitter"></i>
              </Button>
              <Button variant="outline-secondary" size="sm" aria-label="Share on LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </Button>
            </div>
          </Col>

          {/* Related Posts Slider */}
          <Col lg={4} className="py-5">
            <V_slider heading="Related Posts" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleBlogPost;
