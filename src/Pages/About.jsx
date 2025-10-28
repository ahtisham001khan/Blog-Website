import React from "react";
import { Container, Row, Col, Image, Button, Carousel } from "react-bootstrap";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This blog changed how I approach learning tech. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    name: "Jane Smith",
    feedback: "Clear, helpful, and always inspiring. A go-to resource for me!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Alex Johnson",
    feedback: "Love how easy it is to follow and apply the concepts here.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const About = () => {
  return (
    <div style={{ backgroundColor: "var(--Background)", color: "var(--Text_color)" }}>
      <div className="hero-sec text-center" >
        <h2 className="hero-title">
          About Me
        </h2>
      </div>

      <section className="Sec_intro">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h6 style={{ color: "var(--text-color-hover)", textTransform: "uppercase", letterSpacing: "1px", animation: "fadeIn 1s ease-out" }}>
                Who I Am
              </h6>
              <h2 className="fw-bold mb-4" style={{ color: "var(--Head-color)", animation: "slideIn 1s ease-out" }}>
                Passionate About Making Tech Simple
              </h2>
              <p style={{ animation: "fadeIn 2s ease-out" }}>
                Hello! I'm <strong>John Developer</strong>, a frontend web developer and tech writer who loves building clean interfaces and simplifying complex topics.
              </p>
              <p style={{ animation: "fadeIn 2s ease-out" }}>
                I work with <strong>React, Tailwind, Bootstrap</strong> and other modern tools to help learners grow through tutorials and hands-on projects.
              </p>
              <Button
                href="/contact"
                style={{
                  backgroundColor: "var(--Text_color_hover)",
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                }}
                className="btn-hover py-2 px-3 border-0 rounded-5 mt-3 fw-bold"
              >
                Contact Me
              </Button>
            </Col>

            {/* Image Right */}
            <Col md={6} className="text-center mt-4 mt-md-0">
              <Image className="w-75 " src="/images/Social_img.jpg" alt="Profile" style={{ animation: "fadeIn 2s ease-out" }} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section 2: Testimonials */}
      <section className="Testimonials">
        <Container>
          <h3 className="text-center mb-4" style={{ color: "var(--Head-color)", animation: "fadeIn 1.5s ease-out" }}>
            What Readers Say
          </h3>
          <Carousel indicators={false} interval={2000} controls={false} fade>
            {testimonials.map((t, index) => (
              <Carousel.Item key={index} style={{ animation: "fadeIn 2s ease-out" }} >
                <Row className="justify-content-center">
                  <Col md={8} lg={6}>
                    <div
                      className="p-4 text-center"
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "20px",
                        boxShadow: "0 0 15px 5px rgba(0, 0, 0, 0.15)",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      }}
                    >
                      <Image
                        src={t.image}
                        width={70}
                        height={70}
                        className="mb-3 border border-2 rounded-circle"
                        style={{ borderColor: "var(--text-color-hover)", animation: "scaleUp 0.5s ease-out" }}
                        alt={t.name}
                      />
                      <p style={{ fontStyle: "italic", color: "var(--Text_color)", animation: "fadeIn 2s ease-out" }}>
                        “{t.feedback}”
                      </p>
                      <h6 className="mt-2" style={{ color: "var(--text-color-hover)", animation: "fadeIn 2s ease-out" }}>
                        — {t.name}
                      </h6>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      <section style={{ padding: "80px 0" }}>
        <Container>
          <h3 className="text-center mb-5" style={{ color: "var(--Head-color)", fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "0.5px" }}>
            My Goals & Scope
          </h3>
          <Row className="g-4">
            {[
              {
                icon: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
                title: "Objective",
                points: [
                  "Simplify technical content",
                  "Enable students & youth",
                  "Promote self-learning",
                  "Empower rural learners",
                ],
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/3829/3829856.png",
                title: "Scope",
                points: [
                  "Frontend web development",
                  "Internet of Things (IoT)",
                  "Data Science (beginner level)",
                  "Interactive visuals & projects",
                ],
              },
              {
                icon: "https://cdn-icons-png.flaticon.com/512/4101/4101345.png",
                title: "Target Audience",
                points: [
                  "Students & tech enthusiasts",
                  "Rural youth & beginners",
                  "Women in digital learning",
                  "Aspiring freelancers",
                ],
              },
            ].map((card, idx) => (
              <Col lg={4} md={6} sm={8}  className="12 mx-auto" key={idx}>
                <div
                  className="text-center p-4 h-100"
                  style={{
                    background: "#fff",
                    borderRadius: "20px",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.08)";
                  }}
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    width={70}
                    height={70}
                    className="mb-3"
                    style={{ filter: "drop-shadow(2px 4px 6px rgba(255, 127, 80, 0.5))" }}
                  />
                  <h5 style={{ color: "var(--text-color-hover)", fontWeight: "bold", marginBottom: "20px" }}>{card.title}</h5>
                  <ul className="text-start px-3" style={{ color: "var(--Text_color)", fontSize: "1rem", lineHeight: "1.8" }}>
                    {card.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: "10px" }}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
